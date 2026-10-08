// foi o unico que consegui de primeira, acho que por nao ter pontuação ou formula "complicada"
function exibirResumoProduto(produto) {
    return "Produto: " + produto.nome +
           " | Preço: R$ " + produto.preco +
           " | Estoque: " + produto.quantidade + " unidades.";
}

let produto = {
    nome: "Teclado",
    preco: 150,
    quantidade: 10
};

console.log(exibirResumoProduto(produto));