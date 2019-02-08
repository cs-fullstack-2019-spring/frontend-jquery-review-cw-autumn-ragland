//button 1
$("#btn1").on("click", countGreen);
//how many paragraphs in the body
var pTagNum = $("p").length;
//border and alert
function countGreen(){
    $("p").addClass("greenBorder");
    alert("The number of paragraphs in the document is " + pTagNum)
}
//button 2
$("#btn2").on("click", countRed);
//how many paragraphs in the div
var pTagChildNum = $("div:first>p").length;
//border and alert
function countRed(){
    $("div:first>p").addClass("redBorder");
    alert("The number of paragraphs in the div is " + pTagChildNum)
}
//button3
$("#btn3").on("click", countBlue);
//how many paragraphs in the second div
var  pTagChildNum2 = $("div:last>p").length;
//border and alert
function countBlue() {
    $("div:last>p").addClass("blueBorder");
    alert("The number of paragraphs in the div is " + pTagChildNum2)
}