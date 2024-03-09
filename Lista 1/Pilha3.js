class Pilha {
  constructor(tam = 8) {
    this.items = [];
    this.tam = tam;
    this.ultimo = 0;
  }

  push(elemento) {
    if (!this.isFull()) {
      this.items[this.ultimo++] = elemento;
      return;
    }
    //throw new Error("Stackoverflow");
  }
  pop() {
    if (!this.isEmpty()) {
      this.ultimo--;
      return;
    }
    //throw new Error("Stackunderflow");
  }
  size() {
    return this.ultimo;
  }
  clear() {
    this.ultimo = 0;
  }
  isFull() {
    return this.ultimo === this.tam;
  }
  isEmpty() {
    return this.size() === 0;
  }
  toString() {
    let aux = "";
    for (let i = 0; i < 5; i++) {
      this.items[i] += aux;
    }
  }
  top() {
    if (!this.isEmpty()) {
      return this.items[this.ultimo - 1];
    }
    //throw new Error("Empty stack");
  }
}

export default Pilha;
