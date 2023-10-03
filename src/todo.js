const project = (name) => {
    const getName = () => name;
    
    return { getName }
}

export {
    project
}