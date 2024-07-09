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
      //let indice = 0;
      while (aux !== null) {
        if (aux.dado === dado) {
          return true;
        }
        aux = aux.proximo;
        //indice++;
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

class Conjunto {
  constructor() {
    this.dados = new ListaDupla();
    this.size = 0;
  }
  add(dado) {
    if (!this.isEmpty()) {
      return;
    }
    this.dados.append(dado);
  }
  uniao(conjuntob) {
    let conjuntoC = new Conjunto();
    let ValoresA = this.values();
    let ValoresB = conjuntob.values();
    for (a in ValoresA) {
      conjuntoC.add(a);
    }
    for (b in ValoresB) {
      conjuntoC.add(b);
    }
    return conjuntoC;
  }
  interccao(conjuntob) {
    let conjuntoC = new Conjunto();
    let ValoresA = this.values();
    for (a in ValoresA) {
      if (conjuntob.has(a)) {
        conjuntoC.add(a);
      }
    }
    return conjuntoC;
  }
  delete(dado) {
    if (!this.isEmpty()) {
      if (this.has(dado)) {
        if (this.dados.tail.dado === dado) {
          this.dados.removeLast();
          return;
        }
        if (this.dados.head.dado === dado) {
          this.dados.removefirst();
          return;
        }
        let cont = 0;
        let aux = this.dados.head;
        while (aux.dado !== dado) {
          aux = aux.proximo;
          cont++;
        }
        this.dados.removeAt(cont - 1);
        return;
      }
      return;
    }
    console.log("Error conjunto esta vazio");
  }
  isEmpty() {
    return this.size === 0;
  }
  has(dado) {
    return this.dados.search(dado);
  }
  contains(conjuntob) {
    let ValoresB = conjuntob.values();

    for (b in ValoresB) {
      if (this.has(b)) {
        return true;
      }
    }
    return false;
  }
  values() {
    return this.dados.asArray();
  }
  size() {
    return this.size;
  }
  difference(conjuntob) {
    let conjuntoC = new Conjunto();
    let ValoresA = this.values();
    let ValoresB = conjuntob.values();
    for (a in ValoresA) {
      conjuntoC.add(a);
    }
    for (b in ValoresB) {
      conjuntoC.delete(b);
    }
    return conjuntoC;
  }
}
