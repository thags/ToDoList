//Stores the toDo objects and categories
let projects = {
    "default":[],
}

//from PUBSUB add a project or a TODO object to a project list
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

//checks to see if project already exists as a key in projects
const doesProjectExist = function(project){
    if((getProjects().indexOf(project)) != -1){
        return true;
    }
    return false;
}

//Add a project, makes sure there is not a duplicate project first
const addToProject = function(project){
    if (doesProjectExist(project) === true){
        return "Project already exists";
    } else {
        projects[project] = [];
    }
}

//adds a TODO object to the correct project category
const addToDotoProject = function(project, todo){
    if (doesProjectExist(project) === false){
        addToProject(project);}

    projects[project].push(todo);

}

//just return an array of all the projects listed as Keys in the projects array
const getProjects = function(){
    const x = [...Object.keys(projects)];
    return x;
}

const gettodoItems = function(project){
    return projects[project];
}

export {addToArray, getProjects, gettodoItems};