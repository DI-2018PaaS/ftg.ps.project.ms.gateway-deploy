import { DemandeAgremmentModule } from './demande-agremment.module';

describe('DemandeAgremmentModule', () => {
  let demandeAgremmentModule: DemandeAgremmentModule;

  beforeEach(() => {
    demandeAgremmentModule = new DemandeAgremmentModule();
  });

  it('should create an instance', () => {
    expect(demandeAgremmentModule).toBeTruthy();
  });
});
