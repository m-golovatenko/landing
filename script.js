const startDate = new Date('2024-05-31T00:00:00');
const endDate = new Date('2024-06-03T23:59:59');

const totalDurationInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

function updateTimer() {
    const now = new Date();
    const secondsElapsed = Math.floor((now.getTime() - startDate.getTime()) / 1000);

    let remainingSeconds = totalDurationInSeconds - secondsElapsed;

    if (remainingSeconds <= 0) {
        clearInterval(intervalId);
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const hours = Math.floor(remainingSeconds / 3600);
    remainingSeconds %= 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const intervalId = setInterval(updateTimer, 1000);