import { TestBed } from '@angular/core/testing';

import { NgxMatUiToolkitService } from './ngx-mat-ui-toolkit.service';

describe('NgxMatUiToolkitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatUiToolkitService = TestBed.get(NgxMatUiToolkitService);
    expect(service).toBeTruthy();
  });
});
