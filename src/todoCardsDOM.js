import PubSub from 'pubsub-js';

const displayCard = function(msg, todoItem){
    //create needed elements
    const containerItem = document.querySelector(`.${todoItem.project}`);
    const newCard = document.createElement("div");
    const titleEle = document.createElement('div');
    const dueDateEle = document.createElement('div');
    const title = (todoItem.title.split(" ")).join("");
    const cardControl = document.createElement('div');
    const deleteCard = document.createElement('div');

    //assign text
    titleEle.innerText = todoItem.title;
    dueDateEle.innerText = todoItem.dueDate;
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
    deleteCard.addEventListener("click", todoItem.delete.bind(todoItem));
}

const deleteCard = function(msg, todoItem){
    const title = (todoItem.title.split(" ")).join("");
    const itemCardParent = document.querySelector(`.${todoItem.project}`);
    const itemCard = document.querySelector(`#${title}`);
    while(itemCard.lastChild){
        itemCard.removeChild(itemCard.lastChild);
    }
    itemCardParent.removeChild(itemCard);
}


export {displayCard,
        deleteCard,
        
};