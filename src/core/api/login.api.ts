import { mockData, LoginEntityApi } from 'core';
import { randomizeString } from 'common/utils';

export const validateCredentials = (
  user: string,
  password: string
): Promise<string> => {
  return new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      if (user === mockData.login && password === mockData.password) {
        // In a real situation, the api resolve would return
        // and object with object data and a JWT token (https://jwt.io/)
        // but since this is a mock app, I'm making up a token
        // with a random string
        mockData.tokenSession = randomizeString(50);

        // we have to do this to mock the api server persistence
        localStorage.setItem('tokenSessionApi', mockData.tokenSession);
        resolve(mockData.tokenSession);
      } else {
        reject(
          'Invalid credentials, use admin@mail.com/test for testing purposes.'
        );
      }
    }, 500)
  );
};

export const validateSession = (token: string): Promise<LoginEntityApi> => {
  return new Promise<LoginEntityApi>((resolve, reject) =>
    setTimeout(() => {
      // we have to do this to mock the api data server persistence
      const apiToken = localStorage.getItem('tokenSessionApi') || '';
      mockData.tokenSession = apiToken;
      if (token === apiToken) {
        resolve(mockData);
      } else {
        reject('Invalid session.');
      }
    }, 500)
  );
};
