import './style.css'
import {displayHeading, displayProjects} from './setup'

function loadMainButtons() {

    const buttons = document.querySelectorAll('#sidebar-button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            displayHeading(buttons[i].textContent)
            displayProjects()
        })
    }
}

loadMainButtons()
