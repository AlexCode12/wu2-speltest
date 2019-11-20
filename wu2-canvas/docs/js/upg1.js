const WIDTH = 800; // canvas elementets bredd
const HEIGHT = 600; // canvas elementets höjd

let canvas = document.createElement('canvas'); // skapa canvaselementet
let ctx = canvas.getContext('2d'); // spara canvaselementets context, vi behöver det för att kunna rita
canvas.setAttribute("class", "border"); // ge canvas klassen border så vi markerar ut det
canvas.width  = WIDTH; // sätt elementets bredd
canvas.height = HEIGHT; // ... & höjd

/*
 * Rita något då?
 * Referens https://www.w3schools.com/tags/ref_canvas.asp
 */

// Text
ctx.font = "20px Comic Sans MS"; 
ctx.fillStyle = '#000'; 
ctx.textAlign = "left"; 
ctx.fillText("HEJ!", canvas.width / 2, 100);

// Rektanglar

ctx.fillStyle = "blue"; 
ctx.fillRect(600, 300, 100, 25); 

ctx.fillStyle = "red"; 
ctx.fillRect(100, 300, 150, 100); 
ctx.lineWidth = "2"; 
ctx.strokeRect(100, 300, 150, 100); 
ctx.fill(); 


// Cirkel
ctx.beginPath(); 
ctx.arc(100, 75, 50, 0, 2 * Math.PI); 
ctx.fillStyle = "yellow"; 
ctx.strokeStyle = "rgba(0,0,0, 0.7)"; 
ctx.lineWidth = "2"; 
ctx.stroke(); 
ctx.fill(); 

// Linje
var i;
for (i = 0; i < 160; i = i + 40) {
    ctx.beginPath();
    ctx.moveTo(i, 300 + i); 
    ctx.lineTo(i + 100, 600 + i); 
    ctx.strokeStyle = getRandomColor(0); 
    ctx.lineWidth = "4"; 
    ctx.stroke();

}
// Bild
let img = new Image();
img.src = 'img/THEGRETEST.png';
img.onload = function() {
    ctx.drawImage(img, 400, 150, 256, 256);
};

// färgslumpare
function getRandomColor(alpha) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + "," +  (alpha ? alpha : 1) + ")";
}
let main = document.getElementsByTagName('main')[0]; // hämta main elementet från vårt HTML dokument
main.appendChild(canvas); // lägg till canvaselementet i main i HTML dokumentet