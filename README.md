# KAMUKORE Website

## 🚀 Quick Start - Run the Server

### Git Bash (Recommended)

```bash
./start-server.sh
```

### Or Manual Start

```bash
python -m http.server 8000
```

### Then Open Browser

Visit: **http://localhost:8000/src/pages/index.html**

## 📁 Project Structure (PMS Compliant)

```
KAMUKORE SITE/
├── src/                    # Mandatory root folder (PMS)
│   ├── pages/              # All HTML pages (15 files)
│   └── assets/             # Shared assets (PMS)
│       ├── css/
│       ├── js/
│       ├── images/
│       ├── videos/
│       └── logos/
├── docs/                   # Documentation
└── start-server.sh         # Server starter (Git Bash)
```

## 🌐 Access URLs

- **Homepage**: http://localhost:8000/src/pages/index.html
- **Browse**: http://localhost:8000/
- **All Pages**: http://localhost:8000/src/pages/

## ✅ PMS Rules Followed

- ✅ `src/` folder mandatory
- ✅ All paths relative
- ✅ Assets shared in `src/assets/`
- ✅ No build tools
- ✅ Vanilla HTML/CSS/JS only

## 🛑 Stop Server

Press `Ctrl+C` in Git Bash terminal

---

**For detailed documentation, see `docs/` folder**
