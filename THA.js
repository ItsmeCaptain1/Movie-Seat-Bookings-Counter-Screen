const boxes = document.querySelectorAll(".box");
const bookedSeatsElement = document.querySelector(".numberOfBookedBoxes");
const remainingSeatsElement = document.querySelector(".numberOfAvailableBoxes");

var availableBoxes = 40;
var equipedBoxes = 0;
update();

[...boxes].forEach(function (box) {
  box.addEventListener("click", () => {
    if (box.classList.contains("boxChecked")) {
      box.classList.remove("boxChecked");
      availableBoxes++;
      equipedBoxes--;
      update();
    } else {
      box.classList.add("boxChecked");
      availableBoxes--;
      equipedBoxes++;
      update();
    }
  });
});

function update() {
  bookedSeatsElement.textContent = equipedBoxes;
  remainingSeatsElement.textContent = availableBoxes;
}
