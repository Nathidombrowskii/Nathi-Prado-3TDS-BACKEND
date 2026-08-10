class ContaBancaria {
    #saldo;

    constuctor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("Valor de depósito inválido.");
            return;
        }
        this.#saldo += valor 
    }
    get saldoAtual() {
        return this.#saldo;
    };
};

const contas = [new ContaBancaria("João", 1000), new ContaBancaria("Saulo", 500)];

contas[0].depositar(200);
contas[1].sacar(50);
contas[0].depositar(350);
contas[0].sacar(1225);
contas[1].sacar(425);
contas[0].depositar(175);
contas[1].sacar(40);

contas.forEach((conta) => {console.log(`${conta.titular}tem R$ ${conta.saldoAtual}`)});
