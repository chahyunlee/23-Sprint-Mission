import {
  validateEmail,
  validatePassword,
  isPasswordMatch,
  hasError,
  removeError,
  showError,
} from "../../scripts/validation.js";

//이메일이 비어있지 않을 때
//닉네임이 비어있지 않을 때
//비밀번호가 8자 이상일 때
//비밀번호 확인 === 비밀번호 일 때
//에러 메세지가 없을 떄
//모두 충족하면 버튼 활성화

const emailInput = document.getElementById("signup-email");
const emailError = document.getElementById("signup-email-error");
const nicknameInput = document.getElementById("signup-nickname");
const nicknameError = document.getElementById("signup-nickname-error");
const passwordInput = document.getElementById("signup-password");
const passwordError = document.getElementById("signup-password-error");
const passwordCheckInput = document.getElementById("signup-password-check");
const passwordCheckError = document.getElementById(
  "signup-password-check-error",
);
const signupButton = document.getElementById("signup-button");

const checkSignupButtonState = () => {
  const isEmailInputFilled = emailInput.value.trim() !== "";
  const isPasswordInputFilled = passwordInput.value.trim() !== "";
  const isNicknameInputFilled = nicknameInput.value.trim() !== "";
  const isPasswordCheckInputFilled = passwordCheckInput.value.trim() !== "";
  const hasNoErrors =
    !hasError(emailInput) &&
    !hasError(passwordInput) &&
    !hasError(nicknameInput) &&
    !hasError(passwordCheckInput);

  if (
    isEmailInputFilled &&
    isPasswordInputFilled &&
    isNicknameInputFilled &&
    isPasswordCheckInputFilled &&
    hasNoErrors
  ) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

//이메일
emailInput.addEventListener("input", () => {
  if (emailInput.value.trim()) {
    removeError(emailInput, emailError);
  }
  checkSignupButtonState();
});
emailInput.addEventListener("blur", () => {
  validateEmail(emailInput, emailError);
  checkSignupButtonState();
});

//닉네임
nicknameInput.addEventListener("input", () => {
  if (nicknameInput.value.trim()) {
    removeError(nicknameInput, nicknameError);
  }
  checkSignupButtonState();
});
nicknameInput.addEventListener("blur", () => {
  if (!nicknameInput.value.trim()) {
    showError(nicknameInput, nicknameError, "닉네임을 입력해주세요.");
  } else {
    removeError(nicknameInput, nicknameError);
  }
  checkSignupButtonState();
});

//비밀번호
passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim()) {
    removeError(passwordInput, passwordError);
  }
  checkSignupButtonState();
});
passwordInput.addEventListener("blur", () => {
  validatePassword(passwordInput, passwordError);
  checkSignupButtonState();
});

// 비밀번호 확인
passwordCheckInput.addEventListener("input", () => {
  if (passwordCheckInput.value.trim()) {
    removeError(passwordCheckInput, passwordCheckError);
  }
  checkSignupButtonState();
});
passwordCheckInput.addEventListener("blur", () => {
  isPasswordMatch(passwordInput, passwordCheckInput, passwordCheckError);
  checkSignupButtonState();
});
