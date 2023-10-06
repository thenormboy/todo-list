import {project} from './todo.js'
import close from './icons/close.svg'
import edit from './icons/edit.svg'

let projects = [];
let projectIndex = 0;
projects.push(project('Work', projectIndex));
projects.push(project('Gym', projectIndex));

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
        projectIndex += 1;

        const projectButton = document.createElement('div')
        projectButton.setAttribute('id', 'project-button')
        projectButton.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('icon-container')

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-project-btn')
        closeBtn.classList.add(value.getID())
        const editBtn = document.createElement('button')

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
    }

    loadProjectButtons()
    loadProjectCloseBtns()
}

function loadProjectButtons() {

    const buttons = document.querySelectorAll('#project-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
        })
    }
}

function loadProjectCloseBtns() {

    const buttons = document.querySelectorAll('#close-project-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            projects.splice(projects.indexOf(selectProjectByID(buttons[i].classList[0]), 1))
            displayProjects()
        })
    }
    
}

function selectProjectByID(ID) {

    projects.forEach(selectProject);

    function selectProject(value) {
        if (value.getID() == ID) {
            return value;
        }
    }
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
        projects.push(project(projectName.value))
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

export {
    displayHeading,
    displayProjects,
    displayProjectModal
}