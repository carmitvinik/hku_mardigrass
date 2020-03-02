import { getNavbar, getHeader, createHeader } from "./navbarHeader.js";



window.addEventListener("load", function () {

    createHeader();
    document.querySelector("header").append(getNavbar());
    document.querySelector("main").append(createAccordion("mydion"));

    let el = document.querySelectorAll("header a")[5];
    $(el).fancybox({
        'transitionIn': 'elastic', 'transitionOut': 'elastic',
        'width': 888,
        'height': 888,
        'type': 'iframe'
    });


});


function createAccordion(id) {

    let faqObjArr = [
        { q: 'Is there an "official" Mardi Gras? ', a: 'No! Mardi Gras is a holiday, just like Christmas and Easter. It belongs to everyone. Do not believe the claims of businesses who offer "official" Mardi Gras merchandise or an "official" Mardi Gras website. Using the term “official” is just a way for vendors to sell their products or services to those who do not know better. Products or websites are not licensed by the government for Mardi Gras. Each individual parade krewe is responsible for all of its merchandise. In some parts of the country, official organizations control their Mardi Gras celebration, but this is not true in New Orleans.' },
        {
            q: 'When does Mardi Gras start and end?', a: `The Carnival season always begins on Jan. 6, which is King’s Day (Feast of the Epiphany). Mardi Gras day (Fat Tuesday), however, is on a different day each year.
Fat Tuesday changes every year because Easter Sunday is never on the same Sunday each year. Fat Tuesday is always the day before Ash Wednesday.
Most visitors plan to arrive no later than the Saturday prior to Mardi Gras day and stay through Ash Wednesday. Check out our dates page to see when Fat Tuesday will fall through the next few years.`},
        {
            q: 'What is the weather usually like during Mardi Gras? What should I pack?', a: `The weather during Mardi Gras can vary from very cold to very warm, almost hot. Sometimes it will change from one extreme to the other during the same day. It’s a good idea to layer your clothes since a chilly morning may turn into a warm afternoon.
Since you will be spending long days outside, pack comfortable shoes and clothes that can get somewhat dirty. Don’t forget to check the forecast for rain. If storms are predicted, then you’ll definitely want to bring a raincoat!
`},
        { q: 'How much does it cost to go to Mardi Gras?', a: `It's free! Not only that, but you'll leave with bags of Mardi Gras beads and throws. That's why we call it the "Greatest Free Show on Earth!"` }


    ];


    let accordion = document.createElement("div");
    accordion.setAttribute("id", id);
    accordion.classList = "accordion";

    for (let i = 0; i < faqObjArr.length; i++) {

        let card = document.createElement("div");
        card.classList = "card";
        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("id", `${id}card_${i}`);
        cardHeader.classList = "card-header";
        let innerCardHeader = document.createElement("h2");
        innerCardHeader.classList = "mb-0";
        let btnlink = document.createElement("button");
        btnlink.classList = "btn btn-link";
        btnlink.setAttribute("type", "button");
        btnlink.setAttribute("data-toggle", "collapse");
        btnlink.setAttribute("data-target", `#${id}collapse_${i}`);
        btnlink.setAttribute("aria-expanded", "true");
        btnlink.setAttribute("aria-controls", `${id}collapse_${i}`);
        btnlink.innerText = faqObjArr[i].q;

        innerCardHeader.append(btnlink);
        cardHeader.append(innerCardHeader);
        card.append(cardHeader);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("id", `${id}collapse_${i}`);
        cardBody.classList = "collapse"; //here can add "show" to class list if want to show the collapse
        cardBody.setAttribute("aria-labelledby", `${id}card_${i}`);
        cardBody.setAttribute("data-parent", `#${id}`);
        let innerCardBody = document.createElement("div");
        innerCardBody.classList = "card-body";
        innerCardBody.innerText = faqObjArr[i].a;
        cardBody.append(innerCardBody);
        card.append(cardBody);

        accordion.append(card);
    }


    return accordion;














}


