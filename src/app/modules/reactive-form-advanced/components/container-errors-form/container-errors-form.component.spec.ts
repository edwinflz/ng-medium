import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerErrorsFormComponent } from './container-errors-form.component';

describe('ContainerErrorsFormComponent', () => {
  let component: ContainerErrorsFormComponent;
  let fixture: ComponentFixture<ContainerErrorsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerErrorsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerErrorsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
