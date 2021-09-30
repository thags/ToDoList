//Stores the toDo objects and categories
let todos = [];
let projects = {
    "default":[],
}


const addToArray = function (msg, data){
    switch(msg){
        case 'toDoAdded':
            addToDotoProject(data.project, data);
            console.log(projects);
            break;
        case 'projectAdded':
            addToProject(data);
            console.log(data);
            break;
    }
}

const doesProjectExist = function(project){
    const keys = Object.keys(projects);
    if((keys.indexOf(project)) != -1){
        return true;
    }
    return false;
}

const addToProject = function(project){
    if (doesProjectExist(project) === true){
        return "Project already exists";
    } else {
        projects[project] = [];
    }
}

const addToDotoProject = function(project, todo){
    if (doesProjectExist(project) === false){
        addToProject(project);}

    projects[project].push(todo);

}

export default addToArray