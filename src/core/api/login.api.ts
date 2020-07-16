import { mockData } from 'core';
import { generateTokenSession } from 'common/utils/token';

export const validateCredentials = (
  user: string,
  password: string
): Promise<string> => {
  return new Promise<string>((resolve, reject) =>
    setTimeout(() => {
      if(user === mockData.login && password === mockData.password){
        // In a real situation, the api resolve would return
        // and object with object data and a JWT token (https://jwt.io/)
        // but since this is a mock app, I'm making up a token
        // with a random string
        resolve(generateTokenSession());
      }
      else{
        reject('Invalid credentials, use admin@mail.com/test for testing purposes.');
      }
    }, 500)
  );
};
