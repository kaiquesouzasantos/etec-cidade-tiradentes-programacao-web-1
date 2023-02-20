//variavel
var ValorTotal;

//constante de valor de desconto
const DescontoPadrao = 0.05;

ValorTotal = 0;//atribuindo o valor da variavel

//atribuição de valor de variaveis
var PrecoDoProduto = 5;

var Quantidade = 2;

//atualizando o valor de ValorTotal
ValorTotal = (PrecoDoProduto*Quantidade)* (1-DescontoPadrao);

//apresentanto ValorTotal
alert(ValorTotal);
