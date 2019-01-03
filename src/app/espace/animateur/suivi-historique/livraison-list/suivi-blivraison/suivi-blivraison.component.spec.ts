import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviBlivraisonComponent } from './suivi-blivraison.component';

describe('SuiviBlivraisonComponent', () => {
  let component: SuiviBlivraisonComponent;
  let fixture: ComponentFixture<SuiviBlivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviBlivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviBlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
