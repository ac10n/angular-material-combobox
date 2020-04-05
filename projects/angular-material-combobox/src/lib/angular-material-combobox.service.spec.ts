import { TestBed } from '@angular/core/testing';

import { AngularMaterialComboboxService } from './angular-material-combobox.service';

describe('AngularMaterialComboboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMaterialComboboxService = TestBed.get(AngularMaterialComboboxService);
    expect(service).toBeTruthy();
  });
});
