type TimerConfig = {
    duration: number;
    isRunning: boolean;
    LOCAL_STORAGE_KEY_SECONDS: string;
    LOCAL_STORAGE_KEY_MINUTES: string;
  };
  
  export function createTimer(): TimerConfig {
    const LOCAL_STORAGE_KEY_SECONDS = "timerDurationSeconds";
    const LOCAL_STORAGE_KEY_MINUTES = "timerDurationMinutes";
    let duration: number = 600;
    const defaultDuration: number = 600;
    let isRunning: boolean = false;
    let countdown: number | undefined;
  
    const timeDisplay = document.getElementById("time-display") as HTMLElement;
    const decreaseBtn = document.getElementById("decrease-time") as HTMLElement;
    const increaseBtn = document.getElementById("increase-time") as HTMLElement;
    const startTimerBtn = document.getElementById("start-timer") as HTMLElement;
    const abortTimerBtn = document.getElementById("stop-timer") as HTMLElement;
  
    // Update time display
    function updateTimeDisplay(): void {
      if (timeDisplay) {
        const minutes = Math.floor(duration / 60);
        timeDisplay.textContent = `${minutes} minutes`;
      }
    }
  
    // Save duration to local storage
    function saveDuration(): void {
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
          console.log("Started");
  
          countdown = setInterval(() => {
            duration -= 1;
            saveDuration();
  
            if (duration <= 0) {
              clearInterval(countdown);
              isRunning = false;
              console.log("Finished");
            }
          }, 1000);
        }
      });
    }
  
    // Abort timer
    if (abortTimerBtn) {
      abortTimerBtn.addEventListener("click", () => {
        if (isRunning) {
          if (countdown) clearInterval(countdown);
          isRunning = false;
          console.log("Aborted");
  
          // Reset duration
          duration = defaultDuration;
          updateTimeDisplay();
        }
      });
    }
  
    return { duration, isRunning, LOCAL_STORAGE_KEY_MINUTES, LOCAL_STORAGE_KEY_SECONDS };
  }
  