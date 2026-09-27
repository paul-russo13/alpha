// Pure menu and cart logic, shared by the page (app.js) and the tests.

export const MENU = [
  { id: "pupuccino", emoji: "☕", name: "Pupuccino Latte", price: 450,
    blurb: "Double espresso, steamed milk and a foam paw print on top." },
  { id: "matcha", emoji: "🍵", name: "Matcha Fluff", price: 525,
    blurb: "Ceremonial matcha whisked until it's as fluffy as a corgi's rear." },
  { id: "croissant", emoji: "🥐", name: "Butt Wiggle Croissant", price: 375,
    blurb: "Heart-shaped, buttery, flaky. Guaranteed to cause a wiggle." },
  { id: "muffin", emoji: "🧁", name: "Stumpy Muffin", price: 325,
    blurb: "Short, sweet and full of blueberries. Just like our legs." },
  { id: "cookie", emoji: "🍪", name: "Paw-print Cookie", price: 250,
    blurb: "Brown butter and chocolate, stamped with a real(ish) paw." },
  { id: "biscuit", emoji: "🦴", name: "Pup Biscuit", price: 200,
    blurb: "Peanut butter treat for the dog you brought. Vet approved." },
];

export const CORGIS = [
  { name: "Biscuit", coat: "Red & white", fur: "#e8883a",
    fact: "Can hear a cheese wrapper being opened from three rooms away." },
  { name: "Waffles", coat: "Tricolor", fur: "#3b2a22",
    fact: "Herds the queue into a neat line, whether you like it or not." },
  { name: "Mochi", coat: "Sable", fur: "#b86a2e",
    fact: "Official greeter. Accepts payment in belly rubs only." },
  { name: "Pancake", coat: "Fawn", fur: "#d9a066",
    fact: "Has napped in every single chair in the cafe. Twice." },
];

export function findItem(id) {
  return MENU.find((item) => item.id === id);
}

// A cart is a plain object mapping item id -> quantity. Every function
// returns a new cart so the page can re-render from scratch.
export function addItem(cart, id) {
  if (!findItem(id)) throw new Error(`Unknown menu item: ${id}`);
  return { ...cart, [id]: (cart[id] ?? 0) + 1 };
}

export function removeItem(cart, id) {
  const next = { ...cart };
  if (!next[id]) return next;
  next[id] -= 1;
  if (next[id] === 0) delete next[id];
  return next;
}

export function itemCount(cart) {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

export function totalCents(cart) {
  return Object.entries(cart).reduce(
    (sum, [id, qty]) => sum + findItem(id).price * qty,
    0,
  );
}

export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

export function isOpen(date) {
  const hour = date.getHours();
  return hour >= 7 && hour < 23;
}
