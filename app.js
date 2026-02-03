function calculate(op) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let res = 0;

    if (op === '+') res = n1 + n2;
    if (op === '-') res = n1 - n2;
    if (op === '*') res = n1 * n2;
    if (op === '/') res = n1 / n2;

    document.getElementById("result").innerText = "Result: " + res;
}
