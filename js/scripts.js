const cshemeSvg = document.querySelector(".csheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 40;
let totalPrice = 0;

cshemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) 
    event.target.classList.toggle("active");
    let totalSeats = cshemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("is-open");
});

