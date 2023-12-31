const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swapEl = document.getElementById("swap");

//Fetch exchange rate and update the dom
function calculate() {
  const currency_one = currencyEl_one.value;
  const currrency_two = currencyEl_two.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/e69d5509bfa13adecc887b19/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rate = data.conversion_rates[currrency_two];
      rateEl.innerText = `1 ${currency_one} =  ${rate} ${currrency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//Add event listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swapEl.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});
calculate();
