import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';

const validationSchema: ValidationSchema = {
  field: {
    login: [Validators.required.validator, Validators.email.validator],
    password: [
      Validators.required.validator,
      {
        validator: Validators.minLength.validator,
        customArgs: {
          length: 3,
        },
      },
      {
        validator: Validators.pattern.validator,
        customArgs: {
          pattern: /[a-zA-Z0-9]/,
        },
      },
    ],
  },
};

export const formValidation = createFinalFormValidation(validationSchema);
