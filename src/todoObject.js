import PubSub from 'pubsub-js';
import {currentDisplay} from "./todoCardsDOM.js";

let todos = [];

class toDoObject{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        todos.push(this);
        PubSub.publish("toDoCreated", todos);
    }

    display(){
        PubSub.publish("createToDodisplay", this);
    }

    delete(){
        for(let i = 0; i < todos.length; i++){
            if(todos[i] === this){
                todos.splice(i, 1);
            }
        }
        PubSub.publish("deletedToDo", todos);
        PubSub.publish("deleteToDodisplay", this);
    }

    fullDisplay(){
        PubSub.publish("fullDisplay", this);
    }
}

const createToDoFromUI = function(){
    const form = document.querySelector(".popUpToDoContainer");
    const title = form.querySelector(".toDoTitle").value;
    const description = form.querySelector(".toDoDescription").value;
    const dueDate = form.querySelector(".toDoDueDate").value;
    const priority = form.querySelector(".priority").value;
    const project = currentDisplay.classList[0];
    const newToDo = new toDoObject(title, description, dueDate, priority, project);
    newToDo.display();

}


export {toDoObject, createToDoFromUI};