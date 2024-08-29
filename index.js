// Scope
// escopo refere-se ao contexto em que as variáveis e funções são acessíveis durante a execução do código. Ele determina onde as variáveis, funções e objetos podem ser referenciados ou chamados

// Isso é um escopo global
var a = 10

function showValue(){

    console.log(a)
}

showValue()

// Escopo de bloco

var b = 30

if(true){
    let localVar = "I´m a local var"
    console.log(localVar)
}

console.log(localVar)

// Escopo de função

var c = 70

function localScope(){
    var localVar = "I´m a local var"
    console.log(localVar)
}

localScope()
console.log(localVar)


// nota importante sobre hosting
//Em JavaScript, as declarações de variáveis var e funções são "elevadas" ao topo do escopo em que são definidas. 
//Isso significa que você pode usar uma função ou variável antes de declará-la, mas somente para var e function. let e const não sofrem hoisting da mesma forma, sendo inicializadas apenas quando são encontradas no código.


newFunc()

function newFunc(){
    console.log("I´m a function")
}



// let, var e const

var a = 10
let b = 15
const c = 30

// var - modo mais comum de declarar variaveis
var a = 3
console.log(a)

function showValue(){
    console.log(a)
}

// o grande problema do var é o escopo. Em escopos de bloco, acontece muito o variable leakage

a = 10
if(a > 5){
    var result ="Sou maior que 5"
    console.log(result)
}

console.log(result)

// Porque evitar o var ? Principalmente pq a declaração do var sofre hosting, mas a atribuição não. Ou seja, você pode ter um undefined se tentar acessar uma variavel antes dela ser atribuida


console.log(a)
var a = 10


// let - É uma das novas formar de declarar variáveis. Foi intruduzida no ES6(2015). Foi criado para fornecer um controle mais preciso sobre o escopo e o comportamento das variáveis.


function showValue(){
    let l = 200
    console.log(l)
}



// const - Utilizador para definir valires constantes. É imutável, ou seja, não é possivel alterar um valor de um const

const c = 100

function showValue(){
    console.log(c)
}

showValue()


// Array

// Declaração padrão de um array

arr = [1,2,3,4,5,6]

console.log(arr[0])

// Imagina que quero filtrar os numeros maiores que 3 no array acima

// Forma padrão

arr = [1,2,3,4,5,6]

function maiorQue3(){
    let i = 0
    newArr = []
    for(i=0;i<arr.length;i++){

        if(arr[i]> 3){
            newArr.push(arr[i])
        }
    }
    console.log(newArr);

}

maiorQue3()

// Filtrando dados no Array com Filter

arrNumbers = [1,2,3,4,5,6,7,8,9,10]

newArrNumbers = arrNumbers.filter(value => value >3)

console.log(newArrNumbers)

// Outro exemplo muito utilizado

const itens = [

    {id:1, name: 'Item 1', active: true},
    {id:2, name: 'Item 2', active: false},
    {id:3, name: 'Item 3', active: false},

]

const activeItens = itens.filter(item => item.active)

console.log(activeItens);

// Utilizando MAP para alterar valores de um Array

arrMap = [1,2,3,4,5,6,7]

newArrMap = arrMap.map(value => value *2)

console.log(newArrMap)

// Exemplo com React. Podemos utilizar o map() para iterar sobre o array tasks e retornar um array de elementos JSX. Cada elemento JSX representará uma task.

function TaskList() {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.completed ? 'Concluído' : 'Pendente'}
          </li>
        ))}
      </ul>
    );
  }

  // Reduce

  





