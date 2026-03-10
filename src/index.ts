// console.log("hello world!")

//import { match } from "node:assert"

// let nome: string = "marcelo"

// let vetor:number[] = [1,2,3,4,5]

// let nomes:string[] = ["oi","olá"]
// console.log(nomes)

//teste

//let bol: boolean = true;

//bol = false

//const variavel:any = "oi"

//const a: undefined = undefined;

// (x,y): number=>{
// if(y==0){
//     return undefined
// }
// let a = x * y 

// return a;
// }

//const obj : {id:number;nome:string;idade:number}  = {
// id:1,
 //   nome:"guilherme",
 //   idade:31
//}
//obj.nome="teste"


const x1 = 10
const vetor1:number[] = [0,1,2,3,4,5,6,7,8,9]
vetor1[0] = 10


//const asdfg = [10,1,2,3,4,5,6,7,8,9]

//asdfasdg = [0,1,2,3,4,5,6,7,8,9]

let vetor2:number[] = [1,2,3,4,5,6,7,8,9]
vetor2 = [0,1,2,3,4,5,6,7,8,9]

const outraLetra: {id:number;nome:string;idade:number}[] = [
    {id:1,nome:"marcelo",idade:18}
]


//funções em javascript/typescript

//oq é uma função?

/**
 * um bloco de código que pode ser reutilizado, e que tem um nome, e que pode receber parâmetros, e que pode retornar um valor
 * (tarefa é uma sequencia de ações que devem ser executadas para alcançar um objetivo)
 * beneficios: não repetir código
 


function nomeFuncao(valor: number): number{
    return valor * 2
}

const f = nomeFuncao
const f3 = f(10)
const f2 = nomeFuncao(10)

console.log("o valor de x é: " + f2)
console.log("o valor de x é: " + f3.toString())
*/

//termine essa função para que ela retorne a soma de todos os elementos do vetor

//somavetor([1,2,3]) => 6
//somavetor([1,2,3,4]) => 10
function somavetor(vetor: number[]): number{
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        const element = vetor[i];
        soma = soma + element!
    }
    return soma}

    //2 - some as posiçôes de um vetor que são pares
    //somaPares([1,2,3,4]) => 6
    //somaPares([6,2,3,4,5,6]) => 12        

function somaPares(vetor: number[]): number{
    let soma = 0;
    for (let i = 0; i < vetor.length; i++){
        const element = vetor[i];
        if (i % 2 === 0){
            soma = soma + element!
        }
    }
    return soma}
   

    /**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código
function criaNovoVetor(vetor: number[], valor1: number, valor2: number): number[] {
    let novoVetor: number[] = [...vetor, valor1, valor2];
    return novoVetor;
}                   

//Fim do seu código

/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código
function divisivelPor11(min: number, max: number): number[] {
    let divisiveis: number[] = [];
    for (let i = min; i <= max; i++) {
        if (i % 11 === 0) {
            divisiveis.push(i);
        }
    }
    return divisiveis;
}
//Fim do seu código


/**
 *  Exercício 03 - maioresDeIdade
 * Nome da função - maioresDeIdade
 * Crie uma função que retorna um array com os objetos com idade maior que 18
 * @param {vetor:Pessoa[]} vetor Vetor de objetos com id, nome e idade
 * @returns {Pessoa[]} Retorna um array com os objetos com idade maior que 18
 * @example
 * 
 * const pessoa1 = {id: 1, nome: 'João', idade: 20}
 * const pessoa2 = {id: 2, nome: 'Maria', idade: 18}
 * const pessoa3 = {id: 3, nome: 'José', idade: 17}
 * maioresDeIdade([pessoa1, pessoa2, pessoa3]) // [pessoa1, pessoa2]
 */
interface Pessoa{
    id: number,
    nome: string,
    idade: number
}

//Início do seu código
function maioresDeIdade(vetor: Pessoa[]): Pessoa[] {
    let maiores: Pessoa[] = [];
    for (const pessoa of vetor) {
        if (pessoa.idade >= 18) {
            maiores.push(pessoa);
        }
    }
    return maiores;
}
//Fim do seu código

/**
 * Exercício 04 - resolve equação
 * Nome da função - resolveEquacao
 * Crie uma função que retorne os pontos em Y a partir de um vetor dos pontos em X da equação y = x^2 + 2x + 6
 * @param {number[]} vetor Vetor de pontos em X
 * @returns {number[]} Retorna um array com os pontos em Y
 * @example
 * resolveEquacao([1, 2, 3]) // [9, 14, 21]
 */

//Início do seu código
function resolveEquacao(vetor: number[]): number[] {
    let pontosY: number[] = []; 
    for (const x of vetor) { //of retorna elementos diretamente. 
        const y = x ** 2 + 2 * x + 6;
        pontosY.push(y);
    }  

    return pontosY;
}
//Fim do seu código

/**
 * Exercício 01 - Calcular o quadrado de um número
 * Nome da função - calcularQuadrado
 * Crie uma função que receba um número e retorne o seu valor elevado ao quadrado.
 * @param {number} a Número a ser calculado
 * @returns {number} Retorna o quadrado do número
 * @example
 * calcularQuadrado(2) // 4
 * calcularQuadrado(-3) // 9
 */

//Início do seu código
function calcularQuadrado(a: number): number {   
    return a ** 2;
}

//Fim do seu código

/**
 * Exercício 02 - Verificar se um número é positivo
 * Nome da função - ehPositivo
 * Crie uma função que retorne verdadeiro se o número for maior que zero e falso caso contrário.
 * @param {number} a Número a ser verificado
 * @returns {boolean} Retorna true para positivos e false para negativos ou zero
 * @example
 * ehPositivo(2) // true
 * ehPositivo(-3) // false
 */

//Início do seu código
function ehPositivo (a:number): string {
    if (a > 0) {
        return "Positivo";
    } else if (a < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}
//Fim do seu código

/**
 * Exercício 03 - Calcular média de três números
 * Nome da função - calcularMedia
 * Crie uma função que receba três números e retorne a média aritmética entre eles.
 * @param {number} a Primeiro número
 * @param {number} b Segundo número
 * @param {number} c Terceiro número
 * @returns {number} Retorna a média dos três números
 * @example
 * calcularMedia(2, 4, 6) // 4
 * calcularMedia(10, 20, 30) // 20
 */

//Início do seu código
function calcularMedia(a:number, b:number, c:number): number {
    const media = (a + b + c) / 3
    return media;

}
//Fim do seu código

/**
 * Exercício 04 - Verificar se um ano é bissexto
 * Nome da função - ehAnoBissexto
 * Crie uma função que verifique se um ano é bissexto (divisível por 4).
 * @param {number} ano Ano a ser verificado
 * @returns {boolean} Retorna true se for bissexto e false caso contrário
 * @example
 * ehAnoBissexto(2020) // true
 * ehAnoBissexto(2021) // false
 */

//Início do seu código
function ehAnoBissexo(ano:number): number [];{
    const ano = 366
    if (ano / 4 ) {
        return "true";
    } else {
        return "false";
    }
}
     


//Fim do seu código