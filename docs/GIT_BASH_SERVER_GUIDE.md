# Git Bash Server Guide - KAMUKORE Website

## ✅ Using Git Bash Only

This project uses **Git Bash** for all server operations, respecting PMS rules.

## 🚀 Start Server

### Method 1: Using Script (Recommended)

```bash
./start-server.sh
```

### Method 2: Manual Start

```bash
cd "KAMUKORE SITE"
python -m http.server 8000
```

## 📋 Prerequisites

### Git Bash
- Should already be installed (comes with Git for Windows)
- Open Git Bash from project folder

### Python
Check if installed:
```bash
python --version
# or
python3 --version
```

If not installed: https://www.python.org/

## ✅ PMS Verification

The `start-server.sh` script automatically verifies:

- ✅ `src/` folder exists (mandatory)
- ✅ `src/pages/` exists
- ✅ `src/assets/` exists
- ✅ Required files present

## 🌐 Access URLs

Once server starts:

- **Homepage**: http://localhost:8000/src/pages/index.html
- **Browse**: http://localhost:8000/
- **Pages**: http://localhost:8000/src/pages/

## 🔧 Troubleshooting

### "Permission denied" when running script
```bash
chmod +x start-server.sh
./start-server.sh
```

### "Python not found"
- Install Python 3.x
- Make sure it's in PATH
- Try `python3` instead of `python`

### "Port 8000 already in use"
```bash
# Find process
netstat -ano | grep :8000

# Or use different port
python -m http.server 8001
```

### "src/pages not found"
- Make sure you're in project root
- Check: `ls src/pages/`

## 📝 Project Rules (PMS)

- ✅ Vanilla HTML/CSS/JS only
- ✅ No frameworks
- ✅ No build tools
- ✅ `src/` folder mandatory
- ✅ All paths relative
- ✅ Assets shared in `src/assets/`

## 🛑 Stop Server

Press `Ctrl+C` in Git Bash terminal

---

**Always use Git Bash for this project!**

