# Modern Approach Proposal - Single Pages + Translation System

## Proposed Structure

```
src/
├── pages/                    # Single folder with all pages
│   ├── index.html           # One homepage (translated via JS)
│   ├── experience.html      # One experience page
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
└── assets/
    ├── css/
    │   └── main.css
    ├── js/
    │   ├── main.js
    │   └── translations.js   # Translation data (EN/FR)
    ├── images/
    ├── videos/
    └── logos/
```

## How It Would Work

### 1. Single HTML Files
- One `index.html` (not two)
- Contains placeholders: `<span data-translate="home.title">Home</span>`
- JavaScript replaces content based on language

### 2. Translation System
```javascript
// translations.js
const translations = {
  en: {
    'home.title': 'Home',
    'home.welcome': 'Welcome to KAMUKORE',
    // ... all English text
  },
  fr: {
    'home.title': 'Accueil',
    'home.welcome': 'Bienvenue chez KAMUKORE',
    // ... all French text
  }
};
```

### 3. Language Switching
- User clicks language switcher
- JavaScript loads appropriate translation
- Content updates dynamically
- URL can change: `?lang=en` or `?lang=fr`

## Benefits

✅ **Single source of truth** - One HTML file per page  
✅ **Easier maintenance** - Update once, not twice  
✅ **Centralized translations** - All text in one place  
✅ **Modern approach** - Dynamic content switching  
✅ **Less duplication** - 15 files instead of 30  

## Implementation

### HTML Example
```html
<h1 data-translate="home.title">Home</h1>
<p data-translate="home.welcome">Welcome to KAMUKORE</p>
```

### JavaScript
```javascript
function setLanguage(lang) {
  // Load translations
  // Replace all data-translate elements
  // Update URL
  // Save preference
}
```

## Questions

1. **Do you want this approach?** (Single pages + JS translation)
2. **Or keep current?** (Separate folders, static files)
3. **Or hybrid?** (Pages folder + separate language versions)

---

**Let me know your preference and I'll restructure accordingly!**

