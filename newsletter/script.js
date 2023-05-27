let input = document.querySelector("#email");
let errorMessage = document.querySelector(".email span");
let form = document.querySelector("form");
let subscribeBtn = document.getElementById("subscribeBtn");
let dissmissBtn = document.getElementById("dissmissBtn");
let box = document.getElementById("box");
let imageSection = document.getElementById("imageSection");
let successMessage = document.getElementById("success");

function submit(e) {
  e.preventDefault();
}

form.addEventListener("submit", submit);

subscribeBtn.onclick = function () {
  if (/\w@\w.\w/gi.test(input.value)) {
    box.style.display = "none";
    imageSection.style.display = "none";
    successMessage.style.display = "block";
  } else {
    errorMessage.style.opacity = "1";
    input.style.outline = "1px solid red";
  }
  input.oninput = function () {
    errorMessage.style.opacity = "0";
    input.style.outlineColor = "var(--MainColor)";
  };
};
dissmissBtn.onclick = function () {
  box.style.display = "block";
  imageSection.style.display = "block";
  successMessage.style.display = "none";
  input.value = ""
};
