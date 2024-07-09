class Fila {
  constructor(tamanho) {
    this.capacidade = tamanho;
    this.items = [];
    this.inicio = 0;
    this.final = 0;
  }
  enqueue(dado) {
    if (!this.isFull()) {
      this.items[this.final++] = dado;
      return;
    }
    //throw new Error("queue OverFlow");
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.inicio++;
      return;
    }
    //throw new Error(" QueueunderFlow")
  }
  clear() {
    this.final = this.inicio;
  }
  isEmpty() {
    return this.inicio === this.final;
  }
  Front() {
    if (!this.isEmpty()) {
      return this.items[this.inicio];
    }
    //throw new Error("Empty queue")
  }
  Length() {
    return this.final - this.inicio;
  }
  ToString() {
    resultado = "";
    for (let i = this.inicio; i < this.Length(); i++) {
      resultado += this.items[i] + " ";
    }
    return resultado;
  }
  isFull() {
    return this.capacidade === this.final;
  }
}

//
let lista_de_espera = new Fila(10);
let caminhao = 0;
let atendido = 0;
let contador = 0;
let flag = false;
let parar = false;
let resposta;
let dia;
while (lista_de_espera.Length < 10) {
  if (lista_de_espera.Length() < 10) {
    caminhao++;
    lista_de_espera.enqueue(caminhao);
    continue;
  }
  parar = true;
}
contador = 0;
while (lista_de_espera.Length < 10) {
  //resposta = "S";
  contador++;
  lista_de_espera.dequeue();
  flag = true;
}
if (lista_de_espera.Length() === 0) {
  console.log("A meta foi atingida");
} else {
  console.log("Meta não foi atingida");
}
