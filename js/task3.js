

button.onclick = function () {
let x = document.getElementById("red1");
let y = document.getElementById("orange2");
let z = document.getElementById("green3");

  if (x.style.background === "grey" && y.style.background === "grey" && z.style.background === "grey") {
    x.style.background = "red";
    y.style.background = "grey";
    z.style.background = "grey";
    
  }
  else if (x.style.background === "red"){
    x.style.background = "grey";
    y.style.background = "orange";
    z.style.background = "grey";
  }
  else if (y.style.background === "orange"){
    x.style.background = "grey";
    y.style.background = "grey";
    z.style.background = "green";
  }
  else {
    x.style.background = "grey";
    y.style.background = "grey";
    z.style.background = "grey";
  }
}
/* button.addEventListener("click", red);
console.log(x);
function red () {
  x.style.background = "#00ffff";
  alert('Добрий день!')
} */