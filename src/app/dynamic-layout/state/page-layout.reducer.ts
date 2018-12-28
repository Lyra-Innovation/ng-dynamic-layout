import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { PageLayout } from './page-layout.model';
import {
  PageLayoutActions,
  PageLayoutActionTypes
} from './page-layout.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface LayoutState extends EntityState<PageLayout> {
  // additional entities state properties
}

export const adapter: EntityAdapter<PageLayout> = createEntityAdapter<
  PageLayout
>();

export const initialState: LayoutState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PageLayoutActions
): LayoutState {
  switch (action.type) {
    case PageLayoutActionTypes.AddPageLayout: {
      return adapter.addOne(action.payload.pageLayout, state);
    }

    case PageLayoutActionTypes.UpsertPageLayout: {
      return adapter.upsertOne(action.payload.pageLayout, state);
    }

    case PageLayoutActionTypes.AddPageLayouts: {
      return adapter.addMany(action.payload.pageLayouts, state);
    }

    case PageLayoutActionTypes.UpsertPageLayouts: {
      return adapter.upsertMany(action.payload.pageLayouts, state);
    }

    case PageLayoutActionTypes.UpdatePageLayout: {
      return adapter.updateOne(action.payload.pageLayout, state);
    }

    case PageLayoutActionTypes.UpdatePageLayouts: {
      return adapter.updateMany(action.payload.pageLayouts, state);
    }

    case PageLayoutActionTypes.DeletePageLayout: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PageLayoutActionTypes.DeletePageLayouts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PageLayoutActionTypes.LoadPageLayoutSucces: {
      return adapter.addOne(action.payload.pageLayout, state);
    }

    case PageLayoutActionTypes.ClearPageLayouts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const selectLayout = createFeatureSelector<LayoutState>('pageLayout');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors(selectLayout);

export const selectPageById = (pageId: string) =>
  createSelector(
    selectEntities,
    entities => entities[pageId]
  );
