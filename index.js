function sortArray() {
    let array_to_sort = [9, 3, 2, 19, 3, 4, 10, 34, -99, 99]
    let array_helper = [];
    let i, j;

    for (i = 0; i <= array_to_sort.length - 1; i++) {

        for (j = 0; j <= array_to_sort.length - 1; j++) {

            if (array_to_sort[j] > array_to_sort[j + 1]) {
                array_helper = array_to_sort[j];
                array_to_sort[j] = array_to_sort[j + 1];
                array_to_sort[j + 1] = array_helper;
            }
        }
    }

    let resp = "";
    for (i = 0; i < array_to_sort.length; i++) {
        resp += array_to_sort[i]  + " ";
    }

    return (array_to_sort);
}

function fatorial(num) {
    let cont, res = 1;

    if (num < 0) {
        console.log('Numero não natural')
    } else {
        for (cont = 1; cont <= num; cont++) {
            res = res * cont;
        }
        return res;
    }
}

function fibonacci(num) {
    let i, fib = [];

    if (num <= 0) {
        return 'Digite um número maior que 0'
    } else if (num === 1) {
        fib[0] = 0;
        return fib;
    } else if (num === 2) {
        fib[0] = 0;
        fib[1] = 1;
        return fib;
    } else {
        fib[0] = 0;
        fib[1] = 1;

        for (i = 2; i <= (num - 1); i++) {

            fib[i] = fib[i - 2] + fib[i - 1];
        }

        let resp = "";
        for (i = 0; i < fib.length; i++) {
            resp += fib[i] + " " ;
        }

        return resp;
    }
}

function moda(arr) {
    return ((arr.sort((a, b) =>
        (arr.filter(v => v === a).length) - (arr.filter(v => v === b).length))
    ).pop())
}

function estatistica() {

    let dataset = [193, 123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780]
    let mediana, media, soma = 0;

    //Media
    for (var cont = 0; cont <= dataset.length - 1; cont++) {
        soma = soma + dataset[cont];
    }
    media = soma / dataset.length;

    //Mediana
    if (dataset.length % 2 === 0) {
        const somaMediana = dataset[(dataset.length / 2) - 1] + dataset[(dataset.length / 2)]
        mediana = somaMediana / 2;
    } else {
        mediana = dataset[(dataset.length - 1) / 2]
    }

    //Moda
    const modaNum = moda(dataset)

    return {
        media: media,
        mediana: mediana,
        moda: modaNum
    }


}

function checkBorder(obj1, obj2) {
    if (obj1.x1 === obj2.x1 && obj1.y1 === obj2.y1 || obj1.x2 === obj2.x2 && obj1.y2 === obj2.y2) {
        return "Objetos colidem"
    }
    else {
        return "Objetos não colidem"
    }
}

//---------------------------------------------------------------------//

let res;

//Questão 1
res = sortArray();
console.log('Vetor ordenado : ' + res)

//Questão 2
res = fatorial(2);
console.log(res)

//Questão 3
res = fibonacci(10);
console.log(res);

//Questão 4
res = estatistica();
console.log(JSON.stringify(res))

//Questão 5
const objeto1 = { x1: 1, y1: 1, x2: 2, y2: 2 }
const objeto2 = { x1: 10, y1: 10, x2: 2, y2: 11 }

res = checkBorder(objeto1, objeto2);
console.log(resp)

