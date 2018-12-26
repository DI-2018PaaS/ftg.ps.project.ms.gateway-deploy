import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAgrementListComponent } from './demande-agrement-list.component';

describe('DemandeAgrementListComponent', () => {
  let component: DemandeAgrementListComponent;
  let fixture: ComponentFixture<DemandeAgrementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeAgrementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAgrementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
