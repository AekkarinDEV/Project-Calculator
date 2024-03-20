let currentNumber = "0"; 
let isItfistInput = true;
let isItfistOperator = true;
let operation = '';
let num1 = null;
let num2 = null;
let inputOperator = null;
let result = null;
const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const plus = document.getElementById("plus")
const decrese = document.getElementById("decrese")
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const percent = document.getElementById("percent")
const zero = document.getElementById("zero")
const equal = document.getElementById("equal")
const ac = document.getElementById("ac")
const del = document.getElementById("del")

function clearScreen() {
    currentNumber = "0"
    isItfistInput = true;
}

function opertionInput(Operator){
    if(isItfistOperator){
    num1 = currentNumber;
    currentNumber += Operator;
    row2.innerHTML = `${currentNumber}`
    switchROW()
    inputOperator = Operator;
    row2.innerHTML = "0";
    isItfistOperator =  false;
    }
}

function equalButton() {
    row1.innerHTML += currentNumber;
     num2 = Number(currentNumber);
     num1 = Number(num1);
    switch(inputOperator) {
        case '+':
            result = num1 + num2;
        break;
        case '*':
            result = num1 * num2;
        break;
        case '-':
            result = num1 - num2;
        break;
        case '/':
            result = num1 / num2;
        break;
        case '%':
            result = num1 % num2;
        break;
        case '+':
            result = num1 + num2;
        break;
    }
    currentNumber = result.toString();
    row2.innerHTML=`= ${currentNumber}`
    isItfistOperator = true;
    
}

function switchROW() {
    formula = currentNumber;
    row1.innerHTML = `${formula}`
    clearScreen()
} 

function inputListener(input) {
    if(isItfistInput){
    currentNumber = ""
    currentNumber += input;
    row2.innerHTML = `${currentNumber}`
    isItfistInput = false;
    }else {
        currentNumber += input;
        row2.innerHTML = `${currentNumber}`
    }
}

function deleteButton() {
    if(currentNumber.length < 2){
        currentNumber = ""
        row2.innerHTML = "0"
    }else{
        currentNumber = currentNumber.slice(0, -1);
        row2.innerHTML = `${currentNumber}`

    }
}

function allClear(){
     currentNumber = "0"; 
    isItfistInput = true;
    isItfistOperator = true;
    operation = '';
    num1 = null;
    num2 = null;
    inputOperator = null;
    result = null;
    row1.innerHTML = "..."
    row2.innerHTML = "0"
}