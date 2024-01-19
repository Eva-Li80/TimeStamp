// Importerar Timer-klassen från "easytimer.js"-biblioteket
import Timer from "easytimer.js";


// Hämtar element från DOM och anpassa deras typer.
const analogTimer = document.getElementById('AnalogTimer') as HTMLElement;
const timesUp = document.getElementById('TimesUp') as HTMLElement;
const breakTime = document.getElementById('Break') as HTMLElement;


// Skapar en samling av watchLines-element och justerar rotationen.
const watchLines = document.getElementsByClassName('clockLines') as HTMLCollectionOf<HTMLElement>;
const watchFace = document.getElementsByClassName('watchFace')[0] as HTMLElement;

// Lägger till watchLines-element i en loop och roterar dem.
for (var i = 1; i < 60; i++) {
    watchFace.innerHTML += "<div class='watchLines'></div>";
    watchLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

// Skapar en ny instans av Timer-klassen.
const timer = new Timer();

export const analogTimer = (time: number, type: string abort:boolean): void =>

    let currentTime = 0;
    let totalTime = * 60;

