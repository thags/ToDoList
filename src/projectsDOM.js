import PubSub from 'pubsub-js';

const addToProjectListDOM = function(msg, project){
    const parentEle = document.querySelector('#projects');
    const newListItem = document.createElement('li');
    newListItem.innerText = project.projectName;
    parentEle.appendChild(newListItem);
    newListItem.classList.add(project.projectName);
    createNewProjectDiv(project.projectName);
    newListItem.addEventListener("click", function(){PubSub.publish("projectNameClicked", project.projectName)});
};

const createNewProjectDiv = function(name){
    const parentEle = document.querySelector('#todoCards');
    const newItem = document.createElement('div');
    newItem.classList.add(`${name}`);
    parentEle.appendChild(newItem);
};

const createAddProjectButton = function(){
    const parentEle = document.querySelector('#sideBar');
    const newItem = document.createElement('div');
    newItem.classList.add("addProjectButton");
    parentEle.insertBefore(newItem, parentEle.firstChild);
    newItem.innerText = "Add Project";

    newItem.addEventListener("click", function(){PubSub.publish("addProjectButtonPressed", this)})
}

const createAddToDoButton = function(){
    const parentEle = document.querySelector('#sideBar');
    const newItem = document.createElement('div');
    newItem.classList.add("addToDoButton");
    parentEle.insertBefore(newItem, parentEle.firstChild);
    newItem.innerText = "Add To-Do";

    newItem.addEventListener("click", function(){PubSub.publish("addToDoButtonPressed", this)})
};

export {createAddProjectButton, addToProjectListDOM, createAddToDoButton};