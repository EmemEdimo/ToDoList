'use strict';

const userInput = document.querySelector('#user-input');
const saveBtn = document.querySelector('#btnsave');
const task = document.querySelector('.li');
const tasks = document.querySelector('ul');
const time = document.querySelector('.time');

const userInputLength = function () {
  return userInput.value.length;
};
//Attach event listener to saveBtn
//On click, grab the userInput(must be > 0)
//create li items
//Append the li on the ul

//Function to implement task time
const taskTime = function () {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  const locale = navigator.language;

  return new Intl.DateTimeFormat(locale, options).format(now);
};

//CREATE TASKS
const createTask = function () {
  if (userInputLength() > 0) {
    const time = taskTime();
    const item = `<li class="li">
            <i class="fa fa-square fa-2x task-state"></i> ${userInput.value}
            <span class="time">${time}</span>
          </li>`;

    tasks.insertAdjacentHTML('afterbegin', item);

    userInput.value = '';
  }
};

saveBtn.addEventListener('click', createTask);



const taskState = function (task) {
  if (task.classList.contains('fa-square')) {
    task.classList.remove('fa-square');
    task.classList.add('fa-check-square');
  } else {
    task.classList.remove('fa-check-square');
    task.classList.add('fa-square');
  }
};

tasks.addEventListener('click', function (e) {
  if (e.target.classList.contains('task-state')) {
    const state = e.target;
    taskState(state);
  }
});
