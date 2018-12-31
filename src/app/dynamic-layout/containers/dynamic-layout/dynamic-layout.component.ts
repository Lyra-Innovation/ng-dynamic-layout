import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicLayoutConfig } from '../../state/page-layout.model';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'dl-dynamic-layout',
  templateUrl: './dynamic-layout.component.html',
  styleUrls: ['./dynamic-layout.component.css']
})
export class DynamicLayoutComponent implements OnInit {
  @Input()
  pageId: string;

  @Input()
  layoutConfig: DynamicLayoutConfig = this.initialLayout();

  @Input()
  editingMode: boolean;
  configureComponent: boolean;

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

  initialLayout(): DynamicLayoutConfig {
    return {
      component: null
    };
  }

  splitLayout(column: boolean) {
    const componentConfig = _.cloneDeep(this.layoutConfig);
    this.layoutConfig.children = {
      split: 50,
      column: column,
      first: componentConfig,
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
    this.layoutConfig.children.split = event.sizes[0];
  }

  selectComponent(selectedComponent: string) {
    this.layoutConfig.component = selectedComponent
      ? { type: selectedComponent }
      : null;
  }
}
