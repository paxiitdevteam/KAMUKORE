# 🏗️ KAMUKORE Frontend Structure Guide

## 📋 Overview

This document provides a comprehensive guide to the KAMUKORE website frontend structure, including file organization, component placement, and best practices.

---

## 📁 Complete File Structure

```
KAMUKORE SITE/
├── index.html                    # Root homepage (entry point)
├── server.py                     # Python server (development)
├── start-server.sh               # Server startup script
│
├── src/                          # Source files (PMS compliant)
│   ├── pages/                    # All HTML pages (15 files)
│   │   ├── index.html            # Homepage (if separate from root)
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── cookie-policy.html
│   │   ├── craft.html
│   │   ├── culture.html
│   │   ├── experience.html
│   │   ├── experience-detail.html
│   │   ├── hospitality.html
│   │   ├── legal-notice.html
│   │   ├── privacy-policy.html
│   │   ├── product.html
│   │   ├── region.html
│   │   ├── table.html
│   │   ├── terms-of-use.html
│   │   └── wear.html
│   │
│   ├── components/               # Reusable HTML components
│   │   ├── header.html           # Site header (navigation, logo)
│   │   ├── footer.html           # Site footer (links, copyright)
│   │   └── cookie-banner.html    # Cookie consent banner
│   │
│   └── assets/                   # Shared assets
│       ├── css/
│       │   └── main.css          # Single stylesheet (all styles)
│       │
│       ├── js/
│       │   ├── main.js           # Main JavaScript (menu, forms, etc.)
│       │   ├── translations.js   # Translation system (EN/FR)
│       │   └── components.js     # Component loader
│       │
│       ├── images/               # Image assets
│       │   ├── hero/             # Hero section images
│       │   ├── products/         # Product images
│       │   ├── experiences/      # Experience images
│       │   ├── craft/            # Craft images
│       │   ├── culture/          # Cultural images
│       │   └── general/         # General images
│       │
│       ├── videos/               # Video assets
│       │   ├── hero/             # Hero background videos
│       │   │   ├── hero-homepage.mp4
│       │   │   ├── hero-homepage.webm
│       │   │   └── ...
│       │   ├── content/          # Content videos
│       │   │   ├── experiences/
│       │   │   ├── products/
│       │   │   ├── craft/
│       │   │   └── culture/
│       │   ├── captions/         # Video captions (VTT files)
│       │   │   ├── [video-name]-en.vtt
│       │   │   └── [video-name]-fr.vtt
│       │   └── posters/          # Video poster images
│       │       └── [video-name]-poster.jpg
│       │
│       ├── logos/                # Logo files
│       │   ├── logo (2).png      # Main logo
│       │   ├── favicon.ico       # Favicon
│       │   └── ...
│       │
│       └── fonts/                # Font files (if custom fonts)
│           └── ...
│
└── docs/                         # Documentation
    ├── COMPREHENSIVE_STATUS_REPORT.md
    ├── VIDEO_PLACEMENT_STRATEGY.md
    ├── UNIVERSAL_DATA_PROTECTION_STANDARDS.md
    ├── FRONTEND_STRUCTURE_GUIDE.md (this file)
    └── ...
```

---

## 🎯 Component Architecture

### **1. Page Structure**

Every page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="...">
    <title>Page Title - KAMUKORE</title>
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../assets/css/main.css">
    
    <!-- Scripts (load in head) -->
    <script src="../assets/js/translations.js"></script>
    <script src="../assets/js/components.js"></script>
</head>
<body>
    <!-- Header Component -->
    <div id="header-component"></div>
    
    <!-- Main Content -->
    <main role="main">
        <!-- Page-specific content -->
    </main>
    
    <!-- Footer Component -->
    <div id="footer-component"></div>
    
    <!-- Cookie Banner Component -->
    <div id="cookie-banner-component"></div>
    
    <!-- Main JavaScript -->
    <script src="../assets/js/main.js"></script>
    
    <!-- Translation Initialization -->
    <script>
        setTimeout(function() {
            if (typeof initTranslation === 'function') {
                initTranslation();
            }
            if (typeof initLanguageSwitcher === 'function') {
                initLanguageSwitcher();
            }
        }, 200);
    </script>
