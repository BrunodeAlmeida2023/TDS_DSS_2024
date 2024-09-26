var list = [30, 50, 20, 80, 40, 7, 5];

function EncontrarMaior() {
    var maxNumber = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] > maxNumber) {
            maxNumber = list[i];
        }
    }
    return maxNumber;
}

function EncontrarMenor() {
    var minNumber = list[0];
    for (var i = 1; i < list.length; i++) {
        if (list[i] < minNumber) {
            minNumber = list[i];
        }
    }
    return minNumber;
}

const resultadoMax = EncontrarMaior(list);
const resultadoMin = EncontrarMenor(list);
console.log("O numero maximo: " + resultadoMax);
console.log("O numero min: " + resultadoMin);