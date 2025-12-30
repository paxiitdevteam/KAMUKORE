# File Structure Guide - KAMUKORE Website

## 📁 Current Structure (Clear and Simple)

```
KAMUKORE SITE/
│
├── src/                          # Source folder (mandatory)
│   │
│   ├── en/                       # English pages folder
│   │   ├── index.html            ✅ Homepage
│   │   ├── experience.html       ✅ Experience listing
│   │   ├── experience-detail.html ✅ Experience details
│   │   ├── culture.html          ✅ Culture page
│   │   ├── region.html           ✅ Region page
│   │   ├── craft.html            ✅ Craft page
│   │   ├── product.html          ✅ Products page
│   │   ├── wear.html             ✅ Fashion page
│   │   ├── table.html            ✅ Restaurant page
│   │   ├── about.html            ✅ About page
│   │   ├── contact.html          ✅ Contact page
│   │   ├── privacy-policy.html   ✅ Privacy policy
│   │   ├── terms-of-use.html     ✅ Terms of use
│   │   ├── cookie-policy.html    ✅ Cookie policy
│   │   └── legal-notice.html     ✅ Legal notice
│   │
│   ├── fr/                       # French pages folder
│   │   ├── index.html            ✅ Page d'accueil
│   │   ├── experience.html        ✅ Expériences
│   │   ├── experience-detail.html ✅ Détails expérience
│   │   ├── culture.html          ✅ Culture
│   │   ├── region.html           ✅ Région
│   │   ├── craft.html            ✅ Artisanat
│   │   ├── product.html          ✅ Produits
│   │   ├── wear.html             ✅ Mode
│   │   ├── table.html            ✅ Table
│   │   ├── about.html            ✅ À propos
│   │   ├── contact.html          ✅ Contact
│   │   ├── privacy-policy.html   ✅ Politique de confidentialité
│   │   ├── terms-of-use.html     ✅ Conditions d'utilisation
│   │   ├── cookie-policy.html    ✅ Politique des cookies
│   │   └── legal-notice.html     ✅ Avis légal
│   │
│   └── assets/                   # Shared assets folder
│       ├── css/
│       │   └── main.css          # All styles
│       ├── js/
│       │   └── main.js           # All scripts
│       ├── images/                # Image files
│       ├── videos/                # Video files
│       ├── logos/                 # Logo files
│       └── fonts/                 # Font files
│
└── docs/                          # Documentation folder
    ├── README.md
    ├── PROJECT_STRUCTURE.md
    └── ... (other docs)
```

## 📍 Where Are the Pages?

### English Pages
**Location**: `src/en/` folder
- **Homepage**: `src/en/index.html`
- **All pages**: `src/en/*.html` (15 files total)

### French Pages
**Location**: `src/fr/` folder
- **Homepage**: `src/fr/index.html`
- **All pages**: `src/fr/*.html` (15 files total)

## 🔗 How to Access Pages

### Direct File Access
```
English Homepage:  src/en/index.html
French Homepage:   src/fr/index.html
```

### Via Web Server
```
English: http://localhost:8000/src/en/index.html
French:  http://localhost:8000/src/fr/index.html
```

## 📂 Path Reference

### From `src/en/[page].html` or `src/fr/[page].html`:

| What You Need | Path | Example |
|---------------|------|---------|
| **CSS** | `../assets/css/[file]` | `../assets/css/main.css` |
| **JavaScript** | `../assets/js/[file]` | `../assets/js/main.js` |
| **Images** | `../assets/images/[file]` | `../assets/images/product-1.jpg` |
| **Videos** | `../assets/videos/[file]` | `../assets/videos/experience.mp4` |
| **Logos** | `../assets/logos/[file]` | `../assets/logos/kamukore-logo.svg` |
| **Same Language Page** | `[page].html` | `experience.html` |
| **Other Language** | `../[lang]/[page].html` | `../fr/index.html` |

## 🗺️ Visual Structure Map

```
src/
│
├── en/                    ← ENGLISH PAGES ARE HERE
│   ├── index.html         ← English homepage
│   ├── experience.html
│   ├── culture.html
│   └── ... (12 more)
│
├── fr/                    ← FRENCH PAGES ARE HERE
│   ├── index.html         ← French homepage
│   ├── experience.html
│   ├── culture.html
│   └── ... (12 more)
│
└── assets/                ← SHARED ASSETS ARE HERE
    ├── css/
    ├── js/
    ├── images/
    ├── videos/
    └── logos/
```

## ✅ Quick Verification

### Check if pages exist:
```bash
# Count English pages
ls src/en/*.html | wc -l
# Should show: 15

# Count French pages
ls src/fr/*.html | wc -l
# Should show: 15

# List all pages
ls src/en/
ls src/fr/
```

### Open a page:
- Double-click: `src/en/index.html` (opens in browser)
- Or navigate: `src/en/index.html` in file explorer

## 🎯 Key Points

1. **Pages are directly in language folders**: `src/en/` and `src/fr/`
2. **No subfolders**: Pages are at the first level inside language folders
3. **Easy to find**: Just go to `src/en/` or `src/fr/` and see all HTML files
4. **Clear structure**: Language folders → HTML pages directly

## 📋 Page List

### English Pages (`src/en/`)
1. `index.html` - Homepage
2. `experience.html` - Experiences
3. `experience-detail.html` - Experience details
4. `culture.html` - Culture
5. `region.html` - Region
6. `craft.html` - Craft
7. `product.html` - Products
8. `wear.html` - Wear/Fashion
9. `table.html` - Table/Restaurant
10. `about.html` - About
11. `contact.html` - Contact
12. `privacy-policy.html` - Privacy Policy
13. `terms-of-use.html` - Terms of Use
14. `cookie-policy.html` - Cookie Policy
15. `legal-notice.html` - Legal Notice

### French Pages (`src/fr/`)
Same 15 pages, translated to French.

---

**All pages are now clearly visible in `src/en/` and `src/fr/` folders!**

