import * as React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { SessionProvider, defaultTheme } from 'core';
import { Router } from 'router';
import { LoginPage, UserPage } from 'pages';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <SessionProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
        </ThemeProvider>
      </SessionProvider>
    </React.Fragment>
  );
};
