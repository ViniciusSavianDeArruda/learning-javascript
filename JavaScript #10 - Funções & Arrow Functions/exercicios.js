/* function dobrar(numero) {
  return numero * 2;
}

console.log(dobrar(2));
console.log(dobrar(4)); */

/* const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Tênis", preco: 250 },
  { nome: "Boné", preco: 30 },
];


function calcularTotal(produtos) {
  let precoTotal = 0;
  for (const item of produtos) {
    precoTotal += item.preco;
  }

  return precoTotal;
}

console.log(calcularTotal(produtos)); // esperado: 450
 */


//arraw function usando retorno implicido sem chaves
/*const ehMaiorDeIdade = (idade) => idade >= 18;

console.log(ehMaiorDeIdade(20));
console.log(ehMaiorDeIdade(17));
*/


const produto = { nome: "Tênis", preco: 250 };

console.log(formatarProduto(produto)); // esperado: "Tênis: R$ 250"
