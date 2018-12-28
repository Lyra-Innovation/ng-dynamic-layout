import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageLayoutEffects } from './page-layout.effects';

describe('PageLayoutEffects', () => {
  let actions$: Observable<any>;
  let effects: PageLayoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PageLayoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PageLayoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
