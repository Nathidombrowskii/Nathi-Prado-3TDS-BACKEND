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
}