#!/usr/bin/env python3
"""
KAMUKORE Website - Local Development Server
Serves the website with proper path handling for PMS compliance
"""

import http.server
import socketserver
import os
import sys
from urllib.parse import unquote

class KAMUKOREServer(http.server.SimpleHTTPRequestHandler):
    """Custom server handler for KAMUKORE website"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.getcwd(), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        # Add cache control
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Handle root redirect to pages
        if self.path == '/' or self.path == '/index.html':
            self.path = '/src/pages/index.html'
        
        # Redirect table.html to restaurant.html (old name to new name)
        if self.path == '/src/pages/table.html' or self.path.endswith('/table.html'):
            self.send_response(301)  # Permanent redirect
            self.send_header('Location', '/src/pages/restaurant.html')
            self.end_headers()
            return
        
        # Decode URL path
        path = unquote(self.path)
        
        # Remove leading slash and handle Windows paths
        file_path = path.lstrip('/').replace('/', os.sep)
        
        # Ensure proper MIME types
        if path.endswith('.html'):
            self.send_response(200)
            self.send_header('Content-type', 'text/html; charset=utf-8')
            self.end_headers()
            try:
                if os.path.exists(file_path):
                    with open(file_path, 'rb') as f:
                        self.wfile.write(f.read())
                else:
                    self.send_error(404, f"File not found: {file_path}")
            except Exception as e:
                self.send_error(500, f"Server error: {str(e)}")
            return
        
        # Default handling for other files
        super().do_GET()

def main():
    PORT = 8000
    
    # Change to project root directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Check if src/pages exists
    if not os.path.exists('src/pages'):
        print("ERROR: src/pages directory not found!")
        print("Make sure you're running from the project root.")
        sys.exit(1)
    
    Handler = KAMUKOREServer
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 60)
            print("KAMUKORE Website Server")
            print("=" * 60)
            print(f"Server running at: http://localhost:{PORT}")
            print(f"Project root: {os.getcwd()}")
            print("=" * 60)
            print("\nAccess your website:")
            print(f"  Homepage: http://localhost:{PORT}/src/pages/index.html")
            print(f"  Or: http://localhost:{PORT}/ (redirects to homepage)")
            print("\nPress Ctrl+C to stop the server")
            print("=" * 60)
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 98 or "Address already in use" in str(e):
            print(f"ERROR: Port {PORT} is already in use!")
            print("Please stop the other server or use a different port.")
        else:
            print(f"ERROR: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\nServer stopped.")
        sys.exit(0)

if __name__ == "__main__":
    main()

