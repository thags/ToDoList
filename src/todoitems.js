import PubSub from 'pubsub-js';

class todoObject {
    constructor(title, description, dueDate, priority, status, project){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project;
        PubSub.publish('toDoAdded', this);
    }
}

const addToDoFromUI = function(){
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const dueDate = document.querySelector("#dueDate").value;
        const priority = document.querySelector("#priority").value;
        const status = document.querySelector("#Status").value;
        const project = document.querySelector("#project").value;
        new todoObject(title, description, dueDate, priority, status, project);
};

export {todoObject, addToDoFromUI};