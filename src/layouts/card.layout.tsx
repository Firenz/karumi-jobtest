import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: '3rem',
      maxWidth: '30rem',
      width: '80%',
      height: '40rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.5)',
    },
  })
);

interface Props {
  children: any;
}

export const CardLayout: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <Card data-testid="card-layout" variant="outlined" className={classes.card}>
      {props.children}
    </Card>
  );
};
