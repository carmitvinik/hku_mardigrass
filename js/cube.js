let vendors = [
    { name: "Sheraton New Orleans Hotel", url: "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/", logo: "si_logo_L.png" },
    { name: "Walk-On's Bistreaux and Bar", url: "https://walk-ons.com/", logo: "walkons-logo.svg" },
    { name: "Ace Hotel New Orleans", url: "https://www.acehotel.com/neworleans/", logo: "Ace-Hotel-New-Orleans_IMGP5587mcedit_Fran-Parente_S-image" },
    { name: "The Ritz-Carlton, New Orleans", url: "https://www.ritzcarlton.com/en/hotels/new-orleans", logo: "ritz-carlton-primary-black.png" },
    { name: "Premium Parking - P402", url: "https://www.premiumparking.com/", logo: "ppark.svg" },
    { name: "Louisiana Children's Museum", url: "https://www.lcm.org/", logo: "lcm-logo-name-stacked.svg" },
    { name: "Museum of Death", url: "http://www.museumofdeath.net/", logo: "mod-hdr3.jpg" },
    { name: "Haunted Museum", url: "https://thehauntedmuseum.com/", logo: "white-logo-1.png" }
];

function modifyCube() {
    let vendors = [
        { name: "Sheraton New Orleans Hotel", url: "https://www.marriott.com/hotels/travel/msyis-sheraton-new-orleans-hotel/", logo: "si_logo_L.png" },
        { name: "Walk-On's Bistreaux and Bar", url: "https://walk-ons.com/", logo: "walkons-logo.svg" },
        { name: "Ace Hotel New Orleans", url: "https://www.acehotel.com/neworleans/", logo: "AceHotel.jpg" },
        { name: "The Ritz-Carlton, New Orleans", url: "https://www.ritzcarlton.com/en/hotels/new-orleans", logo: "ritz-carlton-primary-black.png" },
        { name: "Premium Parking - P402", url: "https://www.premiumparking.com/", logo: "ppark.svg" },
        { name: "Louisiana Children's Museum", url: "https://www.lcm.org/", logo: "lcm-logo-name-stacked.svg" },
        { name: "Museum of Death", url: "http://www.museumofdeath.net/", logo: "mod-hdr3.jpg" },
        { name: "Haunted Museum", url: "https://thehauntedmuseum.com/", logo: "white-logo-1.png" }
    ];

    let elArr = [document.querySelector(".facefront"),
    document.querySelector(".facebackfront"),
    document.querySelector(".faceleft"),
    document.querySelector(".faceright")];

    for (let i = 0; i < elArr.length; i++) {
        elArr[i].firstElementChild.children[0].innerText = vendors[i].name; //title
        elArr[i].firstElementChild.href = vendors[i].url;
        elArr[i].firstElementChild.children[1].src = "imgs/vendorsLogo/" + vendors[i].logo;
    }
}

export { modifyCube };