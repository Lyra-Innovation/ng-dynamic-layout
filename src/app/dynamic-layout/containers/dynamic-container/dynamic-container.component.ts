import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutConfig } from '../../state/page-layout.model';
import { ExampleComponent } from 'src/app/example/example.component';

@Component({
  selector: 'dl-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {
  @Input()
  layoutConfig: LayoutConfig = this.initialLayout();

  @Input()
  pageVariables: string[];

  @Input()
  editingMode = true;

  @Output()
  deleteSelf = new EventEmitter<any>();

  component: any;

  constructor() {}

  ngOnInit() {}

  initialLayout(componentType: string = null): LayoutConfig {
    return {
      componentType: componentType,
      column: true,
      split: 50
    };
  }

  splitLayout(column: boolean) {
    this.layoutConfig.column = column;
    this.layoutConfig.children = {
      first: this.initialLayout(this.layoutConfig.componentType),
      second: this.initialLayout()
    };
  }

  deleteChild(first: boolean) {
    this.layoutConfig.children = first
      ? this.layoutConfig.children.second.children
      : this.layoutConfig.children.first.children;
  }

  resizeEnd(event) {
    this.layoutConfig.split = event.sizes[0];
  }
}
