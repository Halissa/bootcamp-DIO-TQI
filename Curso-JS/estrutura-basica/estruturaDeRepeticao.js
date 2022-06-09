let tabuada = 9;

/*FOR*/

console.log('EXEMPLO UTILIZANDO FOR:');

for(let i = 1; i <= 10; i++) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
}


/* While*/

console.log('\nEXEMPLO UTILIZANDO WHILE: ');

let i = 1;
while (i <= 10) {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
    i++;
}


/*Do While*/

console.log('\nEXEMPLO UTILIZANDO DO WHILE: ');

i = 1;
do {
    console.log(`${tabuada} * ${i} = ${tabuada * i}`);
    i++;
} while(i <= 10);


/*FOR IN */
console.log('\nEXEMPLO FOR IN');

vetor = [2, 4, 6, 8, 10];
for(let i in vetor){
    console.log(i);
}

/*FOR OFF */
console.log('\nEXEMPLO FOR OFF');

for(let j of vetor) {
    console.log(j);
}