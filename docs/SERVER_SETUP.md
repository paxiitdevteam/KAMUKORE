# Server Setup Guide - KAMUKORE Website

## ✅ Server Installation Complete

### Custom Server Created
- ✅ `server.py` - Python server with PMS-compliant path handling
- ✅ `start-server.bat` - Windows startup script
- ✅ `start-server.sh` - Linux/Mac startup script

## 🚀 How to Start Server

### Windows
**Double-click**: `start-server.bat`
**Or run**: `python server.py`

### Linux/Mac
```bash
./start-server.sh
# Or
python3 server.py
```

## 📍 Server Configuration

### Root Directory
- Server runs from **project root** (`KAMUKORE SITE/`)
- Respects **PMS paths** (`src/pages/`, `src/assets/`)
- All relative paths work correctly

### Port
- Default: **8000**
- Access: `http://localhost:8000`

### Features
- ✅ Root redirect to `src/pages/index.html`
- ✅ Proper MIME types for HTML
- ✅ CORS headers for development
- ✅ Cache control headers
- ✅ PMS path compliance

## 🌐 Access URLs

### Main Pages
- **Homepage**: http://localhost:8000/src/pages/index.html
- **Root**: http://localhost:8000/ (redirects to homepage)
- **All Pages**: http://localhost:8000/src/pages/

### Assets
- **CSS**: http://localhost:8000/src/assets/css/main.css
- **JS**: http://localhost:8000/src/assets/js/main.js
- **Images**: http://localhost:8000/src/assets/images/
- **Logos**: http://localhost:8000/src/assets/logos/

## ✅ PMS Compliance

### Path Structure
```
http://localhost:8000/
├── src/
│   ├── pages/          ✅ Pages accessible
│   └── assets/         ✅ Assets accessible
└── docs/               ✅ Documentation accessible
```

### Relative Paths Work
- From `src/pages/index.html`:
  - `../assets/css/main.css` ✅
  - `../assets/js/main.js` ✅
  - `experience.html` ✅

## 🛑 Stop Server

Press `Ctrl+C` in the terminal

## 🔧 Troubleshooting

### Port Already in Use
If port 8000 is busy:
1. Stop other server: `Ctrl+C`
2. Or change port in `server.py`: `PORT = 8001`

### Python Not Found
Install Python 3.x from: https://www.python.org/

### Path Issues
Make sure you're running from project root:
```bash
cd "KAMUKORE SITE"
python server.py
```

---

**Server is ready! Run `python server.py` to start.**

