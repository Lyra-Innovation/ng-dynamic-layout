import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { PageLayout } from '../../state/page-layout.model';
import {
  LoadPageLayout,
  UpdatePageLayout
} from '../../state/page-layout.actions';
import { Dictionary } from '@ngrx/entity';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dl-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit, OnDestroy {
  @Input()
  page: string;

  pageLayout: PageLayout;
  backupPageLayout: PageLayout;
  editingMode = false;

  subscription: Subscription;

  constructor(private store: Store<fromLayout.LayoutState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPageLayout({ pageId: this.page }));
    this.subscription = this.store
      .select(fromLayout.selectPageById(this.page))
      .subscribe(layout => (this.pageLayout = layout));
  }

  turnEditingOn() {
    this.backupPageLayout = _.cloneDeep(this.pageLayout);
    this.toggleEditingMode();
  }

  toggleEditingMode() {
    this.editingMode = !this.editingMode;
  }

  saveLayoutChanges(pageLayout: PageLayout) {
    this.store.dispatch(
      new UpdatePageLayout({
        pageLayout: {
          id: pageLayout.id,
          changes: pageLayout
        }
      })
    );

    this.backupPageLayout = null;
    this.toggleEditingMode();
  }

  discardChanges() {
    this.pageLayout = this.backupPageLayout;
    this.toggleEditingMode();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
