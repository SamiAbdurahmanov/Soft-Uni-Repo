function addAndSubtract(arr) {
    let newArr = [];
    let newSum = 0;
    let oldSum = 0;
    let p;
    let inputL=arr.length;
    for (let i = 0; i < inputL; i++) {
        oldSum += arr[i];
        if (arr[i] % 2 === 0) {
            p = arr[i] + i;
            newArr.push(p);

        }
        else {
            p = arr[i] - i;
            newArr.push(p);
        }
        newSum += p;
    }
    newArr.join(", ");
    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35]);