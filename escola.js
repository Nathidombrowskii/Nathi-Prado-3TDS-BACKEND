const dadoDoAluno = require('./aluno.json');

console.log("---Sistema escolar---");
console.log('Nome: ${dadosDoAluno.nome}');
console.log('curso: ${dadosDoAluno.curso} ')

if (dadosDoAluno.bolsista) {
    console.log("Status: este aluno possui isenção de mensalidade.");
} else {
    console.log("Status: Mensalidade padrão.");
};

//Alterar o tipo de bolsa
//Adicione a saida idade