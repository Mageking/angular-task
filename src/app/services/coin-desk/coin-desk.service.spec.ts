import { TestBed, inject } from '@angular/core/testing';

import { CoinDeskService } from './coin-desk.service';

describe('CoinDeskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinDeskService]
    });
  });

  it('should be created', inject([CoinDeskService], (service: CoinDeskService) => {
    expect(service).toBeTruthy();
  }));
});
