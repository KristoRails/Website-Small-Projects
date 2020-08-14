var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var sum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);


function add()
{
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    sum.innerHTML = (one + two);
}

var numOneSub = document.getElementById("num-one-sub");
var numTwoSub = document.getElementById("num-two-sub");
var sub = document.getElementById("sub-sum");

numOneSub.addEventListener("input", subtract);
numTwoSub.addEventListener("input", subtract);

function subtract()
{
    var one = parseFloat(numOneSub.value) || 0;
    var two = parseFloat(numTwoSub.value) || 0;
    sub.innerHTML = (one - two);
}

var numOneMul = document.getElementById("num-one-mul");
var numTwoMul = document.getElementById("num-two-mul");
var mul = document.getElementById("mul-sum");

numOneMul.addEventListener("input", multiply);
numTwoMul.addEventListener("input", multiply);

function multiply()
{
    var one = parseFloat(numOneMul.value) || 1;
    var two = parseFloat(numTwoMul.value) || 1;
    mul.innerHTML = (one * two);
}

var numOneDiv = document.getElementById("num-one-div");
var numTwoDiv = document.getElementById("num-two-div");
var div = document.getElementById("div-sum");

numOneDiv.addEventListener("input", divide);
numTwoDiv.addEventListener("input", divide);

function divide()
{
    var one = parseFloat(numOneDiv.value) || 1;
    var two = parseFloat(numTwoDiv.value) || 1;
    div.innerHTML = (one / two);
}