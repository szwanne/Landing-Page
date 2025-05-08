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
