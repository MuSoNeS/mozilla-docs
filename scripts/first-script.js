var myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-mozilla.svg.png"){
        myImage.setAttribute("src", "images/firefox-mozilla-2.png");
    }else{
        myImage.setAttribute("src", "images/firefox-mozilla.svg.png");
    }
}

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var userName = prompt("Please, enter your name here");
    localStorage.setItem("name", userName);
    myHeading.textContent = `Hi, ${userName}`;
}
if(!localStorage.getItem("name")){
    setUserName();
}else{
    var storedName = localStorage.getItem("name");
    myHeading.textContent = `Hi, ${userName}`;
}

myButton.onclick = function(){
    setUserName();
}