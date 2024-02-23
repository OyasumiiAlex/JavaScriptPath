/*Importamos el archivo con los datos que vamos a utilizar */
import playlist from './datamusic.js';
/*Obtener objetos del DOM*/
const backButton = document.getElementById('back');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const lineplayer = document.getElementById('barplayer');

const album = document.getElementById('album-img');
const songName = document.getElementById('nsong');
const songArtist = document.getElementById('artssong');

let indexSong = 0;
/*Funcio para iniciar cancion*/
function playSong(index){
    const listSong = playlist[index];
    lineplayer.src = listSong.archivo;
    lineplayer.play();
}
/*Funcion para sig cancion*/
function nextSong(){
    indexSong = (indexSong + 1) % playlist.length;
    playSong(indexSong);

}
/*Funcion para retroceder cancion*/
function returnSong(){
    indexSong = (indexSong - 1 + playlist.length) % playlist.length;
    playSong(indexSong);
}

/*Evento de los botones*/
backButton.addEventListener('click', returnSong);
playButton.addEventListener('click', () => playSong(indexSong));
nextButton.addEventListener('click', nextSong);