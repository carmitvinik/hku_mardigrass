export function banContSize() {

    let ff = document.querySelector("iframe");
    let idd = ff.contentDocument;
    idd.querySelector("body").style.width = ff.offsetWidth;
    let col = idd.querySelectorAll("img");
    for (let i = 0; i < col.length; i++) {
        col[i].style.width = ff.offsetWidth - 36 + "px";

    }
}

