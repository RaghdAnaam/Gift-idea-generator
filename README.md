# 🎁 Gift Idea Generator

> A simple, friendly web app that helps you find the perfect gift — even when you have no idea where to start.

---

## 📸 Preview

![Gift Idea Generator screenshot](https://via.placeholder.com/760x400?text=Gift+Idea+Generator+Preview)

---

## ✨ Features

- **Smart filtering** — enter the recipient's age range, interests, occasion, and budget
- **54 curated gift ideas** across 10 categories: Tech, Books, Outdoors, Cooking, Fitness, Art, Gaming, Music, Travel, and Fashion
- **Randomized results** — generates 4–6 matching suggestions every time
- **Save favorites** — heart any idea to save it; favorites persist across browser sessions via `localStorage`
- **No server needed** — 100% frontend, open `index.html` directly in your browser
- **Fully responsive** — works on desktop and mobile

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/gift-idea-generator.git
cd gift-idea-generator
```

### 2. Open the app

Simply open `index.html` in your browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

No build step, no dependencies, no server required.

---

## 🗂️ Project Structure

```
gift-idea-generator/
├── index.html    # App shell — form, results, and saved panel
├── style.css     # All styling — warm palette, card grid, responsive layout
├── app.js        # Gift dataset (54 items), filter logic, save/load favorites
├── .gitignore
└── README.md
```

---

## 🎯 How It Works

1. **Select** the recipient's age range, one or more interests, the occasion, and a budget tier
2. **Click "✨ Generate Gift Ideas"** — the app filters the gift dataset and picks up to 6 matching suggestions at random
3. **Browse the cards** — each card shows the gift name, price range, and a short reason it's a good fit
4. **Save any idea** you like by clicking 🤍 Save — it appears in the **Saved Ideas** panel below and persists even after you close the browser

---

## 🛠️ Customization

### Adding more gift ideas

Edit the `GIFTS` array in [`app.js`](./app.js). Each entry follows this shape:

```js
{
  id: 55,
  name: "My New Gift",
  emoji: "🎁",
  price: [1, 2],            // 0=<$25  1=$25-$50  2=$50-$100  3=$100+
  ages: ["adult", "teen"],  // child | teen | adult | senior
  interests: ["tech"],      // tech | books | outdoors | cooking | fitness | art | gaming | music | travel | fashion
  occasions: ["birthday"],  // birthday | holiday | anniversary | graduation | justbecause
  priceLabel: "$30–$80",
  reason: "A short, friendly explanation of why this is a great gift.",
}
```

### Changing the color palette

All colors are CSS custom properties at the top of [`style.css`](./style.css):

```css
:root {
  --accent:  #e8612a;   /* primary orange */
  --saved:   #e84a6f;   /* saved/heart pink */
  --bg:      #fff8f2;   /* warm page background */
  /* … */
}
```

---

## 📦 Technologies

| Technology | Purpose |
|------------|---------|
| HTML5      | App structure and semantics |
| CSS3       | Styling, grid layout, responsive design |
| Vanilla JS | Gift data, filter logic, DOM manipulation |
| localStorage | Persisting saved favorites |

No frameworks. No build tools. No dependencies.

---

## 🤝 Contributing

Contributions are welcome! To add gift ideas, fix bugs, or improve the UI:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Commit your changes: `git commit -m "Add: more gift ideas for seniors"`
4. Push to the branch: `git push origin feature/my-improvement`
5. Open a Pull Request

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

*Made with ❤️ · Gift Idea Generator*
