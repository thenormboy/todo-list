import {createHeader} from './setup.js'

function clearPage() {
    const element = document.querySelector('#content')

    element.textContent = ''
}

function loadPage() {
    const element = document.querySelector('#content')

    element.appendChild(createHeader())
}

loadPage();