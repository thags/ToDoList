import PubSub from 'pubsub-js';
import projects from './projects.js';
import {toDoObject} from './todoObject.js';

const checkStorage = function(){
    const loadedToDos = checkToDo();
    const loadedProjects = checkProject();
    if(loadedProjects != null){
        loadedProjects.map(function(ele){
            new projects(ele);
        })
    } else {
        new projects("default");
    }

    if(loadedToDos != null || loadedToDos.length != 0){
        loadedToDos.map(function(ele){
            console.log(ele);
            let newItem = new toDoObject(ele.title, ele.description, ele.dueDate, ele.priority, ele.project);
            newItem.display();
        })
    } else {
        let item1 = new toDoObject("Make this project", "the odin project", "Soon", "1", "default");
        item1.display();
        let item2 = new toDoObject("test", "the odin project", "Soon", "1", "test");
        item2.display();
    }
}

const checkToDo = function(){
    return JSON.parse(localStorage.getItem("todos"));
}

const checkProject = function(){
    return JSON.parse(localStorage.getItem("projects"));
}

export default checkStorage;