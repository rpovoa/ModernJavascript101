// -> Sintaxe Básica e Tipos de Dados
   // Declaração de variáveis: var, let, const e a diferença entre eles.
   // Tipos de dados primitivos: String, Number, Boolean, Undefined, Null, Symbol, BigInt.

  var v = 10
  let l = 20
  const c = 30
   
// O problema em utilizar o var:

// Hosting de variáveis

console.log(a)
var a = 10

// Vazamento de escopo

function sayMyName(name){
    if(name === "John"){
        var message = "Hello John"
    }
    console.log(message)
}

sayMyName("John")
   
    
// -> Tipos de Dados Primitivos

let a = "string"
let b = 10
let c = true
let d = undefined
let e = null
let f = Symbol("symbol")
let g = BigInt(10) 
   

/* 
 - undefined é um valor que representa uma variável que foi declarada, mas não inicializada.
 - null é um valor que representa uma variável que não foi inicializada.
*/
   
// Referencia e valores primitivos   
   
// Valores primitivos: são os tipos de dados básicos e imutáveis em JavaScript. Quando você atribui um valor primitivo a uma variável, ela armazena diretamente o valor

let a = 10
let b = a
a = 20
console.log(a,b)
      
   
// Referencia: Objetos e arrays em JavaScript não são armazenados diretamente na variável. Em vez disso, as variáveis armazenam referências a locais na memória onde o objeto ou array está armazenado. Esses tipos são considerados mutáveis.

let a = {
    value: 10
}
let b = a
a.value = 20
console.log(a,b)
   
   
// -> Escopo e Hoisting
   
// Escopo global
   
      let a = 10
   
   
// Escopo de bloco 
   
    if(a>b)
      {
       let b = 20
       console.log(b)
      }
   
   
// Escopo de função
   
      function sayHello(name)
      {
       let message = "Hello " + name
       console.log(message)
   
      }
   
   
   
// -> Manipulação de Arrays e Objetos
   
   
// Declarando Arrays
   
  let arr = [1,2,3,4,5]
   
     
   
// Acessando elementos do array
   
   console.log(arr[4])
   
   
// Array destructuring - é uma forma de extrair valores de um array para variáveis individuais.
   
   let arr = [1,2,3,4,5]
   
   let [a,b,c] = arr
   
   console.log(a,b,c,resto)
   
// Filter, map e reduce

// Filter
   
      let arr = [1,2,3,5]
   
      function filterValue(arr){
       let newArr = []
       for(let i = 0; i < arr.length; i++){
           if(arr[i] > 2){
               newArr.push(arr[i])
           }
       }
   
       console.log(newArr)
           
      }
   filterValue(arr)


   let arr = [1,2,3,5,6,7,8,9,10]
   
   let arr2 = arr.filter((value)=>  value > 2)
   
   console.log(arr2)

// map
   
   let arr = [1,2,3,5]
   
   let arrMap = arr.map((value) => value *2)
   console.log(arrMap)

// reduce
   
   let arr = [1,2,3,5]
   
   let arrReduce = arr.reduce((acc, value) => acc + value, 0)
   console.log(arrReduce)
   
   
// -> Funções: 
//São blocos de código que podem ser reutilizados. Em JavaScript, funções são “primeira classe”, o que significa que podem ser tratadas como valores.
 // Antes de falarmos de função, é importante entender alguns conceitos de programação funcional.

 // Forma clássica de declarar uma função
   
   
   function sayHello(){
       console.log("Hello")
   }
   
   sayHello()
   
   
// Funções como valores
   
    let sayHello = function(){
       console.log("Hello, i am a function")
      }
   
      sayHello()
   
      console.log(typeof(sayHello))
    
   
      // Funções como argumentos
    function execute(f){
       return f()
      }
   
    function sayHello(){
       console.log("Hello")
   }
   
   
      execute(sayHello)

   
      // Retornando funções
      
   
      function sayHello(){
   
       return  sayMyAge()
      }

      function sayMyAge(){
         console.log("My age is 20")
      }
   
      sayHello()
   
      // Função anonima - é uma função que não tem um nome definido. Muito utilizada em callbacks e eventos, onde o objetivo não é reutilizar a função, mas executar uma ação específica.

    let f = function(){
       console.log("Hello, i am a function")
    }

    f()
   
