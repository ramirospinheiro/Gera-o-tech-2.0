//armazenar os valores inputados por id
const dias              = document.getElementById("dia")
const kms               = document.getElementById("km")
const categoria         = document.getElementById("categoria")

//armazenar o valor do botao "calcular" por id
const btn               = document.getElementById("calcular")

// armazenar o valor dos resultados por id
const valorDiarias       = document.getElementById("result-diaria")
const totalDias         = document.getElementById("total-dias")
const resultTotalDias   = document.getElementById("result-total-dias")
const resultKm          = document.getElementById("result-km")
const totalKms          = document.getElementById("total-kms")
const resultTotalKms    = document.getElementById("result-total-kms")
const resultTotal       = document.getElementById("result-total")

function calcular(){
    // cada categoria se torna um objeto para atribuir valores de diaria e km rodados em um unico objeto
    const economico = {
        diaria: 100,
        km: 0.20
    }
    const intermediario = {
        diaria: 150,
        km: 0.40
    }
    const luxo = {
        diaria: 250,
        km: 0.80
    }

    let valorDiaria = 0;
    let valorKm = 0;

    if (categoria.value == "economico") {
        valorDiaria = economico.diaria
        valorKm = economico.km
    }
    if (categoria.value == "intermediario") {
        valorDiaria = intermediario.diaria
        valorKm = intermediario.km
    }
    if (categoria.value == "luxo") {
        valorDiaria = luxo.diaria
        valorKm = luxo.km
    }

    const totalDiarias = valorDiaria * dias.value 
    const calcTotalKms = valorKm * kms.value
    const total = totalDiarias + calcTotalKms

    // exibir resultados
    valorDiarias.innerHTML      = `R$ ${valorDiaria.toFixed(2)}`
    totalDias.innerHTML         = `(${dias.value} Dias)`
    resultTotalDias.innerHTML   = `R$ ${totalDiarias.toFixed(2)}`
    resultKm.innerHTML          = `R$ ${valorKm.toFixed(2)}`
    totalKms.innerHTML          = `(${kms.value} Kms)`
    resultTotalKms.innerHTML    = `R$ ${calcTotalKms.toFixed(2)}`
    resultTotal.innerHTML       = `${total.toFixed(2)}`
}

    //adicionar o evento de clique do botao "calcular"
    btn.addEventListener("click", calcular)
