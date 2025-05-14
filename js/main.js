//도큐먼트가 다 로드된 다음에 js 실행하는 명령 삽입도 가능능

const pE1 = document.querySelector("#me");
pE1.style.backgroundColor = "ff0000";
pE1.style.fontSize = "10px";
pE1.style.color = "#ffffff";

const pE2 = document.querySelector("header");
pE2.classList.add("red-color", "ft20");

setInterval(() => {
    pE2.classList.toggle("red-color");
}, 2000);

const buttonEls = document.querySelectorAll("button");
buttonEls.forEach((el) => {
    console.log(el.dataset);
})

buttonEls[1].dataset.cont = 7;

function button3_click() {
    if (pE1.style.backgroundColor === "gold")
        pE1.style.backgroundColor ="red"
    else
    pE1.style.backgroundColor ="gold"
}

function button4_click() {
    if (pE1.style.fontSize === "30px")
        pE1.style.fontSize ="10px"
    else
    pE1.style.fontSize ="30px"
}