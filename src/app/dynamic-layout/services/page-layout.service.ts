import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PageLayout } from '../state/page-layout.model';
import { ExampleComponent } from 'src/app/example/example.component';

@Injectable({
  providedIn: 'root'
})
export class PageLayoutService {
  constructor() {}

  public getPageLayout(pageId: string): Observable<PageLayout> {
    return of({
      id: 'id1',
      editingMode: false,
      variables: {
        myvariable: 'nothing'
      },
      config: {
        component: {
          type: 'ExampleComponent',
          bindings: {
            inputs: {},
            outputs: {}
          }
        },
        column: true,
        split: 50
      }
    });
  }
}
