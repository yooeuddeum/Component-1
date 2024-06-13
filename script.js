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
