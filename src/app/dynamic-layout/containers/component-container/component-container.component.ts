import {
  Component,
  Input,
  ComponentFactoryResolver,
  Type,
  ComponentRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { ComponentConfig, BindingType } from '../../state/page-layout.model';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { HostDirective } from '../../host.directive';
import { Dictionary } from '@ngrx/entity';
import { Observable, Subscription } from 'rxjs';
import { UpdateVariableValue } from '../../state/page-layout.actions';

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

  @Input()
  editingMode: boolean;

  @ViewChild(HostDirective)
  container: HostDirective;

  component: ComponentRef<any>;

  variableValues: Dictionary<Observable<any>>;

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<fromLayout.LayoutState>,
    private componentResolverFactory: ComponentFactoryResolver,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    if (!this.componentConfig.bindings) {
      this.componentConfig.bindings = {
        inputs: {},
        outputs: {}
      };
    }

    const factories = Array.from(
      this.componentResolverFactory['_factories'].keys()
    );
    const factoryClass = <Type<any>>(
      factories.find((x: any) => x.name === this.componentConfig.type)
    );

    const factory = this.componentResolverFactory.resolveComponentFactory(
      factoryClass
    );

    const componentRef = this.container.viewContainerRef.createComponent(
      factory
    );

    for (const inputKey of Object.keys(this.componentConfig.bindings.inputs)) {
      if (
        this.componentConfig.bindings.inputs[inputKey].type ===
        BindingType.VARIABLE
      ) {
        const variableName = this.componentConfig.bindings.inputs[inputKey]
          .value;
        const subs = this.store
          .select(fromLayout.selectVariableValue(this.pageId, variableName))
          .subscribe(value => (componentRef.instance[inputKey] = value));
        this.subscriptions.push(subs);
      } else {
        componentRef.instance[inputKey] = this.componentConfig.bindings.inputs[
          inputKey
        ].value;
      }
    }

    for (const outputKey of Object.keys(
      this.componentConfig.bindings.outputs
    )) {
      const variableName = this.componentConfig.bindings.outputs[outputKey]
        .value;
      const subs = (<EventEmitter<any>>(
        componentRef.instance[outputKey]
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
