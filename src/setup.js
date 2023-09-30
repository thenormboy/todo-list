function createHeader() {
    const element = document.createElement('div')
    element.classList.add('header')

    const logo = document.createElement('p')

    logo.classList.add('logo_header')

    logo.textContent = 'TODO'

    element.appendChild(logo)

    return element
}

export {
    createHeader
}