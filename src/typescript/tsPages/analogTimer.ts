// Importerar Timer-klassen från "easytimer.js"-biblioteket
import { Timer } from "easytimer.js";

// Hämtar elementen från DOM.
const analogTimer = document.getElementById('analogTimer') as HTMLElement;
const timesUp = document.getElementById('alarm') as HTMLElement;

// Skapar en samling av watchLines-element och justerar rotationen.
const dialLines = document.getElementsByClassName('watchlines') as HTMLCollectionOf<HTMLElement>;
const face = document.getElementsByClassName('analog-face')[0] as HTMLElement;

// Lägger till watchLines-element i en loop och roterar dem.
for (let i = 0; i < 60; i++) {
    face.innerHTML += "<div class='watchlines'></div>";
    dialLines[i].style.transform = `rotate(${6 * i}deg)`;
}

// Skapar en ny instans av Timer-klassen.
const timer = new Timer();

// Funktion för att hantera den analoga timern.
export const AnalogTimer = (time: number, type: string, abort: boolean): void => {
    
    if (abort === true) {
        timer.stop();
    } else {
        timer.start({countdown: true, startValues: {minutes: time}});
    }

    let currentTime = 0;
    let totalTime = time * 60;

    // Hämtar minut- och sekundhänder från DOM.
    const minuteMarker = document.getElementById('minuteMarker') as HTMLElement;
    const secondMarker = document.getElementById('secondMarker') as HTMLElement;

    // En lyssnare för varje sekunduppdatering.
    timer.addEventListener('secondsUpdated', (): void => {
        currentTime++;

        // Beräknar graden för sekundvisaren baserat på angiven tid.
        const secondsDegree = (((currentTime / 60) * 360) + 90);
        secondMarker.style.transform = `rotate(${secondsDegree}deg)`;

        if (currentTime % 60 === 0) {
            // Uppdaterar minutvisaren varje minut.
            const minutes = currentTime / 60;
            const minutesDegree = (((minutes / 60) * 360) + 90);
            minuteMarker.style.transform = `rotate(${minutesDegree}deg)`;
        }
        
        // Kontrollerar avslutning av tid beroende på timer-typ.
        if (type === 'interval' && currentTime === 0) {
            analogTimer.classList.remove('active');
            timesUp.classList.add('active');
        } else if (type === 'intervalBreak' && currentTime === totalTime / 2) {
            timer.pause();
            analogTimer.classList.remove('active');
        }
    });
};
