# Corgi Cafe 🐶☕

A small website for Corgi Cafe: a menu you can order from, a live basket, and a rotating Corgi of the Day.

Built by an AI agent in Aether as a live demo. The talk track for presenting it is in [DEMO.md](DEMO.md).

## Run it

```bash
npm start      # serves the site at http://localhost:8080
npm test       # runs the basket and pricing tests
```

No install step: it's plain HTML, CSS and JavaScript, and the tests use Node's built-in test runner.

## Files

- `index.html`: page layout and the corgi drawing
- `styles.css`: look and feel
- `cart.js`: menu, prices and basket maths (shared by the page and the tests)
- `app.js`: wires the page up to `cart.js`
- `tests/cart.test.js`: automatic checks for the basket maths and opening hours
