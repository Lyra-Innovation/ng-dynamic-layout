import { Dictionary } from '@ngrx/entity';
import { Type } from '@angular/core';

export interface PageLayout {
  id: string;
  variables: Dictionary<string>;

  config: LayoutConfig;
}

export interface LayoutConfig {
  componentType: string;

  column: boolean;
  split: number;
  children?: {
    first: LayoutConfig;
    second: LayoutConfig;
  };
}
