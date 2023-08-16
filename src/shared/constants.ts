export const UK_PHONE_NUMBER_PATTERN =
  /^(7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const PASSWORD_VALIDATION_MSG =
  "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)";

export const PASSWORD_CONFIRM_MG =
  "Password mismatch, please confirm password before submit";

export const UK_PHONE_VALIDATION_MSG = "Please provide valid UK mobile number";
