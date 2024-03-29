import { pauseTimerPage } from "./pausePage";
import { getTimerBar } from "./timerBarPage";
import { getNumberToText } from "./numberToTextPage";
import Timer from "easytimer.js";
import { CircleTimer } from "./circleTimer";
import { digitalTimer } from "./digitalTimer";
import { analogTimer } from "./analogTimer";

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
      window.location.href = "#DIGITAL_TIMER";
      if (
        (breakCheckbox.checked && intervalCheckbox.checked) ||
        breakCheckbox.checked
      ) {
        timer.addEventListener("targetAchieved", function () {
          pauseTimerPage(pause);
          window.location.href = "#PAUSE-PAGE";
        });
        pause.addEventListener("paused", function () {
          window.location.href = "#DIGITAL_TIMER";
          startTimers(timer, duration);
        });
        pause.addEventListener("stopped", function () {
          window.location.href = "#DIGITAL_TIMER";
          startTimers(timer, duration);
        });
        pause.addEventListener("targetAchieved", () => {
          window.location.href = "#DIGITAL_TIMER";
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

  timer.addEventListener("targetAchieved", () => {
    window.location.href = "#TimesUP-page";
  });
  abortTimerBtn.forEach(function (abortTimerBtn) {
    abortTimerBtn.addEventListener("click", function () {
      timer.stop();
      window.location.href = "#TimesUP-page";

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
  getNumberToText(timer);
  CircleTimer(timer);
  digitalTimer(timer);
  analogTimer(timer);
}
