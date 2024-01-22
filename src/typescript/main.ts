/* STYLING */
import "../scssStyling/main.scss";
import { pauseTimerPage } from "./tsPages/pausePage";

/* IMPORT OF TS */

import { startPage } from "./tsPages/startPage";

startPage();
pauseTimerPage();

console.log("Hello World from main.ts");
