let output = document.getElementById("output");

function num(x) {
  if (output.innerHTML == 0) {
    output.innerHTML = x;
  } else {
    output.innerHTML += x;
  }
  document.querySelectorAll(".op").forEach((x) => x.classList.remove("pointer-none"));
}
function op(x) {
  if (output.innerHTML == 0) {
    output.innerHTML = x;
  } else {
    output.innerHTML += x;
  }
  document.querySelectorAll(".op").forEach((x) => x.classList.add("pointer-none"));
}
function empty() {
  output.innerHTML = 0;
  document.querySelectorAll(".op").forEach((x) => x.classList.remove("pointer-none"));
}
function del() {
  if (output.innerHTML == 0) {
    output.innerHTML = 0;
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);    
  }
  document.querySelectorAll(".op").forEach((e) => e.classList.remove("pointer-none"));
}
function result() {
  output.innerHTML = eval(output.innerHTML);
  document.querySelectorAll(".op").forEach((e) => e.classList.remove("pointer-none"));
}
function power() {
  output.innerHTML = Math.pow(parseFloat(output.innerHTML), 2);
  document.querySelectorAll(".op").forEach((e) => e.classList.remove("pointer-none"));
}
function root() {
  output.innerHTML = Math.sqrt(parseFloat(output.innerHTML));
 document.querySelectorAll(".op").forEach((x) => x.classList.remove("pointer-none"));
}
