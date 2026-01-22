function loadProducts(containerId, folder, images, title) {
  const container = document.getElementById(containerId);

  images.forEach(image => {
    const price = image.split("_")[1];

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="images/${folder}/${image}">
      <h3>${title}</h3>
      <p>₹${price}</p>
      <button onclick="addToCart('${title}', ${price})">Add to Cart</button>
    `;

    container.appendChild(card);
  });
}

// CHAINS
loadProducts(
  "chains-container",
  "chains",
  ["chain_49_01.jpeg", "chain_49_02.jpeg"],
  "Veloura Chain"
);

// BRACELETS
loadProducts(
  "bracelets-container",
  "bracelets",
  ["bracelet_199_01.jpeg", "bracelet_199_02.jpeg","bracelet_199_03.jpeg","bracelet_199_04.jpeg","bracelet_199_05.jpeg","bracelet_199_06.jpeg","bracelet_199_07.jpeg","bracelet_199_08.jpeg"],
  "Veloura Bracelet"
);

// EARRINGS
loadProducts(
  "earrings-container",
  "earrings",
  [
    "earring_59_01.jpeg",
    "earring_59_02.jpeg",
    "earring_59_03.jpeg",
    "earring_59_04.jpeg",
    "earring_59_05.jpeg",
    "earring_59_06.jpeg",
    "earring_99_01.jpeg"
  ],
  "Veloura Earrings"
);

function addToCart(name, price) {
  alert(`${name} added to cart for ₹${price}`);
}
