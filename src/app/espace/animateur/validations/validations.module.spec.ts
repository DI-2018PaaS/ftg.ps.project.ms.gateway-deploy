import { ValidationsModule } from './validations.module';

describe('ValidationsModule', () => {
  let validationsModule: ValidationsModule;

  beforeEach(() => {
    validationsModule = new ValidationsModule();
  });

  it('should create an instance', () => {
    expect(validationsModule).toBeTruthy();
  });
});
