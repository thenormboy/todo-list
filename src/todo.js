const project = (name, ID, todos) => {
    const getName = () => name;
    const getID = () => ID
    const getTodos = () => todos

    const setName = newName => {
        name = newName;
    }

    const setID = newID => {
        ID = newID;
    }
    
    return { getName, getID, getTodos, setName, setID }
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