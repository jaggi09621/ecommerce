const products = [
  { id: 1, name: "T-Shirt", price: 19.99 },
  { id: 2, name: "Sneakers", price: 64.5 },
  { id: 3, name: "Watch", price: 129.0 },
  { id: 4, name: "Backpack", price: 39.0 },
];

const cart = [];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartPanel = document.getElementById("cartPanel");

document.getElementById("cartBtn").addEventListener("click", () => {
  cartPanel.classList.remove("hidden");
});

document.getElementById("closeCart").addEventListener("click", () => {
  cartPanel.classList.add("hidden");
});

function renderProducts() {
  productGrid.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h4>${product.name}</h4>
      <p>Price: $${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;

    card.querySelector("button").addEventListener("click", () => addToCart(product.id));
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  renderCart();
}

function renderCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

renderProducts();
