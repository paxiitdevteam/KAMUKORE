#!/bin/bash
# KAMUKORE Website - Start Local Server
# Git Bash compatible server starter
# Respects PMS (Path Management System) rules

echo "========================================"
echo "KAMUKORE Website - Starting Server"
echo "========================================"
echo ""

# Get script directory (project root)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Check if Python is installed
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null; then
    echo "ERROR: Python is not installed!"
    echo "Please install Python 3.x from https://www.python.org/"
    exit 1
fi

# Check if src/pages exists (PMS compliance check)
if [ ! -d "src/pages" ]; then
    echo "ERROR: src/pages directory not found!"
    echo "PMS Rule: src/ folder is mandatory"
    echo "Make sure you're running from the project root."
    exit 1
fi

# Check if src/assets exists (PMS compliance check)
if [ ! -d "src/assets" ]; then
    echo "ERROR: src/assets directory not found!"
    echo "PMS Rule: assets must be in src/assets/"
    exit 1
fi

# Verify PMS structure
echo "Verifying PMS structure..."
if [ -f "src/pages/index.html" ] && [ -f "src/assets/css/main.css" ] && [ -f "src/assets/js/main.js" ]; then
    echo "✓ PMS structure verified"
else
    echo "WARNING: Some PMS required files missing"
fi

echo ""
echo "Starting server on http://localhost:8000"
echo ""
echo "Access your website at:"
echo "  Homepage: http://localhost:8000/src/pages/index.html"
echo "  Browse: http://localhost:8000/"
echo ""
echo "PMS Paths:"
echo "  Pages: src/pages/"
echo "  Assets: src/assets/"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

# Use Python 3 if available, otherwise Python
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
else
    python -m http.server 8000
fi
