import { TestBed } from '@angular/core/testing';

import { ServiceenfantService } from './serviceenfant.service';

describe('ServiceenfantService', () => {
  let service: ServiceenfantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceenfantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
