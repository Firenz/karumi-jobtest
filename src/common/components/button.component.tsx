import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: '0.5rem 2rem',
    },
  })
);

interface Props {
  children: any;
  'data-testid'?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'text' | 'outlined' | 'contained' | undefined;
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  size?: 'small' | 'medium' | 'large' | undefined;
  onClick?: any;
}

export const ButtonComponent: React.FunctionComponent<Props> = (props) => {
  const { type, variant, color, size, onClick } = props;
  const classes = useStyles(props);

  return (
    <Button
      data-testid={props['data-testid'] || 'button-component'}
      type={type}
      variant={variant}
      color={color}
      size={size}
      className={classes.button}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};
