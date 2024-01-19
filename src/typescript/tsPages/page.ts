export function setupPage() {

    document.addEventListener('DOMContentLoaded', () => {
        const appRoot = document.getElementById('app');
      
        // Create timer container
        const timerContainer = document.createElement('div');
        timerContainer.className = 'timer-container';
      
        // Create timer header
        const timerHeader = document.createElement('div');
        timerHeader.className = 'timer-header';
      
        // Create menu icon
        const menuIcon = document.createElement('span');
        menuIcon.className = 'menu-icon';
        menuIcon.innerHTML = '&#9776;';
        
        // Create title
        const title = document.createElement('h1');
        title.textContent = 'interval';
      
        // Append menu icon and title to timer header
        timerHeader.appendChild(menuIcon);
        timerHeader.appendChild(title);
      
        // Create timer dial
        const timerDial = document.createElement('div');
        timerDial.className = 'timer-dial';
      
        // Create timer
        const timer = document.createElement('div');
        timer.id = 'timer';
        timer.className = 'timer';
        timer.appendChild(timerDial);
      
        // Create abort button
        const abortButton = document.createElement('button');
        abortButton.id = 'abortTimer';
        abortButton.className = 'abort-timer';
        abortButton.textContent = 'ABORT TIMER';
      
        // Append elements to timer container
        timerContainer.appendChild(timerHeader);
        timerContainer.appendChild(timer);
        timerContainer.appendChild(abortButton);
      
        // Append timer container to app root
        if(appRoot) {
          appRoot.appendChild(timerContainer);
        }
      
        let intervalId: number | undefined;
        let degree = 0;
      
        function startTimer() {
          intervalId = window.setInterval(() => {
            degree += 6; // assuming a tick every second, 360deg/60sec
            timerDial.style.transform = `rotate(${degree}deg)`;
          }, 1000);
        }
      
        abortButton.addEventListener('click', () => {
          if (intervalId !== undefined) {
            clearInterval(intervalId);
            degree = 0;
            timerDial.style.transform = 'rotate(0deg)';
          }
        });
      
        startTimer();
      });
      
}