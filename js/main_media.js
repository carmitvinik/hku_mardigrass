import { getNavbar, getHeader, createHeader } from "./navbarHeader.js";


window.addEventListener("load", function () {

    createHeader();
    document.querySelector("header").append(getNavbar());
    createVideoGalery();

    $("a.grouped_elements").fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic'
    });

    $("a.grouped_elements.iframe").fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic',
        'width': 888,
        'height': 500,
        'type': 'iframe'
    });

    let el = document.querySelectorAll("header a")[5];
    $(el).fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic',
        'width': 888,
        'height': 888,
        'type': 'iframe'
    });






});




function createVideoGalery() {
    let youtubeVideoIds = [
        "EkIZwXbSh-Y",
        "9Bv1mFl9SI4",
        "LR82f0GJgXg",
        "PcjLTrUDF3w",
        "FuiAqBOoG5o"
    ];
    let vidgal = document.querySelector("div.videogallery");



    for (let i = 0; i < youtubeVideoIds.length; i++) {
        let ytVid_link = `https://youtube.com/embed/${youtubeVideoIds[i]}`;
        let ytImg_link = `https://img.youtube.com/vi/${youtubeVideoIds[i]}/mqdefault.jpg`;
        let e_link = document.createElement("a");
        e_link.classList = "grouped_elements iframe";
        e_link.setAttribute("rel", "videoGalleryGroup");
        e_link.setAttribute("href", ytVid_link);

        let e_img = document.createElement("img");
        e_img.setAttribute("src", ytImg_link);

        e_link.append(e_img);
        vidgal.append(e_link);
    }



}






