const checkbox = document.getElementById("checkbox");
const photo = document.getElementById("photo");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    photo.style.display = "block";
  } else {
    photo.style.display = "none";
  }
});