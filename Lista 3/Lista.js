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
    this.head = new No();
    this.size = 0;
    this.ultimo = this.head;
  }
  add(dado) {
    let Novono = new No(dado);
    if (!this.isEmpty()) {
      let aux = this.head.proximo;
      this.head.proximo = Novono;
      Novono.proximo = aux;
    } else {
      this.head.proximo = Novono;
      this.ultimo = Novono;
    }

    this.size++;
  }
  append(dado) {
    let Novono = new No(dado);
    let aux = this.ultimo;
    if (!this.isEmpty()) {
      aux.proximo = Novono;

      this.ultimo.proximo = Novono;
    } else {
      this.head.proximo = Novono;
    }
    this.ultimo = Novono;
    this.size++;
  }
  removefirst() {
    if (!this.isEmpty()) {
      let aux = this.head.proximo;
      this.head.proximo = aux.proximo;
      this.size--;
      return;
    }
  }
  removeLast() {
    if (!this.isEmpty()) {
      let a = this.head;
      while (a.proximo != this.ultimo) {
        a = a.proximo;
      }
      a.proximo = null;
      this.ultimo = a;
      this.size--;
      return;
    }
  }
  removeAt(posicao) {
    if (!this.isEmpty()) {
      if (posicao <= this.length() && posicao >= 1) {
        let cont = 0;
        let aux = this.head; //Esse sera o elemento que será apagado
        let anterior, posterior;
        while (cont != posicao) {
          posterior = aux.proximo;
          anterior = aux;
          aux = aux.proximo;
          cont++;
        }
        anterior.proximo = posterior.proximo;
        this.size--;
        return;
      }
      return;
    }
  }
  isEmpty() {
    return this.head.proximo === null;
  }
  addAt(dado, posicao) {
    if (!this.isEmpty()) {
      if (posicao <= this.length() && posicao >= 1) {
        if (posicao === 1) {
          let Novono = new No(dado);
          let aux = this.head.proximo;
          this.head.proximo = Novono;
          Novono.proximo = aux;
          return;
        }
        let Novono = new No(dado);
        //console.log("quebrado");
        let cont = 0;
        let aux = this.head;
        let anterior, posterior;
        while (cont != posicao) {
          posterior = aux.proximo;
          anterior = aux;
          aux = aux.proximo;
          console.log(anterior);
          cont++;
        }
        anterior.proximo = Novono;
        Novono.proximo = posterior;
        this.size++;
        return;
      }
      return;
    }
  }
  search(dado) {
    if (!this.isEmpty()) {
      let cont = 0;
      let aux = this.head;
      while (aux.proximo != null) {
        if (aux.dado === dado) {
          return cont; //return true;
        }
        aux = aux.proximo;
        cont++;
      }
      return;
    }
    return false;
  }
  asArray() {
    let array = [];
    let dado = this.head.proximo;
    while (dado != null) {
      array.push(dado.dado);
      dado = dado.proximo;
    }
    return array;
  }
  length() {
    return this.size;
  }
}

class Pilha {
  constructor() {
    this.Lista = new Lista();
  }
  pop() {
    if (!this.isEmpty()) {
      this.Lista.removeLast();
      return;
    }
    //Error ( Stackoverflow)
  }
  push(dado) {
    this.Lista.append(dado);
  }
  top() {
    if (!this.Lista.isEmpty()) {
      return this.Lista.ultimo;
    }
  }
  isEmpty() {
    return this.Lista.isEmpty();
  }
  size() {
    return this.Lista.length();
  }
  toString() {
    let array = this.Lista.asArray();
    let resultado = "";
    for (let i = 0; i < array.length; i++) {
      resultado += array[i] + " ";
    }
    return resultado;
  }
}

let teste = new Lista();
let testep = new Pilha();
testep.push(5);
testep.push(8);
testep.push(10);
console.log(testep.top());
console.log(testep.isEmpty());
teste.append(5);
teste.add(2);
teste.append(10);
console.log(teste.length());
teste.addAt(50, 3);
teste.removeLast();
//teste.removeAt(0);
//teste.removeAt(1);
// O remove At funciona sla pq mas ADD at n
//console.log(teste.length());
let array = teste.asArray();
console.log(teste.asArray());
//Lista simplesmente encadeada deu green isxquce
