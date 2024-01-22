export function page5() {

  // Create timer container
  const slidingContainer = document.createElement('div') as HTMLDivElement;
  slidingContainer.className = 'sliding-container'

  // Create timer background container
  const bgContainer = document.createElement('div') as HTMLDivElement;
  bgContainer.className = 'bg-container'

  // Create timer heading
  const h1 = document.createElement('h1') as HTMLHeadingElement;
  h1.textContent = 'interval'

  // Create timer
  const timer = document.createElement('div') as HTMLDivElement;
  timer.id = 'timer';
  timer.className = 'timer';

  // Create abort button
  const abortButton = document.createElement('button') as HTMLButtonElement;
  abortButton.id = 'abortTimer';
  abortButton.className = 'abort-timer';
  abortButton.textContent = 'ABORT TIMER';

  // Append elements to timer container
  slidingContainer.appendChild(bgContainer);
  slidingContainer.appendChild(h1);
  slidingContainer.appendChild(timer);
  slidingContainer.appendChild(abortButton);

  // Append timer container to app root
  const appRoot = document.getElementById('app') as HTMLDivElement;
  if(appRoot) {
    appRoot.appendChild(slidingContainer);
  }

}