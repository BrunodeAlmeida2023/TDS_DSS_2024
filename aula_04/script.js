const nome = "Bruno de almeida";

function contaCaracter(nome) {
    return nome.length;
}

function separaTraco(nome) {
    return nome.split('').join('-');
}

function letraMaiuscula(nome) {
    return nome.toUpperCase();
}

function letraMinuscula(nome) {
    return nome.toLowerCase();
}

function PrimeiraMaisucula(nome) {
    return nome.replace(nome.at(0), nome.at(0).toUpperCase());

}

function PrimeiraMaisucula2(nome) {
    return nome.split(' ').map(palavra =>
        palavra.charAt(0).toUpperCase() + palavra.slice(1)
    ).join(' ');
}

function desenharPinheiro(altura) {
    for (let i = 1; i <= altura; i++) {
        let espacos = ' '.repeat(altura - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacos + asteriscos);
    }
}


const Num = contaCaracter(nome);
console.log(`O nome "${nome}" tem ${Num} caracteres!`);
const Separa = separaTraco(nome);
console.log(`O nome era: "${nome}" e agora ficou: "${Separa}"!`);
const Maicusula = letraMaiuscula(nome);
console.log(`O nome ficou: "${Maicusula}"!`);
const Minuscula = letraMinuscula(nome);
console.log(`O nome ficou: "${Minuscula}"!`);
const Primeira = PrimeiraMaisucula(nome);
console.log(`O nome EH: "${Primeira}"!`);
const Primeira2 = PrimeiraMaisucula2(nome);
console.log(`O nome EH: "${Primeira2}"!`);
desenharPinheiro(5);