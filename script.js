//Etapa 1
console.log("JavaScript carregado!") // De cara console.log("JavaScript carregado!") Etapa 1 ok! Ver se o JS está realmente conectado ao HTML

//Etapa 2
const convertButton = document.querySelector(".convert") //Variavel const criada para guardar os dados da classe (convert) do HTML, a mesma está sendo buscado pelo querySelector
console.log("funcionou?") //Imprime no console a mensagem "funcionou?" se a ação da linha acima estiver correta
const invertButon = document.querySelector(".troca-moeda")
console.log("Botão inversor de moedas, ativado!")

// Etapa 6...
const currencySelectToConvert1 = document.querySelector(".currency-select-top")
const currencySelectToConvert2 = document.querySelector(".currency-select-down") // essa variavel da Etapa 6 está fora de ordem porque é necessario que ela seja declarada antes da função do botão, pois ela guarda o valor da escolha entre Dolar e Euro



// if(currencySelectToConvert1.value =="Real1" && currencySelectToConvert2.value =="Dollar"){
//     currencySelectToConvert2.removeChild(removedReal)
// }

// if (currencySelectToConvert1.value =="Dollar1" && currencySelectToConvert2.value == "Dollar"){
//     alert("Escolha outra moeda de cambio")
// }

// if(currencySelectToConvert2.value =="Dollar"){
//     currencySelectToConvert1.removeChild(removedDollarTop)
// }

