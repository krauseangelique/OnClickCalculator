let numberValue1 = 4;
let numberValue2 = 3;
let resultSum = numberValue1 + numberValue2;
console.log(resultSum);

function myFirstNumber() {

    document.getElementById("firstNumber").innerHTML = `${numberValue1}`;
}

function mySecondNumber() {
    
    document.getElementById("secondNumber").innerHTML = `${numberValue2}`;
}

function myFirstOperation() {
    let operationValue = "+";
    document.getElementById("operation").innerHTML = `${operationValue}`;
}

function myResultSum() {
    
    document.getElementById("equalExe").innerHTML = `${resultSum}`;
}