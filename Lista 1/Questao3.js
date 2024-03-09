import Pilha from "./Pilha3.js";

function trocar() {
  let inicio;
  let ultimo;
  let p = new Pilha();
  //let tamanho = p.tam - 1;
  let paux = new Pilha();
  if (!p.isFull()) {
    for (let i = 0; i < p.tam; i++) {
      p.push(i);
      //console.log(p.top());
      if (i === 0) {
        inicio = p.top();
        //console.log(inicio);
      }
      if (i === p.tam - 1) {
        ultimo = p.top();
        //console.log(ultimo);
      }
    }
    //console.log(ultimo);
    //console.log("A");
    for (let i = 1; i < p.tam - 1; i++) {
      p.pop();
      paux.push(p.top());
    }
    //console.log(paux);
    p.clear();
    for (let i = 0; i < p.tam; i++) {
      if (i === 0) {
        //console.log(ultimo);
        p.push(ultimo);
        continue;
      }
      if (i === p.tam - 1) {
        p.push(inicio);
        continue;
      }
      p.push(paux.top());
      paux.pop();
    }
  }
  return p;
}
console.log(trocar());
let p = trocar();
for (let i = 0; i < p.tam; i++) {
  //console.log(p.top());
  p.pop();
}
