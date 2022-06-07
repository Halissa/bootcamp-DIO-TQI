/*Vetores */
let vetor = ['String', 1, true, 2.57, 'c'];

/* Imprime cada elemento do vetor e ao lado o seu índice: */
vetor.forEach(function(item, index){console.log(item, index)});
console.log('');

/*Add novo item ao final: */
vetor.push('novo item');
console.log(vetor);

/*Remover o último item */
vetor.pop();
console.log(vetor);

/*Remove o primeiro item */
vetor.shift();
console.log(vetor)

/*Add novo item ao inicio*/
vetor.unshift('novo item Ini');
console.log(vetor);

/* Retorna o índice de um item */
console.log(vetor.indexOf(true));

/*Retorna a parte de um array em um novo array */
let vetor2 = vetor.slice(0, 3);
console.log(vetor2);

/*Remove ou substitui um item por um indice */
vetor.splice(0, 3);
console.log(vetor);