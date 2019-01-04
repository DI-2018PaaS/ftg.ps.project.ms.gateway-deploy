import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementBlivraisonComponent } from './paiement-blivraison.component';

describe('PaiementBlivraisonComponent', () => {
  let component: PaiementBlivraisonComponent;
  let fixture: ComponentFixture<PaiementBlivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementBlivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementBlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
