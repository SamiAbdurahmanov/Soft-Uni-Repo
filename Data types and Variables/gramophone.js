function gramophone(name, album, song){
let timeOfTheSong =( (album.length * name.length ) * song.length) / 2;
let rotations = Math.ceil(timeOfTheSong / 2.5);
console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Rammstein', 'Sehnsucht',

'Engel')