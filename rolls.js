let num1;
let num2;
document.getElementById("button").onclick = function(){
	num1 = Math.floor(Math.random() * 6) + 1;
	num2 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("roll1").innerHTML = num1;
	document.getElementById("roll2").innerHTML = num2;
}
