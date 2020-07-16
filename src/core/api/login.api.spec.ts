import { LoginEntityVm, mockData } from 'core';
import { validateCredentials } from './login.api';

describe('Login Entity api specs', () => {
  it('validateCredentials should return string error if given data isnt equal to mockData', async () => {
    // Arrange
    const loginEntity = <LoginEntityVm>{
      login: '',
      password: '',
    };

    // Assert
    await expect(
      validateCredentials(loginEntity.login, loginEntity.password)
    ).rejects.toBe('Invalid credentials, use admin@mail.com/test for testing purposes.');
  });
  it('validateCredentials should return a token if given data is equal to mockData', async () => {
    // Arrange
    const loginEntity = <LoginEntityVm>{
      login: mockData.login,
      password: mockData.password,
    };

    // Assert
    await expect(
      validateCredentials(loginEntity.login, loginEntity.password).then( data => typeof data)
    ).resolves.toBe('string');
  });
});
