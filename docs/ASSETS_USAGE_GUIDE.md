# Assets Usage Guide

## Directory Structure

```
src/assets/
├── css/           # Stylesheets
├── js/            # JavaScript files
├── images/        # Image assets (photos, illustrations)
├── videos/        # Video assets
├── logos/         # Logo files and favicons
└── fonts/         # Font files
```

## Image Assets (`images/`)

### Usage in HTML

From pages in `src/en/` or `src/fr/`:

```html
<!-- Product Image -->
<img src="../assets/images/product-basket.jpg" alt="Traditional woven basket" class="card-image">

<!-- Experience Image -->
<img src="../assets/images/experience-craft-workshop.jpg" alt="Craft workshop experience" class="card-image">

<!-- Regional Image -->
<img src="../assets/images/region-littoral-culture.jpg" alt="Littoral Region culture" style="width: 100%; height: 250px; object-fit: cover; border-radius: var(--radius-md);">

<!-- Hero Image -->
<img src="../assets/images/cameroon-landscape.jpg" alt="Cameroon cultural landscape" style="width: 100%; height: 300px; object-fit: cover; border-radius: var(--radius-md);">
```

### Recommended Image Files

- `product-1.jpg` through `product-6.jpg` - Product catalog images
- `experience-1.jpg` through `experience-6.jpg` - Experience showcase images
- `craft-1.jpg` through `craft-6.jpg` - Craft item images
- `wear-1.jpg` through `wear-6.jpg` - Fashion collection images
- `region-culture.jpg` - Regional culture images
- `region-cuisine.jpg` - Regional cuisine images
- `region-craft.jpg` - Regional craft images
- `region-nature.jpg` - Regional nature images
- `cameroon-placeholder.jpg` - General Cameroon imagery
- `experience-detail.jpg` - Experience detail page images

## Video Assets (`videos/`)

### Usage in HTML

From pages in `src/en/` or `src/fr/`:

```html
<!-- Basic Video -->
<video controls style="width: 100%; border-radius: var(--radius-md);">
    <source src="../assets/videos/experience-craft-workshop.mp4" type="video/mp4">
    <source src="../assets/videos/experience-craft-workshop.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<!-- Video with Poster Image -->
<video controls poster="../assets/images/video-poster.jpg" style="width: 100%; border-radius: var(--radius-md);">
    <source src="../assets/videos/cultural-tradition.mp4" type="video/mp4">
    <source src="../assets/videos/cultural-tradition.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<!-- Autoplay Video (muted, loop) -->
<video autoplay muted loop playsinline style="width: 100%;">
    <source src="../assets/videos/hero-background.mp4" type="video/mp4">
</video>
```

### Recommended Video Files

- `experience-craft-workshop.mp4` - Craft workshop experience video
- `experience-village-visit.mp4` - Village visit experience video
- `product-demonstration.mp4` - Product showcase video
- `cultural-tradition.mp4` - Cultural tradition video
- `hero-background.mp4` - Background video for hero sections

## Logo Assets (`logos/`)

### Usage in HTML

#### Header Logo

From pages in `src/en/` or `src/fr/`:

```html
<!-- Logo in Header -->
<header class="header" role="banner">
    <div class="header-container">
        <a href="index.html" class="logo">
            <img src="../assets/logos/kamukore-logo.svg" alt="KAMUKORE" style="height: 40px;">
        </a>
        <!-- ... rest of header ... -->
    </div>
</header>
```

#### Favicon in Head

In `<head>` section of all pages:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - KAMUKORE</title>
    
    <!-- Favicons -->
    <link rel="icon" type="image/svg+xml" href="../assets/logos/favicon.svg">
    <link rel="icon" type="image/png" href="../assets/logos/favicon.png">
    <link rel="apple-touch-icon" href="../assets/logos/apple-touch-icon.png">
    
    <link rel="stylesheet" href="../assets/css/main.css">
</head>
```

#### Logo Variations

```html
<!-- White Logo for Dark Backgrounds -->
<img src="../assets/logos/kamukore-logo-white.svg" alt="KAMUKORE">

<!-- Dark Logo for Light Backgrounds -->
<img src="../assets/logos/kamukore-logo-dark.svg" alt="KAMUKORE">

<!-- Small Logo for Mobile -->
<img src="../assets/logos/kamukore-logo-small.svg" alt="KAMUKORE" style="height: 30px;">
```

### Recommended Logo Files

- `kamukore-logo.svg` - Main logo (SVG, scalable)
- `kamukore-logo.png` - Main logo (PNG fallback)
- `kamukore-logo-white.svg` - White version for dark backgrounds
- `kamukore-logo-dark.svg` - Dark version for light backgrounds
- `kamukore-logo-small.svg` - Small version (mobile)
- `kamukore-logo-medium.svg` - Medium version (tablet)
- `kamukore-logo-large.svg` - Large version (desktop)
- `favicon.svg` - Modern SVG favicon
- `favicon.png` - PNG favicon (32x32px)
- `favicon.ico` - Legacy ICO favicon
- `apple-touch-icon.png` - Apple touch icon (180x180px)

## Path Reference

### From `src/en/[page].html` or `src/fr/[page].html`:

| Asset Type | Path Pattern | Example |
|------------|--------------|---------|
| CSS | `../assets/css/[file]` | `../assets/css/main.css` |
| JS | `../assets/js/[file]` | `../assets/js/main.js` |
| Image | `../assets/images/[file]` | `../assets/images/product-1.jpg` |
| Video | `../assets/videos/[file]` | `../assets/videos/experience.mp4` |
| Logo | `../assets/logos/[file]` | `../assets/logos/kamukore-logo.svg` |
| Font | Referenced in CSS | Via `@font-face` in CSS |

## Best Practices

### Images
- Use descriptive filenames: `product-traditional-basket.jpg`
- Optimize file sizes for web
- Provide alt text for accessibility
- Use appropriate formats (JPG for photos, PNG for transparency, SVG for icons)

### Videos
- Provide multiple formats (MP4 + WebM)
- Include poster images for better UX
- Optimize file sizes
- Add captions/subtitles for accessibility
- Use `controls` attribute for user control

### Logos
- Use SVG format for scalability
- Provide PNG fallback
- Include multiple sizes
- Ensure readability at small sizes
- Use appropriate version (light/dark) for context

## Migration from `img/` to `images/`

If you have existing images in `src/assets/img/`, you can:

1. **Option 1**: Keep both folders and update references gradually
2. **Option 2**: Move all files from `img/` to `images/` and update all references

To update references, search and replace:
- `../assets/img/` → `../assets/images/`

