# GitHub Pages Setup Guide - KAMUKORE Website

## ✅ Repository Structure Verified

The repository is correctly structured for GitHub Pages:

```
KAMUKORE/
├── index.html          ← Root homepage (GitHub Pages entry point)
├── src/
│   ├── pages/         ← All HTML pages
│   └── assets/        ← CSS, JS, images, logos
│       ├── css/
│       ├── js/
│       ├── images/
│       └── logos/
└── docs/              ← Documentation
```

## 🚀 Enable GitHub Pages

### Step 1: Go to Repository Settings
1. Navigate to: https://github.com/paxiitdevteam/KAMUKORE
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)

### Step 2: Configure GitHub Pages
1. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
2. Click **Save**

### Step 3: Wait for Deployment
- GitHub Pages will build your site (usually takes 1-2 minutes)
- Your site will be available at:
  - **URL**: `https://paxiitdevteam.github.io/KAMUKORE/`

## ✅ Path Verification

All paths in `index.html` are correct for GitHub Pages:

- ✅ `src/assets/css/main.css` - Correct
- ✅ `src/assets/js/main.js` - Correct
- ✅ `src/assets/images/` - Correct
- ✅ `src/assets/logos/` - Correct
- ✅ `src/components/` - Correct (loaded via JS)

## 🔍 Troubleshooting

### If website doesn't load:

1. **Check GitHub Pages Status**
   - Go to Settings → Pages
   - Look for green checkmark ✓
   - Check for any error messages

2. **Verify Branch**
   - Ensure `main` branch is selected
   - Ensure root folder `/` is selected

3. **Check File Paths**
   - All paths use `src/assets/` (relative from root)
   - This is correct for GitHub Pages

4. **Check Browser Console**
   - Open browser DevTools (F12)
   - Check Console tab for errors
   - Check Network tab for failed requests

5. **Verify Components Load**
   - Components are loaded via JavaScript (`components.js`)
   - Check if `src/components/header.html` loads
   - Check if `src/components/footer.html` loads

## 📝 Important Notes

### Path Structure
- **Root `index.html`**: Uses `src/assets/` paths ✅
- **Pages in `src/pages/`**: Use `../assets/` paths ✅
- **Components**: Loaded dynamically via JavaScript ✅

### GitHub Pages URL Structure
- **Homepage**: `https://paxiitdevteam.github.io/KAMUKORE/`
- **Pages**: `https://paxiitdevteam.github.io/KAMUKORE/src/pages/about.html`
- **Assets**: `https://paxiitdevteam.github.io/KAMUKORE/src/assets/css/main.css`

### Custom Domain (Optional)
If you have a custom domain (kamukore.com):
1. Add `CNAME` file in root with domain name
2. Configure DNS records as per GitHub instructions
3. Update canonical URLs in HTML files

## ✅ Verification Checklist

- [ ] GitHub Pages enabled in repository settings
- [ ] Branch set to `main`
- [ ] Folder set to `/ (root)`
- [ ] `index.html` exists in root
- [ ] All `src/assets/` paths are correct
- [ ] Components load correctly
- [ ] No console errors in browser

## 🔗 Quick Links

- **Repository**: https://github.com/paxiitdevteam/KAMUKORE
- **GitHub Pages Settings**: https://github.com/paxiitdevteam/KAMUKORE/settings/pages
- **GitHub Pages URL**: https://paxiitdevteam.github.io/KAMUKORE/

---

**Last Updated**: December 2025

