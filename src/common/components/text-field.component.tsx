import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextField } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      height: '5.5rem',
    },
    input: {
      padding: '1rem',
      color: theme.palette.text.secondary,
    },
  })
);

interface Props extends FieldRenderProps<any, any> {
  'data-testid'?: string;
}

export const TextFieldComponent: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles(props);

  const {
    input: { name, onChange, value, ...restInput },
    meta,
    'data-testid': dataTestId,
    ...rest
  } = props;

  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TextField
      {...rest}
      name={name}
      error={showError}
      inputProps={{
        ...restInput,
        'data-testid': dataTestId,
        className: classes.input,
      }}
      onChange={onChange}
      value={value}
      helperText={showError ? meta.error : ''}
      variant="outlined"
      className={classes.textField}
    />
  );
};
