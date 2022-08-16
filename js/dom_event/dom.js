// option: 2 [important]
function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// option: 3
const makeGreen = document.getElementById("makeGreen");
makeGreen.onclick = function () {
    document.body.style.backgroundColor = "green";
}
// option 3: another
const makePurple = document.getElementById("makePurple");
makePurple.onclick = make_Purple;
function make_Purple() {
    document.body.style.backgroundColor = "purple";
}
// option: 4
const makeYellow = document.getElementById("makeYellow");
makeYellow.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
});
//option 4: another [important]
document.getElementById("makePink").addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
});