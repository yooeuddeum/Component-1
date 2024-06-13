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

//* Input 컴포넌트
const inputComponent = (label, id, name, value) => {
  return `
  <label for = "${id}>${label}:</label>
  <input type = "text" id ="${id}" name = "${name}" value = "${value}" required>
  `;
};
console.log(inputComponent("Hello", "asd", "name1", "value1"));


