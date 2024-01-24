import { pauseTimerPage } from "./pausePage";
import { getTimerBar } from "./timerBarPage";
import { startTimer } from "./numberToTextPage";
import Timer from "easytimer.js";
import { CircleTimer } from "./circleTimer";
import { digitalTimer } from "./digitalTimer";

export function createTimer() {
  let duration: number = 600;
  let timer = new Timer();
  let pause = new Timer();
  let isRunning = timer.isRunning();

  const timeDisplay = document.getElementById("time-display") as HTMLElement;
  const decreaseBtn = document.getElementById("decrease-time") as HTMLElement;
  const increaseBtn = document.getElementById("increase-time") as HTMLElement;
  const startTimerBtn = document.getElementById("start-timer") as HTMLElement;
  const abortTimerBtn = document.querySelectorAll(
    ".abort-timer"
  ) as NodeListOf<HTMLElement>;
  const breakCheckbox = document.getElementById(
    "break-interval"
  ) as HTMLInputElement;
  const intervalCheckbox = document.getElementById(
    "interval"
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
      if (breakCheckbox.checked && intervalCheckbox.checked) {
        timer.addEventListener("targetAchieved", function () {
          pauseTimerPage(pause);
        });
        pause.addEventListener("paused", function () {
          startTimers(timer, duration);
        });
        pause.addEventListener("stopped", function () {
          startTimers(timer, duration);
        });
        pause.addEventListener("targetAchieved", () => {
          startTimers(timer, duration);
        });
        startTimers(timer, duration);
      } else if (intervalCheckbox.checked) {
        startTimers(timer, duration);
        timer.addEventListener("targetAchieved", function () {
          startTimers(timer, duration);
        });
      } else {
        startTimers(timer, duration);
      }
    });
  }

  abortTimerBtn.forEach(function (abortTimerBtn) {
    abortTimerBtn.addEventListener("click", function () {
      timer.stop();

      console.log("Abort timer button clicked");
    });
  });
}

function startTimers(timer: Timer, duration: number) {
  timer.start({
    countdown: true,
    startValues: { minutes: Math.floor(duration / 60) },
  });
  //Starta klockorna här
  getTimerBar(timer);
  startTimer(timer);
  CircleTimer(timer);
  digitalTimer(timer);
}
