const button = document.getElementById("button");
const roll1 = document.getElementById("roll1");
const roll2 = document.getElementById("roll2");
let num1;
let num2;
button.onclick = function(){
	num1 = Math.floor(Math.random() * 6) + 1;
	num2 = Math.floor(Math.random() * 6) + 1;
	roll1.textContent = num1;
	roll2.textContent = num2;
}
