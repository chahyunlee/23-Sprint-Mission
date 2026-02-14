import {
  validateEmail,
  hasError,
  removeError,
} from "../../scripts/validation.js";
//이메일이 비어있지 않을 때
//비밀번호가 비어있지 않을 때
//에러 메세지가 없을 때
//모두 충족하면 버튼 활성화

const emailInput = document.getElementById("login-email");
const emailError = document.getElementById("email-error");
const loginButton = document.getElementById("login-button");

const checkButtonState = () => {
  const isEmailInputFilled = emailInput.value.trim() !== "";
  const hasNoErrors = !hasError(emailInput) && !hasError(passwordInput);

  if (isEmailInputFilled && hasNoErrors) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim()) {
    removeError(emailInput, emailError);
  }
  checkButtonState();
});
emailInput.addEventListener("blur", () => {
  validateEmail(emailInput, emailError);
  checkButtonState();
});
