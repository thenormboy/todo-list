import './style.css'
import {displayHeading, displayProjects, displayProjectModal } from './project'
import { displayInboxTodos, displayTodayInboxTodos, displayWeekInboxTodos} from './inbox.js'

function loadMainPage() {

    loadTodayInbox()
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

function loadTodayInbox() {
    displayTodayInboxTodos()
    const button = document.querySelector('#today-button');

    button.addEventListener('click', () => {
        displayHeading('Today')
        displayTodayInboxTodos()
    })
}

loadMainPage()
