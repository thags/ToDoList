import PubSub from 'pubsub-js';

class toDoObject{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    display(){
        PubSub.publish("createToDodisplay", this);
    }

    delete(){
        PubSub.publish("deleteToDodisplay", this);
    }
}



export {toDoObject};