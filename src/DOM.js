import {getProjects} from './storage.js';

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



const createSideBar = function (){
    const content = document.querySelector('#content');
    //define items
    const sideBar = createEle('div');
    const projectItems = createEle('div');

    //add class list items
    addClassList(sideBar, "sidebar");
    addClassList(projectItems, "projects");

    //addText to elements
    let todoProjects = getProjects();
    addText(projectItems, todoProjects);
    console.log("DOM text set");

    //Append items
    append(sideBar, content);
    append(projectItems, sideBar);
}


//TODO Make a function to show todoobject items (Use PubSUB?)
const createToDoCards = function(selectedProject = "deafult"){
    const content = document.querySelector('#content');
}





export default createSideBar