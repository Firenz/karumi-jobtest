import { randomizeString } from "common/utils";

const localStorageDataName = 'tokenSession';

export const generateTokenSession = (): string => {
  clearLocalStoredTokenSession();
  return randomizeString(50);
}

export const setLocalStoredTokenSession = (tokenSession: string) => {
  localStorage.setItem(localStorageDataName, tokenSession);
}

export const getLocalStoredTokenSession = (): string | null => {
  return localStorage.getItem(localStorageDataName);
}

export const clearLocalStoredTokenSession = () => {
  localStorage.clear();
}