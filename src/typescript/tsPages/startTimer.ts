import { pauseTimerPage } from "./pausePage";
import { getTimerBar } from "./timerBarPage";
import { startTimer } from "./numberToTextPage";
import Timer from "easytimer.js";

export function createTimer() {
  let duration: number = 600;
  const defaultDuration: number = 600;
  let timer = new Timer();
  let pause = new Timer();
  let isRunning = timer.isRunning();

  const timeDisplay = document.getElementById("time-display") as HTMLElement;
  const decreaseBtn = document.getElementById("decrease-time") as HTMLElement;
  const increaseBtn = document.getElementById("increase-time") as HTMLElement;
  const startTimerBtn = document.getElementById("start-timer") as HTMLElement;
  const abortTimerBtn = document.getElementById("stop-timer") as HTMLElement;
  const breakCheckbox = document.getElementById(
    "break-interval"
  ) as HTMLInputElement;

  // Update time display
  function updateTimeDisplay(): void {
    if (timeDisplay) {
      const minutes = Math.floor(duration / 60);
      timeDisplay.textContent = `${minutes} minutes`;
    }
  }

  if (timeDisplay) {
    updateTimeDisplay();
  }

  // Decrease 1 min
  if (decreaseBtn) {
    decreaseBtn.addEventListener("click", () => {
      if (!isRunning && duration > 60) {
        duration -= 60;
        updateTimeDisplay();
      }
    });
  }

  // Increase 1 min
  if (increaseBtn) {
    increaseBtn.addEventListener("click", () => {
      if (!isRunning && duration < 3600) {
        duration += 60;
        updateTimeDisplay();
      }
    });
  }

  // Start timer
  if (startTimerBtn) {
    startTimerBtn.addEventListener("click", () => {
      if (breakCheckbox.checked) {
        timer.start({
          countdown: true,
          startValues: { minutes: Math.floor(duration / 60) },
        });
        //Starta klockorna här
        getTimerBar(timer);
        startTimer(timer);

        timer.addEventListener("targetAchieved", function (e) {
          pauseTimerPage(pause);
        });
        pause.addEventListener("paused", function (e) {
          //starta om timer?
        });
      } else {
        timer.start({
          countdown: true,
          startValues: { minutes: Math.floor(duration / 60) },
        });
        getTimerBar(timer);
        startTimer(timer);
      }
    });
  }

  // Abort timer
  if (abortTimerBtn) {
    abortTimerBtn.addEventListener("click", () => {
      timer.stop();
    });
  }
}
