import './style.css'
import {displayHeading, displayProjects, displayProjectModal, displayInboxTodos} from './project'

function loadMainPage() {

    loadInbox()

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

function loadInbox() {

    displayInboxTodos()
    const button = document.querySelector('#inbox-button');

    button.addEventListener('click', () => {
        displayHeading('Inbox')
        displayInboxTodos()
    })
}

loadMainPage()
