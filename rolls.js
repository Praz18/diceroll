let num1;
let num2;
document.getElementById("rollClick").onclick = function(){
	num1 = Math.floor(Math.random() * 6) + 1;
	num2 = Math.floor(Math.random() * 6) + 1;
	document.getElementById("roll2").innerHTML = num1;
	document.getElementById("image1").innerHTML = num1 + ".png";
	document.getElementById("roll2").innerHTML = num2;
	document.getElementById("image2").innerHTML = num2 + ".png";
}
