import Pilha from "./Pilha3.js";

var contador = 0;

function Converter(numero) {
  let quociente;
  let resto;
  let p = new Pilha();
  do {
    resto = numero % 2;
    quociente = Math.floor(numero / 2);
    numero = quociente;
    //console.log(numero);
    if (quociente === 1) {
      p.push(quociente);
      continue;
    }
    p.push(resto);
    contador++;
  } while (quociente != 0);

  return p;
}
let numero = 8;
let p = Converter(numero);
console.log(p);
for (let i = 0; i < contador; i++) {
  console.log(p.top());
  p.pop();
}
