function evenAndOddSub(arr) {
    let sumEven = 0,
        sumOdd = 0,
        sum = 0;
    for (let el of arr) {
        if (el % 2 === 0 && el != 0) {
            sumEven += el;
        } else {
            sumOdd += el;
        }
    }
    sum = (sumEven - sumOdd);
    let sumToStr = String(sum)
    if (sumToStr.includes('-')) {
        sumToStr
            .replace('-', '');
    }

    let total = Number(sumToStr);

    console.log(total);
}