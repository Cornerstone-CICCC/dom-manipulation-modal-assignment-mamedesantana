const button = document.querySelector("#openModal");
const modal = document.querySelector("#modal");

button.addEventListener("click", () => {

  modal.classList.remove("invisible");

  setTimeout(() => {
    modal.classList.add("invisible");
  }, 5000);

});

document.addEventListener("keyup", (event) => {

  if (event.key === "Escape") {
    modal.classList.add("invisible");
  }

});
