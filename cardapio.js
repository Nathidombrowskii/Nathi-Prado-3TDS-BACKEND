const cardapio = [
    {nome: "X-Burguer", preco: 18.90, categoria: "lanche"},
    {nome: "Batata-frita", preco: 9.50, categoria: "acompanhamento"},
    {nome: "Suco de Laranja", preco: 7.00, categoria: "bebida"},
    {nome: "Milkshake", preco: 12.00, categoria: "sobremesa"}
]

console.log(cardapio);

const pedido = [];

console.log(cardapio[0].nome);
console.log(cardapio[1].preco);
console.log(cardapio[2].categoria);

function exibirCardapio(lista) {
    console.log("===CARDPIO===");
    console.log('1. ${lista[0].nome} - R$ ${lista[0]}.preco')
    console.log('2. ${lista[1].nome} - R$ ${lista[1].preco}')
    console.log('3. ${lista[2].nome} - R$ ${lista[2].preco')
    console.log('4. ${lista[3].nome} - R$ ${lista[3].preco}')
}

function calcularTotal(listaPedido) {
    let totatl = listaPedido[0].preco + listaPedido[1].preco;
    return totatl;
}