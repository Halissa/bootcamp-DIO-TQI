/*Funções com valores padrão (default):
No exemplo abaixo teremos como parametrosum array que 
deve ser declarado ao invocarmos a função e um num que
representa o expoente e caso não seja digitado nenhum
valor para o parametro num, o mesmo por padrão 
receberá 1 (num=1)*/
function exponencial(array, num=1) {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    
    return result;
}
// console.log(exponencial([1, 2, 3]));
// console.log(exponencial([1, 2, 3], 2));



/*Arguments 1: 
utilizar quando não sabemos quantos argumentos serão 
passados para a função. No exemplo abaixo a função
recebe todos os argumento passados, e retorna o maior
valor*/
function encontreMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max);
        max = arguments[i];        
    }

    return max;
}
// console.log(encontreMax(1, 5, -7, 7));

/*Arguments 2:
Outro exemplo, apenas mostra os valores passados
como parametro*/
function exibirParametros() {
    return arguments;
}
// console.log(exibirParametros(1, 4, 5, 'an'));



/* Arrays Spread:
Passando como parametro um vetor */
function sum(x, y, z) {
    return x + y + z;
}
let nums = [1, 2, 3];
// console.log(sum(...nums));

/*Arrays Rest:
combina os argumento de um array */
function confereTamanho(...args) {
    return args.length;
}
// console.log(confereTamanho());
// console.log(confereTamanho(1, 2));
// console.log(confereTamanho(3, 4, 5));




/*Objetos: Object Destructuring >
Filtrar apenas valores desejados: */
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}
// console.log(userId(user));
