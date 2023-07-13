// 1
const calculate = () => {
    console.log(" 1 - Crie duas variáveis numéricas e realize as seguintes operações aritméticas: soma, subtração,multiplicação e divisão. Exiba o resultado de cada operação no console.");
    console.log(" ");
    
    const a = 10;
    const b = 5;
    console.log(`=> ${a} + ${b} = `, a+b);
    console.log(`=> ${a} - ${b} = `, a-b);
    console.log(`=> ${a} x ${b} = `, a*b);
    console.log(`=> ${a}/${b} = `, a/b);
    console.log("----------------------------------------------------------------------");
}
calculate();
// 2
const evenOrodd = (number) => {
    console.log(" 2 - Escreva um programa que determine se um número é par ou ímpar. O número deve serarmazenado em uma variável.");
    console.log(" ");
    
    if(number%2 === 0) console.log(`=> ${number} é par`);
    if(number%2 !== 0) console.log(` => ${number} é impar`);
    console.log("----------------------------------------------------------------------");
}
evenOrodd(5)
// 3
const showArry = () => {
    console.log(" 3 - Crie um array com 5 elementos e exiba cada elemento no console.");
    console.log(" ");

    const arry = ['Saturno','Marte','Terra','Netuno','Júpter']
    console.log(`Meu arry [${arry}] possui:`);
    arry.forEach(item => console.log(`- ${item}`))
    console.log("----------------------------------------------------------------------");
}
showArry();

// 4
const personFunction = () => {
    console.log(" 4 - Crie um objeto chamado 'pessoa' com as propriedades 'nome' e 'idade'. Atribua valores aessas propriedades e exiba o objeto no console.");
    console.log(" ");

    const pessoa = {nome: "Michael Jackson",idade: 30}
    console.log("=> ",pessoa);
    console.log("----------------------------------------------------------------------");
}
personFunction();

// 5
const bigNumber = (arry) => {
    console.log(" 5 - Crie uma função que receba um array de números como parâmetro e retorne o maior númerodesse array. Exiba o resultado no console.");
    console.log(" ");

    console.log(`=> O maior número do arry [${arry}] é: ${Math.max(...arry)}`);
    console.log("----------------------------------------------------------------------");
}
bigNumber([1,56,43,865,2,6])

// 6
const quantCharacters = (str) => {
    console.log("6 - Crie uma função que receba uma string como parâmetro e retorne o número de caracteres dessastring. Exiba o resultado no console.");
    console.log(" ");
    console.log(`=> "${str}" possui ${str.split(/\S/g).length - 1} caracteres`);
    console.log("----------------------------------------------------------------------");
}
quantCharacters("hoje será um bom dia!");

// 7
const isPrime = (num) => {
    if (num < 2) return false;
    
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}
console.log("7 - Crie uma função que receba um número inteiro como parâmetro e verifique se ele é um númeroprimo. Retorne true se for primo e false caso contrário.");
console.log(" ");
console.log("=> 3:",isPrime(3));
console.log("----------------------------------------------------------------------");


// 8
const reverseString = (string) => {
    console.log(" 8 - Implemente uma função que receba uma string como parâmetro e retorne a mesma string, mascom as palavras em ordem reversa. Por exemplo, se a entrada for 'Olá mundo', a saída deve ser 'mundo Olá'.");
    console.log(" ");
    
    console.log("=>", string.split(" ").reverse().join(" "));
    console.log("----------------------------------------------------------------------");
}
reverseString("Comi abacaxi");

// 9
const factorial = (num) => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
console.log("9 - Crie uma função que receba um número inteiro positivo como parâmetro e retorne o fatorialdesse número.");
console.log(" ")
console.log("=> 4! = ",factorial(4));
console.log("----------------------------------------------------------------------");

// 10
const findSecondMinMax = (arry) => {
    console.log(" 10 - Crie uma função que receba um array de números como parâmetro e retorne o segundo menor eo segundo maior número desse array em um novo array.");
    console.log(" ");
    console.log(" Para o arry: ",arry);

    arry.sort(function(a, b){return a - b})
    arry.pop()

    console.log(`=> ${[arry[1],arry.pop()]}`);
    console.log("----------------------------------------------------------------------");
}
findSecondMinMax([30,4,67,800,240,540])

// 11
const weekDays = (inputDate) => {
    console.log(" 11 - Escreva uma função que receba uma data como parâmetro e retorne o dia da semanacorrespondente. Por exemplo, se a data for '2023-06-16', a função deve retornar 'sexta-feira'.");
    console.log(" ");

    const days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const date = new Date(inputDate);
    
    console.log(`=> ${inputDate} era uma ${days[date.getDay()]}`);
    console.log("----------------------------------------------------------------------");
}
weekDays("2023-06-16")

//12

const quantDays = (date1, date2) => {
    console.log(" 12 - Crie uma função que calcule a diferença em dias entre duas datas. A função deve receber duasdatas como parâmetros e retornar o número de dias entre elas.");
    console.log(" ");

    const quantMs   = new Date(date1) - new Date(date2)
    const quantInDays = quantMs / (1000 * 60 * 60 * 24);

    console.log(`=> De ${date1} para ${date2} tem ${quantInDays} dias`);
    console.log("----------------------------------------------------------------------");
}
quantDays("2023-06-16","2023-03-16")

//13 
const remainingDays = (inputDate) => {
    console.log(" 13 - Escreva uma função que receba uma data como parâmetro e retorne o número de dias restantesno mês.");
    console.log(" ");

    const date = new Date(inputDate);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const quantOfDays = lastDayOfMonth - date.getDate();
    
    console.log(`=> Restam ${quantOfDays} dias contando de ${inputDate}`); 
    console.log("----------------------------------------------------------------------");
}
remainingDays("2023-06-16");