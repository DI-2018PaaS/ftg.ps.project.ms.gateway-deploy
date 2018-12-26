import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPretComponent } from './validation-pret.component';

describe('ValidationPretComponent', () => {
  let component: ValidationPretComponent;
  let fixture: ComponentFixture<ValidationPretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationPretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
