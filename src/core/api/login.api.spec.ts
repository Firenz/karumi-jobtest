import { LoginEntityVm, mockData } from 'core';
import { validateCredentials } from './login.api';

describe('Login Entity api specs', () => {
  it('should return false if given data isnt equal to mockData', async () => {
    // Arrange
    const loginEntity = <LoginEntityVm>{
      login: '',
      password: '',
    };

    // Assert
    await expect(
      validateCredentials(loginEntity.login, loginEntity.password)
    ).resolves.toBe(false);
  });
  it('should return true if given data is equal to mockData', async () => {
    // Arrange
    const loginEntity = <LoginEntityVm>{
      login: mockData.login,
      password: mockData.password,
    };

    // Assert
    await expect(
      validateCredentials(loginEntity.login, loginEntity.password)
    ).resolves.toBe(true);
  });
});
