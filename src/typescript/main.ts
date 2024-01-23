/* STYLING */
import "../scssStyling/main.scss";

/* IMPORT OF TS */

import { startPage } from "./tsPages/startPage";

import { startTimer } from "./tsPages/numberToTextPage";

import { getTimerBar } from "./tsPages/timerBarPage";

import { createTimer } from "./tsPages/startTimer.ts";

startPage();
const timer = createTimer();
while (localStorage.getItem(timer.LOCAL_STORAGE_ISRUNNING) === "true") {
  const minutes = localStorage.getItem(timer.LOCAL_STORAGE_KEY_MINUTES);
  const seconds = localStorage.getItem(timer.LOCAL_STORAGE_KEY_SECONDS);
  if (minutes && seconds) {
    startTimer(Number(minutes), Number(seconds));
    getTimerBar();
  }
}

console.log("Hello World from main.ts");

/* Goran's kod */
