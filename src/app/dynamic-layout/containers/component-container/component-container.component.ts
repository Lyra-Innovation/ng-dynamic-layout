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
import { ComponentConfig } from '../../state/page-layout.model';
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
      const variableName = this.componentConfig.bindings.inputs[inputKey];
      const subs = this.store
        .select(fromLayout.selectVariableValue(this.pageId, variableName))
        .subscribe(value => (componentRef.instance[inputKey] = value));
      this.subscriptions.push(subs);
    }

    for (const outputKey of Object.keys(
      this.componentConfig.bindings.outputs
    )) {
      const variableName = this.componentConfig.bindings.outputs[outputKey];
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
