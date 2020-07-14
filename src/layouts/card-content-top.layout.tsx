import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      margin: '5rem 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

interface Props {
  children: any;
}

export const CardContentTopLayout: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.cardHeader}>
      {props.children}
    </div>
  );
};