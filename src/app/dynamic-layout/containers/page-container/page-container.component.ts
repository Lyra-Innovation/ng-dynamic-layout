import { Component, OnInit, Input } from '@angular/core';
import * as fromLayout from '../../state/page-layout.reducer';
import { Store } from '@ngrx/store';
import { PageLayout } from '../../state/page-layout.model';
import { Observable } from 'rxjs';
import { LoadPageLayout } from '../../state/page-layout.actions';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'dl-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  @Input()
  page: string;

  pageLayout$: Observable<PageLayout>;

  constructor(private store: Store<fromLayout.LayoutState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPageLayout({ pageId: this.page }));
    this.pageLayout$ = this.store.select(fromLayout.selectPageById(this.page));
  }

  getKeys(variables: Dictionary<string>) {
    return Object.keys(variables);
  }
}
