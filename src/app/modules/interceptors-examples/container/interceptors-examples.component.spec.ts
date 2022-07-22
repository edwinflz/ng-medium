import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorsExamplesComponent } from './interceptors-examples.component';

describe('InterceptorsExamplesComponent', () => {
  let component: InterceptorsExamplesComponent;
  let fixture: ComponentFixture<InterceptorsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorsExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
