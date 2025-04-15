//uma llista para modelos de carros

const modelos = ["fusca","civic","palio","corolla"]
console.log(modelos)

//adicionar um novo elemento ao final lista/array


modelos.push("montana")
console.log(modelos)

//contagem de elementos de uma array, ou seja, o cumprimento da lista em unidades
modelos.length
console.log(modelos.length)

modelos.push("320i")

//remover o ultimo elemento de um array
modelos.pop() // removeu 320i
console.log(modelos)
console.log(modelos.length)

//remover um elemento especifico
//faz um splice/corte da lista e retorna quantas listas forem definidas
//modelo -> varivael.splice(index a ser removido , quantas listas sao formadas com o corte)
modelos.splice(1,1)
console.log(modelos)


