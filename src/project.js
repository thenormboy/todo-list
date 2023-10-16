import { project, todo } from './object.js'
import { displayTodo, displayTodoModal } from './todo.js'
import { sortDates, displayInboxTodos } from './inbox.js'
import close from './icons/close.svg'
import edit from './icons/edit.svg'

let projects = [];
let projectIndex = 0;
let currentID = 0;
//projects.push(project('Work', projectIndex, [todo('write', 'write a stuff', '2023-10-13', 'low'), todo('code', 'code a bunch', '2023-10-17', 'medium'), todo('nut', 'code a bunch', '2023-10-14', 'high'), todo('livr', 'code a bunch', '2023-10-15', 'low'),todo('tsrm', 'code a bunch', '2023-10-20', 'medium')]));
//projects.push(project('Gym', projectIndex, [todo('Run', 'go for a run', '2023-11-17', 'high'), todo('lift', 'lift the weights', '2023-10-18', 'low'), todo('kisf', 'code a bunch', '2023-10-19', 'medium'), todo('cvev', 'code a bunch', '2023-10-20', 'high'), todo('eert', 'code a bunch', '2023-10-21', 'low')]));
//projects.push(project('AAA', projectIndex, [todo('a', 'write a stuff', '2023-10-18', 'medium'), todo('aa', 'code a bunch', '2023-10-19', 'high'), todo('aaa', 'code a bunch', '2023-11-20', 'low'), todo('aaaa', 'code a bunch', '2023-10-21', 'medium'),todo('aaaaa', 'code a bunch', '2023-10-15', 'high')]));
//projects.push(project('SSS', projectIndex, [todo('s', 'go for a run', '2023-10-19', 'low'), todo('ss', 'lift the weights', '2022-11-20', 'medium'), todo('sss', 'code a bunch', '2023-10-21', 'high'), todo('ssss', 'code a bunch', '2023-10-14', 'low'), todo('sssss', 'code a bunch', '2023-10-23', 'medium')]));
//projects.push(project('DDD', projectIndex, [todo('d', 'write a stuff', '2023-10-20', 'high'), todo('dd', 'code a bunch', '2023-10-21', 'low'), todo('ddd', 'code a bunch', '2023-10-22', 'medium'), todo('dddd', 'code a bunch', '2023-11-23', 'high'),todo('ddddd', 'code a bunch', '2023-10-24', 'low')]));
//projects.push(project('FFF', projectIndex, [todo('f', 'go for a run', '2023-10-21', 'medium'), todo('ff', 'lift the weights', '2023-10-22', 'high'), todo('fff', 'code a bunch', '2023-10-23', 'low'), todo('ffff', 'code a bunch', '2023-10-24', 'medium'), todo('fffff', 'code a bunch', '2023-11-25', 'high')]));

function storeData() {

    localStorage.clear()
    let todoObj
    let projObj
    let projTodos = []
    let proj = []

    projects.forEach(convertProjectToString)

    function convertProjectToString(project) {
        projTodos = []
        project.getTodos().forEach(convertTodosToString)

        function convertTodosToString(value) {

            todoObj = {
                name: value.getName(),
                description: value.getDescription(),
                duedate: value.getDuedate(),
                priority: value.getPriority(),
                ID: value.getID()
            }
            projTodos.push(todoObj)
        }

        projObj = {
            name: project.getName(),
            ID: project.getID(),
            todos: projTodos
        }
        proj.push(projObj)
    }

    proj = JSON.stringify(proj)
    localStorage.setItem('projectList', proj)
}

function getData() {

    projects = []

    let currentProject
    let currentTodo

    let proj_deserial = JSON.parse(localStorage.getItem('projectList'))

    proj_deserial.forEach(createProject)

    function createProject(newProject) {

        currentProject = project(newProject.name, newProject.ID, [])
        
        newProject.todos.forEach(createTodos)

        function createTodos(value) {
            currentTodo = todo(value.name, value.description, value.duedate, value.priority, value.ID)
            currentProject.setTodo(currentTodo)
        }

        projects.push(currentProject)
    }
}

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
        sortDates(value)

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
            displayTodoModal(selectProjectByID(buttons[i].classList[0]))
        })
    }
}

function loadProjectCloseBtns() {

    const buttons = document.querySelectorAll('#close-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (event) => {
            event.stopPropagation()
            projects.splice(projects.indexOf(selectProjectByID(buttons[i].classList[0])), 1)
            storeData()
            displayProjects()
            displayHeading('Inbox')
            displayInboxTodos()
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
        buttons[i].addEventListener('click', (event) => {
            event.stopPropagation()
            editProjectModal.showModal()
            currentID = buttons[i].classList[0]
        })
    }

    confirmBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        event.preventDefault()
        selectProjectByID(currentID).setName(editProjectName.value)
        editProjectName.value = ''
        editProjectModal.close();
        displayProjects()
        displayHeading(selectProjectByID(currentID).getName())
        storeData()
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
        storeData()
        displayProjects()
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        projectName.value = ''
        projectModal.close()
    })
}


export {
    displayHeading,
    displayProjects,
    displayProjectModal,
    getData,
    storeData,
    projects
}