
window.addEventListener("load", function () {

    // createHeader();
    //document.querySelector("header").append(getNavbar());

    let t_Q = [...triviaQuiz];
    while (t_Q.length > 0) {
        let q_num = Math.floor(Math.random() * t_Q.length);
        let q = t_Q[q_num].question;
        let ans = t_Q[q_num].ansView;
        t_Q.splice(q_num, 1);
        let obj1 = new TriviaQuestion(q, ans, "ob1");
        obj1.createQuestion();
    }

    localStorage.setItem("mardiGrassTrivia", 0);











});

function TriviaQuestion(q, v, qid) {
    this.question = q;
    this.ansView = v;
    this.qid = qid;

    this.createQuestion = function () {
        let anchor = document.getElementsByClassName("trivia")[0];
        let el_row = document.createElement("div");
        el_row.classList.add("row");
        el_row.classList.add("justify-content-center");
        el_row.classList.add("w-100");
        anchor.append(el_row);

        let el_qbox = document.createElement("div");
        el_qbox.classList.add("questionbox");
        el_qbox.classList.add("col-5");
        el_row.append(el_qbox);
        let el_truefalse = document.createElement("div");
        el_truefalse.classList.add("col-5");
        el_row.append(el_truefalse);

        let el_cover = document.createElement("div");
        el_cover.classList.add("d-none");
        el_cover.classList.add("shed");

        el_qbox.append(el_cover);

        let el_q = document.createElement("h2");
        el_q.innerText = this.question;
        el_qbox.append(el_q);
        let temparr = [...this.ansView];

        while (temparr.length > 0) {
            let opnum = Math.floor(Math.random() * temparr.length);
            let qoption = temparr[opnum];
            temparr.splice(opnum, 1);
            let el_wrap = document.createElement("div");
            let label = qoption.option;
            let el_label = document.createElement("label");
            el_label.innerText = label;
            let truefalse = qoption.sign;
            let el_option = document.createElement("input");
            el_option.setAttribute("type", "radio");
            el_option.setAttribute("name", qid);
            el_option.addEventListener("click", function () {
                if (truefalse) {
                    this.parentElement.parentElement.firstChild.classList.remove("d-none");
                    this.parentElement.parentElement.parentElement.children[1].classList.add("show-correct");
                    let score;
                    if (localStorage.mardiGrassTrivia == "null") {
                        localStorage.setItem("mardiGrassTrivia", 0);
                    }
                    localStorage.mardiGrassTrivia++;
                    score = localStorage.mardiGrassTrivia;
                    //alert(score);
                    document.getElementById("gameScore").innerText = score;
                } else {
                    this.parentElement.parentElement.firstChild.classList.remove("d-none");
                    this.parentElement.parentElement.parentElement.children[1].classList.add("show-wrong");

                }


            });
            el_wrap.append(el_option);
            el_wrap.append(el_label);
            el_qbox.append(el_wrap);

        }
    }
}

function shuffle() {
    let arr = [0, 1, 2, 3];
    let x = Math.floor(Math.random() * arr.length);
    let na = [];
    na[0] = arr[x];
    arr.splice(x, 1);
}




