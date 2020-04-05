import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatInputModule} from '@angular/material';
import {AngularMaterialComboboxModule} from '../../projects/angular-material-combobox/src/lib/angular-material-combobox.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    AngularMaterialComboboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
