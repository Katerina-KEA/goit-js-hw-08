import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

 //ключом для хранилища будет строка "videoplayer-current-time" , ключ локал.хранилища
const SAVED_CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//время воспроизведения обновлялось в хранилище не чаще чем раз в секунд

// используем метод on() и подписываем дату обновления


player.on('timeupdate', throttle(videoPlayerTimeUpdate, 1000));

function videoPlayerTimeUpdate(data) {
  //Сохраняй время воспроизведения в локальное хранилище
  localStorage.setItem(SAVED_CURRENT_TIME_KEY, data.seconds);
};

const savedCurrentTime = localStorage.getItem(SAVED_CURRENT_TIME_KEY);
console.log(savedCurrentTime);

//При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
if (savedCurrentTime) {
    player.setCurrentTime(savedCurrentTime);
}
/*Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище и,
 при перезагрузке страницы, продолжать воспроизводить видео с этого времени.*/
 /*Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет,
 а не через CDN.
Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
Добавь в проект библиотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.*/
