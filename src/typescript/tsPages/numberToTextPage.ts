import { Timer } from "easytimer.js";
import * as numberToWords from "number-to-words";

export function startTimer(minutes: number, seconds: number): void {
  const timer = new Timer();
  const dynamicMinutes = document.getElementById("minutes");
  const dynamicSeconds = document.getElementById("seconds");

  timer.addEventListener("secondsUpdated", () => {
    const timeText = getTimeToText(timer);
    updateDynamicText(dynamicMinutes, dynamicSeconds, timeText);
  });

  timer.start({ countdown: true, startValues: { minutes, seconds } });

  timer.addEventListener("targetAchieved", () => {
    console.log("Tiden är ute!");
  });
}

function updateDynamicText(
  minutesElement: HTMLElement | null,
  secondsElement: HTMLElement | null,
  text: string
): void {
  if (minutesElement && secondsElement) {
    const timeLeft = text.split(" and ");
    minutesElement.textContent = timeLeft[0];

    if (timeLeft.length > 1 && timeLeft[0].trim() !== "zero") {
      secondsElement.textContent = ` and ${timeLeft[1]}`;
    } else {
      secondsElement.textContent = timeLeft.length > 1 ? timeLeft[1] : "";
    }
  }
}

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
        ? ` and ${secondsToText} second${secondsToText !== "one" ? "s" : ""} left`
        : "";

    return `${minutesString}${secondsString}`;
  } else {
    return secondsToText !== "zero"
      ? `${secondsToText} second${secondsToText !== "one" ? "s" : ""} left`
      : "";
  }
}

function getMinutesToText(minutes: number): string {
  return numberToWords.toWords(minutes);
}

function getSecondsToText(seconds: number): string {
  return numberToWords.toWords(seconds);
}


