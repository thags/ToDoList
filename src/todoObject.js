class toDoObject{
    constructor(title, description, dueDate, priority, project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }

    display(){
        //create needed elements
        const containerItem = document.querySelector('#todoCards');
        const newCard = document.createElement("div");
        const titleEle = document.createElement('div');
        const dueDateEle = document.createElement('div');
        const title = this.title;
        const cardControl = document.createElement('div');
        const deleteCard = document.createElement('div');

        //assign text
        titleEle.innerText = title;
        dueDateEle.innerText = this.dueDate;
        deleteCard.innerText = "x";

        newCard.id = `${title}`;
        newCard.classList.add("todoCard");
        //newCard.classList.add(title);
        titleEle.classList.add("title");
        dueDateEle.classList.add("dueDate");

        containerItem.appendChild(newCard);
        newCard.appendChild(titleEle);
        newCard.appendChild(dueDateEle);
    }

    delete(){
        const itemCardParent = document.querySelector('#todoCards');
        const itemCard = document.querySelector(`#${this.title}`);
        while(itemCard.lastChild){
            itemCard.removeChild(itemCard.lastChild);
        }
        itemCardParent.removeChild(itemCard);
    }
}



export {toDoObject};