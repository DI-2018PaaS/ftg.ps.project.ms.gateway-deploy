import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAccesComponent } from './gestion-acces.component';

describe('GestionAccesComponent', () => {
  let component: GestionAccesComponent;
  let fixture: ComponentFixture<GestionAccesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAccesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
