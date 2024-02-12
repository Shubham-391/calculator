let output = document.getElementById("output");

function num(x) {
  if (output.innerHTML == 0) {
    output.innerHTML = x;
  } else {
    output.innerHTML += x;
  }
  document.getElementById("addition").classList.remove("pointer-none");
  document.getElementById("minus").classList.remove("pointer-none");
  document.getElementById("divide").classList.remove("pointer-none");
  document.getElementById("multiply").classList.remove("pointer-none");
}
function op(x) {
  if (output.innerHTML == 0) {
    output.innerHTML = x;
  } else {
    output.innerHTML += x;
  }
  document.getElementById("addition").classList.add("pointer-none");
  document.getElementById("minus").classList.add("pointer-none");
  document.getElementById("divide").classList.add("pointer-none");
  document.getElementById("multiply").classList.add("pointer-none");
}
function empty() {
  output.innerHTML = 0;
}
function del() {
  if (output.innerHTML == 0) {
    output.innerHTML = 0;
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);
  }
}
function result() {
  output.innerHTML = eval(output.innerHTML);
}
function power() {
  output.innerHTML = Math.pow(parseFloat(output.innerHTML), 2);
}
function root() {
  output.innerHTML = Math.sqrt(parseFloat(output.innerHTML));
}
