import { randomizeString } from 'common/utils';

interface LocalStorageDataNames {
  token: string;
  login: string;
}

const localStorageDataNames: LocalStorageDataNames = {
  token: 'tokenSession',
  login: 'loginInfo'
}

export const saveTokenSession = (tokenSession: string) => {
  localStorage.setItem(localStorageDataNames.token, tokenSession);
};

export const getSavedTokenSession = (): string => {
  return localStorage.getItem(localStorageDataNames.token) || '';
};

export const checkValidityTokenSession = (): boolean => {
  const localStoredTokenSession = getSavedTokenSession();
  if (localStoredTokenSession != null && localStoredTokenSession !== '') {
    return true;
  } else {
    return false;
  }
};

export const saveLoginInfo = (login: string) => {
  localStorage.setItem(localStorageDataNames.login, login);
}

export const getSavedLoginInfo = (): string => {
  return localStorage.getItem(localStorageDataNames.login) || '';
};

export const clearSavedData = () => {
  localStorage.setItem(localStorageDataNames.token, '');
  localStorage.setItem(localStorageDataNames.login, '');
};
