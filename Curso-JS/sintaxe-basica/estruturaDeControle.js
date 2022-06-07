let num = 2;

/*Condição IF/ELSE */
console.log('\nExemplo IF/ELSE: ');
if(num < 2) {
    console.log('Número é menor que 2');
} else {
    console.log('Número é menor ou igual a 2');
}


/* Condição IF/ELSE IF */
console.log('\nExemplo IF/ELSE IF:');

if(num < 2) {
    console.log('Número é menor que 2');
} else if (num == 2){
    console.log('Número é igual a 2');
} else {
    console.log('Número maior que 2');
}


/*Switch Case */
console.log('\nExemplo Switch Case:');

switch (num) {
    case 1:
        console.log('UM');
        break;
    case 2:
        console.log('DOIS');
        break;
    case 3:
        console.log('TRES');
        break;
    default:
        console.log('NÚMERO MAIOR QUE TRES');
}

/*Operador ternário*/
let teste = true;

teste ? console.log('Verdadeiro') : console.log('Falso');

let valor = 5;

valor < 3 ? console.log('Menor que 3') : console.log('Maior que 3');