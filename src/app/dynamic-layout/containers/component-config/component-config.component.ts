import {
  Component,
  OnInit,
  Input,
  Type,
  ComponentFactoryResolver,
  ViewEncapsulation
} from '@angular/core';
import {
  ComponentConfig,
  Binding,
  BindingType
} from '../../state/page-layout.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromLayout from '../../state/page-layout.reducer';
import { Dictionary } from '@ngrx/entity';
import { MatCheckboxChange, MatDialog } from '@angular/material';
import { NewVariableComponent } from '../../components/new-variable/new-variable.component';
import { AddNewVariable } from '../../state/page-layout.actions';

@Component({
  selector: 'dl-component-config',
  templateUrl: './component-config.component.html',
  styleUrls: ['./component-config.component.css'],
  encapsulation: ViewEncapsulation.None
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

  BindingType = BindingType;
  bindings: {
    inputs: Dictionary<Binding>;
    outputs: Dictionary<Binding>;
  };

  constructor(
    private store: Store<fromLayout.LayoutState>,
    private componentFactoryResolver: ComponentFactoryResolver,
    public dialog: MatDialog
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

    const inputBindings = factory.inputs.reduce(
      (propertiesObject, newProperty) => ({
        ...propertiesObject,
        [newProperty.propName]: this._componentConfig.bindings.inputs[
          newProperty.propName
        ] || {
          type: BindingType.CONSTANT,
          value: ''
        }
      }),
      {}
    );
    const outputBindings = factory.outputs.reduce(
      (propertiesObject, newProperty) => ({
        ...propertiesObject,
        [newProperty.propName]: this._componentConfig.bindings.outputs[
          newProperty.propName
        ] || {
          type: BindingType.VARIABLE,
          value: ''
        }
      }),
      {}
    );

    this.bindings = {
      inputs: inputBindings,
      outputs: outputBindings
    };
  }

  toggleBinding(
    checkEvent: MatCheckboxChange,
    bindingsType: 'inputs' | 'outputs',
    bindingKey: string
  ) {
    if (checkEvent.checked) {
      this._componentConfig.bindings[bindingsType][bindingKey] = this.bindings[
        bindingsType
      ][bindingKey];
    } else {
      delete this._componentConfig.bindings[bindingsType][bindingKey];
    }
  }

  addNewVariable() {
    const dialogRef = this.dialog.open(NewVariableComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(
          new AddNewVariable({ pageId: this.pageId, variableName: result })
        );
      }
    });
  }
}
