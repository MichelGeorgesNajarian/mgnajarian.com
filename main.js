//remove loading gif and display page once everything has loaded
window.addEventListener("load", function () {
    document.getElementById("ready").style.display = "block";
    document.getElementById("loading").style.display = "none";
});

//display or hide scroll to top btn
var scroll = document.getElementById("scrollTop");

window.onscroll = function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        this.scroll.classList.add("showBtn");
    } else {
        this.scroll.classList.remove("showBtn");
    }
};
const delay = ms => new Promise(res => setTimeout(res, ms));
const toTop = async () => {
    while (document.documentElement.scrollTop || document.body.scrollTop) {
        if (!document.documentElement.scrollTop && document.body.scrollTop) {
            document.body.scrollTop = document.body.scrollTop - document.body.scrollTop / 10;
        } else if (document.documentElement.scrollTop && !document.body.scrollTop) {
            document.documentElement.scrollTop = document.documentElement.scrollTop - document.documentElement.scrollTop / 10;
        } else {
            document.body.scrollTop = document.body.scrollTop - document.body.scrollTop / 10;
            document.documentElement.scrollTop = document.documentElement.scrollTop - document.documentElement.scrollTop / 10;
        }
        await delay(2);
    }
}
scroll.addEventListener('click', toTop);

var menuAttributes = document.querySelectorAll("ul#nav li a.menu-option");
for (var i = 0; i < menuAttributes.length; i++) {
    menuAttributes[i].addEventListener('click', clickedMenu);
}

if (window.getComputedStyle(document.getElementById("buttonContainer")).display == "block") { // true if hamburger menu is the one active and not the dropdown menu
    document.querySelector("#nav").querySelectorAll("li > a")[0].style = "padding-left: 2.6em;"; // adding padding to the first element which is pushed off-center due to the menu icon
    document.querySelector("#nav").querySelectorAll("li > a")[1].style = "padding-left: 2.6em;"; // adding padding to the first element which is pushed off-center due to the menu icon
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