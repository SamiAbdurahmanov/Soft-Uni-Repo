function dayOfWeek(index){
 let arr = [
    'Monday',
  'Tuesday', 
  'Wednesday', 
  'Thursday', 
  'Friday',
  'Saturday',
  'Sunday'
];
 if(index<=7&&index>0){
    console.log(arr[index-1]);
 }
 else{
    console.log('Invalid day!');
 }
}
dayOfWeek(2)