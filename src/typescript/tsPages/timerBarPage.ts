import { Timer } from "easytimer.js";


const minutes:number = 0;
const seconds:number = 10

export function getTimerBar(): void {
    const timer = new Timer();

    let currentMinutes = minutes;
    let currentSeconds = seconds;

    
    timer.addEventListener("secondsUpdated", () => {
        currentSeconds = Math.max(0, currentSeconds - 1) 

        if(currentSeconds === 0 && currentMinutes > 0) {
            currentMinutes--;
            currentSeconds = 59;
        }

        updateTimerBar(currentMinutes, currentSeconds);
    });

    timer.start({
        countdown: true, startValues: { minutes: minutes, seconds: seconds }
    })

    timer.addEventListener("targetAchieved", () => {
        console.log("Time is out!");
    });


}

 function updateTimerBar(currentMinutes: number, currentSeconds: number): void {
    const totalSeconds = currentMinutes * 60 + currentSeconds;
    const percent = (totalSeconds / (minutes * 60 + seconds)) * 100;

    const width:number = Math.max(0, percent);

    const timerBar = document.getElementById("timer-bar") as HTMLElement; 

    if(timerBar) {
        timerBar.style.width = `${width}%`;
    }
 }


