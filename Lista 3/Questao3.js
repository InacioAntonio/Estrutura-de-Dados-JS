class No {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
  }
  getDado() {
    return this.dado;
  }
  setDado(dado) {
    this.dado = dado;
  }
  getProximo() {
    return this.proximo;
  }
}

class Lista {
  constructor() {
    this.array = [];
    this.ultimo = this.array[0];
  }
  removeLast() {
    if (!this.isEmpty()) {
      this.ultimo = this.array[this.length() - 2];
      this.array.pop();
      return;
    }
  }
  removeFirst() {
    if (!this.isEmpty()) {
      this.array.shift();
      return;
    }
  }
  removeAt(posicao) {
    if (!this.isEmpty()) {
      if (posicao < this.length() && posicao > 0) {
        if (posicao === this.length() - 1) {
          this.array.splice(posicao);
          this.ultimo = this.array[posicao - 1];
          return;
        }
        this.array.splice(posicao);
        return;
      }
      return;
    }
  }
  add(dado) {
    let Novono = new No(dado);
    this.array.unshift(Novono);
  }
  append(dado) {
    let Novono = new No(dado);
    this.array.push(Novono);
  }
  addAt(posicao, dado) {
    if (!this.isEmpty) {
      if (posicao < this.length() && posicao > 0) {
        let Novono = new No(dado);
        this.array.splice(posicao, 0, Novono);
      }
    }
  }
  isEmpty() {
    return this.array.length === 0;
  }
  clear() {
    this.array = [];
  }
  length() {
    return this.array.length;
  }
}
let List = new Lista();
List.add(50);
List.add(20);
console.log(List);
