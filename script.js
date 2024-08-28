let timer;
let elapsedTime = 0;
let isRunning = false;
let startTime;
let updatedTime;
let difference;
let t;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const clearLapsButton = document.getElementById('clear-laps');
const lapList = document.getElementById('lap-list');

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        timer = setInterval(updateTimer, 1);
    }
}

// Update the timer display
function updateTimer() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    elapsedTime += difference;
    startTime = updatedTime;
    
    let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Pause the timer
function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
    lapList.innerHTML = "";
}

// Add a lap
function addLap() {
    if (isRunning) {
        const lapTime = display.innerHTML;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}

// Clear all laps
function clearLaps() {
    lapList.innerHTML = "";
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
clearLapsButton.addEventListener('click', clearLaps);
