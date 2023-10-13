import {project, inbox, todo} from './object.js'
import {displayTodo, displayTodoModal} from './todo.js'
import close from './icons/close.svg'
import edit from './icons/edit.svg'

let projects = [];
let projectIndex = 0;
let currentID = 0;
let inboxTodos = inbox([])
projects.push(project('Work', projectIndex, [todo('write', 'write a stuff', '56/56/5656'), todo('code', 'code a bunch', '78/78/7878'), todo('nut', 'code a bunch', 'not'), todo('livr', 'code a bunch', 'goyf'),todo('tsrm', 'code a bunch', 'fere')]));
projects.push(project('Gym', projectIndex, [todo('Run', 'go for a run', '9/19/1919'), todo('lift', 'lift the weights', '23/23/2323'), todo('kisf', 'code a bunch', 'rsfr'), todo('cvev', 'code a bunch', 'hhhht'), todo('eert', 'code a bunch', 'bbob')]));
projects.push(project('AAA', projectIndex, [todo('a', 'write a stuff', 'a'), todo('aa', 'code a bunch', 'aa'), todo('aaa', 'code a bunch', 'aaa'), todo('aaaa', 'code a bunch', 'aaaa'),todo('aaaaa', 'code a bunch', 'aaaaa')]));
projects.push(project('SSS', projectIndex, [todo('s', 'go for a run', 's'), todo('ss', 'lift the weights', 'ss'), todo('sss', 'code a bunch', 'sss'), todo('ssss', 'code a bunch', 'ssss'), todo('sssss', 'code a bunch', 'sssss')]));
projects.push(project('DDD', projectIndex, [todo('d', 'write a stuff', 'd'), todo('dd', 'code a bunch', 'dd'), todo('ddd', 'code a bunch', 'ddd'), todo('dddd', 'code a bunch', 'dddd'),todo('ddddd', 'code a bunch', 'ddddd')]));
projects.push(project('FFF', projectIndex, [todo('f', 'go for a run', 'f'), todo('ff', 'lift the weights', 'ff'), todo('fff', 'code a bunch', 'fff'), todo('ffff', 'code a bunch', 'ffff'), todo('fffff', 'code a bunch', 'fffff')]));

function displayInboxTodos() {
    addTodosToInbox()
    displayTodo(inboxTodos)
    inboxTodos = inbox([])
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

function addTodosToInbox() {
    projects.forEach(getProject)
    function getProject(project) {

        project.getTodos().forEach(getTodo)
        function getTodo(todo) {
            inboxTodos.setTodo(todo)
        }
    }
}

export {
    displayHeading,
    displayProjects,
    displayProjectModal,
    displayInboxTodos
}