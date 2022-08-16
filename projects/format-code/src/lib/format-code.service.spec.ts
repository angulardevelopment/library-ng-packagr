import { TestBed } from '@angular/core/testing';

import { FormatCodeService } from './format-code.service';

describe('FormatCodeService', () => {
  let service: FormatCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
