class No {
  constructor(nome, idade) {
    this.dado = nome;
    this.dado2 = idade;
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
  add(nome, idade) {
    let Novono = new No(nome, idade);
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
  append(nome, idade) {
    let Novono = new No(nome, idade);
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
  addAt(nome, idade, posicao) {
    if (!this.isEmpty()) {
      if (posicao <= this.length() && posicao >= 1) {
        if (posicao === 1) {
          let Novono = new No(dado);
          let aux = this.head.proximo;
          this.head.proximo = Novono;
          Novono.proximo = aux;
          return;
        }
        let Novono = new No(nome, idade);
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
  search(nome, idade) {
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
//recebe uma desordem e organiza os nos mas ai é
function idade() {
  let oridade = new Lista();
  let age;
  let menor = 9999;
  if (age < menor) {
    menor = age;
    oridade.add(menor);
  } else {
    oridade.append(age);
  }
  return oridade;
}
function Alfabetico() {
  let menor = 999;
  let nome;

  // aqui tem um pequeno problema vish pois cada letra tem um peso diferente ai tipo a é primeiro que o resto mas b igual mas menor b; talvez aqui entenda tabela ascii;
  let ordem = new Lista();
  if (nome.charCodeAt(0) < menor) {
    menor = nome.charCodeAt(0);
    ordem.add(nome);
  } else {
    ordem.append(nome);
  }
  return ordem;
}
