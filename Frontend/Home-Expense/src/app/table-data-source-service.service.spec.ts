import { TestBed } from '@angular/core/testing';

import { TableDataSourceServiceService } from './table-data-source-service.service';

describe('TableDataSourceServiceService', () => {
  let service: TableDataSourceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDataSourceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
