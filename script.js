async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
    const data = await response.json();
    document.getElementById("result").innerText = `💵 ${amount} USD = ${(amount * data.rates[currency]).toFixed(2)} ${currency}`;
}
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    const select = document.getElementById("currency");
    Object.keys(data.rates).forEach(currency => {
        let option = document.createElement("option");
        option.value = currency;
        option.text = currency;
        select.appendChild(option);
    });
});
