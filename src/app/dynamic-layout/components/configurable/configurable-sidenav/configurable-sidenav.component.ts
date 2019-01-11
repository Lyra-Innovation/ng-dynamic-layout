import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseConfigurableLayout } from '../base.configurable';
import {
  DynamicLayoutConfig,
  LayoutConfig
} from 'src/app/dynamic-layout/state/page-layout.model';

@Component({
  selector: 'dl-configurable-sidenav',
  templateUrl: './configurable-sidenav.component.html',
  styleUrls: ['./configurable-sidenav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurableSidenavComponent
  extends BaseConfigurableLayout<{
    name: string;
  }>
  implements OnInit {
  selectedChild: DynamicLayoutConfig;

  constructor() {
    super();
  }

  ngOnInit() {}

  public initComponent(
    pageId: string,
    layoutConfig: LayoutConfig<{ name: string }>
  ) {
    super.initComponent(pageId, layoutConfig);
    this.selectedChild = this.layoutConfig.children[0].component;
  }

  protected buildNewChildConfig() {
    return {
      name: ''
    };
  }
}
