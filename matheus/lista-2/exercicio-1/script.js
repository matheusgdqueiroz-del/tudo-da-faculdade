// Exercício 1: Formatação de Números para Moeda Real
// Enunciado:
// Peça ao usuário que digite um valor numérico. Em seguida, exiba esse valor
// formatado como moeda brasileira (R$), incluindo o símbolo, a vírgula para
// casas decimais e o ponto para separar as casas de milhar.


let valor = Number(prompt("Digite um valor: "))

valorFormatado = valor.toLocaleString('pt-BR', {
    style : 'currency',
    currency : 'BRL'
})

alert(`O seu valor formatado para reais é: ${valorFormatado}`)