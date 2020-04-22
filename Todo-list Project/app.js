// varibales
const todoInput = document.querySelector(".todo-text");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const massageDiv = document.querySelector(".alert");
const filterOptions = document.querySelector(".filter-todo");

// event lisenters
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", loadLocalStorage);

function ChoiseFilter(choice, todo) {
  switch (choice) {
    //זכור שכל לחיצה הוא עושה את ה פוראיטצ וממציג בהתאם למה שתרשום
    case "All":
      todo.style.display = "flex";
      break;

    case "Completed":
      if (todo.classList.contains("Completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
      break;

    case "Uncompleted":
      if (!todo.classList.contains("Completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
      break;
  }
}
function filterTodos(e) {
  const todos = Array.from(todoList.childNodes);

  const choice = e.target.value;
  todos.forEach(function(todo) {
    console.log(todo.classList);
    ChoiseFilter(choice, todo);
  });
}
// functin
function deleteCheck(e) {
  let item = e.target;

  if (item.classList[0] === "trash-btn") {
    const tempTodo = item.parentElement;
    tempTodo.classList.add("fall");
    deleteFromLocalStorage(tempTodo);
    tempTodo.addEventListener("transitionend", (e) => {
      console.log("tranistioned ended");
      tempTodo.remove();
    });
  }

  if (item.classList[0] === "completed-btn") {
    const tempTodo = item.parentElement;
    tempTodo.classList.toggle("Completed");
  }

  const todos = Array.from(todoList.childNodes);
  todos.forEach(function(todo) {
    ChoiseFilter(filterOptions.value, todo);
  });
}
function addTodo(e) {
  // prevent from submitting
  e.preventDefault();

  // creating a wraper div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // creating li
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-item");

  if (todoInput.value == null || todoInput.value === "") {
    setMassage(false, "נא למלא ערך");
  }
  // הצלחנו להוסיף ערך
  else {
    setMassage(true, "ערך נוסף בהצלחה");
    todoLi.textContent = todoInput.value;
    pushToLocalStorage(todoInput.value);
    todoDiv.appendChild(todoLi);
    // clearing the input
    todoInput.value = "";
    todoInput.focus();
    // creating buttons
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    // a[[edninh to the main todo]]
    todoList.appendChild(todoDiv);
    const todos = Array.from(todoList.childNodes);
    todos.forEach(function(todo) {
      ChoiseFilter(filterOptions.value, todo);
    });
  }
}

function setMassage(status, massage) {
  let classlist;

  const massageElm = document.createElement("p");

  if (status === true) {
    classlist = "success";
  } else {
    classlist = "fail";
  }
  massageElm.classList.add(classlist);
  massageElm.textContent = massage;

  massageDiv.appendChild(massageElm);
  todoBtn.disabled = true;
  setTimeout(() => {
    massageElm.remove();
    todoBtn.disabled = false;
  }, 800);
}

// local storage shit

function pushToLocalStorage(todo) {
  // checking if threse an array in local storage
  let todos = checkLocalStorage();
  // now w  e can push the items to the todos
  todos.push(todo);
  //aving the array back to local storadge meaining its a string now
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkLocalStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    // parsing so we can push to it
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function loadLocalStorage() {
  let todos = checkLocalStorage();

  todos.forEach(function(todo) {
    // creating a wraper div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // creating li
    const todoLi = document.createElement("li");
    todoLi.classList.add("todo-item");
    todoLi.textContent = todo;
    todoDiv.appendChild(todoLi);
    // clearing the input
    todoInput.value = "";
    todoInput.focus();
    // creating buttons
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    // a[[edninh to the main todo]]
    todoList.appendChild(todoDiv);
  });
}

function deleteFromLocalStorage(todo) {
  let todos = checkLocalStorage();
  //getting the index of the item from local storage
  const todoIndex = todo.children[0].textContent;
  //deleting from splice
  todos.splice(todos.indexOf(todoIndex), 1);
  // now we need to stringfy it BACK to local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
function clearLocalStorage() {
  localStorage.clear();
}
