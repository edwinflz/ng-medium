import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCardRibbonComponent } from './ui-card-ribbon.component';

describe('UiCardRibbonComponent', () => {
  let component: UiCardRibbonComponent;
  let fixture: ComponentFixture<UiCardRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCardRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCardRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
