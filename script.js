let Time;
let studyTime = 25;
let restTime = 10;
let status = 0;
let Reset = 0;

const studyElement = document.getElementById("studyRemains");
studyElement.innerHTML = `${studyTime} seconds study time`;

const restElement = document.getElementById("restRemains");
restElement.innerHTML = `${studyTime} seconds rest time`;

function ticking(){
  
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