class Noduplo {
  constructor(dado) {
    this.dado = dado;
    this.proximo = null;
    this.anterior = null;
  }
}

class ListaDupla {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  removeLast() {
    if (!this.isEmpty()) {
      let aux = this.tail;
      if (aux.anterior !== null) {
        this.tail = aux.anterior;
        this.tail.proximo = null;
        return;
      }
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
  }
  removefirst() {
    if (!this.isEmpty()) {
      let aux = this.head;
      if (aux.proximo !== null) {
        this.head = aux.proximo;
        this.head.anterior = null;
        this.size--;
        return;
      }
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }
  }
  removeAt(posicao) {
    if (!this.isEmpty()) {
      if (posicao <= this.size) {
        let cont = 0;
        let aux = this.head;
        while (cont !== posicao) {
          aux = aux.proximo; //eu quero apagar aux.anterior
          cont++;
        }
        let desejo_apagar = aux.anterior;
        let auxavei = desejo_apagar.anterior;
        aux.anterior = auxavei;
        auxavei.proximo = aux;
        //auxa.proximo = null;
        //auxa.anterior = null;
        return;
      }
      console.log("Essa posiçao na lista não existe");
      return;
    }
    console.log("Erro Lista Vazia");
  }
  add(dado) {
    let Novono = new Noduplo(dado);
    if (!this.isEmpty()) {
      let aux = this.head;
      //Novono.proximo = aux;
      this.head = Novono;
      Novono.proximo = aux;
      this.size++;

      return;
    }
    this.head = Novono;
    this.tail = Novono;
    this.size++;
  }
  asArray() {
    let array = [];
    let aux = this.head;
    while (aux !== null) {
      array.push(aux);
      aux = aux.proximo;
    }
    return array;
  }
  append(dado) {
    let Novono = new Noduplo(dado);
    if (!this.isEmpty()) {
      let aux = this.tail;
      this.tail = Novono;
      Novono.anterior = aux;
      this.size++;
      return;
    }
    this.size++;
    this.head = Novono;
    this.tail = Novono;
  }
  isEmpty() {
    return this.head === null;
  }
  length() {
    return this.size;
  }
  search(dado) {
    if (!this.isEmpty()) {
      let aux = this.head;
      let indice = 0;
      while (aux !== null) {
        if (aux.dado === dado) {
          return true;
        }
        aux = aux.proximo;
        indice++;
      }
      return false;
    }
  }
  addAt(posicao, dado) {
    let Novono = new Noduplo(dado);
    if (!this.isEmpty()) {
      let aux = this.head;
      let cont = 0;
      if (posicao <= this.length() && posicao >= 0) {
        while (posicao !== cont) {
          aux = aux.proximo;
          cont++;
        }
        let auxa = aux.anterior;
        aux.anterior = Novono;
        Novono.anterior = auxa;
        Novono.proximo = aux;
        auxa.proximo = Novono;
        this.size++;
        return;
      }
      return console.log("POSICAO INVALIDA");
    }
    return console.log("LISTA VAZIA");
  }
}
