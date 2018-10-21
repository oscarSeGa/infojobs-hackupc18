import { TestBed } from '@angular/core/testing';

import { MatchOfferViewService } from './match-offer-view.service';

describe('MatchOfferViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchOfferViewService = TestBed.get(MatchOfferViewService);
    expect(service).toBeTruthy();
  });
});
