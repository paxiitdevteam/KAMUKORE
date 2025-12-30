# KAMUKORE Website Documentation

Welcome to the KAMUKORE website documentation. This folder contains all project documentation, guides, and reference materials.

## 📚 Documentation Index

### Project Overview
- [Project Structure](PROJECT_STRUCTURE.md) - Complete file structure documentation
- [International Standards Compliance](INTERNATIONAL_STANDARDS_COMPLIANCE.md) - WCAG, SEO, and web standards
- [PMS Compliance](PMS_COMPLIANCE.md) - Path Management System compliance guide
- [PMS Verification](PMS_VERIFICATION.md) - Verification report and checklist

### Assets Management
- [Assets Usage Guide](../src/assets/ASSETS_USAGE_GUIDE.md) - How to use images, videos, and logos
- [Assets Structure](../src/assets/ASSETS_STRUCTURE.md) - Assets directory structure
- [Assets Placeholders](ASSETS_PLACEHOLDERS.md) - List of required placeholder assets
- [Assets Setup Summary](ASSETS_SETUP_SUMMARY.md) - Assets setup and migration guide

### Development Guides
- [Assets Examples](../ASSETS_EXAMPLES.html) - HTML code examples for assets
- [French Pages Status](FRENCH_PAGES_STATUS.md) - French translation status

### Quick Reference
- [Project Structure Overview](#project-structure)
- [Path Reference](#path-reference)
- [Standards Compliance](#standards-compliance)

## 📁 Project Structure

```
KAMUKORE SITE/
├── docs/                          # Documentation folder (this folder)
│   ├── README.md                 # Documentation index (this file)
│   ├── PROJECT_STRUCTURE.md      # Complete structure documentation
│   ├── INTERNATIONAL_STANDARDS_COMPLIANCE.md
│   ├── PMS_COMPLIANCE.md
│   ├── PMS_VERIFICATION.md
│   ├── ASSETS_PLACEHOLDERS.md
│   └── ASSETS_SETUP_SUMMARY.md
│
├── src/                          # Source files (mandatory)
│   ├── en/                       # English pages (15 HTML files)
│   ├── fr/                       # French pages (15 HTML files)
│   └── assets/                   # Shared assets
│       ├── css/
│       │   └── main.css          # Single CSS file
│       ├── js/
│       │   └── main.js           # Single JS file
│       ├── images/               # Image assets
│       ├── videos/               # Video assets
│       ├── logos/                # Logo files and favicons
│       ├── fonts/                # Font files
│       └── img/                  # Legacy images folder
│
└── [Root documentation files]   # Moved to docs/ folder
```

## 🔗 Path Reference

### From Language Folders (`src/en/` or `src/fr/`)

| Asset Type | Path Pattern | Example |
|------------|--------------|---------|
| CSS | `../assets/css/[file]` | `../assets/css/main.css` |
| JS | `../assets/js/[file]` | `../assets/js/main.js` |
| Images | `../assets/images/[file]` | `../assets/images/product-1.jpg` |
| Videos | `../assets/videos/[file]` | `../assets/videos/experience.mp4` |
| Logos | `../assets/logos/[file]` | `../assets/logos/kamukore-logo.svg` |
| Fonts | Referenced in CSS | Via `@font-face` in CSS |

### Cross-Language Links

| Link Type | Path Pattern | Example |
|-----------|--------------|---------|
| Same Language | `[page].html` | `experience.html` |
| Other Language | `../[lang]/[page].html` | `../fr/index.html` |

## ✅ Standards Compliance

### WCAG 2.1 Level AA
- ✅ Semantic HTML5
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Proper heading hierarchy
- ✅ Alt text on images

### SEO Best Practices
- ✅ Meta tags (description, viewport)
- ✅ Hreflang tags for multilingual SEO
- ✅ Semantic HTML structure
- ✅ Proper title tags

### PMS Compliance
- ✅ All paths are relative
- ✅ `src/` folder mandatory
- ✅ Language folders mandatory
- ✅ Assets shared (no duplication)
- ✅ No duplicated CSS or JS

### Legal Compliance
- ✅ Privacy Policy (EN/FR)
- ✅ Terms of Use (EN/FR)
- ✅ Cookie Policy (EN/FR)
- ✅ Legal Notice (EN/FR)
- ✅ Cookie consent banner

## 📋 Quick Links

### For Developers
- [Assets Usage Guide](../src/assets/ASSETS_USAGE_GUIDE.md)
- [PMS Compliance Guide](PMS_COMPLIANCE.md)
- [International Standards](INTERNATIONAL_STANDARDS_COMPLIANCE.md)

### For Content Creators
- [Assets Placeholders](ASSETS_PLACEHOLDERS.md)
- [Assets Setup Summary](ASSETS_SETUP_SUMMARY.md)
- [Assets Examples](../ASSETS_EXAMPLES.html)

### For Project Managers
- [Project Structure](PROJECT_STRUCTURE.md)
- [PMS Verification](PMS_VERIFICATION.md)
- [Standards Compliance](INTERNATIONAL_STANDARDS_COMPLIANCE.md)

## 🎯 Project Status

### Completed ✅
- ✅ 30 HTML pages (15 EN + 15 FR)
- ✅ Single CSS file (`main.css`)
- ✅ Single JS file (`main.js`)
- ✅ Assets folder structure
- ✅ Documentation complete
- ✅ PMS compliant
- ✅ International standards compliant
- ✅ Legal pages complete

### Ready for Use
- ✅ Static site ready
- ✅ No build process required
- ✅ Easy to deploy
- ✅ Easy to maintain

## 📝 Documentation Updates

### Latest Updates
- ✅ Created separate folders for images, videos, and logos
- ✅ Added comprehensive asset documentation
- ✅ Created placeholder guides
- ✅ Added HTML code examples
- ✅ Organized all documentation

### Version History
- **v1.0** - Initial project setup with 30 HTML pages
- **v1.1** - Added assets folder structure (images, videos, logos)
- **v1.2** - Complete documentation organization

## 🔍 Finding Documentation

### By Topic
- **Structure**: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- **Standards**: [INTERNATIONAL_STANDARDS_COMPLIANCE.md](INTERNATIONAL_STANDARDS_COMPLIANCE.md)
- **Paths**: [PMS_COMPLIANCE.md](PMS_COMPLIANCE.md)
- **Assets**: [Assets Usage Guide](../src/assets/ASSETS_USAGE_GUIDE.md)

### By File Type
- **Markdown**: All `.md` files in this folder
- **HTML Examples**: [ASSETS_EXAMPLES.html](../ASSETS_EXAMPLES.html)
- **Asset Guides**: Files in `src/assets/` folder

## 📞 Support

For questions or issues:
1. Check the relevant documentation file
2. Review the [PMS Compliance Guide](PMS_COMPLIANCE.md)
3. Check [International Standards](INTERNATIONAL_STANDARDS_COMPLIANCE.md)

---

**Last Updated**: December 2025
**Project**: KAMUKORE - The Core of Many Cultures
**Status**: Production Ready ✅

