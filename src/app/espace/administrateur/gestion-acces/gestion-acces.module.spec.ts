import { GestionAccesModule } from './gestion-acces.module';

describe('GestionAccesModule', () => {
  let gestionAccesModule: GestionAccesModule;

  beforeEach(() => {
    gestionAccesModule = new GestionAccesModule();
  });

  it('should create an instance', () => {
    expect(gestionAccesModule).toBeTruthy();
  });
});
