import { Component, OnInit } from '@angular/core';
import {
  LayoutConfig, ConfigurableLayout
} from 'src/app/dynamic-layout/state/page-layout.model';

@Component({
  selector: 'app-configurable-tabs',
  templateUrl: './configurable-tabs.component.html',
  styleUrls: ['./configurable-tabs.component.css']
})
export class ConfigurableTabsComponent
  implements OnInit, ConfigurableLayout<{ name: string }> {
  editingMode = false;
  layoutConfig: LayoutConfig<{ name: string }>;

  constructor() {}

  ngOnInit() {}

  setLayoutConfig(layoutConfig: LayoutConfig<{ name: string }>): void {
    this.layoutConfig = layoutConfig;
  }

  setEditingMode(editingMode: boolean): void {
    this.editingMode = editingMode;
  }
}
