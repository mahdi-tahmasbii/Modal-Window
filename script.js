"use strict ";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnopenmodal = document.querySelectorAll(".show-modal");

const openmodal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener("click", openmodal);
}

btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  } else {
    console.log(e);
  }
});
