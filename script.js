//Selecting the elements of interest to be stored in variables
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnReserveNow = document.querySelector(".reserve-now");
const btnCloseModal = document.querySelector(".close-modal");
const btnSubmitModal = document.querySelector(".submit_form");
const form = document.querySelector(".x");
const response = document.querySelector(".message");
// Adding event handlers to the reserve button to show the modal window when clicked

btnReserveNow.addEventListener("click", function () {
  modal.classList.remove("hidden"); //This will remove the hidden class name and show the modal window
  overlay.classList.remove("hidden"); //This will remove the hidden class name and show the overlay window
  response.classList.add("hidden"); //This should remove the confirmation messsage
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

// Adding an event handler when you click the submit reservation form, a successful message should pop

btnSubmitModal.addEventListener("click", function () {
  form.classList.add("hidden");
  response.classList.remove("hidden");
});
