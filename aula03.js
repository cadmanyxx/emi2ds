// Alguns erros 

let numero = 12 // O javaScript é sensível ao capsLock
//console.log(numero) // Erro de declaração, varíavel não declarada

//console.log(numero // Erro de sintaxe, faltas de parenteses

// Tratamento de erros

//console.error('A lista não está executando a média') // Declara um erro para  outro usúario;

const idadeMinima = 18
let idadeCliente = 17

if(idadeCliente >= idadeMinima){
    console.log('Corote')
} else{
    console.log('Dollyinho')
}

// Valor ternário
idadeCliente = 20

// modo ternário, ___ <= ___ ? ------ : ------
// modo ternário, ___ <= ___ ? ------ : ------
console.log(idadeCliente >= idadeMinima ? 'Corote' : 'Dollyinho')
                    // => uma função arrow, completamente diferente de maior igual

//utilizar com cuidado 

const none = "Lele"
const idade = 16
const ciadeNascimento = "Chique Chique Bahia"

const apresentacao = "Meu nome é " + none + "tenho" + idade + " anos e nasci em" + cidadeNascimento

console.log(apresentacao)

// Template string

const apresentacaoII = `Sou o $()`