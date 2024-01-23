import { Timer } from "easytimer.js";

export function getTimerBar(timer: Timer): void {
  let currentMinutes = timer.getTimeValues().minutes;
  let currentSeconds = timer.getTimeValues().seconds;
  const abortTimerBtn = document.getElementById("timebar-abort");
  if (abortTimerBtn) {
    abortTimerBtn.addEventListener("click", () => {
      timer.stop();
    });
  }

  timer.addEventListener("secondsUpdated", () => {
    currentSeconds = Math.max(0, currentSeconds - 1);

    if (currentSeconds === 0 && currentMinutes > 0) {
      currentMinutes--;
      currentSeconds = 59;
    }
    console.log(currentSeconds);
    updateTimerBar(currentMinutes, currentSeconds);
  });

  timer.addEventListener("targetAchieved", () => {
    console.log("Time is out!");
  });
}

function updateTimerBar(currentMinutes: number, currentSeconds: number): void {
  const totalSeconds = currentMinutes * 60 + currentSeconds;
  const percent = (totalSeconds / (currentMinutes * 60 + currentSeconds)) * 100;

  const width: number = Math.max(0, percent);
  console.log(width);

  const timerBar = document.getElementById("timer-bar") as HTMLElement;

  if (timerBar) {
    timerBar.style.width = `${width}%`;
  }
}
