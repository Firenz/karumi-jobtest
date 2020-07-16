import * as React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  CardContent,
  CssBaseline,
} from '@material-ui/core';
import {
  CardLayout,
  CardContentTopLayout,
  CardContentBodyLayout,
  CenteredLayout,
} from 'layouts';
import { LogoImgComponent } from 'common';
import { UserContainer } from 'pods';

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

interface Props {}

export const UserPage: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <CssBaseline>
      <CenteredLayout>
        <CardLayout>
          <CardContent className={classes.cardContent} data-testid="user-page">
            <UserContainer/>
          </CardContent>
        </CardLayout>
      </CenteredLayout>
    </CssBaseline>
  );
};
