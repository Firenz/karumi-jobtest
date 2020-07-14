import * as React from 'react';
import { makeStyles, Theme, createStyles, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

interface Props {
  children: any;
}

export const CenteredLayout: React.FunctionComponent<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <CssBaseline>
      <div className={classes.root}>
        {props.children}
      </div>
    </CssBaseline>
  );
};