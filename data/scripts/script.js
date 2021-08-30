let time = 1;
let score = 0;
let running = false;

function setTime(seconds) {
  time = seconds;
  console.log(time);
  document.getElementById(`seconds1`).style = "color: white";
  document.getElementById(`seconds5`).style = "color: white";
  document.getElementById(`seconds10`).style = "color: white"
  document.getElementById(`seconds${seconds}`).style = "color: #7b6dff";
}

function clicked() {
  if(running == false) {
    score = 0;
    running = true;
    setTimeout(function (){
      running = false;
      document.getElementById('score_int').innerHTML = `<b>${Math.floor(score / time)} CPS</b>`;
      document.getElementById('cps').style = "display: none;"
      document.getElementById('restart_div').style = "display: block;"
    }, time * 1000)
  }
  score++;
  document.getElementById('score_int').innerHTML = `<b>${score}</b>`;
}

function restart() {
  document.getElementById('cps').style = "display: block;"
  document.getElementById('restart_div').style = "display: none;"
}