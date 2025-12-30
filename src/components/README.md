# Components Folder

## Purpose

This folder contains reusable HTML components (header, footer, cookie banner) that are loaded dynamically via JavaScript.

## Components

### Header Components
- `header.html` - For root `index.html` (uses `src/assets/` paths)
- `header-pages.html` - For pages in `src/pages/` (uses `../assets/` paths)

### Footer Components
- `footer.html` - For root `index.html` (uses `src/pages/` paths)
- `footer-pages.html` - For pages in `src/pages/` (uses relative paths)

### Cookie Banner
- `cookie-banner.html` - Shared component (same for all pages)

## How It Works

1. **Component Loader**: `src/assets/js/components.js`
2. **Auto-detection**: Detects if page is at root or in pages folder
3. **Dynamic Loading**: Uses `fetch()` to load HTML components
4. **Injection**: Inserts components into `<div id="component-name"></div>`

## Usage

### In HTML Files

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

## Benefits

- ✅ **Single source of truth** - Update once, applies everywhere
- ✅ **No duplication** - No repeated header/footer code
- ✅ **Easy maintenance** - Change component, all pages update
- ✅ **PMS compliant** - Uses relative paths
- ✅ **Vanilla JS** - No frameworks or build tools

---

**Components are loaded automatically when pages load!**

