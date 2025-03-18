// Cotação inserida
const USD = 5.44
const EUR = 6.56
const GBP = 6.08




// Obtendo elementos do formulario
const form = document.getElementById("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

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
    //console.log(amount, price,symbol)
    try {
        // atualizando o cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = amount * price
        total = formatCurrencyBRL(total)


        // Exibe o resulado total
        result.textContent = `${total}  Reais`


        //aplica a classe e exibe o footer com o resultado
        footer.classList.add("show-result")

    } catch (error){

        console.log(erro)

        footer.classList.remove
        ("show-result")
        alert("Não foi possivel converter. Tente novamente mais tarde.")
    }
}
// formata em real br
function formatCurrencyBRL(value){
    // Converte para numero e utiliza o toLocalString para o format no padrao BRL
    return Number(value).toLocaleString("pt-BR", {
     style: "currency",   
     currency: "BRL",
    
    })

}