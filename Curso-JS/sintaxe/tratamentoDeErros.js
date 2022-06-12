/*throw: 
retornar um erro. No exemplo abaixo caso a string seja false, será retornado um erro com a mensagem 'String inválida' */
function verificarPalindromo(string) {
    if(!string) throw 'String inválida';

    return string === string.split('').reverse().join('');
}

/*try/catch:
try= tente {codigo} catch = se não der {codigo}.No exemplo abaixo o try chama a função verificaPalindromo(), caso a função retorne um erro será executado o código dentro do chatch, neste caso 'console.log(e)
Finally: será executado independente de o try dar certo ou não.
'*/
function tryCatchExemplo(string){
    try{
        verificarPalindromo(string)
    } catch(e) {
        console.log(e);
    } finally {
        console.log(`A string enviada foi ${string}`);
    }
}
// tryCatchExemplo('');


/*Criando um novo erro:
OBS. Os parametros de new Error são opcionais, deve se consultar a documentação para ver se os parametros são compatíveis com o navegador para qual o programa está sendo escrito. Forma de criar:
'new Error(message, fitamame, lineNumber)' Veja o exemplo abaixo:
*/
const MeuErro = new Error('MENSAGEM INVÁLIDA');

/*Dando um nome para o meu erro: */
MeuErro.name = 'InvalidMessage';

// throw MeuErro;


/*Exercicio de fixação: 

    O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

    Crie uma função que recebe um array e um número
    Realize as seguintes validações
    Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    Se o array não for do tipo 'object', lance um erro do tipo TypeError
    Se o número não for do tipo 'number', lance um erro do tipo TypeError
    Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
    Utilize a declaração try...catch
    Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof

*/
function validarArray(arr, tam) {
      
        try{
            if(arr == undefined || tam == undefined) {
                throw new ReferenceError;

            } else if(typeof(arr) != 'object' || typeof(tam) != 'number' ) {
                throw new TypeError;

            } else if(arr.length !== tam) {
                throw new RangeError;

            } else {
                return arr;

            }
        } catch(e) {
            if(e instanceof ReferenceError) return 'ReferenceError';
            if(e instanceof TypeError) return 'TypeError';
            if(e instanceof RangeError) return 'RangeError';
            
            return `Erro não esperado ${e}`
        }
}

console.log(`Exemplo 01: ${validarArray()}`);
console.log(`Exemplo 02: ${validarArray('v')}`);
console.log(`Exemplo 03: ${validarArray('v', ',')}`);
console.log(`Exemplo 04: ${validarArray(['a', 'b'], '2')}`);
console.log(`Exemplo 05: ${validarArray(['a', 'b'],3)}`);
console.log(`Exemplo 06: ${validarArray(['a', 'b'], 0)}`);
console.log(`Exemplo 07: ${validarArray(['a', 'b'], 2)}`);




