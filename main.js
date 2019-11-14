document.getElementById("temp").addEventListener("click", function () {
    var nav = document.getElementById("nav");
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});


window.addEventListener("load", function () {
    document.getElementById("ready").style.display = "block";
    document.getElementById("loading").style.display = "none";
});

//document.getElementById("nav").addEventListener('mouseenter',showHide);
//document.getElementById("nav").addEventListener('mouseout',showHide);
//
//function showHide() {
//    var allDivs = document.getElementsByClassName("items");
//    for (var i = 0; i < allDivs.length; i++) {
//        var isShown = allDivs[i].classList[1];
//        switch (isShown) {
//            case "hidden":
//                allDivs[i].classList.remove("hidden");
//                allDivs[i].classList.add("shown");
//                break;
//            case "shown":
//                allDivs[i].classList.remove("shown");
//                allDivs[i].classList.add("hidden");
//                break;
//        }
//    }
//}

function displayNav() {
    var nav = document.getElementById("nav");
    nav.style.display = "display: -webkit-box";
    nav.style.display = "-moz - box";
    nav.style.display = "-ms - flexbox";
    nav.style.display = "-webkit - flex";
    nav.style.display = "flex";
}

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
}