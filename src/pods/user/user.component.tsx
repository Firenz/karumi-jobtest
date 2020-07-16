import * as React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
} from '@material-ui/core';
import { ButtonComponent, LogoImgComponent, LoadingComponent } from 'common';
import { CardContentTopLayout, CardContentBodyLayout } from 'layouts';

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
    text: {
      flexGrow: 1,
      alignSelf: 'center',
    },
    button: {
      marginTop: '1rem',
      alignSelf: 'flex-start',
    },
  })
);

interface Props {
  loadingState: boolean;
  loginInfo: string;
  handleLogout: () => void;
}

export const UserComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { handleLogout, loginInfo, loadingState } = props;
  const classes = useStyles(props);

  return (
    <React.Fragment>
      {loadingState && (
        <LoadingComponent loadingState={loadingState}/>
      )}
      {!loadingState && (
        <React.Fragment>
          <CardContentTopLayout>
            <LogoImgComponent />
          </CardContentTopLayout>
          <CardContentBodyLayout>
            <Typography
              data-testid="text-component"
              variant="body1"
              component="h1"
              className={classes.text}
            >
              Welcome {loginInfo}!
            </Typography>
            <div className={classes.button} data-testid="user-component">
              <ButtonComponent
                data-testid="logout-button"
                type="button"
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </ButtonComponent>
            </div>
          </CardContentBodyLayout>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
