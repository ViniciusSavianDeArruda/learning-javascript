//  VARIÁVEIS: const e let
// `const` é usado para valores que não mudam.
// `let` é usado para valores que podem ser alterados.

// tipos de dados
const nome = "Lucas";        // string
const idade = 30;            // number
const ativo = true;          // boolean
let endereco;                // undefined (declarada, sem valor)
const semValor = null;       // null (vazio intencional)
const usuario = { nome: "Lucas", idade: 30 }; // object
const numeros = [1, 2, 3];   // array

//Nao primitivos (Objetos)
//object — { chave: valor }
//array — [1, 2, 3]
//function

//Você pode checar o tipo de qualquer valor com typeof ele retorna um object nao array, mas se quiser que retorne um array use Array.isArray([]) (retorna true).


//  Isso dá erro porque `const` não pode ser reatribuído:
// const message = 'Hello world!'
// message = 'Olá mundo!' // erro!

//  O correto é usar `let` se precisar alterar o valor:
let message = 'Hello world';
message = 'Olá mundo!';
alert(message);

//  STRINGS
const greeting = 'Hello world!';
console.log("Quantidade de caracteres:", greeting.length);

const firstName = "Elvis";
const lastName = "Presley";

// Forma antiga (concatenação)
console.log("Meu nome é " + firstName + " " + lastName);

// Forma moderna (template string com crase)
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

//  Transformar uma string em lista
const names = "Ana,Julia,Bruna";
console.log(names.split(",")); // separa pelos espaços após vírgulas

//  Quebrar por letra
const name = "Maria";
console.log(name.split("")); // separa cada caractere

//  NÚMEROS
const number = 5;
console.log("Número vezes 2:", number * 2);

// Converter número para string
console.log("Convertido para string:", number.toString());

// Saber o tipo de cada valor
console.log("Tipo original:", typeof number);
console.log("Tipo após conversão:", typeof number.toString());

//  BOOLEANOS
console.log(2 == 2);  // true
console.log(2 == 3);  // false


//  NULL & UNDEFINED

// `null` → representa ausência de valor (vazio)
const x = null;
// você, de propósito, decide que "isso está vazio" (uma escolha consciente sua no código).

// `undefined` → variável declarada, mas sem valor atribuído
let y;
console.log(x, y);
// o próprio JavaScript decide sozinho que "isso não foi preenchido" (variável declarada sem valor, ou propriedade que não existe)



