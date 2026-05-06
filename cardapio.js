const cardapio = [
    {nome: "X-Burguer", preco: 18.90, categoria: "lanche"},
    {nome: "Batata-Frita", preco: 9.50, categoria: "acompanhamento"},
    {nome: "Suco de Laranja", preco: 7.00, categoria: "bebida"},
    {nome: "Milkshake", preco: 12.00, categoria: "sobremesa"}
];

const pedido = []; //lista vazia, vai receber os itens escolhidos

const cliente = {
    nome: "Ana",
    fidelidade: true
}

//console.log(cardapio[0].nome);
//console.log(cardapio[1].preco); //preço da batata
//console.log(cardapio[2].categoria); //categoria do suco de laranja

function exibirCardapio(lista) {
    console.log("===CARDAPIO===");
    console.log(`1. ${lista[0].nome} - R$ ${lista[0].preco} - ${lista[0].categoria}`)
    console.log(`2. ${lista[1].nome} - R$ ${lista[1].preco} - ${lista[1].categoria}`)
    console.log(`3. ${lista[2].nome} - R$ ${lista[2].preco} - ${lista[2].categoria}`)
    console.log(`4. ${lista[3].nome} - R$ ${lista[3].preco} - ${lista[3].categoria}`)
}

function calcularTotaL(listaPedido){
    let total = listaPedido[0].preco + listaPedido[1].preco;
    return total;
}

function calcularComDesconto(total, clienteObj) {
    if (clienteObj.fidelidade === true) {
        let desconto = total * 0.10;
        console.log(`Desconto fidelidade: R${desconto}`);
        return total - desconto;
    }
    return total;
}


function exibirPedido(listaPedido){
    console.log("===SEU PEDIDO===");
    console.log(`1. ${listaPedido[0].nome} - R$ ${listaPedido[0].preco}`);
    console.log(`2. ${listaPedido[1].nome} - R$ ${listaPedido[1].preco}`);
    console.log(`TOTAL: R$ ${calcularTotaL(listaPedido)}`);
}

exibirCardapio(cardapio);
exibirPedido(pedido);