# Quick Start Guide - KAMUKORE Website

Get started with the KAMUKORE website quickly.

## 🚀 Quick Start

### 1. View the Website

Simply open any HTML file in a browser:
```bash
# Open homepage
open src/en/index.html
# or
open src/fr/index.html
```

### 2. Local Development Server

For better development experience, use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000/src/en/index.html`

### 3. File Structure

```
src/
├── en/              # English pages - Start here
├── fr/              # French pages
└── assets/          # Shared assets
    ├── css/         # Styles
    ├── js/          # Scripts
    ├── images/      # Images
    ├── videos/      # Videos
    └── logos/       # Logos
```

## 📝 Common Tasks

### Add a New Image

1. Place image in `src/assets/images/`
2. Reference in HTML:
```html
<img src="../assets/images/your-image.jpg" alt="Description">
```

### Add a New Video

1. Place video in `src/assets/videos/`
2. Add to HTML:
```html
<video controls>
    <source src="../assets/videos/your-video.mp4" type="video/mp4">
    <source src="../assets/videos/your-video.webm" type="video/webm">
</video>
```

### Add a Logo

1. Place logo in `src/assets/logos/`
2. Reference in HTML:
```html
<img src="../assets/logos/kamukore-logo.svg" alt="KAMUKORE">
```

### Update CSS

Edit `src/assets/css/main.css` - changes apply to all pages.

### Update JavaScript

Edit `src/assets/js/main.js` - changes apply to all pages.

## 🔗 Path Reference

From `src/en/[page].html` or `src/fr/[page].html`:

| Asset | Path |
|-------|------|
| CSS | `../assets/css/main.css` |
| JS | `../assets/js/main.js` |
| Image | `../assets/images/[file]` |
| Video | `../assets/videos/[file]` |
| Logo | `../assets/logos/[file]` |
| Same page | `[page].html` |
| Other language | `../[lang]/[page].html` |

## 📚 Documentation

- **Overview**: [README.md](README.md)
- **Structure**: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- **Assets**: [src/assets/ASSETS_USAGE_GUIDE.md](../src/assets/ASSETS_USAGE_GUIDE.md)
- **Standards**: [INTERNATIONAL_STANDARDS_COMPLIANCE.md](INTERNATIONAL_STANDARDS_COMPLIANCE.md)

## ✅ Checklist

- [ ] Review [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- [ ] Check [PMS_COMPLIANCE.md](PMS_COMPLIANCE.md) for path rules
- [ ] Read [src/assets/ASSETS_USAGE_GUIDE.md](../src/assets/ASSETS_USAGE_GUIDE.md)
- [ ] Add logo files to `src/assets/logos/`
- [ ] Add image assets to `src/assets/images/`
- [ ] Test pages in browser
- [ ] Verify mobile responsiveness
- [ ] Check accessibility

---

**Ready to start?** Begin with [README.md](README.md) for complete documentation.

