const background = document.querySelector(".light");
const button = document.querySelector(".buttonLight");

button.addEventListener("click", function () {
  button.classList.toggle("buttonNight");
  background.classList.toggle("dark");
});
