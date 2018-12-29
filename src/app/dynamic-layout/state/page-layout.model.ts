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
    inputs: Dictionary<string>;
    outputs: Dictionary<string>;
  };
}
