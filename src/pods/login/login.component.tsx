import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { LoginEntityVm } from 'core';
import { TextFieldComponent, ButtonComponent } from 'common';
import { formValidation } from './login.validator';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    button: {
      marginTop: '1rem',
    },
  })
);

interface Props {
  onLogin: (loginInfo: LoginEntityVm) => void;
  initialLogin: LoginEntityVm;
}

export const LoginComponent: React.FunctionComponent<Props> = (
  props: Props
) => {
  const { onLogin, initialLogin } = props;
  const classes = useStyles(props);

  const handleSubmit = (values: any) => {
    onLogin(values);
  }

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={initialLogin}
      render={({ handleSubmit, submitting, pristine, values }) => (
        <form
          data-testid="login-component"
          className={classes.form}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Field
            data-testid="login-input"
            fullWidth
            name="login"
            component={TextFieldComponent}
            type="text"
            label="Username"
            validate={(value, _, meta) => {
              const name: any = meta == null ? '' : meta.name;
              return formValidation.validateField(name, value);
            }}
          />
          <Field
            data-testid="password-input"
            fullWidth
            name="password"
            component={TextFieldComponent}
            type="password"
            label="Password"
            validate={(value, _, meta) => {
              const name: any = meta == null ? '' : meta.name;
              return formValidation.validateField(name, value);
            }}
          />
          <div className={classes.button}>
            <ButtonComponent
              data-testid="login-button"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </ButtonComponent>
          </div>
        </form>
      )}
    />
  );
};
