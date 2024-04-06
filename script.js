const btnbutoon = document.getElementById("but")
const currenselect = document.querySelector(".selecter")

function curren() {
    const InputcurrencyValue = document.querySelector(".main-input").value
    const convert = document.querySelector(".valor1")
    const convertid = document.querySelector(".valor2")

    const dolartoday = 5.2
    const eurotoday = 6.2

    if (currenselect.value == "Dolar") {
        convertid.innerHTML = new Intl.NumberFormat("en-US", {
            
            style: "currency",
            currency: "USD"

        }).format(InputcurrencyValue / dolartoday)
    }
    if (currenselect.value == "Euro") {
        convertid.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(InputcurrencyValue / eurotoday)
    }
    convert.innerHTML = new Intl.NumberFormat("pt-BR", {

        style: "currency",
        currency: "BRL"

    }).format(InputcurrencyValue)
}

btnbutoon.addEventListener("click", curren)