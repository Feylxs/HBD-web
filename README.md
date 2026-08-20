# 🎂 A Digital Birthday Letter - Website Surat Ulang Tahun Interaktif

A beautifully crafted interactive birthday letter website built with React, GSAP, and Lenis. Experience elegant, romantic aesthetics combined with delightful micro-interactions that create an unforgettable digital celebration.

---

## ✨ Features

### 🔒 Access Control System
- Password-protected landing page
- Only authorized guests can access the content
- Secure and personalized experience

### ✉️ Opening Envelope Animation
- Smooth 3D envelope opening animation
- Elegant transition to main content

### 🌊 Smooth Scrolling
- Lenis integration for premium, buttery-smooth scrolling experience
- Physics-based scroll behavior

### 📊 Scroll Progress Bar
- Visual progress indicator at the top of the page
- Fills proportionally as user scrolls

### 🛤️ Interactive Timeline (Our Story)
- Animated journey timeline with dynamic color fill (gold-pink gradient)
- Illuminated nodes/points that activate while scrolling
- Storytelling experience that reveals with each scroll

### 🍾 Message in a Bottle
- Interactive bottle component
- Click to reveal cork animation
- Letter scroll out effect powered by GSAP

### 📸 Lightbox Gallery
- Polaroid-style photo grid
- Spotlight cursor effect for interactivity
- Click to view photos in fullscreen lightbox

### 🎉 CSS 3D Cake & Candles
- Pure CSS 3D rendered birthday cake
- Interactive candles that can be blown out one by one
- Detailed animation sequences

### 🎵 Spotify Embed
- Integrated Spotify player for theme song
- No copyright concerns with streaming embed
- Direct playback from Spotify platform

### 🌸 Decorative Particles
- Falling cherry blossom effects
- Larger, more visible particles
- Adds romantic ambiance

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | React (Vite) |
| **Animations** | GSAP (ScrollTrigger, Timeline) |
| **Smooth Scrolling** | Lenis (@studio-freight/lenis) |
| **Styling** | CSS (Global, Variables, Inline Styles) |
| **UI Inspiration** | ReactBits (Spotlight Card, Animated Gradient Text) |
| **Build Tool** | Vite |

---

## 📁 Project Structure

```
src/
├── App.jsx                          # Main application file
├── styles/
│   └── GlobalStyles.css             # Global CSS, keyframes, helper classes
├── constants/
│   └── theme.js                     # Color tokens & theme variables
├── hooks/
│   └── useSmoothScroll.js           # Custom hook for GSAP & Lenis
└── components/
    ├── Envelope.jsx                 # Opening envelope animation
    ├── MessageBottle.jsx            # Message bottle with scroll effect
    ├── Timeline.jsx                 # "Our Story" timeline component
    ├── Gallery.jsx                  # Photo gallery with lightbox
    ├── Cake.jsx                     # Interactive birthday cake
    ├── Petals.jsx                   # Falling particle effects
    ├── SectionHeader.jsx            # Section title component
    ├── SpotlightCard.jsx            # Cursor-following glow effect card
    └── ScrollProgress.jsx           # Top progress bar indicator

public/
└── images/
    ├── photo-1.jpg
    ├── photo-2.jpg
    ├── photo-3.jpg
    ├── photo-4.jpg
    └── photo-5.jpg

Note: Authentication and security components are not included in this public structure.
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Feylxs/HBD-web
   cd digital-birthday-letter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 🛠️ Customization Guide

### 📝 Change Message Content (Message Bottle)

1. Open `src/components/MessageBottle.jsx`
2. Find the variable: `const fullText = ...`
3. Replace with your custom message
4. The animation will automatically apply to your new text

### 📸 Replace Gallery Photos

1. Prepare 5 photos (any resolution, preferably square)
2. Place them in the `public/images/` folder
3. Rename files in sequence:
   - `photo-1.jpg`
   - `photo-2.jpg`
   - `photo-3.jpg`
   - `photo-4.jpg`
   - `photo-5.jpg`

4. **(Optional)** Update photo captions in `src/components/Gallery.jsx`

### 🎵 Change Theme Song (Spotify)

1. Find a song on Spotify and click "Share" → "Embed"
2. Copy the embed link
3. Open `src/App.jsx`
4. Find the section: `{/* LAGU TEMA (SPOTIFY) */}`
5. Replace the `src` attribute with your new Spotify embed URL:
   ```jsx
   <iframe 
     src="https://open.spotify.com/embed/track/YOUR_TRACK_ID" 
     ...
   />
   ```

### 🎨 Customize Theme Colors

1. Open `src/constants/theme.js`
2. Modify HEX color codes:
   ```javascript
   export const colors = {
     primary: '#FFD700',    // Change gold
     accent: '#FF69B4',     // Change pink
     // ... other colors
   }
   ```
3. Colors automatically update throughout the site via CSS variables

---

## 🎯 Key Components Explained

### Envelope Component
- Handles initial page reveal
- 3D CSS transform animations
- Triggered on page load or user interaction

### Timeline Component
- Scroll-triggered animations
- Uses GSAP ScrollTrigger for performance
- Color fill follows scroll progress

### Message Bottle
- GSAP timeline controls bottle opening
- Letter unroll animation with ease functions
- Multiple animation stages coordinated

### Gallery & Lightbox
- Grid layout with CSS Grid
- Spotlight cursor effect with mouse tracking
- Modal lightbox for expanded view

### Cake & Candles
- Pure CSS 3D transforms (no Three.js)
- Individual candle click handlers
- Blow-out animation sequence

---

## 💡 Tips & Best Practices

- **Performance**: Keep images optimized (< 500KB each)
- **Accessibility**: Test with keyboard navigation
- **Mobile**: Animations adapt to touch devices
- **Customization**: Use CSS variables for easy theming
- **Hosting**: Deploy via Vercel, Netlify, or GitHub Pages

---

## 📱 Responsive Design

- Fully responsive layout
- Optimized for desktop, tablet, and mobile
- Touch-friendly interactive elements
- Adaptive animation performance

---

## 🔐 Security Notes

- Access control is implemented (not shown in public docs)
- Keep passwords in environment variables
- Use HTTPS when deploying
- Sensitive configuration files should be in `.gitignore`

---

## 📦 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🤝 Contributing

Feel free to fork, modify, and improve this project for your own birthday celebrations!

---

## 📄 License

This project is created for personal use. Feel free to customize and share within appropriate contexts.

---

## 🌟 Credits

- **GSAP** - Animation library
- **Lenis** - Smooth scrolling
- **Vite** - Fast build tool
- **React** - UI framework
- **ReactBits** - UI inspiration

---

## 📞 Support

For issues, questions, or suggestions, please feel free to reach out or open an issue.

---

**Happy Birthday! 🎉🎂✨**

Made with love and code. 💝
