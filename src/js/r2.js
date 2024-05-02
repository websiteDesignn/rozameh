const INPUT_EMAIL = document.getElementById("input-email");
const BUTTON_SEND = document.getElementById("button-send");

function emptyInput() {
  alert(INPUT_EMAIL.value);
  INPUT_EMAIL.value = "";
  INPUT_EMAIL.placeholder = "send shod";
}
BUTTON_SEND.addEventListener("click", emptyInput);
