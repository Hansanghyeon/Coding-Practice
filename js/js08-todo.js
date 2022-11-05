const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//toDoForm 안에 있는 input을 찾는다.
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDO() {
  localStorage.setItem("todos", JSON.stringify(toDos)); // todo를 저장함.
  //JSON.stringfy   JSON.parse == 객체를 JSON 문자열로 변환한다.
  // result : {"toDos1", "toDos2", "toDos3", …}
}

function removeToDo(event) {
  const li = event.target.parentElement; // target(클릭된) HTML의 element이다.
  li.remove();
  //parentElement로 클릭된 element의 부모임, innerText로 해당 텍스트를 추출할 수 있다.
}

function addToDO(toDoBox) {
  const paragraph = document.createElement("li"); //li를 만들고
  const span = document.createElement("span"); //span을 만들고
  span.innerText = toDoBox;
  const button = document.createElement("button");
  button.innerText = "✘";
  button.addEventListener("click", removeToDo);
  paragraph.appendChild(span); //li 안에 span 이라는 자식을 추가함
  paragraph.appendChild(button);
  toDoList.appendChild(paragraph);
  //localStorage.add(`todo`)sf
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const toDoBox = toDoInput.value;
  toDoInput.value = "";
  toDos.push(toDoBox);
  //toDoInput의 값을 제거한다.
  addToDO(toDoBox);
  saveToDO();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem("todos");
// string

console.log(saveToDos);
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  // array로 변환
  console.log(parsedToDos);
}
