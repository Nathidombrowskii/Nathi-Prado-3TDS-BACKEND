class Time {
constructor(jogador, tecnico, cartoes, gol) {
this.jogador = jogador;
this.tecnico = tecnico;
this.cartoes = cartoes;
this.gol = gol;
}

apresentar() {
console.log(`Este jogador fez ${this.gol}`);
}
}

class timeFutebol extends Time {
constructor(jogador, tecnico, cartoes, gol) {
super(jogador, tecnico, cartoes, gol);
}

mostrarTime() {
console.log("time:", `${this.nomeTime}`);
console.log("tecnico:", `${this.tecnico}`);
}
}

let time = new timeFutebol(
"Neymar",
"Renato Gaúcho",
2,
3
);

time.mostrarTime();
time.apresentar();
