import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableTabsComponent } from './configurable-tabs.component';

describe('ConfigurableTabsComponent', () => {
  let component: ConfigurableTabsComponent;
  let fixture: ComponentFixture<ConfigurableTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurableTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurableTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
