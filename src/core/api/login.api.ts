import mockData from 'core/data/login.data';

export const validateCredentials = (
  user: string,
  password: string
): Promise<boolean> => {
  return new Promise<boolean>((resolve) =>
    setTimeout(
      () => resolve(user === mockData.login && password === mockData.password),
      500
    )
  );
};
