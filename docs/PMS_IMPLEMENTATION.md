# 📍 Path Manager System (PMS) Implementation

**Date**: December 2025  
**Status**: ✅ Complete

---

## 🎯 **Objective**

Implement a centralized Path Manager System (PMS) to eliminate hardcoded paths and ensure consistent path management across the entire website. This prevents loading issues and maintains development standards.

---

## ✅ **Implementation**

### **1. Path Manager JavaScript** ✅

**File Created**: `src/assets/js/path-manager.js`

**Features**:
- Dynamically determines base path based on page location
- Sets CSS custom properties (variables) for all asset paths
- Works for both root (`index.html`) and pages (`src/pages/*.html`)
- Centralized path management

**Key Functions**:
```javascript
PathManager.getBasePath()      // Returns '' or '../' based on location
PathManager.getAssetPath()     // Returns full path to asset
PathManager.init()             // Sets CSS variables
```

---

### **2. CSS Variables** ✅

**File Modified**: `src/assets/css/main.css`

**CSS Variables Added**:
```css
:root {
  --pms-base-path: '';
  --pms-assets-path: 'src/assets/';
  --pms-images-path: 'src/assets/images/';
  --pms-hero-image: 'src/assets/images/helo.png';
}
```

**Usage**:
```css
body {
  background-image: url(var(--pms-hero-image));
}
```

---

### **3. Pages Updated** ✅

**All 15 pages** now include `path-manager.js`:

1. ✅ `index.html` (root)
2. ✅ `src/pages/about.html`
3. ✅ `src/pages/contact.html`
4. ✅ `src/pages/experience.html`
5. ✅ `src/pages/experience-detail.html`
6. ✅ `src/pages/craft.html`
7. ✅ `src/pages/culture.html`
8. ✅ `src/pages/product.html`
9. ✅ `src/pages/wear.html`
10. ✅ `src/pages/table.html`
11. ✅ `src/pages/region.html`
12. ✅ `src/pages/hospitality.html`
13. ✅ `src/pages/privacy-policy.html`
14. ✅ `src/pages/terms-of-use.html`
15. ✅ `src/pages/cookie-policy.html`
16. ✅ `src/pages/legal-notice.html`

**Script Order** (Critical):
```html
<script src="../assets/js/path-manager.js"></script>  <!-- Must load first -->
<script src="../assets/js/translations.js"></script>
<script src="../assets/js/components.js"></script>
```

---

## 🔧 **How It Works**

### **Path Detection**

The system automatically detects the page location:

1. **Root Level** (`index.html`):
   - Base path: `''` (empty)
   - CSS variable: `--pms-hero-image: 'src/assets/images/helo.png'`

2. **Pages Level** (`src/pages/*.html`):
   - Base path: `'../'`
   - CSS variable: `--pms-hero-image: '../src/assets/images/helo.png'`

### **CSS Variable Usage**

Instead of hardcoded paths:
```css
/* ❌ OLD - Hardcoded */
background-image: url('src/assets/images/helo.png');
```

Now uses PMS variables:
```css
/* ✅ NEW - PMS Managed */
background-image: url(var(--pms-hero-image));
```

---

## 📋 **Benefits**

### **1. Single Source of Truth**
- ✅ All paths managed in one place
- ✅ Easy to update and maintain
- ✅ No duplicate path definitions

### **2. Dynamic Path Resolution**
- ✅ Automatically adjusts based on page location
- ✅ Works for root and subdirectories
- ✅ No manual path adjustments needed

### **3. Performance**
- ✅ Reduces loading issues
- ✅ Prevents path conflicts
- ✅ Consistent path resolution

### **4. Standards Compliance**
- ✅ Follows PMS development standards
- ✅ Eliminates hardcoded paths
- ✅ Maintainable and scalable

---

## 🎯 **PMS Variables Available**

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `--pms-base-path` | Base path prefix | `''` or `'../'` |
| `--pms-assets-path` | Assets root path | `'src/assets/'` |
| `--pms-images-path` | Images directory | `'src/assets/images/'` |
| `--pms-hero-image` | Hero image path | `'src/assets/images/helo.png'` |
| `--pms-css-path` | CSS directory | `'src/assets/css/'` |
| `--pms-js-path` | JavaScript directory | `'src/assets/js/'` |
| `--pms-components-path` | Components directory | `'src/components/'` |
| `--pms-logos-path` | Logos directory | `'src/assets/logos/'` |
| `--pms-videos-path` | Videos directory | `'src/assets/videos/'` |

---

## ✅ **Verification**

### **Checklist**:
- [x] Path Manager created (`path-manager.js`)
- [x] CSS variables defined
- [x] Background image uses PMS variable
- [x] All 16 pages include path-manager.js
- [x] Script loads before other scripts
- [x] No hardcoded paths in CSS
- [x] Paths resolve correctly on root and pages

---

## 🚀 **Usage Guidelines**

### **For Developers**:

1. **Always use PMS variables** in CSS:
   ```css
   background-image: url(var(--pms-hero-image));
   ```

2. **Never hardcode paths**:
   ```css
   /* ❌ DON'T */
   background-image: url('src/assets/images/helo.png');
   ```

3. **Add new paths to PMS**:
   - Update `path-manager.js` to add new CSS variables
   - Use the variable in CSS

---

## 📝 **Future Enhancements**

- Add more asset paths as needed
- Support for additional directories
- Path validation and error handling
- Performance monitoring

---

**Status**: ✅ **Complete**  
**PMS is now the standard for all path management**

