const array1 = [1, 'Dois', 3.4, true];

for (let index = 0; index < array1.length; index++) {
    console.log(typeof array1[index]);
}

for (const indice of array1) {
    console.log(typeof indice);
}

const array3 = [];
array1.forEach(indice => {
    indice = (typeof indice) + ' ' + indice;
    console.log(indice);
    array3.push(typeof indice);
})

const array2 = array1.map(indice => {return typeof indice })
//console.log(array1);
//console.log(array2);