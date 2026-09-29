const materias = ["JavaScript", "React", "Node"];

console.log(`Essas sao as minhas linguagens de programacao`);

for (const item of materias) {
  console.log(`${item}`);
}



const numeros = [3, 8, 12, 5, 20, 7];

for (const item of numeros) {
  if (item > 10) {
    console.log(`Maior 10: ${item}`)
  }
}



  const produtos = [
  { nome: "Camisa", preco: 50 },
  { nome: "Calça", preco: 120 },
  { nome: "Tênis", preco: 250 },
  { nome: "Boné", preco: 30 },
];

let totalPrecos = 0;

for (const item of produtos) {
  if (item.preco > 100) {
    console.log(`${item.nome}:R$${item.preco}`);
  }
  totalPrecos += item.preco;
}

console.log(`Valor Total:${totalPrecos}`);
