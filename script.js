// Task List

const addTaskInput = document.getElementById('add-task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function addNewTask () {
    let inputText = addTaskInput.value.trim();
    let fieldBoxShadowStyle = addTaskInput.style.boxShadow;
    if (inputText !== '') {
        let taskItem = document.createElement('li');
        taskItem.textContent = inputText;
        taskList.appendChild(taskItem);
        addTaskInput.value = '';
    }
    else {
        addTaskInput.style.boxShadow = ('0 0 5px #FF0000 inset');
        setTimeout( () => {
          addTaskInput.style.boxShadow = (fieldBoxShadowStyle)
        }, 1000);
    }
}

addTaskButton.addEventListener('click', addNewTask);

addTaskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addNewTask();
    }
});

// Timer

let Time;
//let studyTime = 60;
let restTime;
let statusNum = 0;
let statusQuo = `studying`;
let studyBanner = `Study`;
let Reset = 0;
let studyTime; 

const banner = document.getElementById("Banner");
banner.innerHTML = `${studyBanner} time`;

const statusElement = document.getElementById("Remains");

const studyTimeInput = document.getElementById('study-input-number');
const restTimeInput = document.getElementById('rest-input-number')


function setTime(){
  studyTime = studyTimeInput.value;
  restTime = restTimeInput.value;
  let studyTimeInputBoxShadowStyle = studyTimeInput.style.boxShadow;
  let restTimeInputBoxShadowStyle = restTimeInput.style.boxShadow;
  if (studyTime !== '' && restTime !== '') {
    statusElement.innerHTML = `${studyTime} minutes of ${statusQuo} time`;
  }
  else {
    if (studyTime === '') {
      studyTimeInput.style.boxShadow = ('0 0 5px #FF0000 inset');
      setTimeout( () => {
        studyTimeInput.style.boxShadow = (studyTimeInputBoxShadowStyle)
      }, 1000);
    }
    if (restTime === '') {
      restTimeInput.style.boxShadow = ('0 0 5px #FF0000 inset');
      setTimeout( () => {
        restTimeInput.style.boxShadow = (restTimeInputBoxShadowStyle)
      }, 1000);
    }
    
  }
}

function ticking(){
    if(statusNum ===0){
      Time = studyTime;
    }
    else{
      Time = restTime;
    }

    const endTime = Date.now() + Time*1000*60;
  
    function updateCountdown() {
      if(Reset === 1){
        statusElement.innerHTML = `${Time} minutes of ${statusQuo}`;
      }
      else{
        statusElement.innerHTML = `${studyTime} minutes of ${statusQuo} time`;
        banner.innerHTML = `${studyBanner} Time`;
        const remaining = endTime - Date.now();
        const secondsLeft = Math.max(Math.floor(remaining/1000), 0);
        statusElement.textContent = Math.floor(secondsLeft/60) +': ' + secondsLeft%60 ;
        if (remaining > 0) {
            requestAnimationFrame(updateCountdown);
        } else {
            transition();
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

function transition(){
   if(statusNum === 0){
    statusNum = 1;
    restTime;
    statusQuo = `resting`;
    studyBanner = `Rest`;
    ticking();
   }
   else{
    statusNum = 0;
    studyTime;
    statusQuo = `studying`;
    studyBanner = `Study`;
    ticking();
   }
} 