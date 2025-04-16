// armazenar valor dos inputs altura e peso
// atribuir valor inputado a variaveis puxando as id's dos inputs do html
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")

//armazenar o varlo da div fim que representa o resultado do imc
var fim = document.getElementById("fim")

//armazenar o valor do botão por id
var btn = document.getElementById("btn")


function calcularIMC(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso = peso.value
    //calculo do imc
    const imc = valorPeso / (valorAltura * valorAltura)
    //retornar valor calculado
    return imc
}

//criar funçao de clic
function botaoCalcular(){
    //chama a funçao calcularIMC e armazena o valor
    const imc = calcularIMC()
    var mensagem = ""
    if (imc < 16){
        mensagem = "Você esta com magreza grave"
    }
    if (imc >= 16 && imc < 17){
        mensagem = "Você esta com magreza moderada"
    }
    if (imc >= 17 && imc < 18){
        mensagem = "Você esta com magreza leve"
    }
    if (imc >= 18 && imc < 25){
        mensagem = "Você esta com peso normal"
    }
    if (imc >= 25 && imc < 30){
        mensagem = "Você esta com sobrepeso"
    }
    if (imc >= 30 && imc < 35){
        mensagem = "Você esta com obseidade grau 1"
    }
    if (imc >= 35 && imc < 40){
        mensagem = "Você esta com obseidade grau 2"
    }
    if (imc >= 40){
        mensagem = "Você esta com obseidade grau 3"
    }


    //renderizar o resultado na div de id "fim"
    fim.innerHTML = `
    <div class = "linha"></div>
    <div class = "resultado">
        <div class = "esquerda">
            <h2>${imc.toFixed(2)}</h2>
            <p>Seu IMC</p>
        </div>
        <div class = "direita">
            <p>${mensagem}</p>
        </div>
    </div>
    <div class = "linha"></div>
    `
}

//adicionar evento de click no botao
//modelo: objeto.addEventListener(evento esperado para iniciar, resposta ao evento)
btn.addEventListener("click",botaoCalcular)