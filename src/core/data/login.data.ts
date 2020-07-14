// Though this is identical to LoginEntityVm here, i wanted to recreate the
// notion that ussually api and vm structures aren't the same in real projects
export interface LoginEntityApi {
  login: string;
  password: string;
}

export const mockData: LoginEntityApi = {
  login: 'admin@mail.com',
  password: 'test',
};
