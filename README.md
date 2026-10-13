# Bikas & Bhargavi's South Indian Gruhapravesam Invitation Website
> **మా గృహప్రవేశ ఆహ్వాన పత్రిక** • An elegant, traditional, and modern bilingual Gruhapravesam (Housewarming) invitation website for **Bikas Jena** and **Bhargavi Diddi**.

---

## 🌺 Overview

This web application serves as the digital housewarming invitation for **Bikas & Bhargavi**, honoring South Indian (Telugu) traditions while providing a fast, modern, and accessible digital invitation experience.

- **Event:** Gruhapravesam (Housewarming Ceremony)
- **Couple:** Bikas Jena (B.Tech Mech) & Bhargavi Diddi (B.Tech CSE)
- **Confirmed Date:** Monday, 16 November 2026 (16 నవంబర్ 2026)
- **Languages:** Telugu (తెలుగు) & English
- **Hosting Target:** Render Static Site
- **Reference Wedding Site:** [Bikas & Bhargavi Wedding](https://bikas-bhargavi-wedding.onrender.com/)

---

## 🎨 Traditional Design Identity & Aesthetics

The design uses a curated traditional South Indian palette and temple-inspired motifs:

| Color Element | Hex Code | Traditional Context |
| :--- | :--- | :--- |
| **Deep Maroon** | `#751D2A` | Sacred Kumkum / Sindhoor hue for headers and emphasis |
| **Antique Gold** | `#D6A84F` | Traditional brass lamp, kalash, and ornamental borders |
| **Parchment Ivory** | `#F8F0DE` | Warm textured paper background resembling traditional lagna patrika |
| **Turmeric / Haldi** | `#B77B27` | Auspicious accents, subheadings, and beads |
| **Mango-Leaf Green**| `#386347` | Sacred Toranam leaves welcoming prosperity |

### Cultural Motifs & Micro-Interactions
- **Auspicious Opening:** Sacred *“శ్రీ గణేశాయ నమః”* and *“శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు”* blessing envelope with custom artwork.
- **Mango-Leaf Toranam:** SVG vector toranam with subtly swaying leaves and marigold beads.
- **Brass Diya & Kalash:** Glowing diya flame animations and coconut-kalash sacred emblems.
- **Akshatalu & Petal Shower:** Interactive blessing shower (turmeric rice, gold, and marigold petals via `canvas-confetti`).
- **Devotional Ambient Music:** Classical flute / mangala vaadyam track with accessible play/mute toggle.
- **Typography:** Authentic rendering with `Noto Serif Telugu` & `Noto Sans Telugu` for Telugu, paired with `Cormorant Garamond` & `Inter` for English.

---

## 📁 Source Code Structure

```text
house-warming/
├── public/
│   ├── assets/
│   │   ├── audio/
│   │   │   └── traditional-flute.mp3      # Ambient background instrumental
│   │   └── images/
│   │       ├── couple_together.jpg         # Authentic photo of Bikas & Bhargavi
│   │       ├── groom.jpg                   # Photo of Bikas Jena
│   │       ├── bride.jpg                   # Photo of Bhargavi Diddi
│   │       ├── lord_ganesha.jpg            # Sacred Ganesha artwork
│   │       ├── new_home.jpg                # Architectural housewarming illustration
│   │       ├── homam_ritual.png            # Ritual illustration
│   │       └── mandap_blessing.png         # Sacred mandap illustration
├── src/
│   ├── components/
│   │   ├── OpeningScreen.tsx              # Auspicious card envelope with reveal button
│   │   ├── Navbar.tsx                     # Sticky nav with audio toggle & language switch
│   │   ├── HeroSection.tsx                # Hero with temple arch & live countdown
│   │   ├── InvitationSection.tsx          # Respectful bilingual copy & family signatures
│   │   ├── CeremonySection.tsx            # Pooja schedule with confirmed date & timings
│   │   ├── VenueSection.tsx               # New home showcase & address copy action
│   │   ├── GallerySection.tsx             # Memories gallery with modal lightbox
│   │   ├── BlessingsSection.tsx           # Flower shower, WhatsApp share & calendar invite
│   │   ├── LanguageToggle.tsx             # Accessible bilingual language selector
│   │   └── Decorations.tsx                # Mango Toranam, Brass Diya, Kalash, Kolam SVGs
│   ├── data/
│   │   └── invitation.ts                  # Centralized, strongly-typed event data & translations
│   ├── styles/
│   │   └── theme.css                      # Traditional color tokens & animations
│   ├── App.tsx                            # App coordinator
│   ├── index.css                          # Base reset & font rules
│   └── main.tsx                           # Application entry point
├── index.html                             # SEO metadata, Open Graph tags & Google Fonts
├── vite.config.ts                         # Vite configuration with Tailwind CSS plugin
├── tsconfig.json                          # TypeScript configuration
└── package.json                           # Dependencies & scripts
```

---

## ⚠️ Configurable Placeholders (Pending Family Confirmation)

Per project guidelines, unconfirmed details are never fabricated. All configurable fields are stored in [`src/data/invitation.ts`](src/data/invitation.ts):

| Field | Current Status | Description & Location in Code |
| :--- | :--- | :--- |
| **Auspicious Muhurtham Time** | `isTimeConfirmed: false` | Displayed transparently as *"Timing to be announced upon family confirmation"*. To confirm, update `time` and set `isTimeConfirmed: true` in `ceremonies` array. |
| **Venue Address** | `isConfirmed: false` | Configured as general Rajahmundry / Visakhapatnam region placeholder. Update `venue.name`, `venue.addressLine1`, and `venue.googleMapsUrl`, then set `venue.isConfirmed: true`. |
| **Meal / Prasadam Details** | `isConfirmed: false` | Hidden by default. Set `meal.isConfirmed: true` and specify `meal.timing` once finalized. |
| **Additional Family Elders** | Ready for extension | Add any elder names or special invitations inside `couple.familySignature`. |

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Validate TypeScript & Build:**
   ```bash
   npm run build
   ```

---

## 🌐 Render Deployment Instructions

This repository is optimized for deployment as a **Static Site** on [Render](https://render.com/).

### Deployment Settings on Render:
1. Create a new **Static Site** on the Render dashboard.
2. Connect your Git repository.
3. Configure the following build settings:
   - **Name:** `bikas-bhargavi-gruhapravesam` (or preferred name)
   - **Branch:** `main`
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

---

## 📦 Git Commands for Separate Repository

To initialize this project as an independent Git repository and push to GitHub:

```bash
# 1. Initialize git
git init -b main

# 2. Stage all project files
git add .

# 3. Create initial commit
git commit -m "feat: initial release of Bikas & Bhargavi Gruhapravesam invitation website"

# 4. Link to your new GitHub repository
git remote add origin https://github.com/<your-username>/bikas-bhargavi-gruhapravesam.git

# 5. Push to GitHub
git push -u origin main
```
