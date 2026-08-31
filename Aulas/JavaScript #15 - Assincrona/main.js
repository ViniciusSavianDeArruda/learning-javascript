// JAVASCRIPT ASSÍNCRONO — PRINCIPAL


// PROMISE
// Representa um resultado que ainda vai chegar.
//
// Estados:
// PENDING    → esperando
// FULFILLED  → sucesso
// REJECTED   → erro


// resolve() → indica sucesso
// reject()  → indica erro

function buscarUsuario() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                nome: "Vinicius",
                idade: 21
            });

        }, 2000);

    });
}


// ==================================================
// ASYNC
// ==================================================

// async faz a função retornar uma Promise.

async function mostrarUsuario() {

    // ==================================================
    // AWAIT
    // ==================================================

    // await espera a Promise terminar
    // e pega o resultado dela.

    const usuario = await buscarUsuario();

    console.log(usuario);
}

mostrarUsuario();


// ==================================================
// FETCH
// ==================================================

// fetch() é usado para fazer requisições para APIs.
// Ele JÁ retorna uma Promise.
//
// Por isso não precisamos fazer new Promise().

async function buscarAPI() {

    const resposta = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const usuario = await resposta.json();

    console.log(usuario);
}

buscarAPI();


// ==================================================
// MÉTODOS HTTP PRINCIPAIS
// ==================================================

// GET    → buscar dados
// POST   → criar/enviar dados
// PUT    → atualizar
// PATCH  → atualizar parte
// DELETE → excluir


// ==================================================
// RESUMO
// ==================================================

/*

Promise → resultado que vai chegar depois

async   → indica que a função trabalha com Promise

await   → espera uma Promise terminar

fetch   → faz requisições para uma API
          e já retorna uma Promise

GET     → buscar
POST    → criar
PUT     → atualizar
PATCH   → atualizar parte
DELETE  → excluir

*/
