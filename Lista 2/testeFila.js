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
    let resultado = "";
    for (let i = this.inicio; i < this.Length(); i++) {
      resultado += this.items[i] + " ";
    }
    return resultado;
  }
  isFull() {
    return this.capacidade === this.final;
  }
}
class Pilha {
  constructor(tamanho) {
    this.capacidade = tamanho;
    this.tam = 0;
    this.Fila1 = new Fila(1000000); //inicio no inicio(0)
    this.Fila2 = new Fila(1000000);
  }
  pop() {
    if (!this.isEmpty()) {
      //faz um for e joga o conteudo de uma fila em outra -menos a ultima posição
      while (this.Fila1.Length() > 1) {
        this.Fila2.enqueue(this.Fila1.Front());
        this.Fila1.dequeue();
      }
      this.Fila1.dequeue();
      while (this.Fila2.Length() > 0) {
        this.Fila1.enqueue(this.Fila2.Front());
        this.Fila2.dequeue();
      }
      this.tam--;
      return;
    }
  }
  push(dado) {
    if (!this.isFull()) {
      this.Fila1.enqueue(dado);
    }
    this.tam++;
  }
  Size() {
    return this.tam;
  }
  Clear() {
    this.Fila1.clear();
    this.Fila2.clear();
  }
  top() {
    if (!p.isEmpty()) {
      while (this.Fila1.Length() > 1) {
        this.Fila2.enqueue(this.Fila1.Front());
        this.Fila1.dequeue();
      }
      let ultimo = this.Fila1.Front();
      this.Fila1.inicio = 0;
      //while (this.Fila2.Length() > 0) {
      //this.Fila1.enqueue(this.Fila2.Front());
      //this.Fila2.dequeue();
      //}
      //console.log(ultimo);
      return ultimo;
    } //this.Fila1.items[this.Fila1.final - 1];
  }
  toString() {
    let resultado = "";
    let backup = [];
    let contador = 0;
    while (this.Size() > 0) {
      resultado += this.top() + " ";
      backup[contador] = this.top();
      this.pop();
      contador++;
    }
    for (let i = 0; i < contador; i++) {
      p.push(backup[i]);
    }
    return resultado;
  }
  isFull() {
    return this.Size() === this.capacidade;
  }
  isEmpty() {
    return this.tam === 0;
  }
}

let p = new Pilha(5);
//let teste1 = p.isEmpty();
//onsole.log(teste1);
//console.log(p.isFull());
p.push("A");
console.log(p.toString());
p.push(10);
p.push(50);
p.push(70);

//console.log(p);
let numero = p.top();

console.log(numero);
p.pop();
p.pop();
p.push(90);
console.log(p.top());
let resultado = p.toString();
console.log(resultado);
