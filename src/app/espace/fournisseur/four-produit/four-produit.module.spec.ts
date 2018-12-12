import { FourProduitModule } from './four-produit.module';

describe('FourProduitModule', () => {
  let fourProduitModule: FourProduitModule;

  beforeEach(() => {
    fourProduitModule = new FourProduitModule();
  });

  it('should create an instance', () => {
    expect(fourProduitModule).toBeTruthy();
  });
});
