import * as React from 'react';
import { makeStyles, Theme, createStyles, CardContent, CssBaseline } from '@material-ui/core';
import { CardLayout, CardContentTopLayout, CardContentBodyLayout, CenteredLayout } from 'layouts';
import { LogoImgComponent } from 'common';
import { LoginContainer } from 'pods';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  })
);

export const LoginPage: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <CenteredLayout>
        <CardLayout>
          <CardContent className={classes.cardContent} data-testid="login-page">
            <LoginContainer/>
          </CardContent>
        </CardLayout>
      </CenteredLayout>
    </CssBaseline>
  );
};