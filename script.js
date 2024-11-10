
// Task List

const addTaskInput = document.getElementById('add-task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addNewTask () {
    let inputText = addTaskInput.value.trim();
    if (inputText !== '') {
        let taskItem = document.createElement('li');
        taskItem.textContent = inputText;
        taskList.appendChild(taskItem);
        addTaskInput.value = '';
    }
    else {
        addTaskInput.style.border('3px solid #DD0000');
        setTimeout(addTaskInput.style.border, 1000, '3px solid #DD0000');
    }
}

addTaskButton[0].addEventListener('click', addNewTask);

addTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addNewTask();
    }
});

// Timer

let Time = 25;
let Reset = 0;

const element = document.getElementById("Remains");
element.innerHTML = `${Time} seconds study time`;

function ticking(){
  
    const endTime = Date.now() + Time*1000;
    const countDownElement = document.getElementById('Remains');
  
    function updateCountdown() {
      if(Reset === 1){
        element.innerHTML = `${Time} seconds`;
      }
      else{
        const remaining = endTime - Date.now();
        const secondsLeft = Math.max(Math.floor(remaining/1000), 0);
        element.textContent = secondsLeft + ' seconds remaining';
        if (remaining > 0) {
            requestAnimationFrame(updateCountdown);
        } else {
            element.textContent = 'Time is up!';
        }
      }     
    }
    requestAnimationFrame(updateCountdown);
}


function start(){
  console.log("Yes");
  Reset = 0;
  ticking();
}

function reset(){
  console.log("No");
  Reset = 1;
}
