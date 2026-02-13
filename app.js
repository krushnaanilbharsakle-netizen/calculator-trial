/* ================= CALCULATOR ================= */

let display = document.getElementById("display");

function appendValue(val){
    display.value += val;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        alert("Invalid Expression");
    }
}


/* ================= TIMER ================= */

let timerInterval;
let alarmSound = new Audio("alarm.mp3");

function startTimer(){

    let min = Number(document.getElementById("timerMin").value) || 0;
    let sec = Number(document.getElementById("timerSec").value) || 0;

    let total = min * 60 + sec;

    if(total <= 0){
        alert("Enter valid time");
        return;
    }

    clearInterval(timerInterval);
    updateCountdown(total);

    timerInterval = setInterval(()=>{

        total--;
        updateCountdown(total);

        if(total <= 0){

            clearInterval(timerInterval);

            alarmSound.loop = true;
            alarmSound.play();

            setTimeout(()=>{
                alarmSound.pause();
                alarmSound.currentTime = 0;
            },8000);
        }

    },1000);
}

function updateCountdown(total){

    let m = Math.floor(total/60);
    let s = total % 60;

    document.getElementById("countdown").innerText =
        String(m).padStart(2,'0') + ":" +
        String(s).padStart(2,'0');
}


/* ================= NOTIFICATION ================= */

function requestNotificationPermission(){

    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }
}

function scheduleNotification(){

    requestNotificationPermission();

    let message = document.getElementById("notifyMessage").value || "Reminder";
    let min = Number(document.getElementById("notifyMin").value) || 0;
    let sec = Number(document.getElementById("notifySec").value) || 0;

    let total = min * 60 + sec;

    if(total <= 0){
        alert("Enter valid notification time");
        return;
    }

    document.getElementById("status").innerText =
        "Status : Notification Set";

    setTimeout(()=>{

        if(Notification.permission === "granted"){

            new Notification(message);
            playNotificationSound();
        }

    }, total * 1000);
}


/* ================= NOTIFICATION SOUND ================= */

let notificationAudio = new Audio("alarm.mp3");

function playNotificationSound(){

    notificationAudio.pause();
    notificationAudio.currentTime = 0;

    notificationAudio.play().catch(()=>{});

    setTimeout(()=>{
        notificationAudio.pause();
        notificationAudio.currentTime = 0;
    },5000);
}
