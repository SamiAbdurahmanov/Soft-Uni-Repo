function replace(string, char, word) {
    let fullWord = string.replace('_', char);
    if(fullWord===word){
        console.log('Matched');
    }else{
        console.log('Not Matched');
}
}
replace('S_mi','A','Sami')