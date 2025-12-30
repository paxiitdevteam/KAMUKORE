# PMS (Path Management System) Compliance

## ✅ PMS-Friendly Structure

### Directory Structure
```
src/
├── en/                    # English language pages
│   ├── index.html
│   ├── experience.html
│   ├── experience-detail.html
│   ├── culture.html
│   ├── region.html
│   ├── craft.html
│   ├── product.html
│   ├── wear.html
│   ├── table.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy-policy.html
│   ├── terms-of-use.html
│   ├── cookie-policy.html
│   └── legal-notice.html
│
├── fr/                    # French language pages
│   ├── index.html
│   ├── experience.html
│   ├── experience-detail.html
│   ├── culture.html
│   ├── region.html
│   ├── craft.html
│   ├── product.html
│   ├── wear.html
│   ├── table.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy-policy.html
│   ├── terms-of-use.html
│   ├── cookie-policy.html
│   └── legal-notice.html
│
└── assets/                # Shared assets (accessible from both languages)
    ├── css/
    │   └── main.css      # Single CSS file
    ├── js/
    │   └── main.js       # Single JS file
    ├── img/              # Image assets
    └── fonts/            # Font files
```

## ✅ Path Management Rules

### 1. All Paths Are Relative
- ✅ **CSS**: `../assets/css/main.css` (from language folders)
- ✅ **JS**: `../assets/js/main.js` (from language folders)
- ✅ **Images**: `../assets/img/[filename].jpg` (from language folders)
- ✅ **Fonts**: Referenced via CSS, not directly in HTML
- ✅ **Internal Links**: `index.html`, `experience.html`, etc. (same directory)
- ✅ **Language Switcher**: `../en/[page].html` or `../fr/[page].html`

### 2. No Absolute Paths
- ✅ No hardcoded absolute URLs (except external links like WhatsApp)
- ✅ No `/src/` or `/assets/` absolute paths
- ✅ All paths relative to current file location
- ✅ Portable across different server configurations

### 3. Consistent Path Patterns

#### From Language Folders (en/ or fr/) to Assets:
```html
<!-- CSS -->
<link rel="stylesheet" href="../assets/css/main.css">

<!-- JavaScript -->
<script src="../assets/js/main.js"></script>

<!-- Images -->
<img src="../assets/img/image.jpg" alt="Description">
```

#### Within Language Folders (Same Directory):
```html
<!-- Navigation links -->
<a href="index.html">Home</a>
<a href="experience.html">Experiences</a>
<a href="contact.html">Contact</a>
```

#### Cross-Language Links:
```html
<!-- Language switcher -->
<a href="../en/index.html">EN</a>
<a href="../fr/index.html">FR</a>
```

## ✅ PMS-Friendly Features

### 1. Explicit Structure
- ✅ Clear folder hierarchy
- ✅ Predictable file locations
- ✅ No hidden dependencies
- ✅ Easy to understand at a glance

### 2. No Build Process Required
- ✅ Direct HTML files
- ✅ No compilation needed
- ✅ No bundling required
- ✅ Works immediately after upload

### 3. Single Source Files
- ✅ One CSS file: `main.css`
- ✅ One JS file: `main.js`
- ✅ No duplicated code
- ✅ Easy to maintain and audit

### 4. Static Site Ready
- ✅ No server-side processing
- ✅ No database required
- ✅ Works on any static host
- ✅ CDN-friendly structure

### 5. Auditable Code
- ✅ All paths visible in HTML
- ✅ No obfuscated code
- ✅ Clear file structure
- ✅ Easy to trace dependencies

## ✅ Path Examples

### From `src/en/index.html`:
```html
<!-- CSS (go up one level, then into assets/css) -->
<link rel="stylesheet" href="../assets/css/main.css">

<!-- JS (go up one level, then into assets/js) -->
<script src="../assets/js/main.js"></script>

<!-- Image (go up one level, then into assets/img) -->
<img src="../assets/img/cameroon-placeholder.jpg" alt="...">

<!-- Link to French version (go up one level, then into fr) -->
<a href="../fr/index.html">FR</a>

<!-- Link to same-language page (same directory) -->
<a href="experience.html">Experiences</a>
```

### From `src/fr/contact.html`:
```html
<!-- CSS (same pattern) -->
<link rel="stylesheet" href="../assets/css/main.css">

<!-- Link to English version -->
<a href="../en/contact.html">EN</a>

<!-- Link to same-language page -->
<a href="about.html">À propos</a>
```

## ✅ PMS Compliance Checklist

- ✅ **Mandatory `src/` folder**: Present and used correctly
- ✅ **Language folders mandatory**: `en/` and `fr/` folders exist
- ✅ **Assets are shared**: Single `assets/` folder outside language folders
- ✅ **No duplicated CSS or JS**: Single files in `assets/css/` and `assets/js/`
- ✅ **All links are relative**: No absolute paths except external URLs
- ✅ **Explicit paths**: All paths clearly visible and understandable
- ✅ **No build tools**: Direct HTML/CSS/JS files
- ✅ **Static ready**: Works without server-side processing
- ✅ **Easy to audit**: Clear structure, no hidden dependencies
- ✅ **Portable**: Works on any server configuration

## ✅ Path Validation Rules

### Valid Patterns:
- ✅ `../assets/css/main.css` - Relative path to CSS
- ✅ `../assets/js/main.js` - Relative path to JS
- ✅ `../assets/img/[file]` - Relative path to images
- ✅ `[page].html` - Same directory link
- ✅ `../en/[page].html` - Cross-language link
- ✅ `../fr/[page].html` - Cross-language link
- ✅ `https://wa.me/...` - External link (allowed)

### Invalid Patterns (Not Used):
- ❌ `/src/assets/css/main.css` - Absolute path
- ❌ `/assets/css/main.css` - Root-relative path
- ❌ `assets/css/main.css` - Missing `../`
- ❌ `./assets/css/main.css` - Wrong relative path

## ✅ Maintenance Benefits

### Easy Updates:
1. **Change CSS**: Edit `src/assets/css/main.css` - affects all pages
2. **Change JS**: Edit `src/assets/js/main.js` - affects all pages
3. **Add Image**: Place in `src/assets/img/` - accessible from all pages
4. **Add Page**: Create in appropriate language folder - follows same pattern

### Easy Auditing:
1. **Find all CSS references**: Search for `../assets/css/main.css`
2. **Find all JS references**: Search for `../assets/js/main.js`
3. **Find all images**: Search for `../assets/img/`
4. **Find cross-language links**: Search for `../en/` or `../fr/`

## ✅ Deployment Ready

### Static Hosting:
- Works on GitHub Pages
- Works on Netlify
- Works on Vercel
- Works on any static file server
- Works on CDN

### No Configuration Needed:
- No build scripts
- No package.json
- No node_modules
- No webpack/config files
- Just upload and serve

## 📋 Summary

The entire site structure is **PMS-friendly** with:
- ✅ Clear, explicit relative paths
- ✅ Predictable file structure
- ✅ No hidden dependencies
- ✅ Easy to audit and maintain
- ✅ Portable across environments
- ✅ Static site ready
- ✅ No build process required

All paths follow consistent patterns and are easy to understand, modify, and audit.

