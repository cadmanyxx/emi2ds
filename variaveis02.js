let forma = 'triangulo';
let base = 20;
let altura = 40;
let areatriangulo = altura * base;
let areatrinagulo = (altura * base) / 2;
// let areaRetabgulo = altura * base;
//let areaTiriangulo = ( altura * base) / 2;
let area;

// Condicional Se... Então...

if( forma === 'retãngulo'){
    area = altura * base;
    console.log(areaRetangulo)
}else {
    area = (altura * base) / 2
    console.log(areaTriangulo)
}

// Boolean
const usuarioLogado = true
const contaPaga = false;//tipo number

// Var era utilizado para todos as variáveis
var numero01 = 3
// let é uma atualização do var e é passivel de variação
let numero02 = 10
// const é uma maneira de declarar uma variável que irá permanecer constante
const numero03 = 7

const soma = numero01 + numero03
const subtracao = numero03 * numero01
const multiplicacao = numero03 * numero02
const divisao = numero02 / numero01

console.log (soma)
console.log(subtracao)
console.log (multiplicacao)
console.log (divisao)


// Tipo Float -- ponto flutuante

const numero04 = 3.2
const numero05 = .5

const multiplicacao2 = numero04 + numero05

console.log(multiplicacao2)

//NaN -> Not a Number

const nome = "Felipe"
const falsonumero = '7'

const naoEnumero = nome * 0.4
const concatenacao01 = falsonumero + numero04

console.log (naoEnumero)
console.log(concatenacao01)

// Dados do tipo String = Textos

const frase = 'Meu nome é'
const frase2 = 'O segundo DS é  "estudioso", não é?' 

const concatenacao02 = frase + nome

console.log(concatenacao02)

//Dados do tipo Boolean
//True -> verdadeiro
//False -> Falso

const numero06 = 7

const comparacao01 = numero06 == falsonumero
const comparacao02 = numero06 === falsonumero

//Um sinal de igual (=) é para declarar
// Dois sinais de igual (==) comparando os :valores e não o tipo do dado (comparação fraca)
// Três sinais de igual(===) comparando os tipos do dado.(comparação forte)

console.log(comparacao01)
console.log(comparacao02)

// Truthy ou falsy
// 0 -> false
// 1 -> true

console.log(0 == false); //retorna verdadeira
console.log(''== false); // retorna verdadeira