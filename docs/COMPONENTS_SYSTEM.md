# Components System - KAMUKORE Website

## ✅ Component Structure Created

### Components Folder
```
src/components/
├── header.html          # Header for root index.html
├── header-pages.html    # Header for pages in src/pages/
├── footer.html          # Footer for root index.html
├── footer-pages.html    # Footer for pages in src/pages/
└── cookie-banner.html   # Cookie banner (shared)
```

## 🎯 How It Works

### Component Loader
- **File**: `src/assets/js/components.js`
- **Function**: Dynamically loads header, footer, and cookie banner
- **Method**: Uses JavaScript `fetch()` to load HTML components
- **Auto-detection**: Detects if page is at root or in pages folder

### Usage in HTML

**Root `index.html`:**
```html
<head>
    <script src="src/assets/js/components.js"></script>
</head>
<body>
    <div id="header-component"></div>
    <!-- Page content -->
    <div id="footer-component"></div>
    <div id="cookie-banner-component"></div>
</body>
```

**Pages `src/pages/[page].html`:**
```html
<head>
    <script src="../assets/js/components.js"></script>
</head>
<body>
    <div id="header-component"></div>
    <!-- Page content -->
    <div id="footer-component"></div>
    <div id="cookie-banner-component"></div>
</body>
```

## ✅ Benefits

- ✅ **Single source of truth** - Header/footer in one place
- ✅ **Easy maintenance** - Update once, applies everywhere
- ✅ **No duplication** - No repeated code
- ✅ **PMS compliant** - Uses relative paths
- ✅ **Vanilla JS** - No frameworks, no build tools

## 📝 Next Steps

1. Update all HTML files to use component system
2. Remove duplicate header/footer code
3. Test component loading

---

**Components system ready! Now updating all pages...**

