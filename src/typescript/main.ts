const LOCAL_STORAGE_KEY_SECONDS = "timerDurationSeconds";
const LOCAL_STORAGE_KEY_MINUTES = "timerDurationMinutes";
let duration: number = 600;
const defaultDuration = 600;
let isRunning: boolean = false;
let countdown: number;

const timeDisplay = document.getElementById("time-display");
const decreaseBtn = document.getElementById("decrease-time");
const increaseBtn = document.getElementById("increase-time");
const startTimerBtn = document.getElementById("start-timer");
const abortTimerBtn = document.getElementById("stop-timer");

// Update minutes
function updateTimeDisplay() {
  if (timeDisplay) {
    const minutes = Math.floor(duration / 60);
    timeDisplay.textContent = `${minutes} minutes`;
  }
}

// Save duration to local storage
function saveDuration() {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  localStorage.setItem(LOCAL_STORAGE_KEY_SECONDS, seconds.toString());
  localStorage.setItem(LOCAL_STORAGE_KEY_MINUTES, minutes.toString());
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
      saveDuration();
    }
  });
}

// Increase 1 min
if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    if (!isRunning && duration < 3600) {
      duration += 60;
      updateTimeDisplay();
      saveDuration();
    }
  });
}

// Start timer
if (startTimerBtn) {
  startTimerBtn.addEventListener("click", () => {
    if (!isRunning) {
      isRunning = true;

      countdown = setInterval(() => {
        duration -= 1;
        saveDuration();

        if (duration <= 0) {
          clearInterval(countdown);
          isRunning = false;
          console.log("Finished");
        } // else if (**** CONNECT TO BREAKPAGE **** duration <= 0 && breakPage == true)
      }, 1000);
    }

  });
}

// Abort timer
if (abortTimerBtn) {
  abortTimerBtn.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(countdown);
      isRunning = false;

      // Reset duration
      duration = defaultDuration;
      updateTimeDisplay();
    }
  });
}

export { duration, isRunning, LOCAL_STORAGE_KEY_MINUTES, LOCAL_STORAGE_KEY_SECONDS };
