import './style.css'
import {displayHeading, displayProjects} from './setup'

function loadMainButtons() {

    const inbox = document.querySelector('#inbox')
    inbox.addEventListener('click', () => {
        displayHeading(inbox.textContent)
        displayProjects()
    })

    const today = document.querySelector('#today')
    today.addEventListener('click', () => {
        displayHeading(today.textContent)
    })

    const this_week = document.querySelector('#this-week')
    this_week.addEventListener('click', () => {
        displayHeading(this_week.textContent)
    })
}

loadMainButtons()
