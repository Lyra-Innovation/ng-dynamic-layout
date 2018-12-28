import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PageLayout } from './page-layout.model';

export enum PageLayoutActionTypes {
  LoadPageLayout = '[PageLayout] Load PageLayout',
  LoadPageLayoutSucces = '[PageLayout] Load PageLayout Success',
  AddPageLayout = '[PageLayout] Add PageLayout',
  UpsertPageLayout = '[PageLayout] Upsert PageLayout',
  AddPageLayouts = '[PageLayout] Add PageLayouts',
  UpsertPageLayouts = '[PageLayout] Upsert PageLayouts',
  UpdatePageLayout = '[PageLayout] Update PageLayout',
  UpdatePageLayouts = '[PageLayout] Update PageLayouts',
  DeletePageLayout = '[PageLayout] Delete PageLayout',
  DeletePageLayouts = '[PageLayout] Delete PageLayouts',
  ClearPageLayouts = '[PageLayout] Clear PageLayouts'
}

export class LoadPageLayout implements Action {
  readonly type = PageLayoutActionTypes.LoadPageLayout;

  constructor(public payload: { pageId: string }) {}
}

export class LoadPageLayoutSuccess implements Action {
  readonly type = PageLayoutActionTypes.LoadPageLayoutSucces;

  constructor(public payload: { pageLayout: PageLayout }) {}
}

export class AddPageLayout implements Action {
  readonly type = PageLayoutActionTypes.AddPageLayout;

  constructor(public payload: { pageLayout: PageLayout }) {}
}

export class UpsertPageLayout implements Action {
  readonly type = PageLayoutActionTypes.UpsertPageLayout;

  constructor(public payload: { pageLayout: PageLayout }) {}
}

export class AddPageLayouts implements Action {
  readonly type = PageLayoutActionTypes.AddPageLayouts;

  constructor(public payload: { pageLayouts: PageLayout[] }) {}
}

export class UpsertPageLayouts implements Action {
  readonly type = PageLayoutActionTypes.UpsertPageLayouts;

  constructor(public payload: { pageLayouts: PageLayout[] }) {}
}

export class UpdatePageLayout implements Action {
  readonly type = PageLayoutActionTypes.UpdatePageLayout;

  constructor(public payload: { pageLayout: Update<PageLayout> }) {}
}

export class UpdatePageLayouts implements Action {
  readonly type = PageLayoutActionTypes.UpdatePageLayouts;

  constructor(public payload: { pageLayouts: Update<PageLayout>[] }) {}
}

export class DeletePageLayout implements Action {
  readonly type = PageLayoutActionTypes.DeletePageLayout;

  constructor(public payload: { id: string }) {}
}

export class DeletePageLayouts implements Action {
  readonly type = PageLayoutActionTypes.DeletePageLayouts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPageLayouts implements Action {
  readonly type = PageLayoutActionTypes.ClearPageLayouts;
}

export type PageLayoutActions =
  | LoadPageLayout
  | LoadPageLayoutSuccess
  | AddPageLayout
  | UpsertPageLayout
  | AddPageLayouts
  | UpsertPageLayouts
  | UpdatePageLayout
  | UpdatePageLayouts
  | DeletePageLayout
  | DeletePageLayouts
  | ClearPageLayouts;
