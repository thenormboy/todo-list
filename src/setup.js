import {project} from './todo.js'

let projects = [];
projects.push(project('Work'));
projects.push(project('Gym'));

function displayHeading(title) {
    const element = document.querySelector('.main-heading')
    element.textContent = title
}

function displayProjects() {

    const element = document.querySelector('.project-container')
    element.textContent = ''

    projects.forEach(displayProject);

    function displayProject(value) {
        const projectButton = document.createElement('button')
        projectButton.setAttribute('id', 'project-button')
        projectButton.textContent = value.getName()
        element.appendChild(projectButton)
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