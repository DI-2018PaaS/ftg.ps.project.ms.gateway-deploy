import { TestBed, inject } from '@angular/core/testing';

import { AnimateurService } from './animateur.service';

describe('AnimateurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimateurService]
    });
  });

  it('should be created', inject([AnimateurService], (service: AnimateurService) => {
    expect(service).toBeTruthy();
  }));
});
