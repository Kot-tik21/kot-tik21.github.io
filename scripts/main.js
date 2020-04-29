var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gundam.png') {
        myImage.setAttribute('src', 'images/withoutGundam.png');
    } else {
        myImage.setAttribute ('src', 'images/gundam.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Введите своё имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Гандамы классные, ' + myName;
}

//практически код инициализации при первом входе на сайт

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Гандамы классные, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}