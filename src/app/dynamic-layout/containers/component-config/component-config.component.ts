import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Type,
  ComponentFactoryResolver
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentConfig } from '../../state/page-layout.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromLayout from '../../state/page-layout.reducer';

@Component({
  selector: 'dl-component-config',
  templateUrl: './component-config.component.html',
  styleUrls: ['./component-config.component.css']
})
export class ComponentConfigComponent implements OnInit {
  @Input()
  pageId: string;

  _componentConfig: ComponentConfig;
  @Input()
  set componentConfig(componentConfig: ComponentConfig) {
    this._componentConfig = componentConfig;
    this.setupComponentBindings(componentConfig.type);
  }

  pageVariables$: Observable<string[]>;

  inputProperties: string[];
  outputProperties: string[];

  constructor(
    private store: Store<fromLayout.LayoutState>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.pageVariables$ = this.store.select(
      fromLayout.selectVariablesNames(this.pageId)
    );
  }

  setupComponentBindings(componentClassName: string) {
    const factories = Array.from(
      this.componentFactoryResolver['_factories'].keys()
    );
    const factoryClass = <Type<any>>(
      factories.find((x: any) => x.name === componentClassName)
    );

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      factoryClass
    );
    const inputs = this.buildPropertiesObject(factory.inputs);
    const outputs = this.buildPropertiesObject(factory.outputs);

    this.inputProperties = Object.keys(inputs);
    this.outputProperties = Object.keys(outputs);
  }

  buildPropertiesObject(
    propertiesArray: Array<{ propName: string; templateName: string }>
  ) {
    return propertiesArray.reduce(
      (propertiesObject, newProperty) => ({
        ...propertiesObject,
        [newProperty.propName]: ''
      }),
      {}
    );
  }

  inputBindingSelected(variableName: string, inputName: string) {
    this._componentConfig.bindings.inputs[inputName] = variableName;
  }

  outputBindingSelected(variableName: string, outputName: string) {
    this._componentConfig.bindings.outputs[outputName] = variableName;
  }
}
