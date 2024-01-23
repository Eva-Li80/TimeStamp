/* STYLING */
import "../scssStyling/main.scss";

/* IMPORT OF TS */

import { startPage } from "./tsPages/startPage";

import { startTimer } from "./tsPages/numberToTextPage";
startTimer(1, 5);

import { getTimerBar } from "./tsPages/timerBarPage";
getTimerBar();

import { createTimer } from "./tsPages/startTimer.ts";


startPage();
createTimer();

console.log("Hello World from main.ts");

/* Goran's kod */
