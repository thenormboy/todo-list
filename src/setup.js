import {project, todo} from './todo.js'
import close from './icons/close.svg'
import edit from './icons/edit.svg'

let projects = [];
let projectIndex = 0;
let todoIndex = 0;
let currentID = 0;
projects.push(project('Work', projectIndex, [todo('write', 'write a stuff', '56/56/5656'), todo('code', 'code a bunch', '78/78/7878')]));
projects.push(project('Gym', projectIndex, [todo('Run', 'go for a run', '9/19/1919'), todo('lift', 'lift the weights', '23/23/2323')]));

function displayHeading(title) {
    const element = document.querySelector('.main-heading')
    element.textContent = title
}

function displayProjects() {

    projectIndex = 0;

    const element = document.querySelector('.project-container')
    element.textContent = ''

    projects.forEach(displayProject);

    function displayProject(value) {

        value.setID(projectIndex)

        const projectButton = document.createElement('div')
        projectButton.setAttribute('id', 'project-button')
        projectButton.classList.add(projectIndex)
        projectButton.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('icon-container')

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-project-btn')
        closeBtn.classList.add(value.getID())

        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'edit-project-btn')
        editBtn.classList.add(value.getID())

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', close)
        closeImg.classList.add('project-icon-close')

        const editImg = document.createElement('img')
        editImg.setAttribute('src', edit)
        editImg.classList.add('project-icon-edit')

        editBtn.appendChild(editImg)
        closeBtn.appendChild(closeImg)
        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(closeBtn)
        projectButton.appendChild(iconContainer)
        element.appendChild(projectButton)

        projectIndex += 1;
    }

    loadProjectInfo()
    loadProjectCloseBtns()
    loadProjectEditBtns();
}

function loadProjectInfo() {

    const buttons = document.querySelectorAll('#project-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            displayHeading(buttons[i].textContent)
            displayTodo(selectProjectByID(buttons[i].classList[0]))
            setupAddTodoButton(selectProjectByID(buttons[i].classList[0]))
            //console.log(selectProjectByID(buttons[i].classList[0]).getName())
            displayTodoModal(selectProjectByID(buttons[i].classList[0]))
            displayProjects()
        })
    }
}

function loadProjectCloseBtns() {

    const buttons = document.querySelectorAll('#close-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            projects.splice(projects.indexOf(selectProjectByID(buttons[i].classList[0])), 1)
            displayProjects()
        })
    }
    
}

function loadProjectEditBtns() {

    const buttons = document.querySelectorAll('#edit-project-btn')
    const editProjectModal = document.getElementById('edit-project-modal')
    const editProjectName = document.getElementById('edit-project-name')
    const cancelBtn = document.getElementById('cancel-edit-project-btn')
    const confirmBtn = document.getElementById('confirm-edit-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            editProjectModal.showModal()
            currentID = buttons[i].classList[0]
        })
    }

    confirmBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        selectProjectByID(currentID).setName(editProjectName.value)
        editProjectName.value = ''
        editProjectModal.close();
        displayProjects()
    })

    cancelBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault()
        editProjectName.value = ''
        editProjectModal.close()
    })
}

function selectProjectByID(ID) {

    let selectedProject = ''

    projects.forEach(selectProject);

    function selectProject(value) {
        if (value.getID() == ID) {
            selectedProject = value
        }
    }

    return selectedProject
}

function displayProjectModal() {

    const addProject = document.getElementById('add-project')
    const projectModal = document.getElementById('project-modal')
    const projectName = document.getElementById('projectName')
    const cancelBtn = document.getElementById('cancelProjectBtn')
    const confirmBtn = document.getElementById('confirmProjectBtn')

    addProject.addEventListener('click', () => {
        projectModal.showModal()
    })

    confirmBtn.addEventListener('click', (event) => {
        event.preventDefault();
        projects.push(project(projectName.value, projectIndex, []))
        projectName.value = ''
        projectModal.close()
        displayProjects()
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        projectName.value = ''
        projectModal.close()
    })
}

function displayTodo(project) {

    todoIndex = 0;

    const element = document.querySelector('.todo-container')
    element.textContent = ''

    project.getTodos().forEach(displayTodos)

    function displayTodos(value) {

        value.setID(todoIndex) 

        const todoSection = document.createElement('div')
        todoSection.setAttribute('id', 'todo-button')
        todoSection.classList.add(todoIndex)
        todoSection.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('todo-icon-container')

        const todoDuedate = document.createElement('div')
        todoDuedate.setAttribute('id', 'todo-due-date')
        todoDuedate.textContent = value.getDuedate()

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-todo-btn')
        closeBtn.classList.add(value.getID())

        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'edit-todo-btn')
        editBtn.classList.add(value.getID())

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', close)
        closeImg.classList.add('todo-icon-close')

        const editImg = document.createElement('img')
        editImg.setAttribute('src', edit)
        editImg.classList.add('todo-icon-edit')

        editBtn.appendChild(editImg)
        closeBtn.appendChild(closeImg)
        iconContainer.appendChild(todoDuedate)
        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(closeBtn)
        todoSection.appendChild(iconContainer)
        element.appendChild(todoSection)

        todoIndex += 1;

    }

    loadTodoCloseBtns(project)

}

function loadTodoCloseBtns(project) {

    let todoArray = project.getTodos()

    const buttons = document.querySelectorAll('#close-todo-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            todoArray.splice(todoArray.indexOf(selectTodoByID(buttons[i].classList[0], project)), 1)
            displayTodo(project)
        })
    }

}

function selectTodoByID(ID, project) {

    let selectedTodo = ''

    project.getTodos().forEach(selectTodo);

    function selectTodo(value) {
        if (value.getID() == ID) {
            selectedTodo = value
        }
    }
    return selectedTodo
}

function setupAddTodoButton(project) {
    let ID = project.getID()
    const element = document.querySelector('.btn-container')
    element.textContent = ''

    const addBtn = document.createElement('button')
    addBtn.setAttribute('id', 'add-todo-' + ID)
    addBtn.textContent = 'New Task'

    element.appendChild(addBtn)
}

function displayTodoModal(project) {

    let ID = project.getID()
    let currentTodo = todo()

    const addTodo = document.getElementById('add-todo-' + ID)
    const todoModal = document.getElementById('todo-modal')
    const todoName = document.getElementById('todo-name')
    const todoDesc = document.getElementById('todo-desc')
    const todoDuedate = document.getElementById('todo-duedate')
    const todoPriority = document.getElementById('todo-priority')
    const cancelBtn = document.getElementById('cancel-todo-btn')
    const confirmBtn = document.getElementById('confirm-todo-btn')

    addTodo.addEventListener('click', () => {
        todoModal.showModal()
    })

    confirmBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault();
        currentTodo.setName(todoName.value)
        currentTodo.setDescription(todoDesc.value)
        currentTodo.setDuedate(todoDuedate.value)
        currentTodo.setPriority(todoPriority.value)
        currentTodo.setID(todoIndex)
        console.log(project.getName())
        project.setTodo(currentTodo)
        todoName.value = ''
        todoDesc.value = ''
        todoDuedate.value = ''
        todoPriority.value = ''
        todoModal.close()
        displayTodo(project)
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        todoName.value = ''
        todoDesc.value = ''
        todoDuedate.value = ''
        todoPriority.value = ''
        todoModal.close()
    })
}

export {
    displayHeading,
    displayProjects,
    displayProjectModal,
}