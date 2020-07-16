import * as React from 'react';
import {
  getSavedTokenSession,
  saveTokenSession,
  getSavedLoginInfo,
  saveLoginInfo,
} from 'common';

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
  updateTokenSession: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
  updateLogin: () => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

export const SessionProvider: React.FunctionComponent<Props> = (
  props: Props
) => {
  const [login, setLogin] = React.useState(getSavedLoginInfo());
  const [tokenSession, setTokenSession] = React.useState(
    getSavedTokenSession()
  );

  React.useEffect(() => {
    saveTokenSession(tokenSession);
  }, [tokenSession]);

  React.useEffect(() => {
    saveLoginInfo(login);
  }, [login]);

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
