# Assets Directory Structure

## Complete Structure

```
src/assets/
├── css/
│   └── main.css              # Main stylesheet
│
├── js/
│   └── main.js               # Main JavaScript file
│
├── images/                   # Image assets
│   ├── .gitkeep
│   ├── README.md
│   └── placeholder.txt
│   │
│   ├── products/             # Product images (optional subfolder)
│   ├── experiences/          # Experience images (optional subfolder)
│   ├── regions/              # Regional images (optional subfolder)
│   └── general/              # General images (optional subfolder)
│
├── videos/                   # Video assets
│   ├── .gitkeep
│   ├── README.md
│   └── placeholder.txt
│   │
│   ├── experiences/          # Experience videos (optional subfolder)
│   ├── products/             # Product videos (optional subfolder)
│   └── promotional/          # Promotional videos (optional subfolder)
│
├── logos/                    # Logo files and favicons
│   ├── .gitkeep
│   ├── README.md
│   └── placeholder.txt
│
└── fonts/                    # Font files
    └── (font files here)
```

## Folder Purposes

### `css/`
- Contains all stylesheet files
- Currently: `main.css` (single file, no duplication)

### `js/`
- Contains all JavaScript files
- Currently: `main.js` (single file, no duplication)

### `images/`
- Contains all image assets (photos, illustrations, graphics)
- Formats: JPG, PNG, WebP, SVG
- Used for: Products, experiences, regions, general imagery

### `videos/`
- Contains all video assets
- Formats: MP4, WebM, OGG
- Used for: Experience showcases, product demos, promotional content

### `logos/`
- Contains logo files and favicons
- Formats: SVG, PNG, ICO
- Used for: Site branding, favicons, logo variations

### `fonts/`
- Contains font files
- Formats: WOFF, WOFF2, TTF, OTF
- Referenced via CSS `@font-face`

## Path Patterns

All paths are relative from language folders (`src/en/` or `src/fr/`):

```
../assets/css/main.css
../assets/js/main.js
../assets/images/[filename]
../assets/videos/[filename]
../assets/logos/[filename]
```

## PMS Compliance

✅ **All paths are relative** - No absolute paths
✅ **Shared assets** - Single source for all languages
✅ **Clear structure** - Easy to understand and maintain
✅ **No duplication** - Single files referenced from multiple pages

