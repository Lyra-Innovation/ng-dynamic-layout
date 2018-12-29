import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPageLayout from './state/page-layout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { PageLayoutEffects } from './state/page-layout.effects';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { DynamicContainerComponent } from './containers/dynamic-container/dynamic-container.component';
import { ComponentConfigComponent } from './containers/component-config/component-config.component';
import { ComponentContainerComponent } from './containers/component-container/component-container.component';
import { EditingToolbarComponent } from './components/editing-toolbar/editing-toolbar.component';
import { HostDirective } from './host.directive';

@NgModule({
  declarations: [
    PageContainerComponent,
    DynamicContainerComponent,
    ComponentConfigComponent,
    ComponentContainerComponent,
    EditingToolbarComponent,
    HostDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularSplitModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    FlexLayoutModule,
    DragDropModule,
    StoreModule.forFeature('pageLayout', fromPageLayout.reducer),
    EffectsModule.forFeature([PageLayoutEffects])
  ],
  exports: [
    PageContainerComponent,
    DynamicContainerComponent,
    ComponentContainerComponent,
    EditingToolbarComponent
  ]
})
export class DynamicLayoutModule {}
