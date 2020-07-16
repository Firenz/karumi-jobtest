import { randomizeString } from 'common/utils';

const localStorageDataName = 'tokenSession';

export const generateTokenSession = (): string => {
  return randomizeString(50);
};

export const setLocalStoredTokenSession = (tokenSession: string) => {
  clearLocalStoredTokenSession();
  localStorage.setItem(localStorageDataName, tokenSession);
};

export const getLocalStoredTokenSession = (): string | null => {
  return localStorage.getItem(localStorageDataName);
};

export const checkValidityLocalStoredTokenSession = (): boolean => {
  const localStoredTokenSession = getLocalStoredTokenSession();
  if (localStoredTokenSession != null && localStoredTokenSession !== '') {
    return true;
  } else {
    return false;
  }
};

export const clearLocalStoredTokenSession = () => {
  localStorage.clear();
};
