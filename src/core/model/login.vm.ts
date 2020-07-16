export interface LoginEntityVm {
  login: string;
  password: string;
}

export interface LoginEntityApi {
  login: string;
  password: string;
  tokenSession: string;
}

export const createEmptyLogin = (): LoginEntityVm => ({
  login: '',
  password: '',
});

export const mapperApiToVm = (element: LoginEntityApi): LoginEntityVm => {
  const entityVm: LoginEntityVm = {
    login: element.login,
    password: element.password
  }

  return entityVm;
}
