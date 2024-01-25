import { Timer } from "easytimer.js";

export function getTimerBar(timer: Timer): void {
    //totala 
  const minutes = timer.getTotalTimeValues().minutes;
  const seconds = timer.getTotalTimeValues().seconds;
  //aktuella 
  let currentMinutes = timer.getTimeValues().minutes;
  let currentSeconds = timer.getTimeValues().seconds;


  timer.addEventListener("secondsUpdated", () => {
    currentSeconds = Math.max(0, currentSeconds - 1); //minskar sekunderna med 1

    if (currentSeconds === 0 && currentMinutes > 0) { //minskar minuterna med 1 och sätter sekunderna till 59
      currentMinutes--;
      currentSeconds = 59;
    }
    updateTimerBar(currentMinutes, currentSeconds, minutes, seconds);
  });

  timer.addEventListener("targetAchieved", () => {
    const timerBar = document.getElementById("timer-bar") as HTMLElement;

    if (timerBar) {
      timerBar.style.height = `150px`; //sätter höjden på timerbaren till 150px när den når 0
    }
  });
  timer.addEventListener("stopped", () => {
    const timerBar = document.getElementById("timer-bar") as HTMLElement;

    if (timerBar) {
      timerBar.style.height = `150px`; //sätter höjden på timerbaren till 150px när den stannar
    }
  });
}

function updateTimerBar(
  currentMinutes: number,
  currentSeconds: number,
  minutes: number,
  seconds: number
): void {
  const totalSeconds = currentMinutes * 60 + currentSeconds;//beräknar totala sekunderna
  const goneSeconds = minutes * 60 + seconds - totalSeconds; //beräknar hur många sekunder som gått

  const height: number = Math.max( //beräknar höjden på timerbaren baserat på hur många sekunder som gått
    0,
    (goneSeconds / (minutes * 60 + seconds)) * 400
  );

  const timerBar = document.getElementById("timer-bar") as HTMLElement;

  if (timerBar) {
    timerBar.style.height = `${400 - height}%`; //sätter höjden på timerbaren
  }
}
