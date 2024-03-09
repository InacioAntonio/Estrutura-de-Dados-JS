import Pilha from "Pilha.js";

function Inverter(palavra) {
  const p = new Pilha();
  for (let i = 0; i < palavra.length; i++) {
    p.push(palavra[i]);
  }
  let invertido = "";

  for (let i = 0; i <= palavra.length; i++) {
    //console.log(invertido);
    if (p.isEmpty()) {
      break;
    }
    invertido += p.top();
    p.pop();
  }
  return invertido;
}
let palavra = "ABACAXI";
let inverti = Inverter(palavra);
console.log(inverti);
