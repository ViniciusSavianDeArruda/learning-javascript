# Guia de Estudos em JavaScript

*Este repositório é baseado em estudos realizados a partir de cursos e materiais de aprendizado em JavaScript.  
Todo o conteúdo foi reescrito, comentado e adaptado por mim para fins de estudo pessoal, Vou atualizando este guia conforme aprendo coisas novas.*

---

## Sumário

- [1. Interação com o Usuário](#1-interação-com-o-usuário)
- [2. Variáveis e Tipos de Dados](#2-variáveis-e-tipos-de-dados)
- [3. Conversão de Dados](#3-conversão-de-dados)
- [4. Estruturas Condicionais](#4-estruturas-condicionais)
- [5. Valores Truthy e Falsy](#5-valores-truthy-e-falsy)
- [6. Precedência de Operadores](#6-precedência-de-operadores)
- [7. Estruturas de Repetição](#7-estruturas-de-repetição)
- [8. Arrays](#8-arrays)
- [9. Métodos Modernos de Arrays](#9-métodos-modernos-de-arrays)
- [10. Funções](#10-funções)
- [11. Classes e Herança](#11-classes-e-herança)
- [12. Tipos de Dados (Referência vs Primitivo)](#12-tipos-de-dados-referência-vs-primitivo)
- [13. Objetos](#13-objetos)
- [14. JSON](#14-json)
- [15. Spread Operator](#15-spread-operator-)
- [16. Módulos (Import / Export)](#16-módulos-import--export)
- [17. Manipulação do DOM](#17-manipulação-do-dom)
- [18. Selecionando Elementos do DOM](#18-selecionando-elementos-do-dom)
- [19. Manipulando Elementos do DOM](#19-manipulando-elementos-do-dom)
- [20. Eventos no DOM](#20-eventos-no-dom)
- [21. Resumo Geral](#21-resumo-geral)
- [Autor](#autor)

---

## 1. Interação com o Usuário

### O que é
JavaScript permite interagir com o usuário diretamente no navegador, pedindo dados e exibindo mensagens — útil para testes rápidos e exercícios iniciais.

### Métodos principais
- `window.prompt()` → abre uma caixa para o usuário digitar algo
- `alert()` → exibe uma mensagem simples
- `console.log()` → exibe informações no console do navegador

```js
let nome = window.prompt("Qual é o seu nome?");
alert("Bem-vindo ao curso de JavaScript, " + nome + "!");

window.console.log("Eu sou o console!");
```

> Tudo que vem do `prompt()` é string, mesmo que pareça número.

---

## 2. Variáveis e Tipos de Dados

### const vs let
- `const` → para valores que **não mudam**
- `let` → para valores que **podem ser alterados**

```js
// const não pode ser reatribuído:
// const message = 'Hello world!'
// message = 'Olá mundo!' // erro!

// let pode ser reatribuído:
let message = 'Hello world';
message = 'Olá mundo!';
```

### Strings e seus métodos

```js
const greeting = 'Hello world!';
console.log(greeting.length); // quantidade de caracteres

const firstName = "Elvis";
const lastName  = "Presley";

// Concatenação (forma antiga)
console.log("Meu nome é " + firstName + " " + lastName);

// Template string (forma moderna)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

// Transformar string em array
const nomes = "Ana,Julia,Bruna";
console.log(nomes.split(","));   // ["Ana", "Julia", "Bruna"]
console.log("Maria".split("")); // ["M","a","r","i","a"]
```

### Números

```js
const number = 5;
console.log(number * 2);          // 10
console.log(number.toString());   // "5"
console.log(typeof number);       // "number"
console.log(typeof number.toString()); // "string"
```

### typeof

O operador `typeof` revela o tipo de qualquer valor:

```js
console.log(typeof "texto");    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (particularidade do JS)
```

---

## 3. Conversão de Dados

### Por que converter
Quando pegamos entrada do usuário via `prompt()`, ela sempre chega como string. Para fazer cálculos, precisamos converter para número.

```js
let n1 = Number.parseFloat(prompt("Digite um número:"));
let n2 = Number.parseFloat(prompt("Digite outro número:"));
alert(`A soma é ${n1 + n2}`);
```

| Função | O que faz |
|--------|-----------|
| `Number.parseInt()` | Converte para inteiro |
| `Number.parseFloat()` | Converte para decimal |
| `String()` | Converte número para texto |
| `.toString()` | Converte número para texto (método) |

---

## 4. Estruturas Condicionais

### if / else if / else

```js
if (num1 > num2) {
  alert("O primeiro número é maior");
} else if (num1 === num2) {
  alert("Os números são iguais");
} else {
  alert("O segundo número é maior");
}
```

> Prefira `===` ao `==` — ele verifica **valor e tipo** ao mesmo tempo.

### Operadores de Comparação

| Símbolo | Significado | Exemplo | Resultado |
|---------|-------------|---------|-----------|
| `>` | Maior que | `5 > 3` | `true` |
| `<` | Menor que | `2 < 10` | `true` |
| `==` | Igual (valor) | `'5' == 5` | `true` |
| `===` | Igual (valor e tipo) | `'5' === 5` | `false` |
| `!=` | Diferente | `10 != 5` | `true` |

### Operadores Lógicos

```js
const sum1 = 2 + 2; // 4
const sum2 = 3 + 10; // 13

// && → verdadeiro se TODAS as condições forem verdadeiras
if (sum1 === 4 && sum2 === 6) {
  console.log("nunca será executado");
}

// || → verdadeiro se PELO MENOS uma condição for verdadeira
if (sum1 === 4 || sum2 === 6) {
  console.log("sum1 is 4 or sum2 is 6"); // executado
}
```

### Operador Ternário

Forma curta de escrever um `if/else` simples:

```js
const sum = 1 + 2;

// forma tradicional
let result;
if (sum === 2) { result = 2; } else { result = 4; }

// forma ternária: condição ? valorSeVerdadeiro : valorSeFalso
let result2 = sum === 2 ? 2 : 4;
console.log(result2); // 4
```

### Switch

Útil para múltiplas condições baseadas em igualdade:

```js
const car = "Tesla";

switch (car) {
  case "Mercedes":
    console.log("Mercedes is beautiful");
    break;
  case "Ferrari":
    console.log("Ferrari is very red");
    break;
  case "Tesla":
    console.log("Tesla is very smart"); // executado
    break;
  default:
    console.log("Unknown car");
    break;
}
```

---

## 5. Valores Truthy e Falsy

### Conceito
O JavaScript converte automaticamente valores para `true` ou `false` quando usados em condições. O operador `!!` força essa conversão explicitamente.

### Valores Falsy (interpretados como false)

```js
console.log(!!false);     // false
console.log(!!0);         // false
console.log(!!'');        // false (string vazia)
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!NaN);       // false
```

### Valores Truthy (todo o resto)

```js
const list   = [];  // lista vazia → truthy!
const object = {};  // objeto vazio → truthy!

console.log(!!list);   // true
console.log(!!object); // true
console.log(!list);    // false (negação de true)

// Verificar se a lista tem itens:
if (list.length > 0) {
  console.log("A lista tem elementos");
} else {
  console.log("A lista está vazia");
}
```

---

## 6. Precedência de Operadores

Ordem em que o JavaScript resolve operações (do mais para o menos prioritário):

| Prioridade | Operador |
|-----------|----------|
| 1° | `()` — parênteses |
| 2° | `**` — exponenciação |
| 3° | `*`, `/`, `%` |
| 4° | `+`, `-` |
| 5° | `>`, `<`, `==`, `===` — comparações |
| 6° | `&&` — E lógico |
| 7° | `\|\|` — OU lógico |
| 8° | `=` — atribuição |

---

## 7. Estruturas de Repetição

| Estrutura | Quando usar | Executa ao menos uma vez? |
|-----------|-------------|--------------------------|
| `for` | Quando sabemos o nº de repetições | Não |
| `while` | Enquanto a condição for verdadeira | Não |
| `do...while` | Executa uma vez antes de verificar | Sim |
| `for...of` | Percorrer arrays (forma simples) | Não |
| `for...in` | Percorrer propriedades de objetos | Não |
| `forEach()` | Percorrer arrays com função | Não |

### Exemplos

```js
const cars = ["Ferrari", "Tesla", "Mercedes"];

// for tradicional
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for...of (mais simples para arrays)
for (let car of cars) {
  console.log(car);
}

// forEach (com índice disponível)
cars.forEach(function(car, index) {
  console.log(index, car);
});

// while
let index = 0;
while (index < 10) {
  console.log("index é menor do que 10!");
  index++;
}

// for...in (para objetos)
const person = { name: "Jane", age: 21 };
for (let property in person) {
  console.log(property);          // name, age
  console.log(person[property]);  // Jane, 21
}
```

---

## 8. Arrays

### O básico
Arrays guardam vários valores em uma única variável. Os índices começam em 0.

```js
const names = ["Maria", "Francisca", "Joana", 10, false];
console.log(names[1]); // Francisca
```

### Métodos essenciais

| Método | O que faz |
|--------|-----------|
| `.length` | Retorna o tamanho do array |
| `.push(valor)` | Adiciona valor no **final** |
| `.unshift(valor)` | Adiciona valor no **início** |
| `.pop()` | Remove o **último** valor |
| `.sort()` | Ordena (atenção: ordena como string por padrão) |
| `.indexOf(valor)` | Retorna o índice de um valor |
| `Array.isArray(x)` | Verifica se `x` é um array |

```js
names.push("Joaquim");      // adiciona no final
names.unshift("Benjamin");  // adiciona no início
names.pop();                // remove o último

names[3] = "Ana";           // altera posição 3

console.log(names.indexOf("Joaquim")); // retorna a posição
console.log(Array.isArray(names));     // true

const sorted = names.sort();
console.log(sorted);
```

---

## 9. Métodos Modernos de Arrays

### `.map()` — transforma cada item e retorna um **novo array**

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
```

### `.filter()` — filtra elementos com base em uma condição

```js
const ages = [8, 13, 27, 30, 22, 40];
const evenAges = ages.filter(function(age) {
  return age % 2 === 0;
});
console.log(evenAges); // [8, 30, 22, 40]
```

### `.reduce()` — reduz o array a **um único valor**

```js
const sumOfAges = ages.reduce(function(accumulator, age) {
  return accumulator + age;
}, 0); // começa em 0
console.log(sumOfAges); // 140

// Com valor inicial diferente:
const startAt100 = ages.reduce((acc, age) => acc + age, 100);
console.log(startAt100); // 240
```

### `.forEach()` — executa algo para cada item (não retorna array)

```js
[1, 2, 3].forEach(n => console.log(n));
```

> `.map()` e `.filter()` sempre retornam um **novo array**. `.forEach()` e `.reduce()` não.

---

## 10. Funções

### Conceito
Funções são blocos reutilizáveis que recebem parâmetros e podem retornar valores.

### 1) Função tradicional

```js
function sum(a, b) {
  console.log(a + b); // apenas exibe
}
sum(2, 10);
```

### 2) Função com return

```js
function sumReturn(a, b) {
  return a + b; // retorna o valor para quem chamou
}
const result = sumReturn(2, 2);
console.log(result); // 4
```

### 3) Parâmetro com valor padrão

```js
function sumDefault(a, b = 10) {
  return a + b;
}
console.log(sumDefault(2)); // 12 (b usou o padrão 10)
```

### 4) Arrow Functions

```js
// forma completa
const sumArrow = (a, b = 10) => {
  return a + b;
};

// forma curta (uma linha, sem return e sem chaves)
const sumArrow2 = (a, b = 10) => a + b;

console.log(sumArrow2(2)); // 12
```

### 5) Function Expression

```js
let dobro = function(x) {
  return x * 2;
};
```

### Exemplo — fatorial

```js
function fatorial(n) {
  let fat = 1;
  for (let c = n; c > 1; c--) fat *= c;
  return fat;
}
```

---

## 11. Classes e Herança

### O que são
Classes são **moldes** para criar objetos com propriedades e métodos. O método `constructor()` é chamado automaticamente ao criar uma nova instância.

### 1) Criando uma classe

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age       = age;
  }

  // Método de instância (precisa de new Person(...))
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // Método estático (chamado diretamente na classe, sem instanciar)
  static sayHello() {
    console.log("Helloooooooooo");
  }
}

const person = new Person("Jane", "Doe", 40);
person.getFullName(); // Jane Doe
Person.sayHello();    // Helloooooooooo
```

### 2) Herança com extends e super

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // chama o construtor da classe pai
  }

  // Sobrescreve o método da classe pai
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const animal = new Animal("Simba");
animal.speak(); // Simba made some noise!

const dog = new Dog("Claus");
dog.speak(); // Claus barked!
```

---

## 12. Tipos de Dados (Referência vs Primitivo)

### Primitivos — guardam o valor diretamente

| Tipo | Exemplo | Descrição |
|------|---------|-----------|
| `number` | `let idade = 20;` | Números |
| `string` | `"Ana"` | Textos |
| `boolean` | `true / false` | Lógicos |
| `null` | `let carro = null;` | Valor nulo intencional |
| `undefined` | `let x;` | Sem valor atribuído |

### Referência — guardam o endereço na memória

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;       // arr2 aponta para o MESMO array
arr2.push(4);
console.log(arr1);     // [1, 2, 3, 4] — arr1 também foi alterado!

// Para evitar isso, use spread:
let arr3 = [...arr1];  // cópia independente
```

---

## 13. Objetos

### Criação e acesso

```js
const person = {
  firstName: "Elvis",
  lastName: "Presley",
  age: 42,
  hobbies: ["cantar", "dançar", "atuar"],
  dog: {
    name: "Simba",
    age: 4
  }
};

console.log(person.dog.name);    // Simba
console.log(person.hobbies[2]);  // atuar
```

### Destructuring

```js
const {
  firstName: primeiroNome, // renomeando a propriedade
  lastName,
  age,
  hobbies,
  dog: { name: dogName }  // desestruturação aninhada
} = person;

console.log(primeiroNome); // Elvis
console.log(dogName);      // Simba
```

### Adicionando propriedades

```js
person.country = "Estados Unidos";
console.log(person.country);
```

### Lista de objetos

```js
const todos = [
  { id: 1, description: "Estudar programação", isCompleted: false },
  { id: 2, description: "Ler",                 isCompleted: true  },
  { id: 3, description: "Treinar",             isCompleted: true  },
];

console.log(todos[2]);             // objeto inteiro
console.log(todos[2].description); // "Treinar"
```

---

## 14. JSON

### O que é
JSON (JavaScript Object Notation) é o formato padrão para **troca de dados** entre sistemas (APIs, front-end e back-end). É sempre representado como uma **string**.

```js
const todos = [
  { id: 1, description: "Estudar programação", isCompleted: false },
  { id: 2, description: "Ler",                 isCompleted: true  },
];

// JavaScript → JSON (para enviar a uma API)
const todosJSON = JSON.stringify(todos);
console.log(todosJSON); // string JSON

// JSON → JavaScript (ao receber de uma API)
const todosList = JSON.parse(todosJSON);
console.log(todosList); // array de objetos novamente
```

| Método | Uso |
|--------|-----|
| `JSON.stringify()` | Converte objeto/array para string |
| `JSON.parse()` | Converte string JSON para objeto/array |

---

## 15. Spread Operator (...)

### Para que usar
Copia arrays e objetos sem alterar o original, evitando mutações indesejadas.

```js
// Arrays
const arr  = [1, 2, 3];
const copia = [...arr, 4];
console.log(arr);   // [1, 2, 3] — original intacto
console.log(copia); // [1, 2, 3, 4]

// Objetos
const obj  = { nome: "Ana", idade: 20 };
const novo = { ...obj, cidade: "RS" };
console.log(novo); // { nome: "Ana", idade: 20, cidade: "RS" }
```

---

## 16. Módulos (Import / Export)

### Por que dividir
Módulos organizam o código em arquivos menores e reutilizáveis — muito usado em projetos React e Node.

```js
// arquivo1.mjs
export const idade = 25;
export function saudacao(nome) {
  return `Olá, ${nome}!`;
}

// arquivo2.mjs
import { idade, saudacao } from "./arquivo1.mjs";
console.log(saudacao("Vinicius")); // Olá, Vinicius!
```

---

## 17. Manipulação do DOM

### O que é
O DOM (Document Object Model) é a representação da página HTML. Com JavaScript podemos acessar elementos, alterar conteúdo, aplicar estilos e responder a eventos.

```html
<div id="box">Clique em mim</div>

<script>
  const div = document.getElementById("box");
  div.addEventListener("click", () => {
    div.style.color = "blue";
    div.style.fontSize = "30px";
  });
</script>
```

---

## 18. Selecionando Elementos do DOM

| Método | O que retorna | Tipo | Quando usar |
|--------|--------------|------|-------------|
| `getElementById(id)` | 1 elemento | `Element` | ID únicos |
| `getElementsByClassName(classe)` | Vários | `HTMLCollection` | Por classe |
| `getElementsByTagName(tag)` | Vários | `HTMLCollection` | Por tag |
| `querySelector(seletor)` | Primeiro que casar | `Element` | Busca com CSS |
| `querySelectorAll(seletor)` | Todos que casarem | `NodeList` | Busca com CSS |
| `getElementsByName(name)` | Vários por name | `NodeList` | Formulários |

### Exemplos práticos

```js
// Por ID
const titulo = document.getElementById("titulo");
titulo.textContent = "Olá, Vinicius!";

// querySelector com ID
const addUserText = document.querySelector("#add-user");
addUserText.textContent = "Adicionar usuário";

// Seletor aninhado
const myForm = document.querySelector(".container #my-form");

// Múltiplos elementos
const allItems = document.querySelectorAll(".item");
console.log(allItems[1]); // segundo elemento

// Percorrer com forEach
allItems.forEach(item => item.style.color = "blue");

// Por classe (HTMLCollection → usar spread para forEach)
const msgs = document.getElementsByClassName("msg");
[...msgs].forEach(p => p.style.color = "blue");

// Por atributo name
const campos = document.getElementsByName("usuario");
campos[0].value = "vinicius";
```

---

## 19. Manipulando Elementos do DOM

```js
const items = document.querySelector(".items");

// Remover elemento
items.remove();                    // remove o elemento inteiro
items.firstElementChild.remove();  // remove o primeiro filho
items.lastElementChild.remove();   // remove o último filho

// Modificar texto
items.children[0].textContent = "Item UM";

// Inserir HTML
items.lastElementChild.innerHTML = "<h1>Hello world!</h1>";

// Modificar estilos
const button = document.querySelector(".btn");
button.style.background = "red";
button.style.color = "blue";
```

---

## 20. Eventos no DOM

### O que são
Eventos são ações do usuário (clique, digitação, envio de formulário...) que o JavaScript pode "ouvir" com `addEventListener()`.

```js
const submitButton = document.querySelector("#submit-button");
const myForm       = document.querySelector("#my-form");
const nameInput    = document.querySelector("#name");
const emailInput   = document.querySelector("#email");
const items        = document.querySelector(".items");
const body         = document.querySelector("body");

submitButton.addEventListener("click", function(e) {
  // Impede o comportamento padrão (recarregar a página)
  e.preventDefault();

  const nameValue  = nameInput.value;
  const emailValue = emailInput.value;

  // Validação simples
  if (nameValue === "" || emailValue === "") {
    return alert("Please fill out all the fields!");
  }

  // Modificações visuais
  myForm.style.background = "red";
  body.style.background   = "blue";

  // Atualiza a lista
  items.firstElementChild.textContent = nameValue;
  items.children[1].textContent       = emailValue;
});

// Evento de mudança de input
nameInput.addEventListener("change", function(e) {
  console.log(e.target.value);
});
```

> Estrutura base: `elemento.addEventListener('evento', função)`

---

## 21. Resumo Geral

O que aprendi e considero importante:

**Fundamentos**
- Variáveis (`const` / `let`), tipos primitivos e operadores
- Conversão de tipos e `typeof`
- Valores truthy e falsy

**Controle de fluxo**
- Condicionais: `if/else`, ternário, `switch`
- Repetição: `for`, `while`, `for...of`, `for...in`, `forEach`

**Estruturas de dados**
- Arrays e seus métodos (`push`, `pop`, `sort`, `indexOf`...)
- Objetos, destructuring e listas de objetos
- JSON (`stringify` / `parse`)

**Funções e orientação a objetos**
- Funções, `return`, parâmetros padrão, arrow functions
- Classes, construtores, métodos estáticos e herança

**Recursos modernos**
- Spread operator, desestruturação
- `map`, `filter`, `reduce`
- Módulos (`import` / `export`)

**Interface e eventos**
- Manipulação do DOM (selecionar, alterar, remover)
- Eventos com `addEventListener` e `e.preventDefault()`

---

## Autor

**Vinicius Arruda**  
Estudante de Sistemas de Informação — UFN  
Última atualização: Abril de 2026