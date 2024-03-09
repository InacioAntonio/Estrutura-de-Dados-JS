import Pilha from "./Pilha.js";

let p = new Pilha();
let entrada;
let parar = false;
while (parar === false) {
  entrada = prompt("Digite um parentese ou colchete ou digite parar :");
  if (entrada === "parar") {
    break;
  }
  if (entrada != "parar") {
    if (entrada === ")" || entrada === "]") {
      if (
        p.size() === 0 ||
        (entrada === ")" && p.top() !== "(") ||
        (entrada === "]" && p.top !== "[")
      ) {
        p.push(entrada);
        p.pop();
      } else {
        p.push(entrada);
      }
    } else {
      p.push(entrada);
    }
  }
}
console.log(p);

//let vetor = [];
