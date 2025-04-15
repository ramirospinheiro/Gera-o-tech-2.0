const user = {
nome: "ramiro",
altura: 1.76,
peso: 84
}
function imc(user){
    const imc = user.peso / (user.altura * user.altura)
    console.log(imc.toFixed(2))
    if (imc < 16)               {return console.log("magreza grave")}
    if (imc >= 16 && imc < 17)  {return console.log("magreza moderada")}
    if (imc >= 17 && imc < 18)  {return console.log("magreza leve")}
    if (imc >= 18 && imc < 25)  {return console.log("peso normal")}
    if (imc >= 25 && imc < 30)  {return console.log("sobrepeso")}
    if (imc >= 30 && imc < 35)  {return console.log("obesidade grau 1")}
    if (imc >= 35 && imc < 40)  {return console.log("obesidade grau 2")}
    if (imc >= 40)              {return console.log("obesidade grau 3")}
}
imc(user)
