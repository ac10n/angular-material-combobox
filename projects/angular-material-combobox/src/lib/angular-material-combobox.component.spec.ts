import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialComboboxComponent } from './angular-material-combobox.component';

describe('AngularMaterialComboboxComponent', () => {
  let component: AngularMaterialComboboxComponent;
  let fixture: ComponentFixture<AngularMaterialComboboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialComboboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
