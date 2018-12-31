import { Dictionary } from '@ngrx/entity';

export interface PageLayout {
  id: string;
  variables: Dictionary<any>;

  layout: DynamicLayoutConfig;
}

export interface ComponentConfig {
  type: string;

  bindings?: {
    inputs: Dictionary<Binding>;
    outputs: Dictionary<Binding>;
  };
}

export interface LayoutConfig<CHILDREN_CONFIG> extends ComponentConfig {
  children: Array<{
    config: CHILDREN_CONFIG;
    component: ComponentConfig;
  }>;
}

/** A dynamic layout either contains a single component or contains two children dynamic layouts */
export interface DynamicLayoutConfig {
  component?: ComponentConfig;

  children?: {
    column: boolean;
    split: number;

    first: DynamicLayoutConfig;
    second: DynamicLayoutConfig;
  };
}

export interface Binding {
  type: BindingType;
  value: string;
}

export enum BindingType {
  CONSTANT,
  VARIABLE
}

export interface ConfigurableLayout<CHILDREN_CONFIG> {
  setLayoutConfig: (layoutConfig: LayoutConfig<CHILDREN_CONFIG>) => void;
  setEditingMode: (editingMode: boolean) => void;
}
