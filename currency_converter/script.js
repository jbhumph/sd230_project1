const startValue = document.querySelector("#start");
const endValue = document.querySelector("#end");
const amountValue = document.querySelector("#amount");
const submit = document.querySelector("#submit");
const result = document.querySelector(".result");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    convert(startValue.value.toUpperCase(), endValue.value.toUpperCase(), amountValue.value);
})

const exchangeRates = {
    "base": 1,
    "date": "2022-09-24",
    "rates": {
        "AUD": 1.531863,
        "CAD": 1.36029,
        "CLP": 950.662057,
        "CNY": 7.128404,
        "EUR": 1.03203,
        "GBP": 0.920938,
        "INR": 81.255504,
        "JPY": 143.376504,
        "RUB": 57.875038,
        "ZAR": 17.92624
    }
}

const knownSymbols = {
    "symbols": {
        "AUD": "Australian Dollar",
        "CAD": "Canadian Dollar",
        "CLP": "Chilean Peso",
        "CNY": "Chinese Yuan",
        "EUR": "Euro",
        "GBP": "British Pound Sterling",
        "INR": "Indian Rupee",
        "JPY": "Japanese Yen",
        "RUB": "Russian Ruble",
        "USD": "United States Dollar",
        "ZAR": "South African Rand"
    },
    "countries": {
        "Australia": "AUD",
        "Canada": "CAD",
        "Chile": "CLP",
        "China": "CNY",
        "Euro": "EUR",
        "Britain": "GBP",
        "India": "INR",
        "Japan": "JPY",
        "Russia": "Ruble",
        "United States": "USD",
        "South Africa": "ZAR"
    }
}

function convert(start, end, value) {
    // converts currency and updates DOM
    let validated = validate(start, end, value);
    if (!validated) {
        result.textContent = "Invalid input. Please try again.";
    }
    let finalValue = (value / exchangeRates.rates[start]) * exchangeRates.rates[end];
    result.textContent = `${value} ${start} = ${finalValue.toFixed(2)} ${end}`;
    startValue.value = "";
    endValue.value = "";
    amountValue.value = "";
}

function validate(start, end, value) {
    // function verifies proper input
    if (exchangeRates.rates.hasOwnProperty(start) === false) {
        alert("Please enter valid starting currency");
        return false;
    } else if (exchangeRates.rates.hasOwnProperty(end) === false) {
        alert("Please enter valid ending currency");
        return false;
    } else if (isNaN(value)) {
        alert("Please enter a valid number");
        return false;
    } else {
        return true;
    }
}