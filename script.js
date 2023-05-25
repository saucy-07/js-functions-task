function greet() {
    window.alert("HELLO!");
}

var val1 = document.getElementById("value1");
var val2 = document.getElementById("value2");
let output = document.getElementById("output")

function multiply() {
    sum = (val1.value) * (val2.value);
    output.innerHTML = sum;
    if(isNaN.val1 || isNaN.val2){
        alert("PLEASE INSERT CORRECT VALUES")
    }
}

var val3 = document.getElementById("value3");
let output2 = document.getElementById("output2");

function times5() {
    answer = val3.value * 5;
    output2.innerHTML = answer;
}