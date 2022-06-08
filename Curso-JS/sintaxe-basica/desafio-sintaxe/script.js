
function validarNums(numStr1, numStr2) {
    let igualdade, comparacao1, comparacao2, resp;


    let num1 = Number(document.getElementById(numStr1).value);
    let num2 = Number(document.getElementById(numStr2).value);
    let soma = num1 + num2;

    igualdade = num1 == num2 ? '' : 'não';


    if(soma > 10) {
        comparacao1 = `maior que`;
    } else if (soma < 10) {
        comparacao1 = `menor que`;
    } else {
        comparacao1 = `igual a`;
    }

    if(soma > 20) {
        comparacao2 = `maior que`;
    } else if (soma < 20){
        comparacao2 = `menor que`;
    } else {
        comparacao2 = `igual a`;
    }


    resp = `Os números ${num1} e ${num2} ${igualdade} são iguais. Sua soma é ${soma}, que é ${comparacao1} 10 e ${comparacao2} 20.`;

    document.getElementById('resposta').innerHTML = resp;

}