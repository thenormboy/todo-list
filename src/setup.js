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

export {
    displayHeading,
    displayProjects
}