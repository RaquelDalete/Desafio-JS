//Mostre no console.log a mensagem "Ano novo está chegando!!";
console.log("Ano novo está chegando");

//Crie uma variável que receba o nome da cantora Mariah Carey
let cantora = "Mariah Carey";
console.log(cantora);

//Crie uma variável que receba a idade dela
let idade = 54;

console.log(idade);

//Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
let ano = 2023;
let _idade = 54;

console.log((ano = ano - _idade));

//Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;

let quartaFeira = false;

console.log(quartaFeira);

console.log(typeof quartaFeira);

//Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.SENÃO for maior ou igual a 18, retorne a seguinte mensagem: "Sinto muito, mas assistirá da tv globo"

let Idade = 27;

if (Idade >= 18) {
  console.log(
    "Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey"
  );
} else {
  console.log("Sinto muito, mas assistirá da tv globo");
}

//Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO.Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas.O mês escolhido foi o mês tal.Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.

let mes = "Agosto";
let $mes = "Dezembro";
let _mes = `Junho`;

if (mes != "Agosto" || $mes == "Dezembro" || _mes != `Junho`) {
  console.log(
    `Uma ou mais opções estão corretas. O mês escolhido foi o mês de ${$mes}`
  );
} else {
  console.log(
    `Algo de errado não está certo, o mês digitado foi o mês ${Junho}`
  );
}
