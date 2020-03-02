import { getNavbar, getHeader, createHeader } from "./navbarHeader.js";
import { modifyCube } from "./cube.js";
import { banContSize } from "./baneresponsive.js";


window.addEventListener("load", function () {

    createHeader();
    document.querySelector("header").append(getNavbar());
    banContSize();
    modifyCube();

    let el = document.querySelectorAll("header a")[5];
    $(el).fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic',
        'width': 888,
        'height': 888,
        'type': 'iframe'
    });

});
window.addEventListener("resize", banContSize);



