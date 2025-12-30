# Pages Folder - KAMUKORE Website

## 📍 Modern Structure

All pages are in this single `pages/` folder. No separate language folders!

## 🎯 How It Works

### Single Set of Pages
- **15 HTML files** (one per page type)
- **No duplication** - one file serves both languages
- **JavaScript handles translations** dynamically

### Translation System
- Content uses `data-translate` attributes
- `translations.js` contains all English and French text
- Language switcher updates content instantly

## 📂 Pages List

1. `index.html` - Homepage
2. `experience.html` - Experiences listing
3. `experience-detail.html` - Experience details
4. `culture.html` - Culture page
5. `region.html` - Region page
6. `craft.html` - Craft page
7. `product.html` - Products page
8. `wear.html` - Fashion page
9. `restaurant.html` - Restaurant page
10. `about.html` - About page
11. `contact.html` - Contact page
12. `privacy-policy.html` - Privacy policy
13. `terms-of-use.html` - Terms of use
14. `cookie-policy.html` - Cookie policy
15. `legal-notice.html` - Legal notice

## 🔗 Paths

### From `src/pages/[page].html`:

| Asset | Path |
|-------|------|
| CSS | `../assets/css/main.css` |
| JS | `../assets/js/main.js` |
| Translations | `../assets/js/translations.js` |
| Images | `../assets/images/[file]` |
| Videos | `../assets/videos/[file]` |
| Logos | `../assets/logos/[file]` |

### Internal Links
- Same folder: `experience.html` (no path needed)
- Same folder: `index.html` (no path needed)

## ✅ Benefits

✅ **50% fewer files** - 15 instead of 30  
✅ **Easier maintenance** - Update once  
✅ **Modern approach** - Dynamic translations  
✅ **Single source of truth** - One file per page  

---

**All pages are here in this folder!**

