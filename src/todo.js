const project = (name, ID, todos) => {
    const getName = () => name;
    const getID = () => ID
    const getTodos = () => todos

    const updateName = newName => {
        name = newName;
    }

    return { getName, getID, getTodos, updateName }
}

const todo = (name, description, duedate, priority) => {
    const getName = () => name;
    const getDescription = () => description;
    const getDuedate = () => duedate;
    const getPriority = () => priority;

    return { getName, getDescription, getDuedate, getPriority}

}

export {
    project
}