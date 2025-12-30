# 🖼️ Images Directory

This directory contains all image assets for the KAMUKORE website, organized by page.

## 📁 Folder Structure

```
src/assets/images/
├── about/              # About page images
│   ├── hero/
│   ├── video/
│   ├── team/
│   ├── values/
│   ├── vision/
│   └── mission/
├── contact/            # Contact page images
│   ├── hero/
│   └── video/
├── craft/              # Craft page images
│   ├── hero/
│   ├── video/
│   ├── philosophy/
│   ├── products/
│   └── gallery/
├── culture/            # Culture page images
│   ├── hero/
│   ├── video/
│   ├── regions/
│   └── themes/
├── experience/         # Experience page images
│   ├── hero/
│   ├── video/
│   └── experiences/
├── hospitality/        # Hospitality page images
│   ├── hero/
│   ├── video/
│   ├── hotels/
│   └── tours/
├── legal/              # Legal pages images (shared)
│   └── hero/
├── product/            # Product page images
│   ├── hero/
│   ├── video/
│   └── products/
├── region/             # Region page images
│   ├── hero/
│   ├── video/
│   └── [region-name]/
├── restaurant/         # Restaurant page images
│   ├── hero/
│   ├── video/
│   ├── concept/
│   ├── menu/
│   ├── gallery/
│   └── reservation/
└── wear/               # Wear page images
    ├── hero/
    ├── video/
    └── collections/
```

## 📋 Page-Specific Structure

Each page folder follows a standardized structure:

### **Common Subfolders:**
- `hero/` - Hero section background images (1920×600px)
- `video/` - Video poster images (1920×1080px)

### **Page-Specific Subfolders:**
- **About**: `team/`, `values/`, `vision/`, `mission/`
- **Craft**: `philosophy/`, `products/`, `gallery/`
- **Culture**: `regions/`, `themes/`
- **Experience**: `experiences/`
- **Hospitality**: `hotels/`, `tours/`
- **Product**: `products/`
- **Region**: `[region-name]/` (e.g., `littoral/`)
- **Restaurant**: `concept/`, `menu/`, `gallery/`, `reservation/`
- **Wear**: `collections/`

## 📐 Standard Image Specifications

### **Hero Images** (`hero/`)
- **Dimensions**: 1920px × 600px
- **Format**: WebP (primary), JPG (fallback)
- **Size**: < 300KB
- **Usage**: Page hero section backgrounds

### **Video Posters** (`video/`)
- **Dimensions**: 1920px × 1080px
- **Format**: JPG
- **Size**: < 300KB
- **Usage**: Video player poster images

### **Content Images** (varies by page)
- **Dimensions**: 600px × 400px (standard), 800px × 600px (featured), 600px × 600px (square)
- **Format**: WebP (primary), JPG (fallback)
- **Size**: < 150KB (standard), < 200KB (featured)
- **Usage**: Product cards, galleries, concept sections

## 💻 Usage

From HTML pages in `src/pages/`:
```html
<!-- Hero Image -->
<section class="page-hero" style="background-image: url('../assets/images/[page]/hero/hero-[page].jpg');">

<!-- Video Poster -->
<video poster="../assets/images/[page]/video/video-poster.jpg">

<!-- Content Image -->
<div style="background-image: url('../assets/images/[page]/[section]/image-name.jpg');">
```

## ✅ Best Practices

- **Naming**: Use lowercase with hyphens: `hero-product.jpg`, `gallery-1.jpg`
- **Formats**: Prefer WebP for better compression, provide JPG fallback
- **Optimization**: Compress images for web delivery
- **Consistency**: Use consistent dimensions within each subfolder
- **Descriptive**: Use clear, descriptive filenames

## 📝 Adding Images

1. **Place images** in the appropriate page folder and subfolder
2. **Follow naming conventions**: `[section]-[name].jpg`
3. **Optimize images** to specified sizes
4. **Use WebP format** when possible (with JPG fallback)
5. **Images will automatically display** on the page

## 🔗 Related Files

- **Videos**: `src/assets/videos/[page]/`
- **HTML Pages**: `src/pages/[page].html`
- **CSS Styling**: `src/assets/css/main.css`

## 📚 Documentation

Each page folder contains a detailed `README.md` with:
- Complete directory structure
- Image specifications
- Content guidelines
- Status tracking

## 📌 Legacy Folders

The following folders may contain legacy images:
- `hero/` - Universal hero images (may be migrated to page-specific folders)
- `experiences/` - Legacy experience images (may be migrated to `experience/`)
- `products/` - Legacy product images (may be migrated to `product/`)

These can be migrated to the new page-based structure as needed.

