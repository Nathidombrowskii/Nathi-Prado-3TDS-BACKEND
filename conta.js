let saldoJoao = 1000;
let saldoCarlos = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoJoao * (taxaJuros);

const contaJoao = {titular: "joão", saldo: saldoJoao};
const contaCarlos = {titular: "carlos", saldo: saldoCarlos};
//console.log(saldoComJuros);
//console.log('${conta.joao.titular} possui R$ ${contaJoao.saldo}.');
//console.log('${conta.carlos} possui R$ ${contaCarlos.saldo.');

const contas = [contaJoao, contaCarlos];

contas.forEach((conta) => {
    console.log(`${conta.titular} tem R$ ${conta.saldo}`); //forEach é utilizado para percorrer um Array
})

contaJoao.saldo = -5000;
console.log("Saldo alterado sem controle: ", contaJoao.saldo);
