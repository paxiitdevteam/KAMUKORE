# Hero Images Directory

This directory contains hero/header background images for all pages.

## Structure

Each page should have its own hero image optimized for web use.

## Image Specifications

### Recommended Dimensions:
- **Desktop**: 1920x600px (16:5 aspect ratio)
- **Tablet**: 1200x400px
- **Mobile**: 800x300px

### File Format:
- **Primary**: WebP (best compression)
- **Fallback**: JPG/JPEG
- **Quality**: 80-85% for JPG, 85-90% for WebP

### File Size:
- **Target**: < 200KB per image
- **Maximum**: < 500KB per image

## Naming Convention

Use descriptive names matching the page:
- `hero-about.jpg` / `hero-about.webp`
- `hero-contact.jpg` / `hero-contact.webp`
- `hero-craft.jpg` / `hero-craft.webp`
- `hero-culture.jpg` / `hero-culture.webp`
- `hero-experience.jpg` / `hero-experience.webp`
- `hero-experience-detail.jpg` / `hero-experience-detail.webp`
- `hero-hospitality.jpg` / `hero-hospitality.webp`
- `hero-product.jpg` / `hero-product.webp`
- `hero-region.jpg` / `hero-region.webp`
- `hero-table.jpg` / `hero-table.webp`
- `hero-wear.jpg` / `hero-wear.webp`

## Usage in HTML

Hero images are applied via CSS background-image property. Each page can specify its hero image using a data attribute or inline style.

Example:
```html
<section class="page-hero" style="background-image: url('../assets/images/hero/hero-about.jpg');">
  <div class="container">
    <h1>Page Title</h1>
  </div>
</section>
```

## Optimization Checklist

- [ ] Image dimensions match specifications
- [ ] File size < 200KB (or < 500KB max)
- [ ] WebP format created
- [ ] JPG fallback created
- [ ] Alt text considered (for accessibility)
- [ ] Image tested on different screen sizes
- [ ] Loading performance verified

## Content Guidelines

Hero images should:
- Be relevant to the page content
- Have good contrast for text overlay
- Not be too busy (text needs to be readable)
- Represent Cameroonian culture authentically
- Be high quality and professional

