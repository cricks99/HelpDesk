import { TestBed } from '@angular/core/testing';

import { TicketRepositoryService } from './ticket-repository.service';

describe('TicketRepositoryService', () => {
  let service: TicketRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
