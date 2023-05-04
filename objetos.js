//aprendo a orientação de objetos
/*const professor = {
    nome: "Vitor",
    idade: 27,
    email: 'vitor@gmail.com'
  }
console.log(professor.idade, professor.nome)  

const moto = {
    modelo: 2020,
    ano: 2023,
    marca: 'houston'
}
moto.ano = 2021
console.log(moto['ano'])

//EXERCIO-1 = Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, 
//o ano de lançamento, uma lista com o elenco e uma propriedade que diga se você já viu ou não.
//Acesse e imprima no console cada uma das propriedades: metade usando notação do ponto e 
//a outra metade com notação de colchetes. 


const filme = {
    direção: 'Fernando Guimaraens',
    nome: 'Jupiter e alem',
    anoLancamento: 2024,
    elenco: ['ana maria', 'gabriela', 'maria julia', 'gabriel'],
    assistido: 'sim'
}

console.log(filme.nome, filme.anoLancamento)
/*console.log(filme['direção'], filme['elenco'], filme['assistido'])
console.log(property) filme:String
filme['filme'] + ','+filme.anoLancamento
'\nelenco:' + filme.elenco[0] + ',' +
filme.elenco[3] + '\nano: ' filme.direção +
'\nassistiso:' + filme.assistido*/

//Crie um objeto que represente uma pessoa. Essa pessoa precisa ter nome, idade, gênero musical preferido.
//Acesse e imprima no console as propriedades desse objeto, seguindo o modelo abaixo:
//"O nome da pessoa é ___, ela tem ___ anos e gosta muito  de ___."
/*const pessoa = {
    primeiroNome: 'Clarice',
    idade: 22,
    generomusical: 'hip-hop/rap lirico'
}

console.log(`O nome dela é ${pessoa.primeiroNome}, ela tem ${pessoa.idade} e gosta muito de escutar ${pessoa.generomusical}`)

//array de objetos
const professores = [ 
    {nome: 'andrei', modulo: 1,},
    {nome: 'vitor', modulo: 2}
]

console.log(professores);
console.log(professores[1]);
console.log(professores[1].nome);

const curso = {
    nome: 'frontend'
}
curso.numerodeEstudantes = 50
curso['numerodeEstudantes'] = 55
console.log(curso)

//adicione ao objeto 1 uma lista com os nome com os personas do filme
//Acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem
//Altere a primeira pessoa do elenco por "Xuxa".
//Imprima no console todas as propriedades do objeto.
/*const filme = {
    direção: 'Fernando Guimaraens',
    nome: 'Jupiter e alem',
    anoLancamento: 2024,
    elenco: ['ana maria', 'gabriela', 'maria julia', 'gabriel'],
    assistido: 'sim'
}
filme.personagens = ['joana', 'fatima', 'catrina', 'jacinto']
console.log(filme.elenco[0], 'como', filme.personagens[0]);
console.log(filme.elenco[1], 'como', filme.personagens[1]);
console.log(filme.elenco[2], 'como', filme.personagens[2]);
console.log(filme.elenco[3], 'como', filme.personagens[3]);
filme.elenco[0] = 'xuxa'
console.log('filme sobe direção de', filme.direção, 'que se chama', filme.nome, 
'lançado no ano de', filme.anoLancamento, 'estrelando',  filme.elenco, 'como', 
filme.personagens, 'voce assitiu?', filme.assistido)*/

//exemplo exercicio filme com obj dentro de objeto
const filme = {
    direção: 'Fernando Guimaraens',
    nome: 'Jupiter e alem',
    anoLancamento: 2024,
    elenco: [{
        ator:'ana maria', personagem:'joana',
        ator: 'gabriela', personagem:'fatima',
        ator: 'maria julia', personagem:'catrina',
        ator: 'gabriel', personagem: 'jacinto'}],
    assistido: 'sim'
}
console.log(filme.elenco[0].ator, 'como', filme.elenco[0].personagem);

//praticando spread/espelhamento de objs/arrays
const carro = {
    marca: 'chevrolet',
    modelo: 'onix',
    ano: 2021,
    cidade: ['são leopoldo', 'novo hamburgo', 'porto alegre']
    
}
const carroNovo = {
    ...carro,
modelo:'onix plus'}
console.log(carroNovo.modelo)

//Crie uma função que receba um objeto de pessoa (Exercício 2) 
//e crie um novo objeto mantendo as propriedades originais e acrescentando:
//a) Uma propriedade com a lista de suas comidas preferidas; 
//b)Uma propriedade que seja um objeto, com nome e idade,
// para representar o melhor amigo da pessoa.
const pessoa = {
    primeiroNome: 'Clarice',
    idade: 22,
}
objeto(pessoa)
function objeto(teste) {
const pessoaNova = {
    ...pessoa,
        comidasFav: ['strogonoff', 'batata assada', 'pizza'],
        amigo: { 
            nome0: 'aline', idade: 22
    
    } 
}
return pessoaNova;
}
let result = objeto(teste)
console.log( `nome da pessoa é ${teste.primeiroNome} e suas comidas preferidas são
     ${teste.comidasFav[0]}, ${teste.comidasFav[1]} e ${teste.comidasFav[2]}. 
     Seu melhor amigo se chama ${teste.amigo.nome0} e tem ${teste.amigo.idade} anos`);