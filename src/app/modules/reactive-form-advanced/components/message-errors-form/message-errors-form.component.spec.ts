import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorsFormComponent } from './message-errors-form.component';

describe('MessageErrorsFormComponent', () => {
  let component: MessageErrorsFormComponent;
  let fixture: ComponentFixture<MessageErrorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageErrorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErrorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
