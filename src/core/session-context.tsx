import * as React from 'react';
import { getLocalStoredTokenSession, setLocalStoredTokenSession, checkValidityLocalStoredTokenSession } from 'common';

interface Context {
  tokenSession: string;
  updateTokenSession: (value: string) => void;
  login: string;
  updateLogin: (value: string) => void;
}

interface Props {
  children: any;
}

export const SessionContext = React.createContext<Context>({
  tokenSession: 'no token session',
  login: 'no user',
  updateTokenSession: (value) => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
  updateLogin: (value) => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

export const SessionProvider: React.FunctionComponent<Props> = (
  props: Props
) => {
  const [login, setLogin] = React.useState('');
  const [tokenSession, setTokenSession] = React.useState('');

  React.useEffect(() => {
    const localStoredTokenSession = getLocalStoredTokenSession() || '';
    if (checkValidityLocalStoredTokenSession()) {
      setTokenSession(localStoredTokenSession);
    }
  }, []);

  React.useEffect(() => {
    setLocalStoredTokenSession(tokenSession);
  }, [tokenSession]);

  return (
    <SessionContext.Provider
      value={{
        tokenSession,
        updateTokenSession: setTokenSession,
        login,
        updateLogin: setLogin,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  );
};
