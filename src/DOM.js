import {getProjects, gettodoItems} from './storage.js';
import PubSub from 'pubsub-js';

const createEle = function(type){
    return document.createElement(type);
}

const addClassList = function(element, cname){
    element.classList.add(cname);
}

const addText = function (ele, text){
    ele.innerText = text;
}

const append = function(ele, parentItem){
    parentItem.appendChild(ele);
}

const createList = function(listType, cName, parentItem, projectListElements){
    projectListElements = [...projectListElements];
    const newList = createEle(listType);
    addClassList(newList, cName);
    append(newList, parentItem);
    for(let i = 0; i < projectListElements.length; i++){
        const newListItem = createEle("li");
        append(newListItem, newList);
        addText(newListItem, projectListElements[i]);
        addClassList(newListItem, i);
    }
}

const addToProjectList = function(msg, listItemText){
    const projectList = document.querySelector(".projectList");
    const newListItem = createEle("li");
    addText(newListItem, listItemText);
    append(newListItem, projectList);
}

const createToDoCardElements = function(todoObjects, parentItem){
    const newCard = createEle("div");
    addClassList(newCard, "toDoCards");
    append(newCard, parentItem);
    todoObjects = [...todoObjects];
    for(let i = 0; i < todoObjects.length; i++){
        //declare variables of items we may want from the object
        const title = todoObjects[i].title;
        const description = todoObjects[i].description;
        const dueDate = todoObjects[i].dueDate;
        const priority = todoObjects[i].priority;
        const status = todoObjects[i].status;
        // create new div elements in order we want them displayed
        const newCardItem = createEle("div");
        const cardTitle = createEle("div");
        //const cardDescription = createEle("div");
        const carddueDate = createEle("div");
        //const cardPriority = createEle("div");
        //const cardStatus = createEle("div");
        //add classes
        addClassList(newCardItem, "todoCard");
        addClassList(cardTitle, "title");
        //addClassList(cardDescription, "description");
        addClassList(carddueDate, "duedate");
        //addClassList(cardPriority, "priority");
        //addClassList(cardStatus, "status");
        //set text
        addText(cardTitle, title);
        //addText(cardDescription, description);
        addText(carddueDate, `Due: ${dueDate}`);
        //addText(cardPriority, priority);
        //addText(cardStatus, status);
        //append
        append(newCardItem, newCard);
        append(cardTitle, newCardItem);
        //append(cardDescription,newCardItem);
        append(carddueDate,newCardItem);
        //append(cardPriority,newCardItem);
        //append(cardStatus,newCardItem);
    }
}

const createNewToDoCard = function(msg, data){
    const parentItem = document.querySelector(".toDoCards");
    const newCard = createEle("div");
    addClassList(newCard, "toDoCards");
    append(newCard, parentItem);
    let todoObjects = [data];
    for(let i = 0; i < todoObjects.length; i++){
        //declare variables of items we may want from the object
        const title = todoObjects[i].title;
        const description = todoObjects[i].description;
        const dueDate = todoObjects[i].dueDate;
        const priority = todoObjects[i].priority;
        const status = todoObjects[i].status;
        // create new div elements in order we want them displayed
        const newCardItem = createEle("div");
        const cardTitle = createEle("div");
        //const cardDescription = createEle("div");
        const carddueDate = createEle("div");
        //const cardPriority = createEle("div");
        //const cardStatus = createEle("div");
        //add classes
        addClassList(newCardItem, "todoCard");
        addClassList(cardTitle, "title");
        //addClassList(cardDescription, "description");
        addClassList(carddueDate, "duedate");
        //addClassList(cardPriority, "priority");
        //addClassList(cardStatus, "status");
        //set text
        addText(cardTitle, title);
        //addText(cardDescription, description);
        addText(carddueDate, `Due: ${dueDate}`);
        //addText(cardPriority, priority);
        //addText(cardStatus, status);
        //append
        append(newCardItem, newCard);
        append(cardTitle, newCardItem);
        //append(cardDescription,newCardItem);
        append(carddueDate,newCardItem);
        //append(cardPriority,newCardItem);
        //append(cardStatus,newCardItem);
    }
};

const showProjectPopup = function(){
    const backgroundPopUp = document.querySelector("#popUpBackground").style;
    const projectPopUp = document.querySelector("#popUpAddProject").style;
    const inputPopUp = document.querySelector("#addProject").style;

    backgroundPopUp.display = "flex";
    projectPopUp.display = "flex";
    inputPopUp.display = "flex";
};

const hideProjectPopup = function(msg, data){
    const backgroundPopUp = document.querySelector("#popUpBackground").style;
    const projectPopUp = document.querySelector("#popUpAddProject").style;
    const inputPopUp = document.querySelector("#addProject").style;
    backgroundPopUp.display = "none";
    projectPopUp.display = "none";
    inputPopUp.display = "none";
}

const showAddToDoPopUp = function(){
    const backgroundPopUp = document.querySelector("#popUpBackground").style;
    const projectPopUp = document.querySelector("#popUpAddProject").style;
    const inputPopUp = document.querySelector("#addToDo").style;

    backgroundPopUp.display = "flex";
    projectPopUp.display = "flex";
    inputPopUp.display = "flex";
}

const hideAddToDoPopUp = function(msg,data){
    const backgroundPopUp = document.querySelector("#popUpBackground").style;
    const projectPopUp = document.querySelector("#popUpAddProject").style;
    const inputPopUp = document.querySelector("#addToDo").style;

    backgroundPopUp.display = "none";
    projectPopUp.display = "none";
    inputPopUp.display = "none";
}


const createSideBar = function (){
    const content = document.querySelector('#content');
    //define items
    const sideBar = createEle('div');
    const projectItems = createEle('div');
    const addProjectButton = createEle('div');
    const addToDoButton = createEle('div');

    //add class list items
    addClassList(sideBar, "sidebar");
    addClassList(projectItems, "projects");

    //addText to elements
    let todoProjects = getProjects();
    createList("ul", "projectList", projectItems, todoProjects);
    addText(addProjectButton, 'Add Project');
    addText(addToDoButton, "Add To-Do");
    
    //add event listener
    addProjectButton.addEventListener("click", function(){PubSub.publish('addProjectClicked');});
    addToDoButton.addEventListener("click", function(){PubSub.publish('addToDoClicked');});

    //Append items
    append(sideBar, content);
    append(projectItems, sideBar);
    append(addProjectButton, sideBar);
    append(addToDoButton, sideBar);
}



//TODO Make a function to show todoobject items (Use PubSUB?)
const createToDoCards = function(selectedProject = "default"){
    const content = document.querySelector('#content');
    //define items
    const todoItems = gettodoItems("default");


    createToDoCardElements(todoItems, content);
}





export {createSideBar, 
    createToDoCards, 
    showProjectPopup, 
    addToProjectList, 
    hideProjectPopup, 
    showAddToDoPopUp, 
    hideAddToDoPopUp,
    createNewToDoCard,

};