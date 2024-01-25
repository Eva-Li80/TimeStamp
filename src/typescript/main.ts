/* STYLING */
import "../scssStyling/main.scss";

/* IMPORT OF TS */
import { createTimer } from "./tsPages/startTimer.ts";
import { NavBar } from "./tsPages/Nav-Bar.ts";

NavBar();
createTimer();
