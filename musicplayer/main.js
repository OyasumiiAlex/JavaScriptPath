/*Importamos el archivo con los datos que vamos a utilizar */
import playlist from './datamusic.js';
/*Obtener objetos del DOM*/
const backButton = document.getElementById('back');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const lineplayer = document.getElementById('barplayer');

const album = document.getElementById('album-img');
const songName = document.getElementById('nsong');
const songArtist = document.getElementById('artssong');

//Variable de control de indice
let indexSong = 0;
let isPlaying = false;
/*Funcion para reproducir o pausar una canción*/
function togglePlayPause(index) {
    const listSong = playlist[index];
    if (!isPlaying) {
        lineplayer.src = listSong.archivo;
        lineplayer.play();
    } else {
        lineplayer.pause();
    }
    isPlaying = !isPlaying; 
    changeButtons();
}
/*Funcion para sig cancion*/
function nextSong(){
    indexSong = (indexSong + 1) % playlist.length;
    togglePlayPause(indexSong);
}
/*Funcion para retroceder cancion*/
function returnSong(){
    indexSong = (indexSong - 1 + playlist.length) % playlist.length;
    togglePlayPause(indexSong);
}
/*Funcion para obtener botones*/
function changeButtons(){
    playButton.classList.toggle('show', !isPlaying);
    pauseButton.classList.toggle('show', isPlaying);
}
/*Evento de los botones*/
backButton.addEventListener('click', returnSong);
nextButton.addEventListener('click', nextSong);
/*Play pause eventos*/
playButton.addEventListener('click', function(){
    togglePlayPause(indexSong);
});
pauseButton.addEventListener('click', function(){
    togglePlayPause(indexSong);
});
lineplayer.addEventListener('ended', nextSong);

/*Errores (refactorizar codigo)
1.-Error al hacer play se reproduce pero al pausar y nuevamente
reproducir se reincia
2- Se pausa al momento de retroceder u avanzar
la cancion

posibles soluciones: 
Dividir en dos funciones play y pause asignado al final
la funcion de cambio de estado del boton. En el evento
de clicks de ambos colocar las funciones play y pause
a su correspondiente boton*/