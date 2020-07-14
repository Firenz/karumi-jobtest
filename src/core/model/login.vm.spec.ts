import { LoginEntityVm, createEmptyLogin } from './login.vm';

describe('Login Entity model specs', () => {
  it('LoginEntityVm should have login and password properties', () => {
    // Arrange
    const loginEntity = <LoginEntityVm>{
      login: '',
      password: ''
    }
    // Assert
    expect(loginEntity).toHaveProperty('login');
    expect(loginEntity).toHaveProperty('password');
  });
  it('createEmptyLogin should generate an empty LoginEntityVm object', () => {
    // Act
    const loginEntity = createEmptyLogin();
    // Assert
    expect(loginEntity).toHaveProperty('login');
    expect(loginEntity).toHaveProperty('password');
    expect(loginEntity.login).toBe('');
    expect(loginEntity.password).toBe('');
  });
});
