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

//* 전체 컴포넌트

const component = (name, age, job) => {
  let obj = {
    name: name,
    age: age,
    job: job,
  };
  //* Form content 생성

  const formContent = `
  ${inputComponent("이름", "name", "name", obj.name)}
  ${inputComponent("나이", "age", "age", obj.age)}
  ${inputComponent("직업", "job", "job", obj.job)}
  `;

  //* Form 컴포넌트의 결합
  return `
  ${formComponent("/submit", "post", formContent)}
  `;
};

//* 페이지가 로드될 때 컴포넌트를 랜더링
function renderApp() {
  const root = document.getElementById("root");
  root.innerHTML = component("유으뜸", 1414, "수강생"); // innerHTML로 문서가 작성됨
}
