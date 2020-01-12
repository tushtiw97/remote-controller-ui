import { TestBed } from '@angular/core/testing';

import { TabService } from './tab-service.service';

describe('TabServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabService = TestBed.get(TabService);
    expect(service).toBeTruthy();
  });
});
