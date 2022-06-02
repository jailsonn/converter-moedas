//console.log("Funcionou o meu arquivo")
//Variavel 
// uma variavel pode ser criada de varios jeitos
/** let dolar = "um texto"
dolar = 12345
console.log(dolar)
*/


let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

// Essa função é responsavel por, converter as moedas
// async e await com o fatch busca as informaçoes la na API do servidor
async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    // console.log(moedas)
    // console.log(euro)


    let inpuValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US Dólar Americano") {
        let valorEmDolares = inpuValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {
        let valorEnEuros = inpuValorEmReais / euro
        inputMoedas.innerHTML = valorEnEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }


    textoReal.innerHTML = inpuValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// Essa função é responsavel por trocar as bandeiras e o nome das moedas
function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    let teste = "abacate"

    if (select.value === "US Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/eua.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"

    }
    converterMoedas()

}



botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)

// console.log(valorEmDolares.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
