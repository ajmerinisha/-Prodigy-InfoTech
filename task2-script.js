let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let lapList = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 1000);
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  timer = null;
  lapList.innerHTML = "";
});

document.getElementById("lapBtn").addEventListener("click", () => {
  if (timer !== null) {
    const lapTime = display.textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(li);
  }
});
