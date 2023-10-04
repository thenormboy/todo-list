import './style.css'
import {displayHeading, displayProjects} from './setup'

function loadMainButtons() {

    displayProjects()
    loadProjectButtons()

    const buttons = document.querySelectorAll('#sidebar-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
            displayProjects()
            loadProjectButtons()
        })
    }
}

function loadProjectButtons() {

    const buttons = document.querySelectorAll('#project-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
        })
    }
}

loadMainButtons()
