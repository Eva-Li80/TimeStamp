import { Timer } from "easytimer.js";
import * as numberToWords from "number-to-words";

export function getNumberToText(timer: Timer): void {
  const dynamicMinutes = document.getElementById("minutes");
  const dynamicSeconds = document.getElementById("seconds");


  timer.addEventListener("secondsUpdated", () => {
    const timeText = getTimeToText(timer);
    updateDynamicText(dynamicMinutes, dynamicSeconds, timeText);
  });

  timer.addEventListener("targetAchieved", () => {
    if (dynamicMinutes && dynamicSeconds) {
      dynamicMinutes.textContent = "";
      dynamicSeconds.textContent = "";
    }
  });
  timer.addEventListener("stopped", () => {
    if (dynamicMinutes && dynamicSeconds) {
      dynamicMinutes.textContent = "";
      dynamicSeconds.textContent = "";
    }
  });
}

function updateDynamicText(
  minutesElement: HTMLElement | null,
  secondsElement: HTMLElement | null,
  text: string
): void {
  if (minutesElement && secondsElement) {
    const timeLeft = text.split(" and "); // delar upp textsträngen i minuter och sekunder vid "and"
    minutesElement.textContent = timeLeft[0]; //första elementet i arrayen är minuter

    if (timeLeft.length > 1 && timeLeft[0].trim() !== "zero") { //om det finns sekunder och minuter inte är 0
      secondsElement.textContent = ` and ${timeLeft[1]}`; //andra elementet i arrayen är sekunder
    } else {
      secondsElement.textContent = timeLeft.length > 1 ? timeLeft[1] : "";
    }
  }
}

//skapar textsträng av minuter och sekunder
function getTimeToText(time: Timer): string {
  const timeLeft = time.getTimeValues();
  const minutesToText = getMinutesToText(timeLeft.minutes);
  const secondsToText = getSecondsToText(timeLeft.seconds);

  if (minutesToText !== "zero") {
    const minutesString =
      minutesToText !== "zero"
        ? `${minutesToText} minute${minutesToText !== "one" ? "s" : ""}`
        : "";
    const secondsString =
      secondsToText !== "zero"
        ? ` and ${secondsToText} second${
            secondsToText !== "one" ? "s" : ""
          } left`
        : "";

    return `${minutesString}${secondsString}`;
  } else {
    return secondsToText !== "zero"
      ? `${secondsToText} second${secondsToText !== "one" ? "s" : ""} left`
      : "";
  }
}

//konverterar minuter till text
function getMinutesToText(minutes: number): string {
  return numberToWords.toWords(minutes);
}

//konverterar sekunder till text
function getSecondsToText(seconds: number): string {
  return numberToWords.toWords(seconds);
}
