# KAMUKORE Website - Project Structure

## 📁 Clean & Standardized Structure

```
KAMUKORE SITE/
│
├── docs/                          # All documentation
│   ├── README.md                 # Documentation index
│   ├── PROJECT_STRUCTURE.md     # This file (in docs/)
│   ├── ASSETS_EXAMPLES.html      # Code examples
│   └── ... (all other docs)
│
└── src/                           # Source files only
    ├── pages/                     # Single pages folder (15 HTML files)
    │   ├── index.html
    │   ├── experience.html
    │   ├── culture.html
    │   └── ... (12 more)
    │
    └── assets/                     # Organized assets
        ├── css/
        │   └── main.css           # Single CSS file
        ├── js/
        │   ├── main.js            # Main JavaScript
        │   └── translations.js   # Translation system
        ├── images/                # All images (consolidated)
        ├── videos/                # Video files
        ├── logos/                 # Logo files
        └── fonts/                 # Font files
```

## ✅ Standardization Rules

### Pages
- ✅ **Single location**: `src/pages/` only
- ✅ **No duplicates**: No `en/` or `fr/` folders
- ✅ **Modern approach**: Translation system handles languages

### Assets
- ✅ **Organized folders**: Each asset type in its own folder
- ✅ **No duplicates**: Single image folder (`images/`)
- ✅ **Clear structure**: Easy to find and maintain

### Documentation
- ✅ **Centralized**: All docs in `docs/` folder
- ✅ **No hanging files**: Nothing in root level
- ✅ **Well organized**: Easy to navigate

## 📊 File Counts

- **HTML Pages**: 15 files (in `src/pages/`)
- **CSS Files**: 1 file (`main.css`)
- **JS Files**: 2 files (`main.js`, `translations.js`)
- **Documentation**: All in `docs/` folder

## 🎯 Key Points

1. **No Duplicates**: Single source for everything
2. **Clean Root**: No files hanging in project root
3. **Standardized**: Consistent structure throughout
4. **Modern**: Translation system, not duplicate files

---

**Last Updated**: After cleanup and standardization
**Status**: ✅ Clean and organized

