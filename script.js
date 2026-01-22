function loadSingleProduct(containerId, folder, image, title, link) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <a href="${link}" class="category-card">
      <img src="images/${folder}/${image}" alt="${title}">
      <h3>${title}</h3>
    </a>
  `;

  container.appendChild(card);
}

/* HOME PAGE – ONLY ONE IMAGE PER CATEGORY */
loadSingleProduct(
  "chains-container",
  "chains",
  "Chain_49_01.jpeg",
  "Veloura Necklace",
  "Necklace.html"
);

loadSingleProduct(
  "bracelets-container",
  "bracelets",
  "bracelet_199_01.jpeg",
  "Veloura Bracelet",
  "Bracelets.html"
);

loadSingleProduct(
  "earrings-container",
  "earrings",
  "earring_59_02.jpeg",
  "Veloura Earrings",
  "Earrings.html"
);
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} added to cart`);
}
