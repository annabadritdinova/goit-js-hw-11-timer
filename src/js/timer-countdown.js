class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
  
    start() {
      let countdownId = setInterval(() => {
        const time = this.targetDate - Date.now();
        this.runningCountdown(time);
      }, 1000);
  
      if (Date.now() >= this.targetDate) {
        clearInterval(countdownId);
        return;
      }
    }
  
    runningCountdown(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      const countdownDisplay = document.querySelector(`${this.selector}`);
      const daysLeft = countdownDisplay.querySelector('[data-value="days"]');
      const hoursLeft = countdownDisplay.querySelector('[data-value="hours"]');
      const minutesLeft = countdownDisplay.querySelector('[data-value="mins"]');
      const secondsLeft = countdownDisplay.querySelector('[data-value="secs"]',
      );
  
      daysLeft.textContent = days;
      hoursLeft.textContent = hours;
      minutesLeft.textContent = minutes;
      secondsLeft.textContent = seconds;
    }
  
    pad(timeRemaining) {
      return String(timeRemaining).padStart(2, '');
    }
  }
  
  const newCountdown = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Nov 21, 2022'),
  });
  
  newCountdown.start();