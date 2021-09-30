//Stores the toDo objects and categories
let todos = [];
let projects = {
    "default":[],
}


const addToArray = function (msg, data){
    switch(msg){
        case 'toDoAdded':
            const project = data.project;
            projects[project].push(data);
            console.log(projects);
            break;
        case 'projectAdded':
            projects[data] = [];
            console.log(data);
            break;
    }
}

const doesProjectExist = function(project){

}

export default addToArray