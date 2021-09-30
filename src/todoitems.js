class todoObject {
    constructor(title, description, dueDate, priority, status){
        this.title = title;
        this.description= description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        console.log(this);
    }
}

export default todoObject