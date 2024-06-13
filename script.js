//* Form 컴포넌트
const formComponent = (action, method, content) => {
  return `
  <form action = "${action}" method = "${method}" id = "user-form">
  ${content}
  <button type = "button" id = "submit-button">콘솔확인하기</button>
  </form>
  `;
};
console.log(formComponent("/submit", "POST", "gggg"));


