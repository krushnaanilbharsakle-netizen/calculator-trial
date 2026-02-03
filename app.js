let display = document.getElementById("display");
let historyList = document.getElementById("history");

let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

function updateHistory() {
    historyList.innerHTML = "";

    history.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}

updateHistory();

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        let entry = display.value + " = " + result;

        history.push(entry);
        localStorage.setItem("calcHistory", JSON.stringify(history));

        updateHistory();
        display.value = result;

    } catch {
        display.value = "Error";
    }
}

function clearHistory() {
    history = [];
    localStorage.removeItem("calcHistory");
    updateHistory();
}

function updateClock() {
    let now = new Date();

    document.getElementById("clock").textContent =
        now.toDateString() + " " + now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();
