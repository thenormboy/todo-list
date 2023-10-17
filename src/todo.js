import { todo } from "./object.js";
import { storeData } from "./project.js";
import { intlFormat } from "date-fns";
import close from "./icons/close.svg";
import edit from "./icons/edit.svg";

let todoIndex = 0;

function displayTodo(project) {
  todoIndex = 0;

  const element = document.querySelector(".todo-container");
  element.textContent = "";

  project.getTodos().forEach(displayTodos);

  function displayTodos(value) {
    value.setID(todoIndex);

    const todoSection = document.createElement("div");
    todoSection.setAttribute("id", "todo-button");
    todoSection.classList.add(todoIndex);
    todoSection.textContent = value.getName();

    todoSection.classList.remove("todo-button-low");
    todoSection.classList.remove("todo-button-medium");
    todoSection.classList.remove("todo-button-high");

    todoSection.classList.add(setTodoPriority(value));

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("todo-icon-container");

    const todoDuedate = document.createElement("div");
    todoDuedate.setAttribute("id", "todo-due-date");
    todoDuedate.textContent = intlFormat(new Date(value.getDuedate()), {
      timeZone: "UTC",
    });

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("id", "close-todo-btn");
    closeBtn.classList.add(value.getID());
    closeBtn.classList.add("close-todo-btn");

    const editBtn = document.createElement("button");
    editBtn.setAttribute(
      "id",
      "edit-todo-btn-" + value.getID() + " " + project.getName(),
    );
    editBtn.classList.add(value.getID());
    editBtn.classList.add("edit-todo-btn");

    const closeImg = document.createElement("img");
    closeImg.setAttribute("src", close);
    closeImg.classList.add("todo-icon-close");

    const editImg = document.createElement("img");
    editImg.setAttribute("src", edit);
    editImg.classList.add("todo-icon-edit");

    editBtn.appendChild(editImg);
    closeBtn.appendChild(closeImg);
    iconContainer.appendChild(todoDuedate);
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(closeBtn);
    todoSection.appendChild(iconContainer);
    element.appendChild(todoSection);

    todoIndex += 1;
  }

  loadTodoCloseBtns(project);
  loadTodoEditBtns(project);
}

function loadTodoCloseBtns(project) {
  let todoArray = project.getTodos();

  const buttons = document.querySelectorAll("#close-todo-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      todoArray.splice(
        todoArray.indexOf(selectTodoByID(buttons[i].classList[0], project)),
        1,
      );
      storeData();
      displayTodo(project);
    });
  }
}

function loadTodoEditBtns(project) {
  let todoArray = project.getTodos();
  todoArray.forEach(setupModalButtons);

  function setupModalButtons(value) {
    let ID = value.getID();
    let currentTodo = selectTodoByID(ID, project);

    const button = document.getElementById(
      "edit-todo-btn-" + ID + " " + project.getName(),
    );
    const editTodoModal = document.getElementById("edit-todo-modal");
    const editTodoName = document.getElementById("edit-todo-name");
    const editTodoDesc = document.getElementById("edit-todo-desc");
    const editTodoDuedate = document.getElementById("edit-todo-duedate");
    const editTodoPriority = document.getElementById("edit-todo-priority");

    button.addEventListener("click", () => {
      editTodoModal.showModal();
      const element = document.querySelector(".edit-todo-dialog-btns");
      element.textContent = "";

      const cancelBtn = document.createElement("button");
      cancelBtn.setAttribute(
        "id",
        "cancel-edit-todo-btn-" + ID + " " + project.getName(),
      );
      cancelBtn.textContent = "Cancel";

      const confirmBtn = document.createElement("button");
      confirmBtn.setAttribute(
        "id",
        "confirm-edit-todo-btn-" + ID + " " + project.getName(),
      );
      confirmBtn.setAttribute("value", "default");
      confirmBtn.textContent = "Confirm";

      element.appendChild(cancelBtn);
      element.appendChild(confirmBtn);

      const modalCancelBtn = document.getElementById(
        "cancel-edit-todo-btn-" + ID + " " + project.getName(),
      );
      const modalConfirmBtn = document.getElementById(
        "confirm-edit-todo-btn-" + ID + " " + project.getName(),
      );

      modalCancelBtn.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();
        editTodoName.value = "";
        editTodoDesc.value = "";
        editTodoDuedate.value = "";
        editTodoPriority.value = "";
        editTodoModal.close();
      });

      modalConfirmBtn.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        event.preventDefault();
        currentTodo.setName(editTodoName.value);
        currentTodo.setDescription(editTodoDesc.value);
        currentTodo.setDuedate(editTodoDuedate.value);
        currentTodo.setPriority(editTodoPriority.value);
        editTodoName.value = "";
        editTodoDesc.value = "";
        editTodoDuedate.value = "";
        editTodoPriority.value = "";
        editTodoModal.close();
        storeData();
        displayTodo(project);
      });
    });
  }
}

