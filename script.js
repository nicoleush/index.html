let counter = document.getElementById("counter");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let num = 0;

add.onclick = function () {
    num = num + 1;
    counter.innerText = num;

}

minus.onclick = function () {
    num = num - 1;
    counter.innerText = num;
}