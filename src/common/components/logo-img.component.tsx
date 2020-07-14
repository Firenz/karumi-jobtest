import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: '7rem',
    },
  })
);

export const LogoImgComponent: React.FunctionComponent = () => {
  const classes = useStyles();
  const logoImg = require('../../img/karumi-logo.png');

  return (
    <img
      data-testid="logo-img"
      src={logoImg}
      alt="Karumi"
      className={classes.media}
    />
  );
};
