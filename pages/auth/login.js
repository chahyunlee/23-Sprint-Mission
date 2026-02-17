import {
  validateEmail,
  validatePassword,
  hasError,
  removeError,
} from "../../scripts/validation.js";
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

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim()) {
    removeError(emailInput, emailError);
  }
  checkLoginButtonState();
});
emailInput.addEventListener("blur", () => {
  validateEmail(emailInput, emailError);
  checkLoginButtonState();
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim()) {
    removeError(passwordInput, passwordError);
  }
  checkLoginButtonState();
});
passwordInput.addEventListener("blur", () => {
  validatePassword(passwordInput, passwordError);
  checkLoginButtonState();
});
