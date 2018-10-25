import {NgModule} from '@angular/core';
import {AngularMaterialComboboxComponent} from './angular-material-combobox.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [AngularMaterialComboboxComponent],
  exports: [AngularMaterialComboboxComponent]
})
export class AngularMaterialComboboxModule {
}
