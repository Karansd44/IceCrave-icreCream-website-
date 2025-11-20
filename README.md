# 🍦 IceCrave - Premium Ice Cream Shop Website

A stunning, interactive ice cream shop website built with React, Vite, and powered by GSAP animations. Experience smooth scroll animations, parallax effects, and immersive video reveals as you explore our premium ice cream flavors.

![IceCrave Website](/readme/work-9.png)

## ✨ Features

- **Smooth Scroll Animations** - Powered by GSAP ScrollTrigger for buttery-smooth page transitions
- **Interactive Video Reveal** - Video expands and plays dynamically as you scroll through the page
- **Text Animations** - Split text animations with staggered character reveals using GSAP SplitText
- **Parallax Effects** - Leaf elements move at different speeds creating depth and dimension
- **Responsive Design** - Fully responsive layout built with Tailwind CSS v4
- **Performance Optimized** - Compressed video assets for fast loading times
- **Modern UI/UX** - Clean, elegant design with smooth transitions and hover effects

## 🎬 GSAP Animations

This project showcases the power of **GSAP (GreenSock Animation Platform)** for creating professional web animations:

### Hero Section
- **Text Reveal Animation**: Characters animate in with a smooth `yPercent` transform and `expo.out` easing
- **Parallax Leaves**: Left and right leaf images move independently on scroll using ScrollTrigger
- **Video Timeline**: Video playback syncs with scroll position, creating a cinematic experience

### Video Scroll Animation
```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: 'video',
    start: 'center 60%',
    end: 'bottom top',
    scrub: true,
    pin: true,
  }
})
.to(videoRef.current, {
  currentTime: videoRef.current.duration
})
```
- Video plays/pauses based on scroll position
- Circular clip-path reveal effect
- Auto-play controls tied to viewport visibility

### Art Section
- **Masked Image Animation**: Image scales and repositions with mask effects
- **Fade Sequences**: Content fades in/out with staggered timing
- **Pin Animation**: Section pins while content animates

### Menu Section
- **Smooth Transitions**: Ice cream flavor images transition smoothly between slides
- **Tab Navigation**: Active state animations with color transitions

### Contact Section
- **SplitText Integration**: Individual character and word animations
- **Form Interactions**: Smooth hover and focus states

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Karansd44/IceCrave-icreCream-website-.git
cd IceCrave-icreCream-website-
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Next-generation frontend tooling
- **GSAP 3.13** - Professional-grade animation library
  - ScrollTrigger - Scroll-based animations
  - SplitText - Text animation utility
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Responsive** - Responsive breakpoint hooks

## 🎨 Project Structure

```
IceCrave/
├── src/
│   ├── components/
│   │   ├── Hero.jsx         # Hero section with video animation
│   │   ├── Navbar.jsx       # Navigation with scroll effects
│   │   ├── Cocktails.jsx    # Ice cream showcase section
│   │   ├── About.jsx        # About section
│   │   ├── Art.jsx          # Art section with mask animations
│   │   ├── Menu.jsx         # Interactive flavor slider
│   │   └── Contact.jsx      # Contact form and info
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles with Tailwind
├── constants/
│   └── index.js             # App constants and data
├── public/
│   ├── images/              # Image assets
│   ├── videos/              # Video assets
│   └── fonts/               # Custom fonts
└── package.json
```

## 🎥 Video Optimization

The project includes optimized video assets compressed using FFmpeg:

```bash
ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
```

This reduces file size by ~50% while maintaining excellent quality for web playback.

## 🌟 Key GSAP Features Used

| Feature | Description | Usage |
|---------|-------------|-------|
| **ScrollTrigger** | Trigger animations on scroll | All scroll-based animations |
| **SplitText** | Split text into chars/words | Hero title and subtitle animations |
| **Timeline** | Sequence multiple animations | Video reveal, art section |
| **Scrub** | Link animation to scroll position | Video playback, parallax effects |
| **Pin** | Pin elements while animating | Art section, video section |
| **Stagger** | Animate elements in sequence | Text reveals, list items |

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Karan SD**
- GitHub: [@karansd44](https://github.com/karansd44)

## 🙏 Acknowledgments

- GSAP for the incredible animation library
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing-fast build tool

---

Made with ❤️ and GSAP animations
