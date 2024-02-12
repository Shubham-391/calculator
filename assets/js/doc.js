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
  document.getElementById("dot").classList.remove("pointer-none");
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
  document.getElementById("dot").classList.add("pointer-none");
}
function empty() {
    output.innerHTML = 0;
     document.getElementById("addition").classList.remove("pointer-none");
     document.getElementById("minus").classList.remove("pointer-none");
     document.getElementById("divide").classList.remove("pointer-none");
     document.getElementById("multiply").classList.remove("pointer-none");
     document.getElementById("dot").classList.remove("pointer-none");
}
function del() {
  if (output.innerHTML == 0) {
    output.innerHTML = 0;
  } else {
    output.innerHTML = output.innerHTML.slice(0, -1);
    }
     document.getElementById("addition").classList.remove("pointer-none");
     document.getElementById("minus").classList.remove("pointer-none");
     document.getElementById("divide").classList.remove("pointer-none");
     document.getElementById("multiply").classList.remove("pointer-none");
     document.getElementById("dot").classList.remove("pointer-none");
}
function result() {
    output.innerHTML = eval(output.innerHTML);
     document.getElementById("addition").classList.remove("pointer-none");
     document.getElementById("minus").classList.remove("pointer-none");
     document.getElementById("divide").classList.remove("pointer-none");
     document.getElementById("multiply").classList.remove("pointer-none");
     document.getElementById("dot").classList.remove("pointer-none");
}
function power() {
    output.innerHTML = Math.pow(parseFloat(output.innerHTML), 2);
     document.getElementById("addition").classList.remove("pointer-none");
     document.getElementById("minus").classList.remove("pointer-none");
     document.getElementById("divide").classList.remove("pointer-none");
     document.getElementById("multiply").classList.remove("pointer-none");
     document.getElementById("dot").classList.remove("pointer-none");
}
function root() {
    output.innerHTML = Math.sqrt(parseFloat(output.innerHTML));
     document.getElementById("addition").classList.remove("pointer-none");
     document.getElementById("minus").classList.remove("pointer-none");
     document.getElementById("divide").classList.remove("pointer-none");
     document.getElementById("multiply").classList.remove("pointer-none");
     document.getElementById("dot").classList.remove("pointer-none");
}
