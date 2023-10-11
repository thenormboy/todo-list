import {todo} from './object.js'
import close from './icons/close.svg'
import edit from './icons/edit.svg'

let todoIndex = 0;

function displayTodo(project) {

    todoIndex = 0;

    const element = document.querySelector('.todo-container')
    element.textContent = ''

    project.getTodos().forEach(displayTodos)

    function displayTodos(value) {

        value.setID(todoIndex) 

        const todoSection = document.createElement('div')
        todoSection.setAttribute('id', 'todo-button')
        todoSection.classList.add(todoIndex)
        todoSection.textContent = value.getName()

        const iconContainer = document.createElement('div')
        iconContainer.classList.add('todo-icon-container')

        const todoDuedate = document.createElement('div')
        todoDuedate.setAttribute('id', 'todo-due-date')
        todoDuedate.textContent = value.getDuedate()

        const closeBtn = document.createElement('button')
        closeBtn.setAttribute('id', 'close-todo-btn')
        closeBtn.classList.add(value.getID())

        const editBtn = document.createElement('button')
        editBtn.setAttribute('id', 'edit-todo-btn')
        editBtn.classList.add(value.getID())

        const closeImg = document.createElement('img')
        closeImg.setAttribute('src', close)
        closeImg.classList.add('todo-icon-close')

        const editImg = document.createElement('img')
        editImg.setAttribute('src', edit)
        editImg.classList.add('todo-icon-edit')

        editBtn.appendChild(editImg)
        closeBtn.appendChild(closeImg)
        iconContainer.appendChild(todoDuedate)
        iconContainer.appendChild(editBtn)
        iconContainer.appendChild(closeBtn)
        todoSection.appendChild(iconContainer)
        element.appendChild(todoSection)

        todoIndex += 1;

    }

    loadTodoCloseBtns(project)

}

function loadTodoCloseBtns(project) {

    let todoArray = project.getTodos()

    const buttons = document.querySelectorAll('#close-todo-btn')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            todoArray.splice(todoArray.indexOf(selectTodoByID(buttons[i].classList[0], project)), 1)
            displayTodo(project)
        })
    }

}

function selectTodoByID(ID, project) {

    let selectedTodo = ''

    project.getTodos().forEach(selectTodo);

    function selectTodo(value) {
        if (value.getID() == ID) {
            selectedTodo = value
        }
    }
    return selectedTodo
}

function setupAddTodoButton(project) {
    let ID = project.getID()
    const element = document.querySelector('.btn-container')
    element.textContent = ''

    const addBtn = document.createElement('button')
    addBtn.setAttribute('id', 'add-todo-' + ID)
    addBtn.textContent = 'New Task'

    element.appendChild(addBtn)
}

function displayTodoModal(project) {

    setupAddTodoButton(project)

    let ID = project.getID()
    let currentTodo = todo()

    const addTodo = document.getElementById('add-todo-' + ID)
    const todoModal = document.getElementById('todo-modal')
    const todoName = document.getElementById('todo-name')
    const todoDesc = document.getElementById('todo-desc')
    const todoDuedate = document.getElementById('todo-duedate')
    const todoPriority = document.getElementById('todo-priority')
    const cancelBtn = document.getElementById('cancel-todo-btn')
    const confirmBtn = document.getElementById('confirm-todo-btn')

    addTodo.addEventListener('click', () => {
        todoModal.showModal()
    })

    confirmBtn.addEventListener('click', (event) => {
        event.stopImmediatePropagation()
        event.preventDefault();
        currentTodo.setName(todoName.value)
        currentTodo.setDescription(todoDesc.value)
        currentTodo.setDuedate(todoDuedate.value)
        currentTodo.setPriority(todoPriority.value)
        currentTodo.setID(todoIndex)
        console.log(project.getName())
        project.setTodo(currentTodo)
        todoName.value = ''
        todoDesc.value = ''
        todoDuedate.value = ''
        todoPriority.value = ''
        todoModal.close()
        displayTodo(project)
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault()
        todoName.value = ''
        todoDesc.value = ''
        todoDuedate.value = ''
        todoPriority.value = ''
        todoModal.close()
    })
}

export {
    displayTodo,
    displayTodoModal
}