import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { PageLayoutService } from '../services/page-layout.service';
import {
  PageLayoutActionTypes,
  LoadPageLayout,
  LoadPageLayoutSuccess
} from './page-layout.actions';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable()
export class PageLayoutEffects {
  @Effect()
  loadPageLayout = this.actions$.pipe(
    ofType<LoadPageLayout>(PageLayoutActionTypes.LoadPageLayout),
    switchMap(action =>
      this.pageLayoutService.getPageLayout(action.payload.pageId)
    ),
    map(pageLayout => new LoadPageLayoutSuccess({ pageLayout }))
  );

  constructor(
    private actions$: Actions,
    private pageLayoutService: PageLayoutService
  ) {}
}
