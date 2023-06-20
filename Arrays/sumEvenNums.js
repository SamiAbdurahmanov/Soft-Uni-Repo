function sumEvenNumbers(arr) {
    let sum = 0;
    for (let el of arr) {
        let elToNum = Number(el);
        if (elToNum % 2 === 0
            && elToNum != 0) {
            sum += elToNum;
        }
    }
    console.log(sum);
}