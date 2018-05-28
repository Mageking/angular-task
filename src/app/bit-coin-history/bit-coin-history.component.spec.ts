import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitCoinHistoryComponent } from './bit-coin-history.component';

describe('BitCoinHistoryComponent', () => {
  let component: BitCoinHistoryComponent;
  let fixture: ComponentFixture<BitCoinHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitCoinHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitCoinHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
