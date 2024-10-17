const line = document.querySelector(".line");

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
const exponent = document.querySelector("#exponent");
const decimal = document.querySelector("#decimal");
const pOpen = document.querySelector("#pOpen");
const pClose = document.querySelector("#pClose");
const equals = document.querySelector("#equals");
let arr = [""];
let index = 0
let display = ""
let openCount = 0;
let closedCount = 0;


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
exponent.addEventListener("click", () => {
    writeOperator("^")
})
decimal.addEventListener("click", () => {
    writeDecimal()
})
pOpen.addEventListener("click", () => {
    open()
})
pClose.addEventListener("click", () => {
    close()
})
equals.addEventListener("click", () => {
    solve();
})


function writeNumber(num) {
    // function that creates strings in array
    if (num === "0" && arr[index] === "") {
        return;
    }
    arr[index] += num;
    display += num;
    line.innerText = display;
}

function writeDecimal() {
    // writes decimal in array
    if (arr[index].includes(".")) {
        return;
    }
    if (arr[index] === "") {
        arr[index] = "0.";
        display += "0."
        line.innerText = display;
    } else {
        arr[index] += ".";
        display += "."
        line.innerText = display;
    }
}

function open() {
    // opens parenthesis in array
    if (arr[index] === "") {
        arr[index] = "(";
        index++
        arr[index] = "";
        display += "(";
        line.innerText = display;
        openCount++;
    }
}

function close() {
    // closes parenthesis in array and flattens them into a sub-array
    if (arr[index] !== "" && openCount > closedCount) {
        let i = arr.lastIndexOf("(");
        let temp = arr.slice(i+1);
        arr.splice(i, temp.length+1, temp);
        display += ")";
        line.innerText = display;
    }
}

function writeOperator(op) {
    // adds operators to array
    if (arr[index] === "") {
        return;
    }
    index++
    arr[index] = op;
    index++
    arr[index] = "";

    display += op;
    line.innerText = display;
}

function solve() {
    // runs through each element of array and performs operator functions, eventually displaying result

    // the close() function's splice left null elements in the array and this is part of my solution to that.
    // for some reason I can only remove the null elements from here, not when they're at the end of the array in close()
    let newest = arr.filter(item => item !== null);
    arr = newest;

    if (arr.length < 3) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            arr[i] = solved(arr[i]).toString();
            //arr.splice(i, 1, hold);
        }
    }
    arr = exponents(arr)
    arr = multiplication(arr);
    arr = division(arr);
    arr = addition(arr);
    arr = subtraction(arr);
    index = 0;
    display = arr[0]
    line.innerText = display;
}

function solved(array) {
    // recursive call to solve sub-arrays (parenthesis)
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            array[i] = solved(array[i]).toString();
        }
    }
    array = exponents(array)
    array = multiplication(array);
    array = division(array);
    array = addition(array);
    array = subtraction(array);
    return array;
}

function exponents(array) {
    // recursive call to solve all exponents
    if (array.indexOf("^") === -1) {
        return array;
    } else {
        let i = array.indexOf("^");
        let math = Math.pow(array[i-1], array[i+1]);
        array.splice(i-1, 3, math.toString())
        return exponents(array);
    }
}

function multiplication(array) {
    // recursive call to solve all multiplication
    if (array.indexOf("*") === -1) {
        return array;
    } else {
        let i = array.indexOf("*");
        let math = array[i-1] * array[i+1];
        array.splice(i-1, 3, math.toString())
        return multiplication(array);
    }
}

function division(array) {
    // recursive call to solve all division
    if (array.indexOf("/") === -1) {
        return array;
    } else {
        let i = array.indexOf("/");
        let math = array[i-1] / array[i+1];
        array.splice(i-1, 3, math.toString())
        return division(array);
    }
}

function addition(array) {
    // recursive call to solve all addition
    if (array.indexOf("+") === -1) {
        return array;
    } else {
        let i = array.indexOf("+");
        let math = Number(array[i-1]) + Number(array[i+1]);
        array.splice(i-1, 3, math.toString())
        return addition(array);
    }
}

function subtraction(array) {
    // recursive call to solve all subtraction
    if (array.indexOf("-") === -1) {
        return array;
    } else {
        let i = array.indexOf("-");
        let math = Number(array[i-1]) - Number(array[i+1]);
        array.splice(i-1, 3, math.toString())
        return subtraction(array);
    }
}