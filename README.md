# Linktree React App

A modern, responsive personal landing page built with React and Vite.

## Features

- 🌓 Dark/Light theme toggle with system preference detection
- 📱 Fully responsive design
- ✨ Smooth animations and hover effects
- 🎨 Modern gradient color scheme
- ⚡ Fast build with Vite
- 🚀 Ready for deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Alias for `npm run dev`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Customization

Edit the following files to customize your landing page:

- `src/App.jsx` - Update your name, bio, stats, and links
- `src/index.css` - Modify colors, fonts, and styling
- `public/index.html` - Update page title and meta tags

## Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Action that automatically builds and deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps:**
1. Push your code to a GitHub repository
2. Go to your repo Settings → Pages → Source → GitHub Actions
3. Push to main branch - the site will automatically deploy!

Your site will be available at: `https://yourusername.github.io/linktree`

### Manual Deployment

The built files are also compatible with:
- Netlify
- Vercel
- Any static hosting service

Simply run `npm run build` and upload the `dist/` folder contents.

## Tech Stack

- React 18
- Vite
- CSS3 with modern features
- Google Fonts (Inter)