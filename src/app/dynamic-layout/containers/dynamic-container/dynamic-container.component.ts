import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutConfig, ComponentConfig } from '../../state/page-layout.model';
import { ExampleComponent } from 'src/app/example/example.component';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'dl-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent implements OnInit {
  @Input()
  pageId: string;

  @Input()
  layoutConfig: LayoutConfig = this.initialLayout();

  @Input()
  editingMode: boolean;

  @Output()
  deleteSelf = new EventEmitter<any>();

  pageVariableName$: Observable<string[]>;
  availableComponents$: Observable<string[]>;

  constructor(private store: Store<fromLayout.LayoutState>) {}

  ngOnInit() {
    this.pageVariableName$ = this.store.select(
      fromLayout.selectVariablesNames(this.pageId)
    );
    this.availableComponents$ = this.store.select(
      fromLayout.selectAvailableComponents
    );
  }

  initialLayout(componentConfig: ComponentConfig = null): LayoutConfig {
    return {
      component: componentConfig,
      column: true,
      split: 50
    };
  }

  splitLayout(column: boolean) {
    this.layoutConfig.column = column;
    this.layoutConfig.children = {
      first: this.initialLayout(this.layoutConfig.component),
      second: this.initialLayout()
    };
    this.layoutConfig.component = null;
  }

  deleteChild(first: boolean) {
    const childToCopy = first
      ? this.layoutConfig.children.second
      : this.layoutConfig.children.first;

    for (const key of Object.keys(this.layoutConfig)) {
      this.layoutConfig[key] = childToCopy[key];
    }
  }

  resizeEnd(event) {
    this.layoutConfig.split = event.sizes[0];
  }

  selectComponent(selectedComponent: string) {
    this.layoutConfig.component = selectedComponent
      ? {
          type: selectedComponent,
          bindings: {
            inputs: {},
            outputs: {}
          }
        }
      : null;
  }
}
