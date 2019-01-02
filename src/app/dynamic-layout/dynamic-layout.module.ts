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
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDialogModule,
  MatTabsModule,
  MatSlideToggleModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';
import { PageLayoutEffects } from './state/page-layout.effects';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { DynamicLayoutComponent } from './containers/dynamic-layout/dynamic-layout.component';
import { DynamicContainerComponent } from './containers/dynamic-container/dynamic-container.component';
import { ComponentConfigComponent } from './containers/component-config/component-config.component';
import { ComponentContainerComponent } from './containers/component-container/component-container.component';
import { EditingToolbarComponent } from './components/editing-toolbar/editing-toolbar.component';
import { HostDirective } from './host.directive';
import { NewVariableComponent } from './components/new-variable/new-variable.component';
import { ConfigurableTabsComponent } from './components/configurable/configurable-tabs/configurable-tabs.component';

@NgModule({
  declarations: [
    PageContainerComponent,
    DynamicLayoutComponent,
    DynamicContainerComponent,
    ComponentConfigComponent,
    ComponentContainerComponent,
    EditingToolbarComponent,
    HostDirective,
    NewVariableComponent,
    ConfigurableTabsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSplitModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
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
  ],
  entryComponents: [NewVariableComponent, ConfigurableTabsComponent]
})
export class DynamicLayoutModule {}
