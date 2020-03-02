function getNavbar() {

    let navbarLinks = [
        { url: "index.html", name: "Home" },
        { url: "cp2_About.html", name: "About" },
        { url: "cp3_Media.html", name: "Media" },
        { url: "cp4_Faq.html", name: "FAQ" },
        { url: "cp5_contact.html", name: "Contact" },
        { url: "cp6_trivia.html", name: "trivia-quest" }
    ];

    let navbar = document.createElement("nav");
    let togbtn = document.createElement("button");
    let navtogicon = document.createElement("span");
    let navItemsCont = document.createElement("div");
    let navItemsContID = "navItems";


    let navbarClassList = "navbar navbar-expand-md  navbar-dark row";
    let navItemClassList = "nav-item nav-link h3";
    let togbtnClassList = "navbar-toggler m-auto bg-dark rounded-circle";
    let navItemsContClassList = "collapse navbar-collapse navbar-nav text-center";


    navbar.classList = navbarClassList;
    togbtn.classList = togbtnClassList;
    togbtn.setAttribute("data-toggle", "collapse");
    togbtn.setAttribute("data-target", "#" + navItemsContID);
    navtogicon.classList = "navbar-toggler-icon";
    navItemsCont.classList = navItemsContClassList;
    navItemsCont.setAttribute("id", navItemsContID);

    navbar.append(togbtn);
    togbtn.append(navtogicon);
    navbar.append(navItemsCont);

    for (let i = 0; i < navbarLinks.length; i++) {
        let el = document.createElement("a");
        el.setAttribute("href", navbarLinks[i].url);
        el.innerText = navbarLinks[i].name;
        el.classList = navItemClassList;
        navItemsCont.append(el);
    }
    return navbar;


}

function getHeader() {

    let myHeader = document.createElement("header");
    myHeader.classList = "col-12";
    let h = document.createElement("h1");
    h.classList = "justify-content-center p-5 row";
    h.innerText = "Mardi Grass";
    let logo = document.createElement("img");
    logo.setAttribute("src", "imgs/siteLogo/logo.png");
    logo.setAttribute("alt", "LOGO IMAGE");
    logo.classList = "logo";
    myHeader.append(h);
    h = document.createElement("h1");
    h.classList = "justify-content-center p-0 m-0 row";
    h.append(logo);
    myHeader.append(h);
    h = document.createElement("h1");
    h.classList = "justify-content-center p-5 row";
    h.innerText = "New Orleans";
    myHeader.append(h);
    return myHeader;
}

function createHeader() {

    let myHeader = document.querySelector("header");
    myHeader.classList = "col-12";
    let h = document.createElement("h1");
    h.classList = "justify-content-center p-2 row";
    h.innerText = "Mardi Grass";
    let logo = document.createElement("img");
    logo.setAttribute("src", "imgs/siteLogo/logo.png");
    logo.setAttribute("alt", "LOGO IMAGE");
    logo.classList = "logo";
    myHeader.append(h);
    h = document.createElement("h1");
    h.classList = "justify-content-center p-0 m-0 row";
    h.append(logo);
    myHeader.append(h);
    h = document.createElement("h1");
    h.classList = "justify-content-center p-2 row";
    h.innerText = "New Orleans";
    myHeader.append(h);
    return myHeader;

}


export { getNavbar, getHeader, createHeader };