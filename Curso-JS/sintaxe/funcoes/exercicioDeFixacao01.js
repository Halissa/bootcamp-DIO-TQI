const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
    
];


function alunosAprovados(vetor, media) {

    let aprovados = [];

    for(let i = 0; i < vetor.length; i++) {

        const {nome, nota} = vetor[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}


console.log(alunosAprovados(alunos,5));