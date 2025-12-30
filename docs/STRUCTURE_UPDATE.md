# Structure Update - Pages Folders

## Update Summary

Pages have been reorganized into `pages/` subfolders within each language directory for better organization.

## New Structure

```
src/
├── en/
│   └── pages/              # English pages (15 HTML files)
│       ├── index.html
│       ├── experience.html
│       ├── experience-detail.html
│       ├── culture.html
│       ├── region.html
│       ├── craft.html
│       ├── product.html
│       ├── wear.html
│       ├── table.html
│       ├── about.html
│       ├── contact.html
│       ├── privacy-policy.html
│       ├── terms-of-use.html
│       ├── cookie-policy.html
│       └── legal-notice.html
│
├── fr/
│   └── pages/              # French pages (15 HTML files)
│       ├── index.html
│       ├── experience.html
│       ├── experience-detail.html
│       ├── culture.html
│       ├── region.html
│       ├── craft.html
│       ├── product.html
│       ├── wear.html
│       ├── table.html
│       ├── about.html
│       ├── contact.html
│       ├── privacy-policy.html
│       ├── terms-of-use.html
│       ├── cookie-policy.html
│       └── legal-notice.html
│
└── assets/                 # Shared assets (unchanged)
    ├── css/
    ├── js/
    ├── images/
    ├── videos/
    ├── logos/
    └── fonts/
```

## Path Updates

### From `src/en/pages/[page].html` or `src/fr/pages/[page].html`:

| Asset Type | Old Path | New Path |
|------------|----------|----------|
| CSS | `../assets/css/main.css` | `../../assets/css/main.css` |
| JS | `../assets/js/main.js` | `../../assets/js/main.js` |
| Images | `../assets/images/[file]` | `../../assets/images/[file]` |
| Videos | `../assets/videos/[file]` | `../../assets/videos/[file]` |
| Logos | `../assets/logos/[file]` | `../../assets/logos/[file]` |

### Language Switcher Links

| Link Type | Old Path | New Path |
|-----------|----------|----------|
| EN link | `../en/index.html` | `../../en/pages/index.html` |
| FR link | `../fr/index.html` | `../../fr/pages/index.html` |

### Internal Navigation Links

Internal links within the same `pages/` folder remain unchanged:
- `index.html` - Same directory
- `experience.html` - Same directory
- `contact.html` - Same directory
- etc.

## Path Examples

### CSS Reference
```html
<!-- From src/en/pages/index.html -->
<link rel="stylesheet" href="../../assets/css/main.css">
```

### JavaScript Reference
```html
<!-- From src/en/pages/index.html -->
<script src="../../assets/js/main.js"></script>
```

### Image Reference
```html
<!-- From src/en/pages/index.html -->
<img src="../../assets/images/product-1.jpg" alt="Product">
```

### Language Switcher
```html
<!-- From src/en/pages/index.html -->
<a href="../../en/pages/index.html">EN</a>
<a href="../../fr/pages/index.html">FR</a>
```

### Internal Navigation
```html
<!-- From src/en/pages/index.html -->
<a href="experience.html">Experiences</a>
<a href="contact.html">Contact</a>
```

## Benefits

### Better Organization
- ✅ Clear separation: pages in `pages/` folder
- ✅ Easy to identify HTML files
- ✅ Can add other folders in language directories if needed

### Maintainability
- ✅ Clear structure
- ✅ Easy to find pages
- ✅ Consistent organization

## Accessing Pages

### Direct Access
- English homepage: `src/en/pages/index.html`
- French homepage: `src/fr/pages/index.html`

### Via Web Server
- English: `http://localhost:8000/src/en/pages/index.html`
- French: `http://localhost:8000/src/fr/pages/index.html`

## PMS Compliance

✅ **Still PMS Compliant**:
- ✅ All paths are relative
- ✅ Consistent pattern: `../../assets/[folder]/[file]`
- ✅ No absolute paths
- ✅ Easy to audit and maintain

## Files Updated

- ✅ All 30 HTML pages (15 EN + 15 FR)
- ✅ All asset paths updated
- ✅ All language switcher paths updated
- ✅ Internal navigation links remain correct

## Verification

All pages have been updated with correct paths:
- ✅ CSS paths: `../../assets/css/main.css`
- ✅ JS paths: `../../assets/js/main.js`
- ✅ Image paths: `../../assets/images/[file]`
- ✅ Language switcher: `../../[lang]/pages/[page].html`
- ✅ Internal links: `[page].html` (same directory)

---

**Update Date**: December 2025  
**Status**: ✅ Complete - All paths updated

