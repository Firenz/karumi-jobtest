import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { ButtonComponent } from 'common';

const useStyles = makeStyles(() =>
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
  handleLogout: () => void;
}

export const UserComponent: React.FunctionComponent<Props> = (props: Props) => {
  const { handleLogout } = props;
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <Typography data-testid="text-component" variant="body1" component="h1" className={classes.text}>
        Welcome user!
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
    </React.Fragment>
  );
};
