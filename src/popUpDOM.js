const createDarkBackground = function(){
    const baseEle = document.querySelector("body");
    const popUpBackground = document.createElement("div");
    baseEle.appendChild(popUpBackground);
    popUpBackground.classList.add("popUpBackground");


    //styling
    popUpBackground.style["display"] = "flex";
    popUpBackground.style["background"] = "rgba(0,0,0,0.6)"
    popUpBackground.style["width"] = "100%";
    popUpBackground.style["height"] = "100%";
    popUpBackground.style["position"] = "absolute";
    popUpBackground.style["top"] = "0";

}

const showDarkBackground = function(){
    const popUpBackground = document.querySelector(".popUpBackground");
    popUpBackground.style["display"] = "flex";
}

const hideDarkBackground = function(){
    const popUpBackground = document.querySelector(".popUpBackground");
    popUpBackground.style["display"] = "none";
}

export {createDarkBackground, showDarkBackground, hideDarkBackground};