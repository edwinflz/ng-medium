import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionComponentComponent } from './injection-component.component';

describe('InjectionComponentComponent', () => {
  let component: InjectionComponentComponent;
  let fixture: ComponentFixture<InjectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
