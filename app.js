import {
  MENU, CORGIS, findItem, addItem, removeItem, itemCount, totalCents,
  formatPrice, isOpen,
} from "./cart.js";

const $ = (id) => document.getElementById(id);

let cart = {};
let corgiIndex = new Date().getDate() % CORGIS.length;

function renderStatus() {
  const open = isOpen(new Date());
  $("status").textContent = open
    ? `● Open now · ${CORGIS.length} corgis on duty`
    : "● Closed · the corgis are asleep";
  $("status").classList.toggle("closed", !open);
}

function renderMenu() {
  $("menu-list").innerHTML = MENU.map((item) => `
    <li class="menu-item">
      <span class="menu-emoji" aria-hidden="true">${item.emoji}</span>
      <div class="menu-body">
        <h3>${item.name}</h3>
        <p>${item.blurb}</p>
      </div>
      <div class="menu-buy">
        <span class="price">${formatPrice(item.price)}</span>
        <button class="button small" data-add="${item.id}"
          aria-label="Add ${item.name} to basket">Add</button>
      </div>
    </li>`).join("");
}

function renderCart() {
  const entries = Object.entries(cart);
  $("cart-list").innerHTML = entries.map(([id, qty]) => {
    const item = findItem(id);
    return `
      <li class="cart-row">
        <span>${item.emoji} ${item.name}</span>
        <span class="qty">
          <button data-remove="${id}" aria-label="Remove one ${item.name}">−</button>
          ${qty}
          <button data-add="${id}" aria-label="Add one ${item.name}">+</button>
        </span>
        <span>${formatPrice(item.price * qty)}</span>
      </li>`;
  }).join("");
  $("cart-empty").hidden = entries.length > 0;
  $("cart-total").textContent = formatPrice(totalCents(cart));
  $("cart-badge").textContent = itemCount(cart);
  $("place-order").disabled = entries.length === 0;
}

function renderCorgi() {
  const corgi = CORGIS[corgiIndex];
  $("cotd-face").style.setProperty("--fur", corgi.fur);
  $("cotd-title").textContent = corgi.name;
  $("cotd-coat").textContent = corgi.coat;
  $("cotd-fact").textContent = `“${corgi.fact}”`;
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const remove = event.target.closest("[data-remove]");
  if (add) cart = addItem(cart, add.dataset.add);
  if (remove) cart = removeItem(cart, remove.dataset.remove);
  if (add || remove) {
    $("confirmation").hidden = true;
    renderCart();
  }
});

$("place-order").addEventListener("click", () => {
  const helper = CORGIS[Math.floor(Math.random() * CORGIS.length)].name;
  const orderNumber = 100 + Math.floor(Math.random() * 900);
  $("confirmation").innerHTML = `
    <strong>Order #${orderNumber} confirmed!</strong>
    ${itemCount(cart)} item(s), ${formatPrice(totalCents(cart))}.
    ${helper} is trotting it over now. 🐾`;
  $("confirmation").hidden = false;
  cart = {};
  renderCart();
});

$("next-corgi").addEventListener("click", () => {
  corgiIndex = (corgiIndex + 1) % CORGIS.length;
  renderCorgi();
});

renderStatus();
renderMenu();
renderCart();
renderCorgi();
