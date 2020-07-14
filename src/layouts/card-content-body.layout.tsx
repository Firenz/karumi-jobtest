import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContent: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface Props {
  children: any;
}

export const CardContentBodyLayout: React.FunctionComponent<Props> = (
  props: Props
) => {
  const classes = useStyles(props);

  return <div className={classes.cardContent}>{props.children}</div>;
};
