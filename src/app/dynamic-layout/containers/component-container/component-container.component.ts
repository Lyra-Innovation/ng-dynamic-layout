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

  @Input()
  componentConfig: ComponentConfig;

  _editingMode: boolean;
  @Input()
  set editingMode(editingMode: boolean) {
    this._editingMode = editingMode;
    if (
      this.componentRef &&
      this.componentResolver.isComponentConfigurable(this.componentConfig.type)
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
    if (!this.componentConfig.bindings) {
      this.componentConfig.bindings = {
        inputs: {},
        outputs: {}
      };
    }

    const factory = this.componentResolver.getComponentFactory(
      this.componentConfig.type
    );

    this.componentRef = this.container.viewContainerRef.createComponent(
      factory
    );

    if (
      this.componentResolver.isComponentConfigurable(this.componentConfig.type)
    ) {
      (<ConfigurableLayout<any>>this.componentRef.instance).initComponent(
        this.pageId,
        <LayoutConfig<any>>this.componentConfig
      );
      (<ConfigurableLayout<any>>this.componentRef.instance).setEditingMode(
        this._editingMode
      );
    }

    for (const inputKey of Object.keys(this.componentConfig.bindings.inputs)) {
      if (
        this.componentConfig.bindings.inputs[inputKey].type ===
        BindingType.VARIABLE
      ) {
        const variableName = this.componentConfig.bindings.inputs[inputKey]
          .value;
        const subs = this.store
          .select(fromLayout.selectVariableValue(this.pageId, variableName))
          .subscribe(value => (this.componentRef.instance[inputKey] = value));
        this.subscriptions.push(subs);
      } else {
        this.componentRef.instance[
          inputKey
        ] = this.componentConfig.bindings.inputs[inputKey].value;
      }
    }

    for (const outputKey of Object.keys(
      this.componentConfig.bindings.outputs
    )) {
      const variableName = this.componentConfig.bindings.outputs[outputKey]
        .value;
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
