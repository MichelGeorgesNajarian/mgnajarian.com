//remove loading gif and display page once everything has loaded
window.addEventListener("load", function () {
    document.getElementById("ready").style.display = "block";
    document.getElementById("loading").style.display = "none";
    this.alert("The website is still in development. Once that it's done the alert won't pop-up anymore");
});

//display or hide scroll to top btn
var scroll = document.getElementById("scrollTop");

//show the scroll to top button after scrolling down 150 pixels
window.onscroll = function () {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        this.scroll.classList.add("showBtn");
    } else {
        this.scroll.classList.remove("showBtn");
    }
};
//handles going from desktop to mobile widths and vice versa to keep experience smooth
window.onresize = function () {
    var nav = document.getElementById("nav");
    if (window.innerWidth > 991.98) { //going to desktop site
        nav.style.animation = ""; //remove the mobile animations
        nav.style.top = "0em"; //remove the negative top margin
    } else { //going to mobile widths
        //automatically closing the menu
        var btn = document.getElementById("buttonContainer");
        document.getElementById("buttonContainer").title = "Open Menu";
        document.getElementById("navWrapper").style.height = "0px";
        nav.style.top = "-30em";
        //remove "change" class from menu if it's there
        if (btn.classList.contains("change")) {
            btn.classList.toggle("change");
        }
    }
};
//delay function
const delay = ms => new Promise(res => setTimeout(res, ms));
//scroll to top
const toTop = async () => {
    //scroll to top gradually (not instant)
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
//adding click detection for menu items
var menuAttributes = document.querySelectorAll("ul#nav li a.menu-option");
for (var i = 0; i < menuAttributes.length; i++) {
    menuAttributes[i].addEventListener('click', clickedMenu);
}

function clickedMenu(evt) {
    var allAttr = document.querySelectorAll("ul#nav li a.menu-option");
    //"unclick" veery menu item
    for (var i = 0; i < allAttr.length; i++) {
        allAttr[i].classList.remove("clicked");
        allAttr[i].classList.add("notClicked");
    }
    // remove the notClicked class of the cliekd item and give it the clicked class
    evt.target.classList.remove("notClicked");
    evt.target.classList.add("clicked");
    var btn = document.getElementById("buttonContainer");
    //if the hamburger menu is visible
    if (window.getComputedStyle(btn).display == "block") {
        toggleMenu(btn);
    }
    //document.getElementById("nav").style.display = "none";
}

const toggleMenu = async (x) => {
    // "change" class will cause animation to either open or close menu
    x.classList.toggle("change");
    var nav = document.getElementById("nav");
    //if menu currently open
    if (nav.style.top == "0em") {
        nav.style.animation = "slide-out 0.3s";
        nav.style.top = "-30em";
        document.getElementById("buttonContainer").title = "Open Menu";
        await delay(300);
        document.getElementById("navWrapper").style.height = "0px";
    } else { // if the menu is currently closed
        nav.style.animation = "slide-in 0.3s";
        nav.style.top = "0em";
        document.getElementById("buttonContainer").title = "Close Menu";
        document.getElementById("navWrapper").style.height = "auto";
    }
}