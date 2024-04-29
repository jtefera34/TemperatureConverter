"use strict";

//buttons
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");


//input
const fahr = document.getElementById("number1Field");


//output
const answer = document.getElementById("answerField");
const error = document.getElementById("errorMes");


window.onload = init;

function init(){
convertBtn.onclick = convertBtnclick;
resetBtn.onclick = resetBtnclick;

};

function convertBtnclick(){
var inputValue = fahr.value; 
if (isNaN(inputValue)){
    error.innerHTML="please input only a number";
  answer.value = "";
  return;
};


var result = (inputValue - 32)/1.8
answer.value = result;

}
function resetBtnclick(){
  answer.value = "";
  fahr.value="";
}
