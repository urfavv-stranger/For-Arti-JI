# 🎂 Happy Birthday Arti - Romantic Celebration Website

A romantic, interactive, luxury-styled birthday website crafted specially for **Arti**.

Designed with responsive glassmorphism, floating starry particles, interactive birthday cake with blowable candles, polaroid memory gallery with 3D tilt, shufflable love notes, audio player, and a surprise gift box reveal.

---

## 🌟 Features Included

1. **Magical Ambient Atmosphere**:
   - Floating romantic sparkles, glowing stars, and drifting hearts using HTML5 Canvas.
   - Deep twilight & rose-gold glassmorphism styling.
2. **Interactive Birthday Cake Ceremony**:
   - Multi-tier illustrated birthday cake with 5 flickering candle flames.
   - Click individual candles to blow them out, or click **"Blow Out All Candles 🌬️"**.
   - Sound synthesis (built-in Web Audio chime without needing audio files) + festive confetti fireworks blast!
3. **Polaroid Memory Lane Gallery**:
   - Realistic polaroid photo cards with tape details and romantic captions.
   - 3D perspective tilt effect on mouse movement and touch.
   - Click to zoom into high-res modal preview.
4. **"Reasons Why I Adore You" Carousel**:
   - Browsable deck with interactive next/prev buttons and indicator dots.
5. **Sealed Romantic Love Letter**:
   - Wax seal envelope with customized personal letter. Clicking the seal showers the screen with love confetti.
6. **Surprise Gift Box / VIP Birthday Coupon**:
   - An interactive gift box that unties to reveal a special birthday surprise.
7. **Floating Ambient Music Player**:
   - Romantic acoustic melody player with spinning vinyl animation, play/pause controls, and graceful browser autoplay handling.
8. **100% Mobile & Desktop Responsive**:
   - Looks breathtaking on iPhones, Android devices, tablets, and laptops.

---

## 🚀 How to Open & Preview

### Option 1: Instant Local Preview (Zero Setup)
Simply navigate to:
```
C:\Users\DELL\.gemini\antigravity\scratch\arti-birthday\
```
And double-click **`index.html`** in File Explorer to open it in your browser (Google Chrome, Microsoft Edge, Brave, etc.)!

### Option 2: Run a Local Server
If you want to run a local dev server with Node:
```powershell
cd C:\Users\DELL\.gemini\antigravity\scratch\arti-birthday
npx serve
```
Then visit `http://localhost:3000`.

---

## 🎨 How to Personalize Everything (`config.js`)

All customization is centralized in **[`config.js`](./config.js)**. You don't have to touch HTML or CSS!

### 1. Change Dates & Name
Open `config.js` and edit:
```javascript
name: "Arti",
nickname: "My Love", // "Cutie", "Sunshine", "Jaan", etc.
birthdayDate: "2026-10-15T00:00:00", // Year-Month-Day
```

### 2. Replace Photos with Your Real Pictures
Inside `config.js`, update the `memories` array:
```javascript
memories: [
  {
    title: "Our First Trip Together",
    date: "July 2024",
    description: "That unforgettable walk by the beach.",
    image: "assets/trip.jpg" // Put your photos in an assets/ folder or paste image URLs
  },
  // ...
]
```
> **Tip:** You can create an `assets/` folder in the project and drop your favorite pictures of Arti there!

### 3. Customize the Love Letter & Reasons
Edit `letter` and `reasons` directly in `config.js`:
- Write your personal heartfelt memories.
- Add or remove as many "Reasons Why I Adore You" as you like!

### 4. Change the Song
Under `music` in `config.js`, you can provide any direct audio URL or local audio file:
```javascript
music: {
  title: "Her Favorite Song",
  artist: "Artist Name",
  url: "assets/favorite-song.mp3",
  autoPlayPrompt: true
}
```

---

## 🌐 How to Share it Online with Arti (Free & Fast)

To let Arti open the website on her phone anywhere in the world:

### Method A: Deploy with Netlify Drop (30 Seconds, No Code)
1. Go to [netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `arti-birthday` folder into the browser.
3. You immediately get a live link like `https://happy-birthday-arti.netlify.app` that you can text to her!

### Method B: Deploy with Vercel
1. Run `npx vercel` inside the folder or link it to your GitHub repository on [vercel.com](https://vercel.com).

### Method C: GitHub Pages
1. Push the folder to a GitHub repository.
2. In the repository **Settings > Pages**, choose the `main` branch.
3. Your website will be live at `https://yourusername.github.io/arti-birthday`.
