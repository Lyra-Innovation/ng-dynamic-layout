import { Dictionary } from '@ngrx/entity';

export interface PageLayout {
  id: string;
  variables: Dictionary<any>;

  config: LayoutConfig;
}

export interface LayoutConfig {
  component: ComponentConfig;

  column: boolean;
  split: number;
  children?: {
    first: LayoutConfig;
    second: LayoutConfig;
  };
}

export interface ComponentConfig {
  type: string;
  bindings: {
    inputs: Dictionary<Binding>;
    outputs: Dictionary<Binding>;
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
