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
    const sideBar = createEle("div");
    addClassList(sideBar, "sidebar");
    addText(sideBar, "Test");
    append(sideBar, content);
    
}


//TODO Make a function to show todoobject items (Use PubSUB?)





export default createSideBar