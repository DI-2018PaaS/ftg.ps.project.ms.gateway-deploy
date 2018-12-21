import { CreditAdminModule } from './credit-admin.module';

describe('CreditAdminModule', () => {
  let creditAdminModule: CreditAdminModule;

  beforeEach(() => {
    creditAdminModule = new CreditAdminModule();
  });

  it('should create an instance', () => {
    expect(creditAdminModule).toBeTruthy();
  });
});
