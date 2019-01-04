import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuBlivraisonComponent } from './visu-blivraison.component';

describe('VisuBlivraisonComponent', () => {
  let component: VisuBlivraisonComponent;
  let fixture: ComponentFixture<VisuBlivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuBlivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuBlivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
