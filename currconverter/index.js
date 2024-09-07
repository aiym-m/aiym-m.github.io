const enterInputValue = document.querySelector(".enteringValue");
const convert = document.querySelector(".convert")
const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
const selectFrom = document.querySelector(".from");
const selectTo = document.querySelector(".to");
const finalValue = document.querySelector(".output");
const finalAmount = document.querySelector(".finalAmount")
let resultFrom;
let resultTo;
let searchValue;

selectFrom.addEventListener("change", (e) => {
    resultFrom = `${e.target.value}`;
});
selectTo.addEventListener("change", (e) => {
    resultTo = `${e.target.value}`;
})
enterInputValue.addEventListener("input", updateValue);

function updateValue(e) {
    searchValue = e.target.value;
}
convert.addEventListener("click", getResult);

function getResult(){
    fetch(url)
    .then((currency) => {
        return currency.json();
    })
    .then(displayResult);
}
// getResult()

function displayResult(currency){
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue.innerHTML = ((toRate/fromRate) * searchValue).toFixed(2);
    finalAmount.style.display = "block";
}

