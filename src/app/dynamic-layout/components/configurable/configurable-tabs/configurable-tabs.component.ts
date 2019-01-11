import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  LayoutConfig,
  ConfigurableLayout
} from 'src/app/dynamic-layout/state/page-layout.model';
import { BaseConfigurableLayout } from '../base.configurable';

@Component({
  selector: 'dl-configurable-tabs',
  templateUrl: './configurable-tabs.component.html',
  styleUrls: ['./configurable-tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurableTabsComponent
  extends BaseConfigurableLayout<{ name: string }>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  protected buildNewChildConfig() {
    return {
      name: ''
    };
  }
}
