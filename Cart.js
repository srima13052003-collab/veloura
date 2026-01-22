let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
let total = 0;

cart.forEach(item => {
  total += item.price;

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${item.image}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
  `;

  cartContainer.appendChild(card);
});

document.getElementById("total-price").innerText = `Total: ₹${total}`;

function checkoutUPI() {
  alert("UPI payment will be added next");
}
