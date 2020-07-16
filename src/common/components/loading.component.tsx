import * as React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardLoading: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

interface Props {
  loadingState: boolean;
}

export const LoadingComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { loadingState } = props;
  const classes = useStyles(props);

  return (
    <React.Fragment>
      {loadingState && (
        <div data-testid="loading-component" className={classes.cardLoading}>
          <CircularProgress size={'6rem'} />
        </div>
      )}
    </React.Fragment>
  );
};
