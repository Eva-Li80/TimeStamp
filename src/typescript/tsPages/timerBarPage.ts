import { Timer } from "easytimer.js";

export function getTimerBar(timer: Timer): void {

    const minutes = timer.getTotalTimeValues().minutes;
    const seconds = timer.getTotalTimeValues().seconds;
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
    updateTimerBar(currentMinutes, currentSeconds, minutes, seconds);
});

timer.addEventListener("targetAchieved", () => {
    console.log("Time is out!");
});
}

function updateTimerBar(
    currentMinutes: number,
    currentSeconds: number,
    minutes: number,
    seconds: number
): void {
    const totalSeconds = currentMinutes * 60 + currentSeconds;
    const goneSeconds = minutes * 60 + seconds - totalSeconds;

    const height: number = Math.max(0, (goneSeconds / (minutes * 60 + seconds)) * 400);

    const timerBar = document.getElementById("timer-bar") as HTMLElement;
  
    if (timerBar) {
        timerBar.style.height = `${400 - height}%`;
    }
}
