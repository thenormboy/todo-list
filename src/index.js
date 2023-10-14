import './style.css'
import {displayHeading, displayProjects, displayProjectModal, displayInboxTodos, displayWeekInboxTodos} from './project'

function loadMainPage() {

    loadWeekInbox()
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

function loadWeekInbox() {
    displayWeekInboxTodos()
    const button = document.querySelector('#week-button');

    button.addEventListener('click', () => {
        displayHeading('This Week')
        displayWeekInboxTodos()
    })
}

loadMainPage()
