function solve(year, month , day, format){
 
 let date  = new Date(year, month-1, day);
 console.log(date.toLocaleString(format));
 

}
solve(2020,1,20,'de')
// .includes , .replace , .indexOf , ? : , date