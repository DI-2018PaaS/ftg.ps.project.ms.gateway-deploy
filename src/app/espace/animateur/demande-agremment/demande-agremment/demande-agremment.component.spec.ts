import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAgremmentComponent } from './demande-agremment.component';

describe('DemandeAgremmentComponent', () => {
  let component: DemandeAgremmentComponent;
  let fixture: ComponentFixture<DemandeAgremmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAgremmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAgremmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
