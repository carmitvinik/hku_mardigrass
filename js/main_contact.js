import { getNavbar, getHeader, createHeader } from "./navbarHeader.js";


window.addEventListener("load", function () {

    createHeader();
    document.querySelector("header").append(getNavbar());

    let el = document.querySelectorAll("header a")[5];
    $(el).fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic',
        'width': 888,
        'height': 888,
        'type': 'iframe'
    });
});




