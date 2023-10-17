import { project, todo } from "./object.js";
import { displayTodo, displayTodoModal } from "./todo.js";
import { sortDates, displayInboxTodos } from "./inbox.js";
import close from "./icons/close.svg";
import edit from "./icons/edit.svg";

let projects = [];
let projectIndex = 0;
let currentID = 0;

function storeData() {
  localStorage.clear();
  let todoObj;
  let projObj;
  let projTodos = [];
  let proj = [];

  projects.forEach(convertProjectToString);

  function convertProjectToString(project) {
    projTodos = [];
    project.getTodos().forEach(convertTodosToString);

    function convertTodosToString(value) {
      todoObj = {
        name: value.getName(),
        description: value.getDescription(),
        duedate: value.getDuedate(),
        priority: value.getPriority(),
        ID: value.getID(),
      };
      projTodos.push(todoObj);
    }

    projObj = {
      name: project.getName(),
      ID: project.getID(),
      todos: projTodos,
    };
    proj.push(projObj);
  }

  proj = JSON.stringify(proj);
  localStorage.setItem("projectList", proj);
}

function getData() {
  projects = [];

  let currentProject;
  let currentTodo;
  let proj_deserial;

  if (localStorage.getItem("projectList") === null) {
    proj_deserial = [
      {
        name: "Work",
        ID: 0,
        todos: [
          {
            name: "Code",
            description: "code a bunch",
            duedate: "2023-10-17",
            priority: "low",
            ID: 0,
          },
          {
            name: "Write",
            description: "write a bunch",
            duedate: "2023-10-14",
            priority: "medium",
            ID: 1,
          },
        ],
      },
      {
        name: "Gym",
        ID: 1,
        todos: [
          {
            name: "Lift",
            description: "lift the weights",
            duedate: "2023-10-20",
            priority: "low",
            ID: 0,
          },
          {
            name: "Run",
            description: "go for a run",
            duedate: "2023-11-17",
            priority: "high",
            ID: 2,
          },
        ],
      },
    ];
  } else {
    proj_deserial = JSON.parse(localStorage.getItem("projectList"));
  }

  proj_deserial.forEach(createProject);

  function createProject(newProject) {
    currentProject = project(newProject.name, newProject.ID, []);

    newProject.todos.forEach(createTodos);

    function createTodos(value) {
      currentTodo = todo(
        value.name,
        value.description,
        value.duedate,
        value.priority,
        value.ID,
      );
      currentProject.setTodo(currentTodo);
    }

    projects.push(currentProject);
  }
}

function displayHeading(title) {
  const element = document.querySelector(".main-heading");
  element.textContent = title;
}

function displayProjects() {
  projectIndex = 0;

  const element = document.querySelector(".project-container");
  element.textContent = "";

  projects.forEach(displayProject);

  function displayProject(value) {
    value.setID(projectIndex);
    sortDates(value);

    const projectButton = document.createElement("div");
    projectButton.setAttribute("id", "project-button");
    projectButton.classList.add(projectIndex);
    projectButton.textContent = value.getName();

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("id", "close-project-btn");
    closeBtn.classList.add(value.getID());

    const editBtn = document.createElement("button");
    editBtn.setAttribute("id", "edit-project-btn");
    editBtn.classList.add(value.getID());

    const closeImg = document.createElement("img");
    closeImg.setAttribute("src", close);
    closeImg.classList.add("project-icon-close");

    const editImg = document.createElement("img");
    editImg.setAttribute("src", edit);
    editImg.classList.add("project-icon-edit");

    editBtn.appendChild(editImg);
    closeBtn.appendChild(closeImg);
    iconContainer.appendChild(editBtn);
    iconContainer.appendChild(closeBtn);
    projectButton.appendChild(iconContainer);
    element.appendChild(projectButton);

    projectIndex += 1;
  }

  loadProjectInfo();
  loadProjectCloseBtns();
  loadProjectEditBtns();
}

function loadProjectInfo() {
  const buttons = document.querySelectorAll("#project-button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      displayHeading(buttons[i].textContent);
      displayTodo(selectProjectByID(buttons[i].classList[0]));
      displayTodoModal(selectProjectByID(buttons[i].classList[0]));
    });
  }
}

function loadProjectCloseBtns() {
  const buttons = document.querySelectorAll("#close-project-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      event.stopPropagation();
      projects.splice(
        projects.indexOf(selectProjectByID(buttons[i].classList[0])),
        1,
      );
      storeData();
      displayProjects();
      displayHeading("Inbox");
      displayInboxTodos();
    });
  }
}

function loadProjectEditBtns() {
  const buttons = document.querySelectorAll("#edit-project-btn");
  const editProjectModal = document.getElementById("edit-project-modal");
  const editProjectName = document.getElementById("edit-project-name");
  const cancelBtn = document.getElementById("cancel-edit-project-btn");
  const confirmBtn = document.getElementById("confirm-edit-project-btn");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      event.stopPropagation();
      editProjectModal.showModal();
      currentID = buttons[i].classList[0];
    });
  }

  confirmBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    selectProjectByID(currentID).setName(editProjectName.value);
    editProjectName.value = "";
    editProjectModal.close();
    displayProjects();
    displayHeading(selectProjectByID(currentID).getName());
    storeData();
  });

  cancelBtn.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    editProjectName.value = "";
    editProjectModal.close();
  });
}

function selectProjectByID(ID) {
  let selectedProject = "";

  projects.forEach(selectProject);

  function selectProject(value) {
    if (value.getID() == ID) {
      selectedProject = value;
    }
  }

  return selectedProject;
}

function displayProjectModal() {
  const addProject = document.getElementById("add-project");
  const projectModal = document.getElementById("project-modal");
  const projectName = document.getElementById("projectName");
  const cancelBtn = document.getElementById("cancelProjectBtn");
  const confirmBtn = document.getElementById("confirmProjectBtn");

  addProject.addEventListener("click", () => {
    projectModal.showModal();
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    projects.push(project(projectName.value, projectIndex, []));
    projectName.value = "";
    projectModal.close();
    storeData();
    displayProjects();
  });

  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    projectName.value = "";
    projectModal.close();
  });
}

export {
  displayHeading,
  displayProjects,
  displayProjectModal,
  getData,
  storeData,
  projects,
};
