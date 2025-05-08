//Selecting the elements of interest to be stored in variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnReserveNow = document.querySelector(".reserve-now");
const btnCloseModal = document.querySelector(".close-modal");

// Adding event handlers to the reserve button to show the modal window when clicked

btnReserveNow.addEventListener("click", function () {
  modal.classList.remove("hidden"); //This will remove the hidden class name and show the modal window
  overlay.classList.remove("hidden"); //This will remove the hidden class name and show the overlay window
});

// Adding event handlers to the close button to show the modal window when clicked

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden"); //This will hide the modal window when the close btn is pressed
  overlay.classList.add("hidden"); //This will hide the overlay window when the close btn is pressed
});

// Adding event handlers to the overlay window to show the modal window when clicked

overlay.addEventListener("click", function () {
  modal.classList.add("hidden"); //This will hide the modal window when the close btn is pressed
  overlay.classList.add("hidden"); //This will hide the overlay window when the close btn is pressed
});

///Adding the press key event, when clicking an escape button the modal window should be removed

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
