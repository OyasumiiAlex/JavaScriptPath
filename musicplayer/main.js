/*Importamos el archivo con los datos que vamos a utilizar */
import playlist from './datamusic.js';
/*Obtener objetos del DOM*/
const backButton = document.getElementById('back');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const audioslide = document.getElementById('barplayer');

const albumImg = document.getElementById('album-img');
const songName = document.getElementById('nsong');
const songArtist = document.getElementById('artssong');

//Variable (índice de la canción actual)
let indexSong = 0;
let isNowPlaying = false;
let currentPosition = 0;
/*Funcion play music*/
function playMusic(index){
    const dataSong = playlist[index];
    audioslide.src = dataSong.archivo;
    audioslide.currentTime = currentPosition;
    audioslide.play();
    isNowPlaying = true;
}
/*Funcion pause*/
function pauseMusic(){
    currentPosition = audioslide.currentTime; 
    audioslide.pause();
    isNowPlaying = false;
}
/*Funcion para sig cancion*/
function nextSong(){
    indexSong = (indexSong + 1) % playlist.length;
    playMusic(indexSong);
    
}
/*Funcion para retroceder cancion*/
function returnSong(){
    indexSong = (indexSong - 1 + playlist.length) % playlist.length;
    playMusic(indexSong);
}
/*Funcion para cambiar datos de album*/
function changeDataAlbum(){
    albumImg.src = dataSong.album;

}
/*Funcion para obtener botones*/
function changeButtons(){
    playButton.classList.toggle('show', !isNowPlaying);
    pauseButton.classList.toggle('show', isNowPlaying);
}
/*Evento de los botones*/
backButton.addEventListener('click', returnSong);
nextButton.addEventListener('click', function(){
    nextSong();
});
playButton.addEventListener('click', function(){
    if(!isNowPlaying){
        playMusic(indexSong);
        isNowPlaying = true;
        changeButtons();
    }
});
pauseButton.addEventListener('click', function(){
    if(isNowPlaying){
        pauseMusic(indexSong);
        isNowPlaying = false;
        changeButtons();
    }
});
audioslide.addEventListener('ended', nextSong);