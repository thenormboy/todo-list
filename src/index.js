import './style.css'
import {displayHeading, displayProjects, displayProjectModal} from './project'

function loadMainPage() {

    displayProjects()
    displayProjectModal()

    const buttons = document.querySelectorAll('#sidebar-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
            displayProjects()
        })
    }
}

loadMainPage()
