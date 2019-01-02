import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuLivraisonComponent } from './visu-livraison.component';

describe('VisuLivraisonComponent', () => {
  let component: VisuLivraisonComponent;
  let fixture: ComponentFixture<VisuLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
