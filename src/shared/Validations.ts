import { PASSWORD_REGEX } from "./constants";

export const validatePassword = (password: string | undefined) => {
  if (password === undefined) return;
  return PASSWORD_REGEX.test(password);
};

export const validateConfirmPassword = (
  password: string | undefined,
  confirmPassword: string | undefined
) => {
  if (password === undefined || confirmPassword === undefined) return;

  return password === confirmPassword;
};
