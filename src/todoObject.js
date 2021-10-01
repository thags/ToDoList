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
        const containerItem = document.querySelector(`.${this.project}`);
        const newCard = document.createElement("div");
        const titleEle = document.createElement('div');
        const dueDateEle = document.createElement('div');
        const title = (this.title.split(" ")).join("");
        const cardControl = document.createElement('div');
        const deleteCard = document.createElement('div');

        //assign text
        titleEle.innerText = this.title;
        dueDateEle.innerText = this.dueDate;
        deleteCard.innerText = "x";

        //assign classes or ID's
        newCard.id = `${title}`;
        newCard.classList.add("todoCard");
        titleEle.classList.add("title");
        dueDateEle.classList.add("dueDate");

        //append children and parents
        containerItem.appendChild(newCard);
        newCard.appendChild(titleEle);
        newCard.appendChild(dueDateEle);
        newCard.appendChild(cardControl);
        cardControl.appendChild(deleteCard);

        //add events
        deleteCard.addEventListener("click", this.delete.bind(this));
    }

    delete(){
        const title = (this.title.split(" ")).join("");
        const itemCardParent = document.querySelector(`.${this.project}`);
        const itemCard = document.querySelector(`#${title}`);
        while(itemCard.lastChild){
            itemCard.removeChild(itemCard.lastChild);
        }
        itemCardParent.removeChild(itemCard);
    }
}



export {toDoObject};