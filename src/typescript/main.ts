import { createTimer } from "./tsPages/startTimer.ts";

createTimer();
/* STYLING */
import "../scssStyling/main.scss";
import { pauseTimerPage } from "./tsPages/pausePage";

/* IMPORT OF TS */

import { startPage } from "./tsPages/startPage";
import { startTimer } from "./tsPages/numberToTextPage";
startTimer(1, 5);

startPage();

console.log("Hello World from main.ts");

/* Goran's kod */
