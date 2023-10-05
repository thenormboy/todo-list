import {project} from './todo.js'
import close from './icons/close.svg'

let projects = [];
let projectIndex = 0;
projects.push(project('Work', projectIndex));
projectIndex += 1;
projects.push(project('Gym', projectIndex));
projectIndex += 1;

function displayHeading(title) {
    const element = document.querySelector('.main-heading')
    element.textContent = title
}

function displayProjects() {

    const element = document.querySelector('.project-container')
    element.textContent = ''

    projects.forEach(displayProject);

    function displayProject(value) {
        const projectButton = document.createElement('div')
        projectButton.setAttribute('id', 'project-button')
        projectButton.textContent = value.getName()

        const closeBtn = document.createElement('button')

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', close)
        closeImg.classList.add('project-icon')
        closeBtn.appendChild(closeImg)

        projectButton.appendChild(closeBtn)

        element.appendChild(projectButton)
    }

    loadProjectButtons()
}

function loadProjectButtons() {

    const buttons = document.querySelectorAll('#project-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
        })
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