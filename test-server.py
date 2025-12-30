#!/usr/bin/env python3
"""
Simple test server - Verify server works before using main server
"""

import http.server
import socketserver
import os

PORT = 8000

# Change to project root
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("KAMUKORE Website - Test Server")
        print("=" * 60)
        print(f"Server running at: http://localhost:{PORT}")
        print(f"Project root: {os.getcwd()}")
        print("=" * 60)
        print("\nAccess your website:")
        print(f"  Homepage: http://localhost:{PORT}/src/pages/index.html")
        print(f"  Or browse: http://localhost:{PORT}/")
        print("\nPress Ctrl+C to stop the server")
        print("=" * 60)
        httpd.serve_forever()
except OSError as e:
    if "Address already in use" in str(e) or e.errno == 98:
        print(f"\nERROR: Port {PORT} is already in use!")
        print("Please:")
        print("  1. Stop any other server running on port 8000")
        print("  2. Or change PORT in this script to another number")
    else:
        print(f"\nERROR: {e}")
except KeyboardInterrupt:
    print("\n\nServer stopped.")
except Exception as e:
    print(f"\nERROR: {e}")
    import traceback
    traceback.print_exc()

