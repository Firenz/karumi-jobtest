import { switchRoutes } from './routes';

describe('Routes specs', () => {
  it('should have a switchRoutes with root, login, logged properties', () => {
    // Assert
    expect(switchRoutes).toHaveProperty('root');
    expect(switchRoutes).toHaveProperty('login');
    expect(switchRoutes).toHaveProperty('logged');
  });
  it('should have a switchRoutes properties initialized', () => {
    // Assert
    expect(switchRoutes).toHaveProperty('root');
    expect(switchRoutes).toHaveProperty('login');
    expect(switchRoutes).toHaveProperty('logged');
    expect(switchRoutes.root).toEqual('/');
    expect(switchRoutes.login).toEqual('/login');
    expect(switchRoutes.logged).toEqual('/logged');
  });
});
