import { test } from "node:test";
import assert from "node:assert/strict";
import {
  MENU, addItem, removeItem, itemCount, totalCents, formatPrice, isOpen,
} from "../cart.js";

test("adding items increases quantity and total", () => {
  let cart = {};
  cart = addItem(cart, "pupuccino");
  cart = addItem(cart, "pupuccino");
  cart = addItem(cart, "muffin");
  assert.deepEqual(cart, { pupuccino: 2, muffin: 1 });
  assert.equal(itemCount(cart), 3);
  assert.equal(totalCents(cart), 450 * 2 + 325);
});

test("removing the last one drops the item from the basket", () => {
  const cart = removeItem({ cookie: 1, biscuit: 2 }, "cookie");
  assert.deepEqual(cart, { biscuit: 2 });
  assert.deepEqual(removeItem({}, "cookie"), {});
});

test("cart functions never mutate the original basket", () => {
  const original = { matcha: 1 };
  addItem(original, "matcha");
  removeItem(original, "matcha");
  assert.deepEqual(original, { matcha: 1 });
});

test("unknown menu items are rejected", () => {
  assert.throws(() => addItem({}, "cat-food"), /Unknown menu item/);
});

test("prices are shown in dollars", () => {
  assert.equal(formatPrice(0), "$0.00");
  assert.equal(formatPrice(450), "$4.50");
  assert.equal(formatPrice(1234), "$12.34");
});

test("every menu item has a unique id and a positive price", () => {
  const ids = MENU.map((item) => item.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const item of MENU) assert.ok(item.price > 0, item.name);
});

test("cafe is open 7am to 11pm", () => {
  const at = (hour) => new Date(2026, 8, 27, hour, 30);
  assert.equal(isOpen(at(6)), false);
  assert.equal(isOpen(at(7)), true);
  assert.equal(isOpen(at(22)), true);
  assert.equal(isOpen(at(23)), false);
});
