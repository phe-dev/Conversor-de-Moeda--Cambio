// Cotação inserida
const USD = 5.44
const EUR = 6.56
const GBP = 6.08




// Obtendo elementos do formulario
const form = document.getElementById("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Recebendo somente numeros no input
amount.addEventListener("input", ()=>{
    
    const hasCharacteresRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacteresRegex, "")
})

// Captando submit do form
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$")
            break

        case "EUR":
             convertCurrency(amount.value, EUR ,"€")
            break
        case "GBP":
             convertCurrency(amount.value, GBP,"£" )
             break
    }

}

//convertendo moeda

function convertCurrency(amount, price, symbol) {
    console.log(amount, price,symbol)


}