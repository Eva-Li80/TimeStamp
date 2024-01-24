import { Timer } from "easytimer.js";

export function digitalTimer(timer: Timer): void {

  const minutesElement = document.getElementById("digitalMinutes") as HTMLSpanElement;
  const secondsElement = document.getElementById("digitalSeconds") as HTMLSpanElement;
  console.log("Laddar in digitalTimer.ts")


  timer.addEventListener("secondsUpdated", function () {
    const timeValues = timer.getTimeValues();
    minutesElement.textContent = timeValues.minutes.toString();
    secondsElement.textContent = timeValues.seconds.toString();
  });
  

  
}
