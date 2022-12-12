const sliders = document.querySelectorAll(".slide");

for (let slider of sliders) {
  slider.addEventListener("click", (event) => {
    removeActiveClass();
    event.target.classList.add("active");
  });
}

function removeActiveClass() {
  sliders.forEach((slider) => slider.classList.remove("active"));
}
