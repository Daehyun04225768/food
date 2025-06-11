document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('.input-field');
  const outputField = document.querySelector('.output-field');

  inputField.addEventListener('input', function () {
    const ingredients = inputField.value.trim(); // 입력된 내용 가져오기
    if (ingredients) {
      outputField.innerHTML = `🥕 ${ingredients}로 만들 수 있는 예시 레시피입니다.`;
    } else {
      outputField.innerHTML = ''; // 입력이 없을 경우 출력 필드 비우기
    }
  });
});