function selectTodoByID(ID, project) {
  let selectedTodo = "";

  project.getTodos().forEach(selectTodo);

  function selectTodo(value) {
    if (value.getID() == ID) {
      selectedTodo = value;
    }
  }
  return selectedTodo;
}

function setupAddTodoButton(project) {
  let ID = project.getID();
  const element = document.querySelector(".btn-container");
  element.textContent = "";

  const addBtn = document.createElement("button");
  addBtn.setAttribute("id", "add-todo-" + ID);
  addBtn.textContent = "New Task";

  element.appendChild(addBtn);
}

function setupAddTodoModal(project) {
  let ID = project.getID();
  const element = document.querySelector(".todo-dialog-btns");
  element.textContent = "";

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("id", "cancel-todo-btn-" + ID);
  cancelBtn.textContent = "Cancel";

  const confirmBtn = document.createElement("button");
  confirmBtn.setAttribute("id", "confirm-todo-btn-" + ID);
  confirmBtn.setAttribute("value", "default");
  confirmBtn.textContent = "Confirm";

  element.appendChild(cancelBtn);
  element.appendChild(confirmBtn);
}

function displayTodoModal(project) {
  let ID = project.getID();
  let currentTodo = todo();
  setupAddTodoButton(project);

  const addTodo = document.getElementById("add-todo-" + ID);
  const todoModal = document.getElementById("todo-modal");
  const todoName = document.getElementById("todo-name");
  const todoDesc = document.getElementById("todo-desc");
  const todoDuedate = document.getElementById("todo-duedate");
  const todoPriority = document.getElementById("todo-priority");

  addTodo.addEventListener("click", () => {
    todoModal.showModal();
    setupAddTodoModal(project);
    const cancelBtn = document.getElementById("cancel-todo-btn-" + ID);
    const confirmBtn = document.getElementById("confirm-todo-btn-" + ID);

    confirmBtn.addEventListener("click", (event) => {
      event.preventDefault();
      currentTodo.setName(todoName.value);
      currentTodo.setDescription(todoDesc.value);
      currentTodo.setDuedate(todoDuedate.value);
      currentTodo.setPriority(todoPriority.value);
      currentTodo.setID(todoIndex);
      project.setTodo(currentTodo);
      currentTodo = todo();
      todoName.value = "";
      todoDesc.value = "";
      todoDuedate.value = "";
      todoPriority.value = "";
      todoModal.close();
      storeData();
      displayTodo(project);
    });

    cancelBtn.addEventListener("click", (event) => {
      event.preventDefault();
      todoName.value = "";
      todoDesc.value = "";
      todoDuedate.value = "";
      todoPriority.value = "";
      todoModal.close();
    });
  });
}

function setTodoPriority(todo) {
  let priority = todo.getPriority();

  if (priority == "low") {
    return "todo-button-low";
  } else if (priority == "medium") {
    return "todo-button-medium";
  } else {
    return "todo-button-high";
  }
}

export { displayTodo, displayTodoModal };
