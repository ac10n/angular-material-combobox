import { TestBed } from '@angular/core/testing';

import { AngularMaterialComboboxService } from './angular-material-combobox.service';

describe('AngularMaterialComboboxService', () => {
  let service: AngularMaterialComboboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularMaterialComboboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
