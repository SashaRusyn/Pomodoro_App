let focusButton = document.querySelector(".btn-timer");
let shortBreakButton = document.querySelector(".btn-shortbreak");
let longBreakButton = document.querySelector(".btn-longbreak");

let buttons = document.querySelectorAll(".btn");

let timePanel = document.querySelector('#time');

let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");
let resetButton = document.querySelector("#reset");

let music = document.querySelector('audio');

let isStarted = false;

let timer;
let time;
timePanel.textContent = "25:00";

focusButton.addEventListener('click', function () {
    clearInterval(timer);
    isStarted = false;
    time = 1500;
    timePanel.textContent = "25:00";

    buttons.forEach(function (e) {
        e.classList.remove('btn-focus');
    })

    focusButton.classList.add('btn-focus');

    startButton.classList.add('show');
    startButton.classList.remove('hide');
    pauseButton.classList.remove('show');
    pauseButton.classList.add('hide');
    resetButton.classList.remove('show');
    resetButton.classList.add('hide');
})

shortBreakButton.addEventListener('click', function () {
    clearInterval(timer);
    isStarted = false;
    time = 5;
    timePanel.textContent = "05:00";

    buttons.forEach(function (e) {
        e.classList.remove('btn-focus');
    })

    shortBreakButton.classList.add('btn-focus');

    startButton.classList.add('show');
    startButton.classList.remove('hide');
    pauseButton.classList.remove('show');
    pauseButton.classList.add('hide');
    resetButton.classList.remove('show');
    resetButton.classList.add('hide');
})

longBreakButton.addEventListener('click', function () {
    clearInterval(timer);
    isStarted = false;
    time = 900;
    timePanel.textContent = "15:00";

    buttons.forEach(function (e) {
        e.classList.remove('btn-focus');
    })

    longBreakButton.classList.add('btn-focus');

    startButton.classList.add('show');
    startButton.classList.remove('hide');
    pauseButton.classList.remove('show');
    pauseButton.classList.add('hide');
    resetButton.classList.remove('show');
    resetButton.classList.add('hide');
})

startButton.addEventListener('click', function () {
    if (isStarted) return;

    timer = setInterval(function () {
        time -= 1;

        timePanel.textContent = (Math.floor(time / 60) < 10 ? '0' + Math.floor(time / 60) : Math.floor(time / 60));
        timePanel.textContent += ':';
        timePanel.textContent += (Math.floor(time % 60) < 10 ? '0' + Math.floor(time % 60) : Math.floor(time % 60));

        if (!time) {
            music.play();
            setTimeout(function () {
                music.pause();
                music.currentTime = 0;
            }, 5000);

            clearInterval(timer);
            isStarted = false;
            if (focusButton.classList.contains('btn-focus')) {
                time = 1500;
                timePanel.textContent = "25:00";
            } else if (shortBreakButton.classList.contains('btn-focus')) {
                time = 300;
                timePanel.textContent = "05:00";
            } else if (longBreakButton.classList.contains('btn-focus')) {
                time = 900;
                timePanel.textContent = "15:00";
            }

            startButton.classList.add('show');
            startButton.classList.remove('hide');
            pauseButton.classList.remove('show');
            pauseButton.classList.add('hide');
            resetButton.classList.remove('show');
            resetButton.classList.add('hide');

            return;
        }
    }, 1000);

    isStarted = true;

    startButton.classList.toggle('show');
    startButton.classList.toggle('hide');
    pauseButton.classList.toggle('show');
    pauseButton.classList.toggle('hide');
    resetButton.classList.toggle('show');
    resetButton.classList.toggle('hide');
})

pause.addEventListener('click', function () {
    clearInterval(timer);
    isStarted = false;

    startButton.classList.toggle('show');
    startButton.classList.toggle('hide');
    pauseButton.classList.toggle('show');
    pauseButton.classList.toggle('hide');
    resetButton.classList.toggle('show');
    resetButton.classList.toggle('hide');
})

resetButton.addEventListener('click', function () {
    clearInterval(timer);
    isStarted = false;
    if (focusButton.classList.contains('btn-focus')) {
        time = 1500;
        timePanel.textContent = "25:00";
    } else if (shortBreakButton.classList.contains('btn-focus')) {
        time = 300;
        timePanel.textContent = "05:00";
    } else if (longBreakButton.classList.contains('btn-focus')) {
        time = 900;
        timePanel.textContent = "15:00";
    }

    startButton.classList.toggle('show');
    startButton.classList.toggle('hide');
    pauseButton.classList.toggle('show');
    pauseButton.classList.toggle('hide');
    resetButton.classList.toggle('show');
    resetButton.classList.toggle('hide');
})