//에러 상태 확인
export const hasError = (inputElement) => {
  return inputElement.classList.contains("error");
};
//에러 표시
export const showError = (inputElement, errorElement, message) => {
  inputElement.classList.add("error");
  errorElement.textContent = message;
};
//에러 제거
export const removeError = (inputElement, errorElement) => {
  inputElement.classList.remove("error");
  errorElement.textContent = "";
};

//이메일 형식 검증
export const isValidEmail = (email) => {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailFormat.test(email);
};
//이메일 검증
export const validateEmail = (inputElement, errorElement) => {
  const value = inputElement.value.trim();

  if (!value) {
    showError(inputElement, errorElement, "이메일을 입력해주세요.");
    return false;
  }
  if (!isValidEmail(value)) {
    showError(inputElement, errorElement, "잘못된 이메일 형식입니다.");
    return false;
  }
  removeError(inputElement, errorElement);
  return true;
};
