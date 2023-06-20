function equalArrs(arr1, arr2) {
    let sum = 0;
    let flag = true;
    for (let i = 0, k = 0; i < arr1.length, k < arr2.length; i++, k++) {
        let tempNum1 = Number(arr1[i]);
        let tempNum2 = Number(arr2[k]);
        if (tempNum1 != tempNum2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            flag = false;
            break;
        }
        else {
            sum += tempNum1;
        }
    }
    if (flag) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrs(['1'], ['10'])