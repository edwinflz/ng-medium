import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiChessQuoteComponent } from './ui-chess-quote.component';

describe('UiChessQuoteComponent', () => {
  let component: UiChessQuoteComponent;
  let fixture: ComponentFixture<UiChessQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiChessQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiChessQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
