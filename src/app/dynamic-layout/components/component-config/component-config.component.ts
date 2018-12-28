import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Type,
  ComponentFactoryResolver
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'dl-component-config',
  templateUrl: './component-config.component.html',
  styleUrls: ['./component-config.component.css']
})
export class ComponentConfigComponent implements OnInit {
  @Input()
  componentType: string;

  @Input()
  pageVariables: string[];

  inputsForm: FormGroup;
  outputsForm: FormGroup;

  inputProperties: string[];
  outputProperties: string[];

  constructor(
    private formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

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

  ngOnInit() {
    const factories = Array.from(
      this.componentFactoryResolver['_factories'].keys()
    );
    const factoryClass = <Type<any>>(
      factories.find((x: any) => x.name === this.componentType)
    );

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      factoryClass
    );
    const inputs = this.buildPropertiesObject(factory.inputs);
    const outputs = this.buildPropertiesObject(factory.outputs);

    this.inputProperties = Object.keys(inputs);
    this.outputProperties = Object.keys(outputs);

    this.inputsForm = this.formBuilder.group(inputs);
    this.outputsForm = this.formBuilder.group(outputs);
  }
}
