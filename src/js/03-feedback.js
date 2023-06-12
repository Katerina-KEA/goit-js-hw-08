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
const input4Email = document.querySelector('input');
const textAria = document.querySelector('.textaria');

form.addEventListener('input', throttle(setCurrentValue, 500));
form.addEventListener('submit', submitValues);

const formData = {};

getDateOfFeedback();
function getDateOfFeedback() {
    const getFormData = localStorage.getItem(STOR_KEY_INPUT);
    const formDataPj = JSON.parse(getFormData);
    if (getFormData) {
        input4Email.value = formDataPj.email;
        textAria.value = formDataPj.message;
    }
};

function setCurrentValue(e) {
    if (input4Email.value !== '' || textAria.value !== '') {
        formData.email = input4Email.value;
        formData.message = textAria.value;
        const formDataJ = JSON.stringify(formData);
        localStorage.setItem(STOR_KEY_INPUT, formDataJ);
    }
};

function submitValues(event) {
    event.preventDefault();
    if (input4Email.value === '' || textAria.value === '') {
        return alert ('Please fill in all required fields!')
 } else {
        showEmptyFbForm();
        input4Email.value = '';
        textAria.value = '';
        localStorage.removeItem(STOR_KEY_INPUT);
    }
};

function showEmptyFbForm() {
    const formDataCheckup = localStorage.getItem(STOR_KEY_INPUT);
    const fbP_JSON = JSON.parse(formDataCheckup);
    if (formDataCheckup) {
        console.log(fbP_JSON);
    }
};