</body>
</html>
```

---

### **2. Component Loading System**

**How it works:**
1. `components.js` loads automatically when page loads
2. It detects page location (root vs `src/pages/`)
3. It fetches component HTML files
4. It injects components into placeholder divs
5. It reinitializes scripts after components load

**Component Placeholders:**
```html
<div id="header-component"></div>        <!-- Loads header.html -->
<div id="footer-component"></div>        <!-- Loads footer.html -->
<div id="cookie-banner-component"></div> <!-- Loads cookie-banner.html -->
```

**Path Resolution:**
- From root (`index.html`): `src/components/header.html`
- From pages (`src/pages/about.html`): `../components/header.html`

---

### **3. Translation System**

**How it works:**
1. `translations.js` contains all EN/FR translations
2. Pages use `data-translate="key"` attributes
3. `initTranslation()` function translates content
4. Language switcher updates URL and localStorage
5. Translations persist across page navigation

**Usage:**
```html
<h1 data-translate="page.about.title">About KAMUKORE</h1>
<p data-translate="page.about.subtitle">Celebrating cultural heritage</p>
```

**Language Switcher:**
```html
<ul class="lang-switcher">
    <li><a href="#" data-lang="en" class="active">EN</a></li>
    <li><a href="#" data-lang="fr">FR</a></li>
</ul>
```

---

## 🎥 Video Placement Strategy

### **Video Types & Locations:**

#### **1. Hero Background Videos**
**Location**: Hero sections of main pages
**Files**: `src/assets/videos/hero/`
**Format**: MP4 + WebM, muted, autoplay, loop
**Naming**: `hero-[page-name].mp4`

**Pages:**
- Homepage (`index.html`)
- Experience (`experience.html`)
- Culture (`culture.html`)
- Region (`region.html`)

**Example:**
```html
<section class="hero hero-with-video">
    <video class="hero-video" autoplay muted loop playsinline
           poster="../assets/images/hero-poster.jpg">
        <source src="../assets/videos/hero/hero-homepage.mp4" type="video/mp4">
        <source src="../assets/videos/hero/hero-homepage.webm" type="video/webm">
    </video>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <!-- Hero content -->
    </div>
</section>
```

#### **2. Content Section Videos**
**Location**: Content sections, cards, product showcases
**Files**: `src/assets/videos/content/[category]/`
**Format**: MP4 + WebM, with controls, captions required
**Naming**: `[category]-[name].mp4`

**Categories:**
- `experiences/` - Experience videos
- `products/` - Product demonstrations
- `craft/` - Craft showcases
- `culture/` - Cultural content

**Example:**
```html
<div class="card">
    <video controls poster="../assets/images/experience-1-poster.jpg">
        <source src="../assets/videos/content/experiences/craft-workshop.mp4" type="video/mp4">
        <source src="../assets/videos/content/experiences/craft-workshop.webm" type="video/webm">
        <track kind="captions" src="../assets/videos/captions/craft-workshop-en.vtt" srclang="en">
        <track kind="captions" src="../assets/videos/captions/craft-workshop-fr.vtt" srclang="fr">
    </video>
    <h3>Experience Title</h3>
</div>
```

#### **3. Modal/Lightbox Videos**
**Location**: Full-screen video modals
**Files**: Same as content videos
**Format**: Same as content videos
**Usage**: Triggered by buttons with `data-video-modal` attribute

**Example:**
```html
<button class="btn btn-video" data-video-modal="craft-workshop">
    Watch Video
</button>
```

---

## 🖼️ Image Organization

### **Image Categories:**

```
src/assets/images/
├── hero/              # Hero section images
│   ├── homepage-hero.jpg
│   ├── experience-hero.jpg
│   └── ...
├── products/          # Product images
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
├── experiences/       # Experience images
│   ├── experience-1.jpg
│   ├── experience-2.jpg
│   └── ...
├── craft/             # Craft images
│   ├── craft-1.jpg
│   └── ...
├── culture/           # Cultural images
│   ├── culture-1.jpg
│   └── ...
└── general/           # General images
    ├── cameroon-placeholder.jpg
    └── ...
```

### **Image Usage:**

**Hero Images:**
```html
<section class="hero" style="background-image: url('../assets/images/hero/homepage-hero.jpg');">
    <!-- Hero content -->
</section>
```

**Card Images:**
```html
<div class="card">
    <img src="../assets/images/products/product-1.jpg" alt="Product name" class="card-image">
    <h3>Product Title</h3>
</div>
```

**Responsive Images:**
```html
<img src="../assets/images/experience-1.jpg" 
     alt="Experience description"
     style="width: 100%; height: auto; border-radius: var(--radius-md);">
