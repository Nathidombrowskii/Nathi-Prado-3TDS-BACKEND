//criar um objeto que represente o mundo real
const animal = {
    nome: "Thor", //string
    especie: "cachorro", //string
    idade: 4, //number
    tutor: true, //boolean
    vacinado: false //boolean
};

console.log(animal.nome);
console.log(animal.tutor);

// 1) Criando o objeto CAMISETA
const CAMISETA = {
  tamanho: "G",
  tecido: "Algodão",
  design: "Gola careca",
  cor: "Preto",
  marca: "Nike"
};

// Saída para testar o objeto
console.log("Dados da Camiseta:", CAMISETA);

// Testando propriedades individuais
console.log(`A camiseta é da marca ${CAMISETA.marca} e o tamanho é ${CAMISETA.tamanho}.`);
