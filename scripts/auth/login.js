import { validateEmail, validatePassword, hasError } from "../validation.js";
import { checkInputField } from "../inputHandler.js";
//이메일이 비어있지 않을 때
//비밀번호가 비어있지 않을 때
//에러 메세지가 없을 때
//모두 충족하면 버튼 활성화

const emailInput = document.getElementById("login-email");
const emailError = document.getElementById("login-email-error");
const passwordInput = document.getElementById("login-password");
const passwordError = document.getElementById("login-password-error");
const loginButton = document.getElementById("login-button");

const checkLoginButtonState = () => {
  const isEmailInputFilled = emailInput.value.trim() !== "";
  const isPasswordInputFilled = passwordInput.value.trim() !== "";
  const hasNoErrors = !hasError(emailInput) && !hasError(passwordInput);

  if (isEmailInputFilled && isPasswordInputFilled && hasNoErrors) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

checkInputField(emailInput, emailError, validateEmail, checkLoginButtonState);
checkInputField(
  passwordInput,
  passwordError,
  validatePassword,
  checkLoginButtonState,
);
