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
    //let aux = this.ultimo;
    if (!this.isEmpty()) {
      this.ultimo.proximo = Novono;
    } else {
      this.head.proximo = Novono;
    }
    this.ultimo = Novono;
    //Novono.proximo = this.head.proximo;

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
      a.proximo = this.head.proximo;
      this.ultimo = a;
      this.size--;
      return;
    }
  }
  removeAt(posicao) {
    if (!this.isEmpty()) {
      if (posicao <= this.length() && posicao >= 1) {
        this.size--;
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
    while (dado !== null) {
      array.push(dado.dado);
      dado = dado.proximo;
    }
    return array;
  }
  length() {
    // let aux = this.head.proximo;
    // let cont = 0;
    // while (aux !== null) {
    //   aux = aux.proximo;
    //   cont++;
    // }
    // return cont;
    return this.size;
  }
  clear() {
    this.head.proximo = null;
  }
}

let teste = new Lista();
let ordem = 3; //menor que o numero de pessoas
let pessoas = 10;
for (let i = 1; i <= pessoas; i++) {
  teste.append(i);
}

let cont = 0;
let cont2 = 0;
let indice = 0;

//let aux = teste.head.proximo;
while (teste.length() > 0) {
  cont2++;
  if (cont2 === ordem) {
    if (teste.length() === 1) {
      break;
    }
    teste.removeAt(indice); //remove o indice 3 indice -- cont volta pra 3
    cont2 = 0;
    //indice--;
  }
  if (indice >= teste.length()) {
    indice = 0;
  }
  indice++;
  //console.log(pessoas); indice = ordem
}
console.log(teste.asArray());
