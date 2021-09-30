import PubSub from 'pubsub-js';

class todoObject {
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        PubSub.publish('toDoAdded', this);
    }
}

export default todoObject