function convertValues(){ //Primeira função que usei no Java Script, essa serve para guardar o evento click do botão Converter que está no HTML
    console.log("Funcionou!") //Essa linha serve para retornar no console se realmente a função está sendo acionada ao clicar no botão.
        
    //Etapa 3
    const inputCurrencyValue = document.querySelector(".input-currency").value //Cria uma variavel const que vai buscar no HTML somente valor que foi digitado na classe input-currency
    console.log(inputCurrencyValue) //imprime no console o valor guardado na variavel inputeCurrencyValue

//Etapa 6 continuação...
    console.log(currencySelectToConvert1.value)
    console.log(currencySelectToConvert2.value)

    //Etapa 4
 
 //Real
    const dolarToday = 0.20 //variavel const criada para pegar o valor do dolar, no dia 06/04/2024 está a 5,07
    const euroToday = 0.18
  //variavel const criada para pegar o valor do euro, no dia 06/04/2024 está a 5,50

    const convertedValueRealDolar = inputCurrencyValue*dolarToday //faz o cálculo de conversão de real pra dolar e guarda o valor na variavel convertedValueDolar

//Etapa 7...   
 //Real
    const bitcoinToday = 0.0000029
    const pesoArgentinoToday = 172.63
    const libraToday = 0.16
    const ieneToday = 30.30

    const convertedValueRealEuro = inputCurrencyValue*euroToday  //faz o cálculo de conversão de real pra EURO e guarda o valor na variavel convertedValueEuro  
    const convertedValueRealBitcoin = inputCurrencyValue*bitcoinToday
    const convertedValueRealPesoArgentino = inputCurrencyValue*pesoArgentinoToday
    const convertedValueRealLibra = inputCurrencyValue*libraToday
    const convertedValueRealIene = inputCurrencyValue*ieneToday


    if(currencySelectToConvert1.value == "Real1"){
        console.log(convertedValueRealDolar) //imprime no console o valor da variavel convertedValueRealDolar
        console.log("Converteu Real pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueRealEuro) //Imprime no console o valor da variael ConvertedValueRealEuro
        console.log("Converteu Real pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueRealBitcoin) //Imprime no console o valor da variael ConvertedValueRealBitcoin
        console.log("Converteu Real pra Bitcoin!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueRealPesoArgentino)//Imprime no console o valor da variael ConvertedValueRealPesoArgetino
        console.log("Converteu Real pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueRealLibra)//Imprime no console o valor da variael ConvertedValueRealLibra
        console.log("Converteu Real pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueRealIene)//Imprime no console o valor da variael ConvertedValueRealIene
        console.log("Converteu Real pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }
//Dollar
    const euroDollarToday = 0.92
    const bitcoinDollarToday = 0.000014
    const pesoArgentinoDollarToday = 864.75
    const libraDollarToday = 0.79
    const ieneDollarToday = 151.76
    const realDollarToday = 5.01

    const convertedValueDollarEuro = inputCurrencyValue*euroDollarToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValueDollarBitcoin = inputCurrencyValue*bitcoinDollarToday
    const convertedValueDollarPesoArgentino = inputCurrencyValue*pesoArgentinoDollarToday
    const convertedValueDollarLibra = inputCurrencyValue*libraDollarToday
    const convertedValueDollarIene = inputCurrencyValue*ieneDollarToday
    const convertedValueDollarReal = inputCurrencyValue*realDollarToday

    if(currencySelectToConvert1.value == "Dollar1"){
        console.log(convertedValueDollarReal) //imprime no console o valor da variavel convertedValueDollarReal
        console.log("Converteu Dollar pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueDollarEuro) //Imprime no console o valor da variael ConvertedValueDollarEuro
        console.log("Converteu Dollar pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueDollarBitcoin) //Imprime no console o valor da variael ConvertedValueDollarBitcoin
        console.log("Converteu Dollar pra Bitcoin!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueDollarPesoArgentino)//Imprime no console o valor da variael ConvertedValueDollarPesoArgetino
        console.log("Converteu Dollar pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueDollarLibra)//Imprime no console o valor da variael ConvertedValueDollarLibra
        console.log("Converteu Dollar pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueDollarIene)//Imprime no console o valor da variael ConvertedValueDollarIene
        console.log("Converteu Dollar pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }
//Bitcoin
    const euroBitcoinToday = 63665.08
    const dollarBitcoinToday = 69057.90
    const pesoArgentinoBitcoinToday = 59743605.49
    const libraBitcoinToday = 54504.43
    const ieneBitcoinToday = 10486016.48
    const realBitcoinToday = 346065.70

    const convertedValueBitcoinEuro = inputCurrencyValue*euroBitcoinToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValueBitcoinDollar = inputCurrencyValue*dollarBitcoinToday
    const convertedValueBitcoinPesoArgentino = inputCurrencyValue*pesoArgentinoBitcoinToday
    const convertedValueBitcoinLibra = inputCurrencyValue*libraBitcoinToday
    const convertedValueBitcoinIene = inputCurrencyValue*ieneBitcoinToday
    const convertedValueBitcoinReal = inputCurrencyValue*realBitcoinToday

    if(currencySelectToConvert1.value == "Bitcoin1"){
        console.log(convertedValueBitcoinReal) //imprime no console o valor da variavel convertedValueBitcoinReal
        console.log("Converteu Bitcoin pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueBitcoinEuro) //Imprime no console o valor da variael ConvertedValueBitcoinEuro
        console.log("Converteu Bitcoin pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueBitcoinDollar) //Imprime no console o valor da variael ConvertedValueBitcoinDollar
        console.log("Converteu Bitcoin pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueBitcoinPesoArgentino)//Imprime no console o valor da variael ConvertedValueBitcoinPesoArgetino
        console.log("Converteu Bitcoin pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueBitcoinLibra)//Imprime no console o valor da variael ConvertedValueBitcoinLibra
        console.log("Converteu Bitcoin pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueBitcoinIene)//Imprime no console o valor da variael ConvertedValueBitcoinIene
        console.log("Converteu Bitcoin pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }
//Euro
    const bitcoinEuroToday = 0.000016
    const dollarEuroToday = 1.09
    const pesoArgentinoEuroToday = 938.38
    const libraEuroToday = 0.86
    const ieneEuroToday = 164.72
    const realEuroToday = 5.44

    const convertedValueEuroBitcoin = inputCurrencyValue*bitcoinEuroToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValueEuroDollar = inputCurrencyValue*dollarEuroToday
    const convertedValueEuroPesoArgentino = inputCurrencyValue*pesoArgentinoEuroToday
    const convertedValueEuroLibra = inputCurrencyValue*libraEuroToday
    const convertedValueEuroIene = inputCurrencyValue*ieneEuroToday
    const convertedValueEuroReal = inputCurrencyValue*realEuroToday

    if(currencySelectToConvert1.value == "Euro1"){
        console.log(convertedValueEuroReal) //imprime no console o valor da variavel convertedValueEuroReal
        console.log("Converteu Euro pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueEuroBitcoin) //Imprime no console o valor da variael ConvertedValueEuroBitcoin
        console.log("Converteu Euro pra Bitcoin!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueEuroDollar) //Imprime no console o valor da variael ConvertedValueEuroDollar
        console.log("Converteu Euro pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueEuroPesoArgentino)//Imprime no console o valor da variael ConvertedValueEuroPesoArgetino
        console.log("Converteu Euro pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueEuroLibra)//Imprime no console o valor da variael ConvertedValueEuroLibra
        console.log("Converteu Euro pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueEuroIene)//Imprime no console o valor da variael ConvertedValueEuroIene
        console.log("Converteu Euro pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }
// Libra
    const euroLibraToday = 1.17
    const dollarLibraToday = 1.27
    const pesoArgentinoLibraToday = 1096.12
    const bitcoinLibraToday = 0.000018
    const ieneLibraToday = 192.41
    const realLibraToday = 6.35

    const convertedValueLibraBitcoin = inputCurrencyValue*bitcoinLibraToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValueLibraDollar = inputCurrencyValue*dollarLibraToday
    const convertedValueLibraPesoArgentino = inputCurrencyValue*pesoArgentinoLibraToday
    const convertedValueLibraEuro = inputCurrencyValue*euroLibraToday
    const convertedValueLibraIene = inputCurrencyValue*ieneLibraToday
    const convertedValueLibraReal = inputCurrencyValue*realLibraToday

    if(currencySelectToConvert1.value == "Libra1"){
    console.log(convertedValueLibraReal) //imprime no console o valor da variavel convertedValueLibraReal
    console.log("Converteu Libra pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueLibraBitcoin) //Imprime no console o valor da variael ConvertedValueLibraBitcoin
    console.log("Converteu Libra pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueLibraDollar) //Imprime no console o valor da variael ConvertedValueLibraDollar
    console.log("Converteu Libra pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueLibraPesoArgentino)//Imprime no console o valor da variael ConvertedValueLibraPesoArgetino
    console.log("Converteu Libra pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueLibraEuro)//Imprime no console o valor da variael ConvertedValueLibraEuro
    console.log("Converteu Libra pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
    console.log(convertedValueLibraIene)//Imprime no console o valor da variael ConvertedValueLibraIene
    console.log("Converteu Libra pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }

//Peso Argentino
    const libraPesoArgentinoToday = 0.00091
    const dollarPesoArgentinoToday = 0.0012
    const euroPesoArgentinoToday = 0.0011
    const bitcoinPesoArgentinoToday = 1.7e-8
    const ienePesoArgentinoToday = 0.18
    const realPesoArgentinoToday = 0.0058

    const convertedValuePesoArgentinoBitcoin = inputCurrencyValue*bitcoinPesoArgentinoToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValuePesoArgentinoDollar = inputCurrencyValue*dollarPesoArgentinoToday
    const convertedValuePesoArgentinoLibra = inputCurrencyValue*libraPesoArgentinoToday
    const convertedValuePesoArgentinoEuro = inputCurrencyValue*euroPesoArgentinoToday
    const convertedValuePesoArgentinoIene = inputCurrencyValue*ienePesoArgentinoToday
    const convertedValuePesoArgentinoReal = inputCurrencyValue*realPesoArgentinoToday

    if(currencySelectToConvert1.value == "Peso Argentino1"){
        console.log(convertedValuePesoArgentinoReal) //imprime no console o valor da variavel convertedValuePesoArgentinoReal
        console.log("Converteu Peso Argentino pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValuePesoArgentinoBitcoin) //Imprime no console o valor da variael ConvertedValuePesoArgentinoBitcoin
        console.log("Converteu Peso Argentino pra Bitcoin!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValuePesoArgentinoDollar) //Imprime no console o valor da variael ConvertedValuePesoArgentinoDollar
        console.log("Converteu Peso Argentino pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValuePesoArgentinoEuro)//Imprime no console o valor da variael ConvertedValuePesoArgentinoLibra
        console.log("Converteu Peso Argentino pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValuePesoArgentinoLibra)//Imprime no console o valor da variael ConvertedValuePesoArgentinoEuro
        console.log("Converteu Peso Argentino pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValuePesoArgentinoIene)//Imprime no console o valor da variael ConvertedValuePesoArgentinoIene
        console.log("Converteu Peso Argentino pra Iene!") //imprime uma mensagem mostrando que deu certo a conversão
    }    
//Iene
    const libraIeneToday = 0.0052
    const dollarIeneToday = 0.0066
    const euroIeneToday = 0.0061
    const bitcoinIeneToday = 1.7e-8
    const pesoArgentinoIeneToday = 5.70
    const realIeneToday = 0.033

    const convertedValueIeneBitcoin = inputCurrencyValue*bitcoinIeneToday  //faz o cálculo de conversão de Dollar pra EURO e guarda o valor na variavel convertedValueDollarEuro  
    const convertedValueIeneDollar = inputCurrencyValue*dollarIeneToday
    const convertedValueIeneLibra = inputCurrencyValue*libraIeneToday
    const convertedValueIeneEuro = inputCurrencyValue*euroIeneToday
    const convertedValueIenePesoArgentino = inputCurrencyValue*pesoArgentinoIeneToday
    const convertedValueIeneReal = inputCurrencyValue*realIeneToday

    if(currencySelectToConvert1.value == "Iene1"){
        console.log(convertedValueIeneReal) //imprime no console o valor da variavel convertedValuePesoArgentinoReal
        console.log("Converteu Iene pra Real!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueIeneBitcoin) //Imprime no console o valor da variael ConvertedValuePesoArgentinoBitcoin
        console.log("Converteu Iene pra Bitcoin") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueIeneDollar) //Imprime no console o valor da variael ConvertedValuePesoArgentinoDollar
        console.log("Converteu Iene pra Dollar!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueIeneEuro)//Imprime no console o valor da variael ConvertedValuePesoArgentinoLibra
        console.log("Converteu Iene pra Euro!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueIeneLibra)//Imprime no console o valor da variael ConvertedValuePesoArgentinoEuro
        console.log("Converteu Iene pra Libra!") //imprime uma mensagem mostrando que deu certo a conversão
        console.log(convertedValueIenePesoArgentino)//Imprime no console o valor da variael ConvertedValuePesoArgentinoIene
        console.log("Converteu Iene pra Peso Argentino!") //imprime uma mensagem mostrando que deu certo a conversão
    }

    //Etapa 5
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Variavel criada para guardar o valor digitado no paragrafo da classe currency-value-to-convert
     const currencyValueConverted = document.querySelector(".currency-value") // Variavel criada para guardar o valor calculado no paragrafo da classe currency-value
     
    if(currencySelectToConvert1.value =="Real1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Brasil já com mascara formatada") //Teste para verificar se a linha acima funcionou
     
    }
    if(currencySelectToConvert1.value =="Dollar1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do EUA já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value =="Euro1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar EURO -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "Euro"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Euro já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value =="Bitcoin1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar BITCOIN -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Bitcoin já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value =="Libra1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira da Libra já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value =="Iene1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar Iene -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Japão já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value =="Peso Argentino1"){
     currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format (inputCurrencyValue) // Pega o valor digitado no input pra ser convertido e guarda na variavel currencyValueToConvert - Máscara de formatação para colocar Peso Argentino -> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format()
     console.log("Pegou o valor a converter e colocou a baixo da bandeira do Peso Argentino já com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
     //currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueDolar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
     //console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
     // Alinha acima virou parte da Etapa 7

//Etapa 7 continuação...

//Real
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueRealDolar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueRealEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValueRealBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do símbolo de Bitcoin - Máscara de formatação para colocar Bitcoin -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValueRealLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValueRealIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(convertedValueRealPesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Real"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }    

//Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueBitcoinDollar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueBitcoinEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValueBitcoinReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValueBitcoinLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValueBitcoinIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(convertedValueBitcoinPesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Bitcoin"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }    

    //Dollar
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValueDollarBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueDollarEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValueDollarReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValueDollarLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValueDollarIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(convertedValueDollarPesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Dollar"){
        alert("Por favor não usar a mesma moeda de cambio")
        console.log("Alerta funcionou")
    }    

     //Peso Argentino
     if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValuePesoArgentinoBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValuePesoArgentinoEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValuePesoArgentinoReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValuePesoArgentinoLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValuePesoArgentinoIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValuePesoArgentinoDollar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Peso Argentino"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }

    //Euro
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValueEuroBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format(convertedValueEuroPesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValueEuroReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValueEuroLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValueEuroIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueEuroDollar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Euro"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }

    //Libra
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValueLibraBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format(convertedValueLibraPesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValueLibraReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueLibraEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Iene"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format(convertedValueLibraIene)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueLibraDollar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Libra"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }

    //Iene
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "BTC"}).format(convertedValueIeneBitcoin)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira dos EUA - Máscara de formatação para colocar US$ -> new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do Dolar ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Peso Argentino"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format(convertedValueIenePesoArgentino)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Euro - Máscara de formatação para colocar Euro -> new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValueIeneReal)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo da bandeira do Brasil - Máscara de formatação para colocar R$ -> new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(convertedValueIeneEuro)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo de Libra - Máscara de formatação para colocar Libra -> new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(convertedValueIeneLibra)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do Iene - Máscara de formatação para colocar IENE -> new Intl.NumberFormat("ja-JA", {style: "currency", currency: "JPY"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValueIeneDollar)//Pega o resultado da conversão e guarda na variavel currencyValueConverted, assim ele adiciona o valor guardado abaixo do simbolo do peso argentino- Máscara de formatação pra colocar Peso Argentino-> new Intl.NumberFormat("es-AR", {style: "currency", currency: "ASR"}).format()
        console.log("Pegou o valor convertido e colocou a baixo da bandeira do EURO ja com mascara formatada") //Teste para verificar se a linha acima funcionou
    }
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Iene"){
        alert("Por favor não usar a mesma moeda de cambio!")
        console.log("Alerta funcionou")
    }
}

//Etapa 8
function changeCurrencyTop(){
    const currencyNameTop = document.getElementById("currency-name-top")
    const currencyImgTop = document.querySelector(".currency-img-top")
    const currencyValueChangeTop = document.querySelector(".currency-value-to-convert")
    console.log("Esse é o dado encontrado na variavel currencyValueChangeTop", currencyValueChangeTop)
    const currencyInputValueChangeTop = document.querySelector(".input-currency").value
    console.log("Esse é o dado encontrado na variavel currencyInputChangeTop", currencyInputValueChangeTop)
    const currencyZeradaTop = 0
    console.log("Este é o valor de currencyZeradaTop: ", currencyZeradaTop)
    const zeraCurrencyTop = currencyInputValueChangeTop*currencyZeradaTop
    console.log("O calculo de zeraDollar deu: ", zeraCurrencyTop)

    
    if(currencySelectToConvert1.value == "Dollar1"){
        currencyNameTop.innerHTML = "US$ Dollar"
        currencyImgTop.src = "./Assets/Dollar.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
        console.log("o valor de currencyValueChangeTop é: ", currencyValueChangeTop)
    //     currencySelectToConvert2.removeChild(removedDollar)
    //     console.log("Removeu o dollar")
    // } else if (currencySelectToConvert1.value != "Dollar1"){
    //     currencySelectToConvert2.appendChild(removedDollar)
    }

    if(currencySelectToConvert1.value == "Euro1"){
        currencyNameTop.innerHTML = "€ Euro"
        currencyImgTop.src = "./Assets/Euro.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedEuro)
    // }else if (currencySelectToConvert1.value !== "Euro1"){
    //     currencySelectToConvert2.appendChild(removedEuro)
    }
    if(currencySelectToConvert1.value == "Real1"){
        currencyNameTop.innerHTML = "R$ Real"
        currencyImgTop.src = "./Assets/Real.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedReal)
    // }else if (currencySelectToConvert1.value != "Real1"){
    //     currencySelectToConvert2.appendChild(removedReal)
    }
    
    if(currencySelectToConvert1.value == "Libra1"){
        currencyNameTop.innerHTML = "£ Libra"
        currencyImgTop.src = "./Assets/libra.png"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedLibra)
    // }else if (currencySelectToConvert1.value !== "Libra1"){
    //     currencySelectToConvert2.appendChild(removedLibra)
    }
    
    if(currencySelectToConvert1.value == "Bitcoin1"){
        currencyNameTop.innerHTML = "₿ Bitcoin"
        currencyImgTop.src = "./Assets/bitcoin.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedBitcoin)
    // }else if (currencySelectToConvert1.value !== "Bitcoin1"){
    //     currencySelectToConvert2.appendChild(removedBitcoin)
    }
    
    if(currencySelectToConvert1.value == "Peso Argentino1"){
        currencyNameTop.innerHTML = "$ Peso Argentino"
        currencyImgTop.src = "./Assets/peso argentino.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedPesoArgentino)
    // }else if (currencySelectToConvert1.value !== "Peso Argentino1"){
    //     currencySelectToConvert2.appendChild(removedPesoArgentino)
    }
    
    if(currencySelectToConvert1.value == "Iene1"){
        currencyNameTop.innerHTML = "¥ Iene"
        currencyImgTop.src = "./Assets/iene.jpg"
        currencyValueChangeTop.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyTop)
    //     currencySelectToConvert2.removeChild(removedIene)
    // }else if (currencySelectToConvert1.value !== "Iene1"){
    //     currencySelectToConvert2.appendChild(removedIene)
    }
    
    console.log("trocou de moeda1")
    
}

function changeCurrencyDown(){
    const currencyNameDown = document.getElementById("currency-name-down")
    const currencyImgDown = document.querySelector(".currency-img-down")
    //const currencyInputDown = document.getElementsByClassName(".input-currency").value
    const currencyValueChangeDown = document.querySelector(".currency-value")
    console.log("Esse é o dado encontrado na variavel currencyValueChangeDown", currencyValueChangeDown)
    const currencyInputValueChangeDown = document.querySelector(".input-currency").value
    console.log("Esse é o dado encontrado na variavel currencyInputChangeDown", currencyInputValueChangeDown)
    const currencyZeradaDown = 0
    console.log("Este é o valor de currencyZerada: ", currencyZeradaDown)
    const zeraCurrencyDown = currencyInputValueChangeDown*currencyZeradaDown
    console.log("O calculo de zeraDollar deu: ", zeraCurrencyDown)

    if(currencySelectToConvert2.value == "Dollar"){
        currencyNameDown.innerHTML = "US$ Dollar"
        currencyImgDown.src = "./Assets/Dollar.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedDollarTop)
    // }else if (currencySelectToConvert2.value !== "Dollar"){
    //     currencySelectToConvert1.appendChild(removedDollarTop)
    }
    

    if(currencySelectToConvert2.value == "Euro"){
        currencyNameDown.innerHTML = "Euro"
        currencyImgDown.src = "./Assets/Euro.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedEuroTop)
    // }else if (currencySelectToConvert2.value !== "Euro"){
    //     currencySelectToConvert1.appendChild(removedEuroTop)
    }
    if(currencySelectToConvert2.value == "Bitcoin"){
        currencyNameDown.innerHTML = "Bitcoin"
        currencyImgDown.src = "./Assets/bitcoin.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedBitcoinTop)
    // }else if (currencySelectToConvert2.value !== "Bitcoin"){
    //     currencySelectToConvert1.appendChild(removedBitcoinTop)
    }
    if(currencySelectToConvert2.value == "Iene"){
        currencyNameDown.innerHTML = "Iene"
        currencyImgDown.src = "./Assets/iene.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedIeneTop)
    // }else if (currencySelectToConvert2.value !== "Iene"){
    //     currencySelectToConvert1.appendChild(removedIeneTop)
    }
    if(currencySelectToConvert2.value == "Libra"){
        currencyNameDown.innerHTML = "Libra"
        currencyImgDown.src = "./Assets/libra.png"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedlibraTop)
    // }else if (currencySelectToConvert2.value !== "Libra"){
    //     currencySelectToConvert1.appendChild(removedlibraTop)
    }
    if(currencySelectToConvert2.value == "Peso Argentino"){
        currencyNameDown.innerHTML = "Peso Argentino"
        currencyImgDown.src = "./Assets/peso argentino.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
    // }else if (currencySelectToConvert2.value !== "Peso Argentino"){
    //     currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
    }
    if(currencySelectToConvert2.value == "Real"){
        currencyNameDown.innerHTML = "Real"
        currencyImgDown.src = "./Assets/Real.jpg"
        currencyValueChangeDown.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(zeraCurrencyDown)
    //     currencySelectToConvert1.removeChild(removedRealTop)
    // }else if (currencySelectToConvert2.value !== "Real"){
    //     currencySelectToConvert1.appendChild(removedRealTop)
    }
    console.log("trocou de moeda2")
    
}

function invertValues(){
    const currencyNameDownInvert = document.getElementById("currency-name-down")
    const currencyImgDownInvert = document.querySelector(".currency-img-down")
    const currencyNameTopInvert = document.getElementById("currency-name-top")
    const currencyImgTopInvert = document.querySelector(".currency-img-top")
    // const currencyZeraSelect1 = document.querySelector("campo-zerado-top")
    // const currencyZeraSelect2 = document.querySelector("campo-zerado-down")

    // const removedReal = document.getElementById("select-real-down")
    // const removedDollar = document.getElementById("select-dollar-down")
    // const removedBitcoin = document.getElementById("select-bitcoin-down")
    // const removedIene = document.getElementById("select-iene-down")
    // const removedLibra = document.getElementById("select-libra-down")
    // const removedEuro = document.getElementById("select-euro-down")
    // const removedPesoArgentino = document.getElementById("select-peso-argentino-down")

    // const removedRealTop = document.getElementById("select-real-top")
    // const removedDollarTop = document.getElementById("select-dollar-top")
    // const removedBitcoinTop = document.getElementById("select-bitcoin-top")
    // const removedIeneTop = document.getElementById("select-iene-top")
    // const removedLibraTop = document.getElementById("select-libra-top")
    // const removedEuroTop = document.getElementById("select-euro-top")
    // const removedPesoArgentinoTop = document.getElementById("select-peso-argentino-top")

    //////////////////////// REVERSÃO DOLLAR///////////////////////////
//Real-Dollar | Dollar-Real


    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Dollar"){
       
        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Real"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"

        convertValues()
        console.log("Inverteu!")
    } else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Real") {
        
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedReal)
        // currencySelectToConvert2.appendChild(removedDollar)

        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
    
    convertValues()
    console.log("Reinverteu!")
    }
    
//Iene-Dollar | Dollar-Iene
    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Dollar"){
        
        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Iene"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedIene)
        // currencySelectToConvert2.appendChild(removedDollar)


        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
       
        convertValues()
        console.log("Reinverteu!")
    }
//Bitcoin-Dollar | Dollar-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Dollar"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedBitcoin)
        // currencySelectToConvert2.appendChild(removedDollar)


        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        
        convertValues()
        console.log("Reinverteu!")
    }
//Libra-Dollar | Dollar-Libra
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Dollar"){

        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Libra"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/libra.png"
        
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedLibra)
        // currencySelectToConvert2.appendChild(removedDollar)


        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/libra.png"
        
        convertValues()
        console.log("Reinverteu!")
    }
//Peso Argentino-Dollar | Dollar-Peso Argentino
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Dollar"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedPesoArgentino)
        // currencySelectToConvert2.appendChild(removedDollar)


        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        
        convertValues()
        console.log("Reinverteu!")
    }
//Euro-Dollar | Dollar-Euro
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Dollar"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedDollarTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedDollar)

        currencySelectToConvert1.value = "Dollar1"
        currencySelectToConvert2.value = "Euro"
        currencyNameTopInvert.innerHTML = "US$ Dollar"
        currencyImgTopInvert.src = "./Assets/Dollar.jpg"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
       
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Euro"){

        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert1.removeChild(removedDollarTop)
        // currencySelectToConvert2.removeChild(removedEuro)
        // currencySelectToConvert2.appendChild(removedDollar)


        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Dollar"
        currencyNameDownInvert.innerHTML = "US$ Dollar"
        currencyImgDownInvert.src = "./Assets/Dollar.jpg"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
       
        convertValues()
        console.log("Reinverteu!")
    }
    
//////////////////////// REVERSÃO IENE///////////////////////////
    
 //Euro-Iene | Iene-Euro   
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedIene)

        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Euro"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Euro"){

        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedEuro)


        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Iene"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
 //Real-Iene | Iene-Real  
    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedIene)

        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Real"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Real"){

        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedReal)

        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Iene"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Peso Argentino-Iene | Iene-Peso Argentino  
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedIene)

        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedPesoArgentino)

        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Iene"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Libra-Iene | Iene-Libra
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedIene)

        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Libra"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedLibra)

        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Iene"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Reinverteu!")
    }
//Bitcoin-Iene | Iene-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Iene"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedIeneTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedIene)

        currencySelectToConvert1.value = "Iene1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "¥ Iene"
        currencyImgTopInvert.src = "./Assets/iene.jpg"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.removeChild(removedIeneTop)
        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert2.appendChild(removedIene)
        // currencySelectToConvert2.removeChild(removedBitcoin)

        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Iene"
        currencyNameDownInvert.innerHTML = "¥ Iene"
        currencyImgDownInvert.src = "./Assets/iene.jpg"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Reinverteu!")
    }

//////////////////////// REVERSÃO BITCOIN///////////////////////////
    
//Bitcoin-Real | Real-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Real"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedReal)

        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedBitcoin)

        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Real"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Bitcoin-Euro | Euro-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Euro"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedEuro)

        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedBitcoin)

        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Euro"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Bitcoin-Peso Argentino | Peso Argentino-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedPesoArgentino)

        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedBitcoin)

        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Bitcoin-Libra | Libra-Bitcoin
    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.removeChild(removedBitcoinTop)
        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert2.appendChild(removedBitcoin)
        // currencySelectToConvert2.removeChild(removedLibra)

        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Bitcoin"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/Libra.png"
        currencyNameDownInvert.innerHTML = "₿ Bitcoin"
        currencyImgDownInvert.src = "./Assets/bitcoin.jpg"
        //convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Bitcoin"){

        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedBitcoinTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedBitcoin)

        currencySelectToConvert1.value = "Bitcoin1"
        currencySelectToConvert2.value = "Libra"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/Libra.png"
        currencyNameTopInvert.innerHTML = "₿ Bitcoin"
        currencyImgTopInvert.src = "./Assets/bitcoin.jpg"
        //convertValues()
        console.log("Reinverteu!")
    }
//////////////////////// REVERSÃO REAL///////////////////////////
    
//Libra-Real | Real-Libra
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Real"){

        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedReal)

        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Libra"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedLibra)

        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Real"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Reinverteu!")
    }
//Peso Argentino-Real | Real-Peso Argentino
    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Real"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedReal)


        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedPesoArgentino)

        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Real"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Euro-Real | Real-Euro
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Real"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedRealTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedReal)


        currencySelectToConvert1.value = "Real1"
        currencySelectToConvert2.value = "Euro"
        currencyNameTopInvert.innerHTML = "R$ Real"
        currencyImgTopInvert.src = "./Assets/Real.jpg"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Euro"){

        // currencySelectToConvert1.removeChild(removedRealTop)
        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert2.appendChild(removedReal)
        // currencySelectToConvert2.removeChild(removedEuro)

        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Real"
        currencyNameDownInvert.innerHTML = "R$ Real"
        currencyImgDownInvert.src = "./Assets/Real.jpg"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//////////////////////// REVERSÃO EURO///////////////////////////
    
//Peso Argentino-Euro | Peso Argentino-Euro
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedPesoArgentino)

        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Euro"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Euro"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedEuro)

        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//Libra-Euro | Libra-Euro
    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.removeChild(removedEuroTop)
        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert2.appendChild(removedEuro)
        // currencySelectToConvert2.removeChild(removedLibra)

        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Euro"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/libra.png"
        currencyNameDownInvert.innerHTML = "€ Euro"
        currencyImgDownInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Euro"){
        
        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedEuroTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedEuro)
        
        currencySelectToConvert1.value = "Euro1"
        currencySelectToConvert2.value = "Libra"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/libra.png"
        currencyNameTopInvert.innerHTML = "€ Euro"
        currencyImgTopInvert.src = "./Assets/Euro.jpg"
        convertValues()
        console.log("Reinverteu!")
    }
//////////////////////// REVERSÃO LIBRA///////////////////////////
    
//Peso Argentino-Libra  | Peso Argentino-Libra
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Peso Argentino"){

        // currencySelectToConvert1.removeChild(removedLibraTop)
        // currencySelectToConvert1.appendChild(removedPesoArgentinoTop)
        // currencySelectToConvert2.appendChild(removedLibra)
        // currencySelectToConvert2.removeChild(removedPesoArgentinoTop)


        currencySelectToConvert1.value = "Peso Argentino1"
        currencySelectToConvert2.value = "Libra"
        currencyNameTopInvert.innerHTML = "$ Peso Argentino"
        currencyImgTopInvert.src = "./Assets/peso argentino.jpg"
        currencyNameDownInvert.innerHTML = "£ Libra"
        currencyImgDownInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Inverteu!")
    }else if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Libra"){

        // currencySelectToConvert1.removeChild(removedPesoArgentinoTop)
        // currencySelectToConvert1.appendChild(removedLibraTop)
        // currencySelectToConvert2.appendChild(removedPesoArgentino)
        // currencySelectToConvert2.removeChild(removedLibra)

        currencySelectToConvert1.value = "Libra1"
        currencySelectToConvert2.value = "Peso Argentino"
        currencyNameDownInvert.innerHTML = "$ Peso Argentino"
        currencyImgDownInvert.src = "./Assets/peso argentino.jpg"
        currencyNameTopInvert.innerHTML = "£ Libra"
        currencyImgTopInvert.src = "./Assets/libra.png"
        convertValues()
        console.log("Reinverteu!")
    }

//////////////////////// REVERSÃO PESO ARGENTINO///////////////////////////
    //AS REVERSÕES DE PESO ARGENTINO ESTÃO DENTRO DAS OUTRAS REVERSÕES


// Tratamento de igualdade
    if(currencySelectToConvert1.value == "Libra1" && currencySelectToConvert2.value == "Libra"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if (currencySelectToConvert1.value == "Libra" && currencySelectToConvert2.value == "Libra1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

    if(currencySelectToConvert1.value == "Real1" && currencySelectToConvert2.value == "Real"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if (currencySelectToConvert1.value == "Real" && currencySelectToConvert2.value == "Real1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

    if(currencySelectToConvert1.value == "Euro1" && currencySelectToConvert2.value == "Euro"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if(currencySelectToConvert1.value == "Euro" && currencySelectToConvert2.value == "Euro1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

    if(currencySelectToConvert1.value == "Peso Argentino1" && currencySelectToConvert2.value == "Peso Argentino"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if(currencySelectToConvert1.value == "Peso Argentino" && currencySelectToConvert2.value == "Peso Argentino1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }    

    if(currencySelectToConvert1.value == "Dollar1" && currencySelectToConvert2.value == "Dollar"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if(currencySelectToConvert1.value == "Dollar" && currencySelectToConvert2.value == "Dollar1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

    if(currencySelectToConvert1.value == "Bitcoin1" && currencySelectToConvert2.value == "Bitcoin"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if(currencySelectToConvert1.value == "Bitcoin" && currencySelectToConvert2.value == "Bitcoin1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

    if(currencySelectToConvert1.value == "Iene1" && currencySelectToConvert2.value == "Iene"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }else if(currencySelectToConvert1.value == "Iene" && currencySelectToConvert2.value == "Iene1"){
        alert("Por favor, selecione moedas de cambio diferentes!")
    }

}


currencySelectToConvert1.addEventListener("change", changeCurrencyTop)   
currencySelectToConvert2.addEventListener("change", changeCurrencyDown)   


convertButton.addEventListener("click", convertValues)// Pega o valor da variavel ConvertButton e a coloca sobre o comando do AddEventListener, click nesse caso, ou seja, sempre que o botão for clicado ele addEventeListener irá chamar a função ConvertValues e vai executar o que estiver dentro dela que no caso é uma impressão no console com a mensagem: Funcionou!
invertButon.addEventListener("click", invertValues)