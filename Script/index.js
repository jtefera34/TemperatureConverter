"use strict";

//buttons
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");


//input
const cels = document.getElementById("number1Field");


//output
const answer = document.getElementById("answerField");
const error = document.getElementById("errorMes");


window.onload = init;

function init(){
convertBtn.onclick = convertBtnclick;
resetBtn.onclick = resetBtnclick;

};

function convertBtnclick(){
var inputValue = cels.value; 
if (isNaN(inputValue)){
    error.innerHTML="please input only a number";
  answer.value = "";
  return;
};


var result = (inputValue * 1.8)+32;
answer.value = result;

}
function resetBtnclick(){
  answer.value = "";
  cels.value="";
}

