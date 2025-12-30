# How to Start the Server - Step by Step

## ✅ Simple Method (Recommended)

### Windows Users

1. **Open File Explorer**
2. **Navigate to**: `KAMUKORE SITE` folder
3. **Double-click**: `START_SERVER.bat`
4. **Wait for**: "Serving HTTP on 0.0.0.0 port 8000"
5. **Open browser**: http://localhost:8000/src/pages/index.html

### If Double-Click Doesn't Work

1. **Open Command Prompt** (cmd)
2. **Navigate to project**:
   ```bash
   cd "C:\Users\PC-PAXIIT\Desktop\KAMUKORE SITE"
   ```
3. **Run**:
   ```bash
   START_SERVER.bat
   ```

## 🔧 Manual Method

### Step 1: Open Terminal/Command Prompt

**Windows**: Press `Win + R`, type `cmd`, press Enter

### Step 2: Navigate to Project

```bash
cd "C:\Users\PC-PAXIIT\Desktop\KAMUKORE SITE"
```

### Step 3: Start Server

```bash
python -m http.server 8000
```

### Step 4: Verify Server Started

You should see:
```
Serving HTTP on 0.0.0.0 port 8000 ...
```

### Step 5: Open Browser

Visit: **http://localhost:8000/src/pages/index.html**

## ✅ Verification Checklist

- [ ] Python installed (`python --version` works)
- [ ] In project root folder
- [ ] `src/pages/index.html` exists
- [ ] Server shows "Serving HTTP on..."
- [ ] Browser can access localhost:8000

## 🐛 Troubleshooting

### "Python not found"
- Install Python: https://www.python.org/
- Make sure to check "Add Python to PATH" during installation

### "Port 8000 already in use"
- Stop other server: `Ctrl+C` in that terminal
- Or use different port: `python -m http.server 8001`

### "Cannot find src/pages/index.html"
- Make sure you're in project root
- Check: `dir src\pages\index.html`

### "ERR_CONNECTION_REFUSED"
- Server is not running
- Check terminal for errors
- Make sure firewall allows Python

## 🌐 URLs to Try

Once server is running:

1. **Homepage**: http://localhost:8000/src/pages/index.html
2. **Root**: http://localhost:8000/
3. **Pages folder**: http://localhost:8000/src/pages/

## 📝 Notes

- Server runs until you press `Ctrl+C`
- Keep terminal window open while using website
- Changes to files require browser refresh (F5)

---

**Start with `START_SERVER.bat` - it's the easiest way!**

