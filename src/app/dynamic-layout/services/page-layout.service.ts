import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageLayout } from '../state/page-layout.model';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  constructor() {}

  public getPageLayout(pageId: string): Observable<PageLayout> {
    return of({
      id: 'id1',
      variables: {
        myvariable: 'nothing'
      },
      layout: {
        component: {
          type: 'ExampleComponent',
          bindings: {
            inputs: {},
            outputs: {}
          }
        }
      }
    });
  }
}
