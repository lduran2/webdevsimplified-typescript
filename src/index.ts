'use strict';
// import { v4 as uuidv4 } from 'uuid';

// console.log(`Hi ${uuidv4()}`);

const todos = document.querySelector('#todos');
const form = document.forms.newTask as HTMLFormElement;
const title = form.taskTitle as HTMLInputElement;

console.log([todos, form, [title.name, title.type, title.value]]);
