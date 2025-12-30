# Project Structure Documentation

## Overview
This is a multilingual website project with English and French language versions, sharing common assets.

## Directory Structure

```
/
└── src
    ├── en                          # English language version
    │   ├── index.html              # Homepage
    │   ├── experience.html         # Experience listing page
    │   ├── experience-detail.html  # Experience detail page
    │   ├── culture.html            # Culture page
    │   ├── region.html             # Region page
    │   ├── craft.html              # Craft page
    │   ├── product.html            # Product page
    │   ├── wear.html               # Wear/Fashion page
    │   ├── table.html              # Table page
    │   ├── about.html              # About page
    │   ├── contact.html            # Contact page
    │   ├── privacy-policy.html     # Privacy policy
    │   ├── terms-of-use.html       # Terms of use
    │   ├── cookie-policy.html      # Cookie policy
    │   └── legal-notice.html       # Legal notice
    │
    ├── fr                          # French language version
    │   ├── index.html              # Page d'accueil
    │   ├── experience.html         # Page d'expériences
    │   ├── experience-detail.html  # Page de détail d'expérience
    │   ├── culture.html            # Page culture
    │   ├── region.html             # Page région
    │   ├── craft.html              # Page artisanat
    │   ├── product.html            # Page produit
    │   ├── wear.html               # Page mode/vêtements
    │   ├── table.html              # Page table
    │   ├── about.html              # Page à propos
    │   ├── contact.html            # Page contact
    │   ├── privacy-policy.html     # Politique de confidentialité
    │   ├── terms-of-use.html       # Conditions d'utilisation
    │   ├── cookie-policy.html      # Politique de cookies
    │   └── legal-notice.html       # Avis légal
    │
    └── assets                      # Shared assets (used by both languages)
        ├── css
        │   └── main.css            # Main stylesheet
        ├── js
        │   └── main.js             # Main JavaScript file
        ├── img                     # Image assets
        └── fonts                   # Font files
```

## Structure Details

### Language Directories (`en/` and `fr/`)
- **Purpose**: Separate HTML files for each language version
- **Content**: Complete page sets for English and French
- **Pages**: 15 HTML pages per language version

### Shared Assets (`assets/`)
- **Location**: Outside language directories (shared between `en/` and `fr/`)
- **CSS**: Single main stylesheet (`main.css`)
- **JavaScript**: Single main script file (`main.js`)
- **Images**: Centralized image storage (`img/`)
- **Fonts**: Font files directory (`fonts/`)

## Page Types

### Main Content Pages
- `index.html` - Homepage
- `experience.html` - Experience listing
- `experience-detail.html` - Individual experience details
- `culture.html` - Cultural content
- `region.html` - Regional information
- `craft.html` - Craft-related content
- `product.html` - Product information
- `wear.html` - Fashion/wearables
- `table.html` - Table-related content
- `about.html` - About page
- `contact.html` - Contact page

### Legal Pages
- `privacy-policy.html` - Privacy policy
- `terms-of-use.html` - Terms of use
- `cookie-policy.html` - Cookie policy
- `legal-notice.html` - Legal notice

## Notes
- Both language versions have identical page structures
- Assets are shared to avoid duplication
- Path references from language directories to assets would typically use `../assets/`

