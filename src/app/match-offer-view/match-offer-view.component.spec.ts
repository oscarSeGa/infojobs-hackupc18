import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOfferViewComponent } from './match-offer-view.component';

describe('MatchOfferViewComponent', () => {
  let component: MatchOfferViewComponent;
  let fixture: ComponentFixture<MatchOfferViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchOfferViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOfferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
