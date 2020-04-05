import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AngularMaterialComboboxModule } from 'projects/angular-material-combobox/src/lib/angular-material-combobox.module';

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
