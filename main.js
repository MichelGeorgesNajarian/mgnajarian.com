window.addEventListener("load", function () {
    document.getElementById("ready").style.display = "block";
    document.getElementById("loading").style.display = "none";
});

var menuAttributes = document.querySelectorAll("ul#nav li a.menu-option");
for (var i = 0; i < menuAttributes.length; i++) {
    menuAttributes[i].addEventListener('click', clickedMenu);
}

function clickedMenu(evt) {
    var allAttr = document.querySelectorAll("ul#nav li a.menu-option");
    for (var i = 0; i < allAttr.length; i++) {
        allAttr[i].classList.remove("clicked");
        allAttr[i].classList.add("notClicked");
    }
    evt.target.classList.remove("notClicked");
    evt.target.classList.add("clicked");
    var btn = document.getElementById("buttonContainer");
    if (window.getComputedStyle(btn).display == "block") {
        toggleMenu(btn);
    }
    //document.getElementById("nav").style.display = "none";
}

function toggleMenu(x) {
    x.classList.toggle("change");
    var nav = document.getElementById("nav");
    if (nav.style.display == "block") {
        nav.style.display = "none";
        document.getElementById("buttonContainer").title = "Open Menu";
        document.getElementById("ready").style.backgroundColor = "#EAEAEA";
    } else {
        nav.style.display = "block";
        document.getElementById("buttonContainer").title = "Close Menu";
        document.getElementById("ready").style.backgroundColor = "#00000038";
    }
}