var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
//la base de la glaces
ctx.beginPath;
ctx.moveTo(100,100);
ctx.lineTo(250,100);
ctx.lineTo(175,350);
ctx.lineTo(100,100);
ctx.closePath();
ctx.fillStyle = '#aa6522';
ctx.fill();
//glaces
ctx.beginPath();
ctx.lineWidth="3";
ctx.moveTo(100,100);
ctx.bezierCurveTo(175,10,190,5,250,100);
ctx.fillStyle='brown';
ctx.fill();
