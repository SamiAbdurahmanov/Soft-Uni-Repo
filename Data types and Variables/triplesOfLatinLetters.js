function tripplesOfLatinLetters(n) {
    let letter = Number(n);
    let l1 = 0;
    let l2 =0;
    let l3 = 0;
    let array = ['a', 'b', "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let firstLetter = 0; firstLetter < letter; firstLetter++) {
                      l1= array[firstLetter]  ;
        for (let secondLetter = 0; secondLetter < letter; secondLetter++) {
                     l2 = array[secondLetter];
            for (let thirdLetter = 0; thirdLetter < letter; thirdLetter++) {
                      l3 = array[thirdLetter]
                      console.log(l1 + l2 + l3);
            }
        }
    }
}
tripplesOfLatinLetters(2)
