// tive problema pra interpretar claramente oq era pra fazer, fiz do jeito que achava que daria certo, 
depois joguei em i.a para que ela corrigisse
function calcularSubtotalItem(item) {
    return item.preco * item.quantidade;
}

function calcularTotalCarrinho(carrinho) {
    let total = 0;

    for (let item of carrinho) {
        total = total + calcularSubtotalItem(item);
    }

    return total;
}

let carrinho = [
    {
        nome: "Mouse",
        preco: 50,
        quantidade: 2
    },
    {
        nome: "Teclado",
        preco: 100,
        quantidade: 1
    },
    {
        nome: "Fone",
        preco: 80,
        quantidade: 2
    }
];

console.log("Total: R$ " + calcularTotalCarrinho(carrinho));