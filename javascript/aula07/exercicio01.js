// Criação de variaveis

const nome = "Ramiro" // texto - string
const idade = 27    // número - number
const altura = 1.75 // número - number
const maiorDeIdade = true // booleano - boolean (resposta binaria true/false)

console.log("Olá seu nome é " + nome + ", você tem " + idade + " anos e sua altura é " + altura) // concatenação

console.log("olá voce é maior de idade? " + maiorDeIdade)

//template string ou string dinamica
const frase = `olá seu nome é ${nome}, você tem ${idade} anos e sua altura é ${altura}.`
console.log(frase)
