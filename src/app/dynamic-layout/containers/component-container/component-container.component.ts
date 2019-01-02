import {
  Component,
  Input,
  ComponentRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import {
  ComponentConfig,
  BindingType,
  ConfigurableLayout,
  LayoutConfig
} from '../../state/page-layout.model';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { HostDirective } from '../../host.directive';
import { Dictionary } from '@ngrx/entity';
import { Observable, Subscription } from 'rxjs';
import { UpdateVariableValue } from '../../state/page-layout.actions';
import { ComponentResolverService } from '../../services/component-resolver.service';

@Component({
  selector: 'dl-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.css']
})
export class ComponentContainerComponent implements AfterViewInit, OnDestroy {
  @Input()
  pageId: string;

  _componentConfig: ComponentConfig;
  @Input()
  set componentConfig(componentConfig: ComponentConfig) {
    this._componentConfig = componentConfig;

    if (this.componentRef) {
      this.buildComponent(componentConfig);
    }
  }

  _editingMode: boolean;
  @Input()
  set editingMode(editingMode: boolean) {
    this._editingMode = editingMode;
    if (
      this.componentRef &&
      this.componentResolver.isComponentConfigurable(this._componentConfig.type)
    ) {
      (<ConfigurableLayout<any>>this.componentRef.instance).setEditingMode(
        editingMode
      );
    }
  }

  @ViewChild(HostDirective)
  container: HostDirective;

  componentRef: ComponentRef<any>;

  variableValues: Dictionary<Observable<any>>;

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<fromLayout.LayoutState>,
    private componentResolver: ComponentResolverService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.buildComponent(this._componentConfig);
  }

  buildComponent(componentConfig: ComponentConfig) {
    if (!componentConfig.bindings) {
      componentConfig.bindings = {
        inputs: {},
        outputs: {}
      };
    }

    const factory = this.componentResolver.getComponentFactory(
      componentConfig.type
    );

    this.container.viewContainerRef.clear();
    this.componentRef = this.container.viewContainerRef.createComponent(
      factory
    );

    if (this.componentResolver.isComponentConfigurable(componentConfig.type)) {
      (<ConfigurableLayout<any>>this.componentRef.instance).initComponent(
        this.pageId,
        <LayoutConfig<any>>componentConfig
      );
      (<ConfigurableLayout<any>>this.componentRef.instance).setEditingMode(
        this._editingMode
      );
    }

    for (const inputKey of Object.keys(componentConfig.bindings.inputs)) {
      if (
        componentConfig.bindings.inputs[inputKey].type === BindingType.VARIABLE
      ) {
        const variableName = componentConfig.bindings.inputs[inputKey].value;
        const subs = this.store
          .select(fromLayout.selectVariableValue(this.pageId, variableName))
          .subscribe(value => (this.componentRef.instance[inputKey] = value));
        this.subscriptions.push(subs);
      } else {
        this.componentRef.instance[inputKey] =
          componentConfig.bindings.inputs[inputKey].value;
      }
    }

    for (const outputKey of Object.keys(componentConfig.bindings.outputs)) {
      const variableName = componentConfig.bindings.outputs[outputKey].value;
      const subs = (<EventEmitter<any>>(
        this.componentRef.instance[outputKey]
      )).subscribe(value =>
        this.store.dispatch(
          new UpdateVariableValue({
            pageId: this.pageId,
            variableName: variableName,
            variableValue: value
          })
        )
      );
      this.subscriptions.push(subs);
    }

    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => subs.unsubscribe);
  }
}
