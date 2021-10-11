const cshemeSvg = document.querySelector(".csheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 40;
let totalPrice = 0;

cshemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) 
    event.target.classList.toggle("active");
    let totalSeats = cshemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
});
