# Logos Directory

This directory contains all logo assets for the KAMUKORE website.

## Available Logos

This directory contains logo assets for the KAMUKORE website.

## Usage

### Logo in Header Component
The header component uses PMS (Path Manager System) for logo paths:
```html
<a href="/index.html" class="logo">
    <img src="/src/assets/logos/your-logo.png" alt="KAMUKORE">
</a>
```

Or using PMS:
```html
<a href="/index.html" class="logo">
    <img data-pms-logo="main" alt="KAMUKORE">
</a>
```

### Watermark
Watermark is managed by PMS CSS variables and appears on all pages (bottom-right corner, 15% opacity).

## Supported Formats

- **PNG** - Raster format with transparency support
- **SVG** - Vector format (scalable)

## Best Practices

- ✅ Use PMS for all logo paths
- ✅ Set height/width via CSS for consistent sizing
- ✅ Ensure logo is readable at small sizes (50px minimum recommended)
- ✅ Maintain aspect ratio when scaling

## Supported Formats

- **PNG** - Raster format, currently in use

## Best Practices

- ✅ Set height/width via CSS for consistent sizing
- ✅ Ensure logo is readable at small sizes (40px minimum recommended)
- ✅ Maintain aspect ratio when scaling