```

---

## 🎨 CSS Organization

### **CSS Structure:**

`src/assets/css/main.css` contains:

1. **CSS Variables** (lines 9-64)
   - Colors
   - Typography
   - Spacing
   - Layout
   - Transitions
   - Shadows
   - Border radius

2. **Reset & Base Styles** (lines 66-91)
   - CSS reset
   - Base HTML elements
   - Typography defaults

3. **Layout Components** (lines 93-300)
   - Container
   - Grid system
   - Flexbox utilities
   - Spacing utilities

4. **Components** (lines 302-950)
   - Header
   - Navigation
   - Footer
   - Cards
   - Buttons
   - Forms
   - Cookie banner

5. **Page-Specific Styles** (lines 952-1100)
   - Hero sections
   - Page heroes
   - Sections
   - Legal pages

6. **Responsive Design** (lines 1102-1296)
   - Mobile breakpoints
   - Tablet adjustments
   - Mobile menu
   - Responsive utilities

---

## 📜 JavaScript Organization

### **JavaScript Files:**

#### **1. main.js** - Core Functionality
- Mobile menu toggle
- Mega menu (categorized navigation)
- Cookie banner (universal data protection)
- Language switcher initialization
- Form validation
- Smooth scrolling
- Hero effects

#### **2. translations.js** - Translation System
- Translation object (EN/FR)
- Language detection
- Content translation
- Language switching
- URL parameter handling
- localStorage persistence

#### **3. components.js** - Component Loader
- Component loading
- Path resolution
- Script reinitialization
- Error handling

---

## 🔒 Universal Data Protection

### **Cookie Banner:**

**Location**: `src/components/cookie-banner.html`

**Features:**
- Accept All / Essential Only / Customize options
- Granular cookie controls (Essential, Analytics, Marketing)
- Universal compliance (GDPR, CCPA, LGPD, PIPEDA, POPIA)
- Translation support (EN/FR)
- localStorage persistence

**Cookie Categories:**
1. **Essential** - Required (cannot disable)
2. **Analytics** - Optional (user can opt-out)
3. **Marketing** - Optional (user can opt-out)

---

## 📱 Responsive Design

### **Breakpoints:**

```css
/* Desktop First Approach */
Default: Desktop styles

@media (max-width: 768px) {
    /* Mobile styles */
}
```

### **Mobile Considerations:**

- Mobile menu (hamburger menu)
- Touch-friendly buttons
- Responsive images
- Stacked layouts
- Simplified navigation

---

## ✅ Best Practices

### **File Naming:**
- Use lowercase with hyphens: `hero-homepage.mp4`
- Descriptive names: `experience-craft-workshop.mp4`
- Consistent naming: `product-[name].jpg`

### **Path References:**
- From `src/pages/`: Use `../assets/`
- From root: Use `src/assets/`
- Always use relative paths

### **Component Usage:**
- Always use component placeholders
- Don't duplicate header/footer code
- Let `components.js` handle loading

### **Translation:**
- Always use `data-translate` attributes
- Add translation keys to `translations.js`
- Test both languages

### **Accessibility:**
- Use semantic HTML
- Add ARIA labels
- Provide alt text for images
- Include captions for videos
- Ensure keyboard navigation

### **Performance:**
- Optimize images (< 500KB)
- Optimize videos (< 10MB)
- Use lazy loading for images/videos
- Minimize HTTP requests

---

## 🚀 Development Workflow

### **1. Adding a New Page:**
1. Create HTML file in `src/pages/`
2. Follow page structure template
3. Add component placeholders
4. Add translation attributes
5. Add translation keys to `translations.js`
6. Test in both languages

### **2. Adding a Video:**
1. Place video in appropriate folder (`hero/` or `content/[category]/`)
2. Create poster image
3. Create caption files (EN + FR)
4. Add video element to page
5. Test playback and accessibility

### **3. Adding an Image:**
1. Place image in appropriate folder
2. Optimize image (< 500KB)
3. Add alt text
4. Reference in HTML
5. Test responsive behavior

### **4. Updating Components:**
1. Edit component file (`src/components/[name].html`)
2. Changes apply to all pages automatically
3. Test on multiple pages
4. Verify translation support

---

## 📊 Structure Summary

| Component | Location | Purpose |
|-----------|----------|---------|
| **Pages** | `src/pages/` | All HTML pages |
| **Components** | `src/components/` | Reusable HTML |
| **CSS** | `src/assets/css/main.css` | All styles |
| **JavaScript** | `src/assets/js/` | Core functionality |
| **Images** | `src/assets/images/` | Image assets |
| **Videos** | `src/assets/videos/` | Video assets |
| **Logos** | `src/assets/logos/` | Logo files |

---

## 🎯 Key Principles

1. **Single Source of Truth**: One CSS file, one JS file per feature
2. **Component-Based**: Reusable header, footer, cookie banner
3. **Translation System**: Centralized translations, dynamic switching
4. **Universal Compliance**: GDPR, CCPA, LGPD, PIPEDA, POPIA
5. **Accessibility First**: WCAG 2.1 AA compliance
6. **Performance**: Optimized assets, lazy loading
7. **Responsive**: Mobile-first approach
8. **Maintainable**: Clean structure, clear naming

---

**Last Updated**: December 2025  
**Status**: Production Ready ✅

