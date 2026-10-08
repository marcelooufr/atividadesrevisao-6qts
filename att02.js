// custei a fazer as chaves do jeito certo e mesmo assim acho q nao deu
function verificarOrcamento(valorProduto, saldoDisponivel) {
    if (saldoDisponivel >= valorProduto) {
        return true;
    } else {
        return false;
    }
}

let resultado = verificarOrcamento(500, 700);

console.log(resultado);