import { Component, OnInit, Input } from '@angular/core';
import { ComponentConfig } from '../../state/page-layout.model';
import { ComponentResolverService } from '../../services/component-resolver.service';

@Component({
  selector: 'dl-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {
  @Input()
  pageId: string;

  @Input()
  componentConfig: ComponentConfig;

  @Input()
  editingMode: boolean;

  @Input()
  configuringMode: boolean;

  constructor(private componentResolver: ComponentResolverService) {}

  ngOnInit() {}

  showComponentConfiguration(): boolean {
    if (
      this.componentResolver.isComponentConfigurable(this.componentConfig.type)
    ) {
      return this.editingMode && this.configuringMode;
    } else {
      return this.editingMode;
    }
  }
}
