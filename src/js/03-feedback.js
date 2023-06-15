import throttle from 'lodash.throttle';

//Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
/* Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
В противном случае поля должны быть пустыми.
При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд.
Для этого добавь в проект и используй библиотеку lodash.throttle.*/

const STOR_KEY_INPUT = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textArea = document.querySelector('textarea');

form.addEventListener('input', throttle(setCurrentValue, 500));
form.addEventListener('submit', submitValues);

const feedBack = {};

getDateOfFeedback();
function getDateOfFeedback() {
    const getFeedBack = localStorage.getItem(STOR_KEY_INPUT);
    const feedBackParseJSON = JSON.parse(getFeedBack);
    if (getFeedBack) {
        inputEmail.value = feedBackParseJSON.email;
        textArea.value = feedBackParseJSON.message;
    }
};

function setCurrentValue(e) {
    if (inputEmail.value !== '' || textArea.value !== '') {
      feedBack.email = inputEmail.value;
      feedBack.message = textArea.value;
      const feedBackJSON = JSON.stringify(feedBack);
      localStorage.setItem(STOR_KEY_INPUT, feedBackJSON);
    }
};

function submitValues(event) {
    event.preventDefault();
    if (inputEmail.value === '' || textArea.value === '') {
      return alert('Please fill in all required fields!');
    } else {
      showEmptyFbForm();
      inputEmail.value = '';
      textArea.value = '';
      localStorage.removeItem(STOR_KEY_INPUT);
    }
};

function showEmptyFbForm() {
    const checkFeedback = localStorage.getItem(STOR_KEY_INPUT);
    const feedBackParseJSON = JSON.parse(checkFeedback);
    if (checkFeedback) {
        console.log(feedBackParseJSON);
    }
};
