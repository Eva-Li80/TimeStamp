/* STYLING */
import "../scssStyling/main.scss";
import { pauseTimerPage } from "./tsPages/pausePage";

/* IMPORT OF TS */

import { startPage } from "./tsPages/startPage";
import {
  duration,
  isRunning,
  LOCAL_STORAGE_KEY_MINUTES,
  LOCAL_STORAGE_KEY_SECONDS,
} from "./tsPages/startTimer";

/* startPage(); */
pauseTimerPage();

console.log("Hello World from main.ts");
