


const addToDoLocalStorage = function(msg, todoList){
    localStorage.setItem("todos", JSON.stringify(todoList))
};

const addProjectLocalStorage = function(msg, projectList){
    localStorage.setItem("projects", JSON.stringify(projectList))
}

export {addToDoLocalStorage, addProjectLocalStorage};