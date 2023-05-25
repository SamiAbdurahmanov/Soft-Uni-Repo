function triangle(number){
   
     
    for(let row = 1; row<=number;row++){
        let buff='';
        for(let col=1; col<=row; col++){
             buff+= row + ' ';
             
        }
        console.log(buff);
    }
   
}
triangle(5)