/* ex1 */
function showText(){
    document.getElementById('s_text').innerHTML="This is my first js";
}
// ex2
function showDate(){
    document.getElementById('sdate').innerHTML=Date();
}

// ex3
function bulbOn(){
    document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
    document.getElementById('img').src="images/off.gif";
}
// ex4
function showContent(){
    document.getElementById('con').style.display="block";
}
function hideContent(){
    document.getElementById('con').style.display="none";
}
// ex5
function demo(){
    document.getElementById('demo').style.display="none";

}
// ex6
function demo2(){
    document.getElementById("demo").innerHTML="My First JavaScript";
}
// ex7
function s_num(){
    document.getElementById("s_num").innerHTML= "5 + 6";
}
// ex8
let padText1 = '5';
let padText2 = '0';
let paddedText = padText1.padStart(8, padText2);

function getPaddedText(){
    document.getElementById('get_Padded_Text').innerHTML = paddedText;
}
// ex9
let replaceText = "Please visit Microsoft and Microsoft!";
let replacedText = replaceText.replace(/MICROSOFT/i, "w3school");
function getReplacedText(){
    document.getElementById('get_Replaced_Text').innerHTML = replacedText;
}
// ex10
let convertLowerText1 = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. NESCIUNT, DUCIMUS";
function convertLowerCase1(){
    document.getElementById('convert_LowerCase1').innerHTML = convertLowerText1.toLowerCase();
}
