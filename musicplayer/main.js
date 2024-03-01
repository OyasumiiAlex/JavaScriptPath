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

const timerStart = document.getElementById('timer-start');
const timerEnd = document.getElementById('timer-end');

const slideMusic = document.getElementById('slidefake-audio');
const slideVol = document.getElementById('slidevolume');

//Variable (índice de la canción actual)
let indexSong = 0;
let isNowPlaying = false;
let currentPosition = 0;
/*Funcion play music*/
function playMusic(index) {
    const dataSong = playlist[index];
    audioslide.src = dataSong.archivo;
    audioslide.currentTime = currentPosition;
    audioslide.play();
    isNowPlaying = true;
}
/*Funcion pause*/
function pauseMusic() {
    currentPosition = audioslide.currentTime;
    audioslide.pause();
    isNowPlaying = false;
}
/*Funcion para sig cancion*/
function nextSong() {
    indexSong = (indexSong + 1) % playlist.length;
    playMusic(indexSong);

}
/*Funcion para retroceder cancion*/
function returnSong() {
    indexSong = (indexSong - 1 + playlist.length) % playlist.length;
    playMusic(indexSong);
}
/*Funcion para cambiar datos de album*/
function changeDataAlbum(dataSong) {
    albumImg.src = dataSong.album;
    songName.innerText = dataSong.nombre
    songArtist.innerText = dataSong.artista;
}
/*Funcion para obtener botones*/
function changeButtons() {
    playButton.classList.toggle('show', !isNowPlaying);
    pauseButton.classList.toggle('show', isNowPlaying);
}
/*Evento boton regresar*/
backButton.addEventListener('click', function () {
    console.log('back button press');
    returnSong();
    changeButtons();
    changeDataAlbum(playlist[indexSong]);
});
/*Evento boton siguiente*/
nextButton.addEventListener('click', function () {
    console.log('next button press');
    nextSong();
    changeButtons();
    changeDataAlbum(playlist[indexSong]);
});
playButton.addEventListener('click', function () {
    console.log('play button press');
    if (!isNowPlaying) {
        playMusic(indexSong);
        isNowPlaying = true;
        changeButtons();
    }
});
pauseButton.addEventListener('click', function () {
    console.log('pause button press');
    if (isNowPlaying) {
        pauseMusic(indexSong);
        isNowPlaying = false;
        changeButtons();
    }
});
audioslide.addEventListener('ended', function () {
    nextSong();
    //next data album function
    changeDataAlbum(playlist[indexSong]);
});
/*Evento de barra deslizante: calcula el tiempo actual de reproducción
del audio en función de la duración total del audio y la posición actual
del control deslizante; 100: el rango del control deslizante va de 0 a 100;
Esto permite que el usuario pueda controlar manualmente la posición de 
reproducción del audio al arrastrar el control deslizante.*/
slideMusic.addEventListener('input', function(){
    const currentTimeMusic = audioslide.duration * (slideMusic.value/100);
    audioslide.currentTime = currentTimeMusic;
});
/*actualiza continuamente la posición del control 
deslizante basada en el tiempo actual de reproducción del audio*/
audioslide.addEventListener('timeupdate', function(){
    const progress = (audioslide.currentTime / audioslide.duration) * 100;
    slideMusic.value = progress;
});
/*Evento del volumen*/
slideVol.addEventListener('input', function(){
    // Convertir el valor del deslizador al rango correcto (0 a 1)
    audioslide.volume = slideVol.value / 100; 
});
/*Evento que actualiza el volumen en la barra segun el volumen del audio*/
audioslide.addEventListener('timeupdate', function(){
    // Convertir el volumen del audio al rango del deslizador
    slideVol.value = audioslide.volume * 100;
});
/*Evento que muestra la duracion del audio*/
audioslide.addEventListener('loadedmetadata', function(){
    const durationSong = formatTime(audioslide.duration);
    timerEnd.textContent = `${durationSong}`;
});
function formatTime(time) {
    // Convertimos el tiempo en segundos a minutos y segundos
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    // Formateamos el tiempo para mostrar siempre 2 dígitos para minutos y segundos
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    return formattedTime;
}
/*Evento para la tecla espacio*/
document.addEventListener('keydown', (e) => {
    //Funcion para verificar cual fue la tecla presionada
    if (e.key === ' ') {
        //Llamamos a la funcion agregar nueva tarea y prevenimos que el evento
        //en este CacheStorage, la tecla space use su comportamiento original
        e.preventDefault();
        if (isNowPlaying) {
            pauseMusic();
        } else {
            playMusic(indexSong);
        }
        changeButtons();
    }
});