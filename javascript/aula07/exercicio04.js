//para cada m² gas
function calcularTinta(altura, largura){
    const area = altura * largura
    const litroPorMetro = 2

    const litros = area * litroPorMetro
    console.log(litros)
}

calcularTinta(4,3)