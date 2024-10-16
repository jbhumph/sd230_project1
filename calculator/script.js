// add variables for each button
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");

let arr = [];


// add event listeners
one.addEventListener("click", () => {
    writeNumber("1")
})
two.addEventListener("click", () => {
    writeNumber("2")
})
three.addEventListener("click", () => {
    writeNumber("3")
})
four.addEventListener("click", () => {
    writeNumber("4")
})
five.addEventListener("click", () => {
    writeNumber("5")
})
six.addEventListener("click", () => {
    writeNumber("6")
})
seven.addEventListener("click", () => {
    writeNumber("7")
})
eight.addEventListener("click", () => {
    writeNumber("8")
})
nine.addEventListener("click", () => {
    writeNumber("9")
})
zero.addEventListener("click", () => {
    writeNumber("0")
})

plus.addEventListener("click", () => {
    writeOperator("+")
})
minus.addEventListener("click", () => {
    writeOperator("-")
})
multiply.addEventListener("click", () => {
    writeOperator("*")
})
divide.addEventListener("click", () => {
    writeOperator("/")
})
equals.addEventListener("click", () => {

})


// function that creates strings in array
function writeNumber(num) {

}

function writeOperator(op) {

}