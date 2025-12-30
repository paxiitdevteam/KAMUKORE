# Server Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Issue: ERR_CONNECTION_REFUSED

**Meaning**: Server is not running or not accessible

**Solutions**:

1. **Check if server is running**:
   ```bash
   netstat -ano | findstr ":8000"
   ```
   If nothing shows, server is not running.

2. **Start the server**:
   ```bash
   python server.py
   ```
   Or use the test server:
   ```bash
   python test-server.py
   ```

3. **Check Python installation**:
   ```bash
   python --version
   ```
   Should show Python 3.x

4. **Check firewall**:
   - Windows Firewall might block port 8000
   - Try temporarily disabling firewall
   - Or add exception for Python

5. **Try different port**:
   Edit `server.py` and change:
   ```python
   PORT = 8001  # Instead of 8000
   ```

### Issue: Port Already in Use

**Solution**:
1. Find process using port 8000:
   ```bash
   netstat -ano | findstr ":8000"
   ```
2. Kill the process:
   ```bash
   taskkill /PID <process_id> /F
   ```
3. Or use different port

### Issue: File Not Found

**Check**:
1. Are you in project root?
   ```bash
   cd "KAMUKORE SITE"
   ```
2. Does `src/pages/index.html` exist?
   ```bash
   dir src\pages\index.html
   ```

### Issue: Path Issues

**Verify PMS paths**:
- Pages: `src/pages/index.html` ✅
- CSS: `src/assets/css/main.css` ✅
- JS: `src/assets/js/main.js` ✅

## ✅ Step-by-Step Server Start

### Method 1: Using test-server.py (Recommended)
```bash
cd "KAMUKORE SITE"
python test-server.py
```

### Method 2: Using server.py
```bash
cd "KAMUKORE SITE"
python server.py
```

### Method 3: Simple Python server
```bash
cd "KAMUKORE SITE"
python -m http.server 8000
```

## 🌐 Access URLs

Once server is running:

- **Homepage**: http://localhost:8000/src/pages/index.html
- **Browse**: http://localhost:8000/
- **Pages**: http://localhost:8000/src/pages/

## 🔍 Verification Steps

1. **Check server output**:
   Should see:
   ```
   Server running at: http://localhost:8000
   ```

2. **Test in browser**:
   Open: http://localhost:8000/src/pages/index.html

3. **Check terminal**:
   Should see request logs when accessing pages

## 🛑 Stop Server

Press `Ctrl+C` in the terminal where server is running

---

**If still having issues, use `test-server.py` - it's simpler and more reliable.**

