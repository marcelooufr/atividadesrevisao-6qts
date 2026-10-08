// tive dificuldade somente na estrutura da conta e como organiza-la no codigo, de resto achei fácil
function calcularJurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa / 100) * tempo;
    return juros;
}

let resultado = calcularJurosSimples(1000, 5, 6);

console.log("Juros: R$ " + resultado);