// - Canvas - //

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = "6"; // Anchor de la linea
ctx.strokeStyle = "#48e"; // Color de la linea
ctx.fillStyle = "#26a"; // Rellenar
ctx.strokeRect(30, 50, 400, 200); // Rectangulo sin llenar
ctx.fillRect(10, 20, 400, 200); // Rectangulo lleno
ctx.lineTo(80,300); // Puntos
ctx.lineTo(120,350);
ctx.lineTo(100,400);
ctx.lineTo(120,450);
ctx.stroke(); // Union de puntos
ctx.closePath(); // Cierra el path para crear uno nuevo
ctx.beginPath(); // Crea uno nuevo
ctx.lineTo(80,200);
ctx.lineTo(80,200);
ctx.stroke();
ctx.arc(120,120,100,10,40); // Circulo
ctx.stroke();