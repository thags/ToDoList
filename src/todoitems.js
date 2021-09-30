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

export default todoObject