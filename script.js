
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

let Time;
let studyTime = 25;
let restTime = 10;
let statusNum = 0;
let Reset = 0;

const studyElement = document.getElementById("studyRemains");
studyElement.innerHTML = `${studyTime} seconds of study time`;

const restElement = document.getElementById("restRemains");
restElement.innerHTML = `${studyTime} seconds of rest time`;

function ticking(){
    if(statusNum ===0){
      Time = studyTime;
    }
    else{
      Time = restTime;
    }
    const endTime = Date.now() + Time*1000;
    const countDownElement = document.getElementById('studyRemains');
  
    function updateCountdown() {
      if(Reset === 1){
        studyElement.innerHTML = `${Time} seconds`;
      }
      else{
        const remaining = endTime - Date.now();
        const secondsLeft = Math.max(Math.floor(remaining/1000), 0);
        studyElement.textContent = secondsLeft + ' seconds remaining';
        if (remaining > 0) {
            requestAnimationFrame(updateCountdown);
        } else {
            statusNum = 1;
        }
      }     
    }
    requestAnimationFrame(updateCountdown);
}


function start(){
  console.log("Yes");
  Reset = 0;
  statusNum = 0;
  ticking();
}

function reset(){
  console.log("No");
  Reset = 1;
}
