import { LoginEntityApi, mockData } from "./login.data";

describe('Login Entity api data specs', () => {
  it('LoginEntityApi should have login and password properties', () => {
    // Arrange
    const loginEntity = <LoginEntityApi>{
      login: '',
      password: ''
    }
    // Assert
    expect(loginEntity).toHaveProperty('login');
    expect(loginEntity).toHaveProperty('password');
  });
  it('mockData should have admin@mail.com/test as data', () => {
    // Act
    const loginEntity = mockData;
    // Assert
    expect(loginEntity).toHaveProperty('login');
    expect(loginEntity).toHaveProperty('password');
    expect(loginEntity.login).toBe('admin@mail.com');
    expect(loginEntity.password).toBe('test');
  });
});
