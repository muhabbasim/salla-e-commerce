// utils/validation.ts
export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface ValidationError {
  [key: string]: string;
}

export const validate = (
  inputValues: { [key: string]: any },
  validationRules: { [key: string]: ValidationRules }
): ValidationError => {
  const errors: ValidationError = {};

  for (const key in validationRules) {
    const rules = validationRules[key];
    const value = inputValues[key];

    // Required field validation
    if (rules.required && !value) {
      errors[key] = `${key.replace('_', ' ')} is required`;
    }

    // Minimum length validation
    if (rules.minLength && value.length < rules.minLength) {
      errors[key] = `${key.replace('_', ' ')} must be at least ${rules.minLength} characters`;
    }

    // Maximum length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      errors[key] = `${key.replace('_', ' ')} must not exceed ${rules.maxLength} characters`;
    }
  }

  return errors;
};
