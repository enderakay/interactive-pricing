var toggle = document.getElementById("toggle1");
var output = document.getElementById("demo");
output.innerHTML = toggle.value;

toggle.oninput = function() {
  output.innerHTML = this.value;
}