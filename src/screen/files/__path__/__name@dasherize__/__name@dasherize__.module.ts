import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= classify(name) %>ScreenComponent } from './<%=dasherize(name)%>.component';
import { MaterialModule } from '../../theme/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { <%= classify(name) %>Router } from './<%=dasherize(name)%>.router';
import { <%= classify(name) %>Effects } from './state/<%=dasherize(name)%>.effects';
import { reducers } from './state/<%=dasherize(name)%>.selectors';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    <%= classify(name) %>Router,
    StoreModule.forFeature('<%=camelize(name)%>', reducers),
    EffectsModule.forFeature([<%= classify(name) %>Effects]),
  ],
  declarations: [<%= classify(name) %>ScreenComponent]
})
export class <%= classify(name) %>ScreenModule { }