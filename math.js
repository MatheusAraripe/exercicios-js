const calculate = () => {
    const a = 10;
    const b = 5;
    console.log(`${a} + ${b} = `, a+b);
    console.log(`${a} - ${b} = `, a-b);
    console.log(`${a} x ${b} = `, a*b);
    console.log(`${a}/${b} = `, a/b);
}
calculate();

const evenOrodd = (number) => {
    if(number%2 === 0) console.log(`${number} é par`);
    if(number%2 !== 0) console.log(`${number} é impar`);
}
evenOrodd(5)

const showArry = () => {
    const arry = ['Saturno','Marte','Terra','Netuno','Júpter']
    console.log('Meu arry de planetas possui:');
    arry.forEach(item => console.log(`- ${item}`))
}
showArry();


const personFunction = () => {
    const pessoa = {nome: "Michael Jackson",idade: 30}
    console.log(pessoa);
}
personFunction();

const bigNumber = (arry) => {
    console.log(`O maior número do arry é: ${Math.max(...arry)}`);
}
bigNumber([1,56,43,865,2,6])

const quantCharacters = (str) => {
    console.log(`"${str}" possui ${str.length} caracteres`);
}
quantCharacters("1 2");