import PubSub from "pubsub-js";
//import currentDisplay from "./todoCardsDOM.js";

const createDarkBackground = function(){
    const baseEle = document.querySelector("body");
    const popUpBackground = document.createElement("div");
    baseEle.appendChild(popUpBackground);
    popUpBackground.classList.add("popUpBackground");


    //styling
    popUpBackground.style["display"] = "none";
    popUpBackground.style["background"] = "rgba(0,0,0,0.6)"
    popUpBackground.style["width"] = "100%";
    popUpBackground.style["height"] = "100%";
    popUpBackground.style["position"] = "absolute";
    popUpBackground.style["top"] = "0";
    popUpBackground.style["text-align"] = "center";
    popUpBackground.style["align-items"] ="center";
    popUpBackground.style["justify-content"] ="center";

}

const createAddProjectForm = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpFormContainer = document.createElement('form');
    popUpFormContainer.classList.add("popUpFormContainer");
    darkBackground.appendChild(popUpFormContainer);

    //add form inputs and append them to the form container
    const projectNameInput = document.createElement('input');
    projectNameInput.classList.add("projectNameInput");
    projectNameInput.type = "text";
    projectNameInput.placeholder = "New Project Name";
    popUpFormContainer.appendChild(projectNameInput);
    const projectSubmitButton = document.createElement('div');
    projectSubmitButton.classList.add("projectSubmitButton");
    projectSubmitButton.innerText = "Submit";
    popUpFormContainer.appendChild(projectSubmitButton);
    projectSubmitButton.addEventListener("click", function(){PubSub.publish("submitProjectButtonPressed", projectNameInput.value)});

    //styling
    popUpFormContainer.style["display"] = "none";
    popUpFormContainer.style["flex-direction"] = "column";
    popUpFormContainer.style["height"] =  "200px";
    popUpFormContainer.style["width"] = "500px";
    popUpFormContainer.style["background"] = "white";
    popUpFormContainer.style["padding"] = "20px";
    popUpFormContainer.style["border-radius"] = "5px";
    popUpFormContainer.style["position"] = "relative";
    popUpFormContainer.style["text-align"] = "center";
    popUpFormContainer.style["align-items"] = "center";
    popUpFormContainer.style["justify-content"] = "center"; 
};

const changeProjectFormDisplay = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpProjectContainer = document.querySelector(".popUpFormContainer");
    const projectDisplay = popUpProjectContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpProjectContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            popUpProjectContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}

const changeToDoFormDisplay = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpToDoContainer = document.querySelector(".popUpToDoContainer");
    const projectDisplay = popUpToDoContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpToDoContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            popUpToDoContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}

const createAddToDoForm = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpToDoContainer = document.createElement('form');
    popUpToDoContainer.classList.add("popUpToDoContainer");
    darkBackground.appendChild(popUpToDoContainer);

    //add form inputs and append them to the form container
    //title, description, dueDate, priority, project
    //declare variables
    const toDoTitle = document.createElement('input');
    const toDoDescription = document.createElement('input');
    const todoDueDate = document.createElement('input');
    const priority = document.createElement('input');
    //const project = currentDisplay.classList[0];

    //add classlists
    toDoTitle.classList.add("toDoTitle");
    toDoDescription.classList.add("toDoDescription");
    todoDueDate.classList.add("toDoDueDate");
    priority.classList.add("priority");

    //add input type
    toDoTitle.type = "text";
    toDoDescription.type = "text";
    todoDueDate.type = "date";
    priority.type = "number";
    
    //add placeholders
    toDoTitle.placeholder = "To-Do Title";
    toDoDescription.placeholder = "Description";
    todoDueDate.placeholder = "Due Date";
    priority.placeholder = "Priority";


    //append
    popUpToDoContainer.appendChild(toDoTitle);
    popUpToDoContainer.appendChild(toDoDescription);
    popUpToDoContainer.appendChild(todoDueDate);
    popUpToDoContainer.appendChild(priority);



    const ToDoSubmitButton = document.createElement('div');
    ToDoSubmitButton.classList.add("ToDoSubmitButton");
    ToDoSubmitButton.innerText = "Submit";
    popUpToDoContainer.appendChild(ToDoSubmitButton);
    ToDoSubmitButton.addEventListener("click", function(){PubSub.publish("submitToDoButtonPressed", this)});

    //styling
    popUpToDoContainer.style["display"] = "none";
    popUpToDoContainer.style["flex-direction"] = "column";
    popUpToDoContainer.style["height"] =  "200px";
    popUpToDoContainer.style["width"] = "500px";
    popUpToDoContainer.style["background"] = "white";
    popUpToDoContainer.style["padding"] = "20px";
    popUpToDoContainer.style["border-radius"] = "5px";
    popUpToDoContainer.style["position"] = "relative";
    popUpToDoContainer.style["text-align"] = "center";
    popUpToDoContainer.style["align-items"] = "center";
    popUpToDoContainer.style["justify-content"] = "center"; 
};

