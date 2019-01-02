import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  LayoutConfig,
  ConfigurableLayout
} from 'src/app/dynamic-layout/state/page-layout.model';

@Component({
  selector: 'dl-configurable-tabs',
  templateUrl: './configurable-tabs.component.html',
  styleUrls: ['./configurable-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurableTabsComponent
  implements OnInit, ConfigurableLayout<{ name: string }> {
  pageId: string;
  editingMode = false;
  layoutConfig: LayoutConfig<{ name: string }>;

  constructor() {}

  ngOnInit() {}

  initComponent(
    pageId: string,
    layoutConfig: LayoutConfig<{ name: string }>
  ): void {
    this.pageId = pageId;

    this.layoutConfig = layoutConfig;
    if (!this.layoutConfig.children) {
      this.layoutConfig.children = [];
      this.addTab();
    }
  }

  setEditingMode(editingMode: boolean): void {
    this.editingMode = editingMode;
  }

  addTab() {
    this.layoutConfig.children.push({
      config: {
        name: ''
      },
      component: {
        component: null
      }
    });
  }

  removeTab(child) {
    this.layoutConfig.children.splice(
      this.layoutConfig.children.indexOf(child),
      1
    );
  }
}
