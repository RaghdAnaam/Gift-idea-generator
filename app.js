// ── Gift Dataset ─────────────────────────────────────────────────────────────
// Each gift: { id, name, emoji, price (0–3 matching budget tiers), ages[], interests[], occasions[], priceLabel, reason }
// price tiers: 0 = under $25 | 1 = $25–$50 | 2 = $50–$100 | 3 = $100+

const GIFTS = [
  // ── Tech ────────────────────────────────────────────────────────────────────
  { id:1,  name:"Wireless Earbuds",        emoji:"🎧", price:[1,2],  ages:["teen","adult","senior"], interests:["tech","music"],          occasions:["birthday","holiday","graduation","justbecause"], priceLabel:"$30–$80",  reason:"Great for music lovers on the go." },
  { id:2,  name:"Smart LED Strip Lights",  emoji:"💡", price:[0,1],  ages:["teen","adult"],          interests:["tech","gaming","art"],   occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$40",  reason:"Instantly transforms any room's vibe." },
  { id:3,  name:"Portable Charger",        emoji:"🔋", price:[0,1],  ages:["teen","adult","senior"], interests:["tech","travel"],        occasions:["birthday","holiday","graduation","justbecause"], priceLabel:"$20–$45",  reason:"Always handy — everyone forgets to charge." },
  { id:4,  name:"Mechanical Keyboard",     emoji:"⌨️", price:[2,3],  ages:["teen","adult"],          interests:["tech","gaming"],        occasions:["birthday","holiday","graduation"],               priceLabel:"$60–$150", reason:"A satisfying upgrade for any desk setup." },
  { id:5,  name:"Smart Home Hub",          emoji:"🏠", price:[2,3],  ages:["adult","senior"],        interests:["tech"],                 occasions:["birthday","holiday","anniversary"],              priceLabel:"$50–$120", reason:"Makes daily routines a little more magical." },
  { id:6,  name:"E-Reader (Kindle-style)", emoji:"📱", price:[2,3],  ages:["teen","adult","senior"], interests:["tech","books"],         occasions:["birthday","holiday","graduation"],               priceLabel:"$80–$140", reason:"Thousands of books, one slim device." },
  { id:7,  name:"Mini Bluetooth Speaker",  emoji:"🔊", price:[1,2],  ages:["child","teen","adult"],  interests:["tech","music","outdoors"],occasions:["birthday","holiday","justbecause"],             priceLabel:"$30–$70",  reason:"Big sound in a pocket-sized package." },
  { id:8,  name:"USB Desk Fan",            emoji:"🌀", price:[0],    ages:["teen","adult"],          interests:["tech"],                 occasions:["justbecause"],                                  priceLabel:"Under $20", reason:"A quiet upgrade for any workspace." },

  // ── Books ────────────────────────────────────────────────────────────────────
  { id:9,  name:"Best-Seller Novel",       emoji:"📖", price:[0],    ages:["teen","adult","senior"], interests:["books"],                occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$20",  reason:"A personal, thoughtful gift they'll enjoy in quiet moments." },
  { id:10, name:"Coffee-Table Art Book",   emoji:"🎨", price:[1,2],  ages:["adult","senior"],        interests:["books","art"],          occasions:["birthday","holiday","anniversary"],              priceLabel:"$35–$80",  reason:"A gorgeous display piece they'll return to again and again." },
  { id:11, name:"Cookbook",               emoji:"🍳", price:[0,1],  ages:["adult","senior"],        interests:["books","cooking"],      occasions:["birthday","holiday","anniversary","justbecause"],priceLabel:"$20–$45",  reason:"Inspires new meals and kitchen adventures." },
  { id:12, name:"Children's Book Set",    emoji:"📚", price:[0,1],  ages:["child"],                 interests:["books"],                occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$35",  reason:"Sparks imagination and a lifelong love of reading." },
  { id:13, name:"Travel Journal",         emoji:"✏️", price:[0],    ages:["teen","adult"],          interests:["books","travel","art"], occasions:["graduation","birthday","justbecause"],           priceLabel:"$12–$25",  reason:"Perfect for capturing adventures big and small." },

  // ── Outdoors ─────────────────────────────────────────────────────────────────
  { id:14, name:"Hiking Day Pack",         emoji:"🎒", price:[1,2],  ages:["teen","adult"],          interests:["outdoors","fitness","travel"],occasions:["birthday","graduation","justbecause"],      priceLabel:"$35–$90",  reason:"Ready for any trail, any weekend." },
  { id:15, name:"Insulated Water Bottle",  emoji:"💧", price:[0,1],  ages:["child","teen","adult","senior"],interests:["outdoors","fitness"],occasions:["birthday","holiday","graduation","justbecause"],priceLabel:"$15–$40", reason:"Keeps drinks cold (or hot) on any adventure." },
  { id:16, name:"Hammock",                emoji:"🌿", price:[1,2],  ages:["teen","adult"],          interests:["outdoors","travel"],    occasions:["birthday","graduation","justbecause"],           priceLabel:"$30–$70",  reason:"Instant relaxation anywhere with two trees." },
  { id:17, name:"Camping Lantern",        emoji:"🏕️", price:[0,1],  ages:["child","teen","adult"],  interests:["outdoors"],             occasions:["birthday","holiday","justbecause"],              priceLabel:"$18–$45",  reason:"Bright, reliable light for any campsite." },
  { id:18, name:"National Parks Pass",    emoji:"🏔️", price:[1],    ages:["teen","adult","senior"], interests:["outdoors","travel"],    occasions:["birthday","anniversary","graduation"],           priceLabel:"~$80/year",reason:"Unlimited access to America's greatest landscapes." },

  // ── Cooking ──────────────────────────────────────────────────────────────────
  { id:19, name:"Cast Iron Skillet",       emoji:"🍳", price:[1,2],  ages:["adult","senior"],        interests:["cooking"],              occasions:["birthday","holiday","anniversary"],              priceLabel:"$30–$80",  reason:"A kitchen heirloom that only gets better with time." },
  { id:20, name:"Spice Collection Set",    emoji:"🌶️", price:[0,1],  ages:["adult","senior"],        interests:["cooking"],              occasions:["birthday","holiday","justbecause"],              priceLabel:"$20–$45",  reason:"Elevates every dish — perfect for the home chef." },
  { id:21, name:"Cooking Class (Online)",  emoji:"👨‍🍳", price:[1,2],  ages:["teen","adult","senior"], interests:["cooking"],              occasions:["birthday","holiday","anniversary","graduation"], priceLabel:"$30–$80",  reason:"An experience and skill they'll use forever." },
  { id:22, name:"Herb Growing Kit",        emoji:"🌱", price:[0,1],  ages:["adult","senior"],        interests:["cooking","outdoors"],   occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$35",  reason:"Fresh herbs on the windowsill — always handy." },
  { id:23, name:"Pasta Making Set",        emoji:"🍝", price:[1,2],  ages:["adult"],                 interests:["cooking"],              occasions:["birthday","anniversary","holiday"],              priceLabel:"$35–$70",  reason:"Turns dinner into a fun, hands-on experience." },

  // ── Fitness ──────────────────────────────────────────────────────────────────
  { id:24, name:"Resistance Bands Set",    emoji:"💪", price:[0],    ages:["teen","adult","senior"], interests:["fitness"],              occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$25",  reason:"Versatile workout anywhere — gym or living room." },
  { id:25, name:"Foam Roller",            emoji:"🧘", price:[0,1],  ages:["teen","adult","senior"], interests:["fitness"],              occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$35",  reason:"The recovery tool every active person needs." },
  { id:26, name:"Fitness Tracker",        emoji:"⌚", price:[2,3],  ages:["teen","adult","senior"], interests:["fitness","tech"],       occasions:["birthday","holiday","graduation"],               priceLabel:"$50–$150", reason:"Motivates daily movement with real data." },
  { id:27, name:"Yoga Mat",              emoji:"🧘", price:[0,1],  ages:["teen","adult","senior"], interests:["fitness"],              occasions:["birthday","holiday","justbecause"],              priceLabel:"$20–$50",  reason:"Perfect for yoga, stretching, or any floor workout." },
  { id:28, name:"Jump Rope",             emoji:"🪢", price:[0],    ages:["child","teen","adult"],  interests:["fitness","outdoors"],   occasions:["birthday","justbecause"],                        priceLabel:"Under $20", reason:"Simple, effective cardio — anywhere." },

  // ── Art & Craft ───────────────────────────────────────────────────────────────
  { id:29, name:"Watercolor Paint Set",    emoji:"🎨", price:[0,1],  ages:["child","teen","adult","senior"],interests:["art"],           occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$40",  reason:"Opens up a relaxing, creative hobby." },
  { id:30, name:"Sketchbook Bundle",       emoji:"✏️", price:[0],    ages:["child","teen","adult"],  interests:["art"],                 occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$20",  reason:"A blank canvas for any creative mind." },
  { id:31, name:"Embroidery Starter Kit",  emoji:"🧵", price:[0,1],  ages:["teen","adult","senior"], interests:["art"],                 occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$35",  reason:"Calming, meditative, and produces beautiful results." },
  { id:32, name:"Pottery Class (Local)",   emoji:"🏺", price:[2,3],  ages:["teen","adult","senior"], interests:["art"],                 occasions:["birthday","anniversary","justbecause"],          priceLabel:"$60–$120", reason:"A memorable, hands-on experience to treasure." },
  { id:33, name:"Adult Coloring Book Set", emoji:"🖍️", price:[0],    ages:["adult","senior"],        interests:["art"],                 occasions:["birthday","holiday","justbecause"],              priceLabel:"$12–$22",  reason:"Relaxing, creative, and surprisingly addictive." },

  // ── Gaming ────────────────────────────────────────────────────────────────────
  { id:34, name:"Board Game",             emoji:"🎲", price:[0,1],  ages:["child","teen","adult","senior"],interests:["gaming"],         occasions:["birthday","holiday","justbecause"],              priceLabel:"$20–$45",  reason:"A great way to bring people together." },
  { id:35, name:"Card Game (Fun/Party)",   emoji:"🃏", price:[0],    ages:["teen","adult"],          interests:["gaming"],              occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$25",  reason:"Perfect for game nights — endlessly replayable." },
  { id:36, name:"Gaming Headset",         emoji:"🎮", price:[2,3],  ages:["teen","adult"],          interests:["gaming","tech","music"],occasions:["birthday","holiday","graduation"],               priceLabel:"$60–$150", reason:"Immersive audio for the serious gamer." },
  { id:37, name:"Gift Card (Game Store)", emoji:"🎁", price:[0,1,2],ages:["teen","adult"],          interests:["gaming","tech"],        occasions:["birthday","holiday","graduation","justbecause"], priceLabel:"$20–$100", reason:"Lets them pick exactly what they want to play next." },
  { id:38, name:"Puzzle (1000 pieces)",   emoji:"🧩", price:[0],    ages:["child","teen","adult","senior"],interests:["gaming","art"],  occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$25",  reason:"A relaxing offline challenge for any age." },

  // ── Music ─────────────────────────────────────────────────────────────────────
  { id:39, name:"Vinyl Record",           emoji:"🎵", price:[0,1],  ages:["teen","adult","senior"], interests:["music"],               occasions:["birthday","holiday","anniversary","justbecause"], priceLabel:"$15–$35",  reason:"A tangible, personal music gift they'll display." },
  { id:40, name:"Ukulele",               emoji:"🪗", price:[1,2],  ages:["child","teen","adult"],  interests:["music","art"],          occasions:["birthday","holiday","graduation"],               priceLabel:"$40–$90",  reason:"The friendliest instrument to pick up and play." },
  { id:41, name:"Music Streaming Sub",    emoji:"🎶", price:[0,1],  ages:["teen","adult","senior"], interests:["music","tech"],        occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$50",  reason:"A year of unlimited music — always appreciated." },
  { id:42, name:"Concert Tickets",        emoji:"🎤", price:[2,3],  ages:["teen","adult","senior"], interests:["music"],               occasions:["birthday","anniversary","graduation"],           priceLabel:"$60–$200+",reason:"An unforgettable live experience." },

  // ── Travel ────────────────────────────────────────────────────────────────────
  { id:43, name:"Packing Cubes Set",      emoji:"🧳", price:[0,1],  ages:["teen","adult","senior"], interests:["travel"],              occasions:["birthday","graduation","justbecause"],           priceLabel:"$20–$45",  reason:"Every frequent traveler's secret weapon." },
  { id:44, name:"Scratch-Off World Map",   emoji:"🗺️", price:[0,1],  ages:["teen","adult","senior"], interests:["travel"],              occasions:["birthday","holiday","anniversary"],              priceLabel:"$20–$40",  reason:"A beautiful way to track adventures around the globe." },
  { id:45, name:"Travel Neck Pillow",     emoji:"😴", price:[0],    ages:["adult","senior"],        interests:["travel"],              occasions:["birthday","justbecause"],                        priceLabel:"$15–$30",  reason:"Makes long flights so much more bearable." },
  { id:46, name:"Universal Adapter",      emoji:"🔌", price:[1],    ages:["teen","adult","senior"], interests:["travel","tech"],       occasions:["birthday","graduation","justbecause"],           priceLabel:"$25–$45",  reason:"An essential for any international traveler." },

  // ── Fashion ──────────────────────────────────────────────────────────────────
  { id:47, name:"Personalized Jewelry",   emoji:"💎", price:[1,2,3],ages:["teen","adult","senior"], interests:["fashion"],             occasions:["birthday","anniversary","graduation","holiday"],  priceLabel:"$30–$120", reason:"Meaningful and wearable — a lasting keepsake." },
  { id:48, name:"Cozy Socks Set",         emoji:"🧦", price:[0],    ages:["child","teen","adult","senior"],interests:["fashion"],       occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$20",  reason:"Comfort + style — everyone loves great socks." },
  { id:49, name:"Silk Sleep Mask",        emoji:"😴", price:[0,1],  ages:["teen","adult","senior"], interests:["fashion"],             occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$40",  reason:"A luxurious little self-care upgrade." },
  { id:50, name:"Tote Bag (Custom)",      emoji:"👜", price:[0,1],  ages:["teen","adult"],          interests:["fashion","art"],       occasions:["birthday","graduation","justbecause"],           priceLabel:"$15–$40",  reason:"Practical, stylish, and endlessly usable." },

  // ── Kids ──────────────────────────────────────────────────────────────────────
  { id:51, name:"LEGO Set",              emoji:"🧱", price:[0,1,2],ages:["child","teen"],          interests:["gaming","art","tech"],  occasions:["birthday","holiday","justbecause"],              priceLabel:"$20–$80",  reason:"Timeless creativity for every age." },
  { id:52, name:"Art & Craft Supply Kit", emoji:"🎨", price:[0,1],  ages:["child"],                 interests:["art"],                 occasions:["birthday","holiday","justbecause"],              priceLabel:"$15–$40",  reason:"Hours of creative fun — mess included." },
  { id:53, name:"Science Experiment Kit", emoji:"🔬", price:[0,1],  ages:["child","teen"],          interests:["tech"],                occasions:["birthday","holiday","justbecause"],              priceLabel:"$20–$45",  reason:"Makes learning hands-on and genuinely exciting." },
  { id:54, name:"Stuffed Animal",         emoji:"🐻", price:[0],    ages:["child"],                 interests:["art"],                 occasions:["birthday","holiday","justbecause"],              priceLabel:"$10–$25",  reason:"A soft, cuddly friend that lasts years." },
];

const BUDGET_LABELS = ["Under $25", "$25–$50", "$50–$100", "$100+"];

// ── State ─────────────────────────────────────────────────────────────────────
const state = {
  age:       null,
  interests: new Set(),
  occasion:  null,
  budget:    0,
};

let savedIds = JSON.parse(localStorage.getItem("giftSavedIds") || "[]");

// ── DOM refs ──────────────────────────────────────────────────────────────────
const budgetRange    = document.getElementById("budgetRange");
const budgetLabel    = document.getElementById("budgetLabel");
const giftForm       = document.getElementById("giftForm");
const resultsSection = document.getElementById("resultsSection");
const resultsMeta    = document.getElementById("resultsMeta");
const cardGrid       = document.getElementById("cardGrid");
const savedSection   = document.getElementById("savedSection");
const savedGrid      = document.getElementById("savedGrid");

// ── Tag interaction ───────────────────────────────────────────────────────────
document.querySelectorAll(".tag").forEach(btn => {
  btn.addEventListener("click", () => {
    const { group, value } = btn.dataset;
    if (group === "age" || group === "occasion") {
      // single-select
      document.querySelectorAll(`.tag[data-group="${group}"]`).forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      state[group] = value;
    } else {
      // multi-select (interests)
      btn.classList.toggle("active");
      if (btn.classList.contains("active")) {
        state.interests.add(value);
      } else {
        state.interests.delete(value);
      }
    }
  });
});

// ── Budget slider ─────────────────────────────────────────────────────────────
budgetRange.addEventListener("input", () => {
  state.budget = parseInt(budgetRange.value, 10);
  budgetLabel.textContent = BUDGET_LABELS[state.budget];
});

// ── Form submit ───────────────────────────────────────────────────────────────
giftForm.addEventListener("submit", e => {
  e.preventDefault();
  generateIdeas();
});

function generateIdeas() {
  // Filter
  let matches = GIFTS.filter(g => {
    const ageOk      = !state.age      || g.ages.includes(state.age);
    const occasionOk = !state.occasion || g.occasions.includes(state.occasion);
    const budgetOk   = g.price.includes(state.budget);
    const interestOk = state.interests.size === 0
      || [...state.interests].some(i => g.interests.includes(i));
    return ageOk && occasionOk && budgetOk && interestOk;
  });

  // Shuffle & take up to 6
  matches = shuffle(matches).slice(0, 6);

  // Render
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });

  if (matches.length === 0) {
    resultsMeta.textContent = "";
    cardGrid.innerHTML = `<p class="empty">No matches found — try adjusting your filters!</p>`;
    return;
  }

  const filterDesc = buildFilterDesc();
  resultsMeta.textContent = `${matches.length} ideas found${filterDesc ? " for " + filterDesc : ""}`;
  cardGrid.innerHTML = matches.map(g => renderCard(g, false)).join("");
  attachCardActions(cardGrid, false);
}

// ── Card renderer ─────────────────────────────────────────────────────────────
function renderCard(gift, isSaved) {
  const alreadySaved = savedIds.includes(gift.id);
  const saveBtn = isSaved
    ? `<button class="btn-remove" data-id="${gift.id}">✕ Remove</button>`
    : `<button class="btn-save ${alreadySaved ? "saved" : ""}" data-id="${gift.id}">
         ${alreadySaved ? "❤️ Saved" : "🤍 Save"}
       </button>`;

  return `
    <div class="card" data-id="${gift.id}">
      <div class="card-emoji">${gift.emoji}</div>
      <div class="card-name">${gift.name}</div>
      <div class="card-price">${gift.priceLabel}</div>
      <div class="card-reason">${gift.reason}</div>
      <div class="card-actions">${saveBtn}</div>
    </div>`;
}

// ── Card actions ──────────────────────────────────────────────────────────────
function attachCardActions(container, isSaved) {
  container.querySelectorAll(".btn-save:not(.saved)").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id, 10);
      if (!savedIds.includes(id)) {
        savedIds.push(id);
        persist();
        btn.textContent = "❤️ Saved";
        btn.classList.add("saved");
        renderSaved();
      }
    });
  });

  container.querySelectorAll(".btn-remove").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = parseInt(btn.dataset.id, 10);
      savedIds = savedIds.filter(s => s !== id);
      persist();
      renderSaved();
      // Update the matching card in results grid if visible
      const resultCard = cardGrid.querySelector(`.btn-save[data-id="${id}"]`);
      if (resultCard) {
        resultCard.textContent = "🤍 Save";
        resultCard.classList.remove("saved");
        attachCardActions(cardGrid, false);
      }
    });
  });
}

// ── Saved panel ───────────────────────────────────────────────────────────────
function renderSaved() {
  const items = GIFTS.filter(g => savedIds.includes(g.id));
  if (items.length === 0) {
    savedSection.hidden = true;
    return;
  }
  savedSection.hidden = false;
  savedGrid.innerHTML = items.map(g => renderCard(g, true)).join("");
  attachCardActions(savedGrid, true);
}

function persist() {
  localStorage.setItem("giftSavedIds", JSON.stringify(savedIds));
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildFilterDesc() {
  const parts = [];
  if (state.age)             parts.push({ child:"a child", teen:"a teen", adult:"an adult", senior:"a senior" }[state.age]);
  if (state.interests.size)  parts.push([...state.interests].join(" / "));
  if (state.occasion)        parts.push(state.occasion);
  return parts.join(", ");
}

// ── Init: render any saved ideas from localStorage ────────────────────────────
renderSaved();
