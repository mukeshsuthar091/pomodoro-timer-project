let ring = document.querySelector(".ring");
let inputs = document.querySelectorAll("input");
let startBtn = document.querySelector(".start")
let settingBtn = document.querySelector(".settings")


let minute = inputs[0].value;
let second = inputs[1].value;
let myInterval;


function startTimer() {
    ring.classList.remove("ending");

    if(second == 00 && minute == 00){
        second = 00;
        minute = 00;
        ring.classList.add("ending");
        stopTimer();
        let audio = new Audio("sound/bell-hop-bell.mp3");
        audio.play();
    }
    else if (second == 0 && minute != 0) {
        second = 59;
        minute--;
        // console.log(minute, second);
        inputs[0].value = minute.toString().padStart(2, 0);
        inputs[1].value = second.toString().padStart(2, 0);
    }
    else {
        second--;
        // console.log(minute, second);
        inputs[0].value = minute.toString().padStart(2, 0);
        inputs[1].value = second.toString().padStart(2, 0);
    }
}

function stopTimer() {
    clearInterval(myInterval);
}


settingBtn.addEventListener("click", () => {
    inputs.forEach((e) => {
        e.toggleAttribute("disabled");
        minute = inputs[0].value;
        second = inputs[1].value;
    })
});


startBtn.addEventListener("click", () => {
    if (startBtn.innerHTML == "start") {

        myInterval = setInterval(startTimer, 1000);
        startBtn.innerHTML = "stop";  
    }
    else {
        stopTimer();
        startBtn.innerHTML = "start";
    }
})