const createToDoCardPopUp = function(){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpCardInfoContainer = document.createElement('div');
    popUpCardInfoContainer.classList.add("popUpCardInfoContainer");
    darkBackground.appendChild(popUpCardInfoContainer);
    const cardTitle = document.createElement('div');
    const cardDescription = document.createElement('div');
    const cardDueDate = document.createElement('div');
    const cardPriority = document.createElement('div');
    const cardProject = document.createElement('div');
    const exitButton = document.createElement('div')

    popUpCardInfoContainer.appendChild(cardTitle);
    popUpCardInfoContainer.appendChild(cardDescription);
    popUpCardInfoContainer.appendChild(cardDueDate);
    popUpCardInfoContainer.appendChild(cardPriority);
    popUpCardInfoContainer.appendChild(cardProject);
    popUpCardInfoContainer.appendChild(exitButton);

    cardTitle.classList.add("cardTitle");
    cardDescription.classList.add("cardDescription");
    cardDueDate.classList.add("cardDueDate");
    cardPriority.classList.add("cardPriority");
    cardProject.classList.add("cardProject");
    exitButton.classList.add("exitButton");
    exitButton.innerText = "Exit";
    exitButton.addEventListener("click", function(){PubSub.publish("exitCardInfo", this)});

    //styling
    popUpCardInfoContainer.style["display"] = "none";
    popUpCardInfoContainer.style["flex-direction"] = "column";
    popUpCardInfoContainer.style["height"] =  "200px";
    popUpCardInfoContainer.style["width"] = "500px";
    popUpCardInfoContainer.style["background"] = "white";
    popUpCardInfoContainer.style["padding"] = "20px";
    popUpCardInfoContainer.style["border-radius"] = "5px";
    popUpCardInfoContainer.style["position"] = "relative";
    popUpCardInfoContainer.style["text-align"] = "center";
    popUpCardInfoContainer.style["align-items"] = "center";
    popUpCardInfoContainer.style["justify-content"] = "center";
}

const addInfoToCardPopUp = function(item){
    const container = document.querySelector('.popUpCardInfoContainer');
    const cardTitle = container.querySelector('.cardTitle');
    const cardDescription = container.querySelector('.cardDescription');
    const cardDueDate = container.querySelector('.cardDueDate');
    const cardPriority = container.querySelector('.cardPriority');
    const cardProject = container.querySelector('.cardProject');
//title, description, dueDate, priority, project
    cardTitle.innerText = `Title: ${item.title}`;
    cardDescription.innerText = `Description: ${item.description}`;
    cardDueDate.innerText = `Due Date: ${item.dueDate}`;
    cardPriority.innerText = `Priority: ${item.priority}`;
    cardProject.innerText = `Project: ${item.project}`;
}
const changeCardPopUpDisplay = function(msg, item){
    const darkBackground = document.querySelector('.popUpBackground');
    const popUpCardInfoContainer = document.querySelector(".popUpCardInfoContainer");
    const projectDisplay = popUpCardInfoContainer.style.display;
    switch(projectDisplay){
        case "flex":
            popUpCardInfoContainer.style.display = "none";
            darkBackground.style.display = "none";
            break;
        case "none":
            addInfoToCardPopUp(item);
            popUpCardInfoContainer.style.display = "flex";
            darkBackground.style.display = "flex";
            break;
    }
}


export {
    createDarkBackground, 
    createAddProjectForm,
    changeProjectFormDisplay,
    createAddToDoForm,
    changeToDoFormDisplay,
    createToDoCardPopUp,
    changeCardPopUpDisplay,
};