// Arrow function - é uma forma mais curta de escrever uma função.

   let arrowFunction = () => {
       console.log("Hello, i am a arrow function")
   }

   arrowFunction()
   
   
// -- Forma curta
 
  let sunTwoNumbers = (a,b) => a + b

  console.log(sunTwoNumbers(1,2))
          

// -- Passando uma arrow como argumento para outra função

setInterval(() => {console.log("Hello, i am a arrow function")}, 1000)
   
//-> Objetos

let person = {
    name: "Rodolfo",
    age: 20,
    sayHello: function(){
        console.log("Hello, i am a person")
    }
}

person.sayHello()
   
// Acessando propriedades do objeto

console.log(person.name)
console.log(person["age"])
   
// Object destructuring

let {name, age} = person
   

//Diferença entre array e objeto
   
      /* 
      - Array é uma lista ordenada de valores, enquanto objeto é uma coleção de pares chave-valor.
      - Array é indexado por números, enquanto objeto é indexado por chaves.
      - Array é um tipo de dado primitivo, enquanto objeto é um tipo de dado composto.
      */
   

// -> Programação Assincrona
   
   
// Promises - Forma de lidar com tarefas que demoram um tempo para serem concluídas, sem travar o resto do código enquanto você espera a “pizza” (a tarefa) ser entregue.

const myPromise = new Promise((resolve, reject) => {
    // Simulando uma operação assíncrona, como uma requisição a um servidor
    setTimeout(() => {
      const sucesso = true; // Simule uma condição de sucesso ou falha
  
      if (sucesso) {
        resolve("Operação bem-sucedida!");
      } else {
        reject("Ocorreu um erro.");
      }
    }, 2000); // Simulando 2 segundos de atraso
  });

  myPromise.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

 
   
// Exemplo de uma chamada a API com promises

function fetchDadosDaAPI(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            // Se a resposta não for ok, rejeita a Promise
            throw new Error("Erro na requisição: " + response.status);
          }
          return response.json(); // Converte a resposta para JSON
        })
        .then((dados) => resolve(dados)) // Resolve a Promise com os dados recebidos
        .catch((erro) => reject(erro)); // Rejeita a Promise em caso de erro
    });
  }
  
  fetchDadosDaAPI("https://jsonplaceholder.typicode.com/posts/1")
    .then((dados) => console.log(dados))
    .catch((erro) => console.log(erro));
    
// Async / Await

   
// Async é uma palavra-chave que define uma função assíncrona, que retorna uma Promise implicitamente.

async function MyAsyncFunction() {
    return "Olá, mundo!";
  }
  
MyAsyncFunction().then((message) => {
    console.log(message);
  });
   
   
// Dentro de uma função async, você pode usar await para esperar que uma Promise seja resolvida antes de continuar a execução do código.
   
async function fetchDadosDaAPI(url) {
  try {
    // Faz a requisição HTTP usando fetch
    const response = await fetch(url);

    // Verifica se a resposta não foi bem-sucedida
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    // Converte a resposta para JSON
    const dados = await response.json();

    // Retorna os dados
    console.log(dados);
  } catch (erro) {
    // Em caso de erro, lança o erro para o chamador lidar com ele
    throw erro;
  }
}
  
fetchDadosDaAPI("https://jsonplaceholder.typicode.com/posts/1")

// Quando usar async / await ou promises?
   
     //A principal diferença entre async e Promises é que Promises são a base para lidar com operações assíncronas em JavaScript, permitindo que você trabalhe com resultados futuros usando métodos como
     // .then() e .catch(). Por outro lado, async é uma palavra-chave que simplifica o uso de Promises, permitindo que você escreva código assíncrono de forma mais legível e sequencial, como se fosse código síncrono, 
     //utilizando a palavra-chave await para pausar a execução até que uma Promise seja resolvida. Enquanto Promises estruturam a lógica assíncrona, async/await facilita a escrita e leitura desse código.
   
   
   
// Módulos ES6: Import e Export de funções, objetos e variáveis.
   
   
// Exportando uma função e Importando uma função

let result = () =>{
    return "Hello, World!";
  }
  
  
  export {result};
  
  
  import {result} from "./modulo.js";
  
  console.log(result());
  
   
     
     
   