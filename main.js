///////////////  get document
let serial = document.getElementById(`serial`);
let create = document.getElementById(`generate`);
let nun = document.getElementById("nn");
let closee = document.getElementById("close");
let oppen = document.getElementById("oppen");
let bac = document.getElementById("bak");
let dark = document.getElementById("dark");
let auto = document.getElementById("auto");
let random = document.getElementById("random");
let navv = document.getElementById("navv");
let nave = document.getElementById("nave");
let color = document.getElementById("nave1");
//////////////////////
create.onclick = function () {
  let pass =
    "1234567980qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM?@#!~$&";
  let nunn = nun.value;
  let ran = "";
  if (nunn >= "15") {
    window.alert("pls enter yoer number > 15");
  } else {
    for (let i = 0; i < nunn; i++) {
      ran += pass[Math.floor(Math.random() * pass.length)];
    }
    serial.innerHTML = ran;
  }
};
//////////////////////random
/*
  Practice
  - Random Background Color
*/
// #fd34f7 FF00FF
random.onclick = function (){
let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

for (let i = 0; i < 6; i++) {
  colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}
let finalColor = `#${colorParts.join("")}`;
document.body.style.backgroundColor = finalColor;
}
////////////////////////////////color inbut
navv.onkeyup = function (){
    if(navv.value > 7 )return
    else{
        document.body.style.backgroundColor = `${navv.value}`;
  }
}
///////////////////dark
dark.onclick= function(){
    document.body.style.backgroundColor = `#000`
}
/////////////////////////////oppen
oppen.onclick = function(){
nave.classList.remove('remove')
oppen.classList.add(`remove`)
}
/////////////////////////bac
bac.onclick = function(){
    color.classList.remove('remove')
}