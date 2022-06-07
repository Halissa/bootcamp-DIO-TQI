let objeto = {
    frase: 'string',
    numero: 1,
    boleano: true,
    vetor: [1, 2, 3]
}

console.log(objeto);

/*Acessando um atributo (desestruturação)*/
console.log(objeto.vetor);

/*Outra forma de desestruturação*/
var {frase, vetor} = objeto;
console.log(frase, vetor);