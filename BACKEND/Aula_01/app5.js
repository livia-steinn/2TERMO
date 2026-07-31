const imc = require('readline-sync');

console.log("---CALCULADORA DE IMC---");

const peso = imc.questionFloat("Digite seu peso: ");
const altura = imc.questionFloat("Digite sua altura: ");

const total = peso / (altura^2);

console.log("\n--- IMC ---");
console.log(`Total : R$ ${total.toFixed(2)}`);
