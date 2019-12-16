//remove loading gif and display page once everything has loaded
window.addEventListener("load", function () {
    document.getElementById("ready").style.display = "block";
    document.getElementById("loading").style.display = "none";
    this.alert("The website is still in development. Once that it's done the alert won't pop-up anymore");
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

const toggleMenu = async (x) => {
    x.classList.toggle("change");
    var nav = document.getElementById("nav");
    if (nav.style.top == "0em") {
        nav.style.animation = "slide-out 0.3s";
        nav.style.top = "-30em";
        document.getElementById("buttonContainer").title = "Open Menu";
        document.getElementById("ready").style.backgroundColor = "transparent";
        await delay(300);
        document.getElementById("navWrapper").style.height = "0px";
    } else {
        nav.style.animation = "slide-in 0.3s";
        nav.style.top = "0em";
        document.getElementById("buttonContainer").title = "Close Menu";
        document.getElementById("ready").style.backgroundColor = "#00000038 !important";
        document.getElementById("navWrapper").style.height = "auto";
    }
}