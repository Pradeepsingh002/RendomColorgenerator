let colorDiv = document.querySelector("div");
let btn = document.querySelector("button");
let span = document.querySelector("span");

function ChangeColor() {
  let color = `#${Math.floor(Math.random() * 23456789).toString(16)}`;
  span.innerText = color;
  span.style.color = color;
  colorDiv.style.background = color;
}

btn.addEventListener("click", ChangeColor);
