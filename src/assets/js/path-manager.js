/* ============================================
   KAMUKORE - Path Manager System (PMS)
   Centralized path management for all assets
   ============================================ */

(function() {
    'use strict';

    // Path Manager System
    const PathManager = {
        // Determine base path based on current page location
        getBasePath: function() {
            const path = window.location.pathname;
            // Handle GitHub Pages (repository name in path)
            // Examples: /KAMUKORE/ or /KAMUKORE/index.html or /KAMUKORE/src/pages/about.html
            const isRoot = path === '/' || 
                          path === '/index.html' || 
                          path.endsWith('/index.html') ||
                          path.endsWith('/') ||
                          (path.split('/').filter(p => p).length <= 1 && !path.includes('/src/pages/'));
            
            if (isRoot) {
                return ''; // Root level
            } else if (path.includes('/src/pages/')) {
                return '../'; // Pages level
            }
            return ''; // Default to root
        },

        // Get asset path (images, videos, etc.)
        getAssetPath: function(assetPath) {
            const basePath = this.getBasePath();
            const isPagesFolder = window.location.pathname.includes('/src/pages/');
            
            // For logo paths, handle pages folder differently
            if (assetPath.includes('logos/') && isPagesFolder) {
                // Pages in src/pages/ need: ../assets/logos/logo7.png
                // Remove 'src/' from the path since we're already going up one level
                return basePath + assetPath.replace('src/', '');
            }
            
            return basePath + assetPath;
        },

        // Initialize PMS - Set CSS variables for paths
        init: function() {
            const basePath = this.getBasePath();
            const root = document.documentElement;

            // Set CSS custom properties for paths
            root.style.setProperty('--pms-base-path', basePath);
            root.style.setProperty('--pms-assets-path', basePath + 'src/assets/');
            root.style.setProperty('--pms-images-path', basePath + 'src/assets/images/');
            root.style.setProperty('--pms-css-path', basePath + 'src/assets/css/');
            root.style.setProperty('--pms-js-path', basePath + 'src/assets/js/');
            root.style.setProperty('--pms-components-path', basePath + 'src/components/');
            
            // Specific image paths
            root.style.setProperty('--pms-hero-image', basePath + 'src/assets/images/hero-homepage.webp');
            root.style.setProperty('--pms-logos-path', basePath + 'src/assets/logos/');
            root.style.setProperty('--pms-videos-path', basePath + 'src/assets/videos/');
            // Logo paths
            root.style.setProperty('--pms-logo-main', basePath + 'src/assets/logos/logo7.png');
            root.style.setProperty('--pms-watermark-logo', basePath + 'src/assets/logos/logo7.png');
        }
    };

    // Initialize PMS when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            PathManager.init();
        });
    } else {
        PathManager.init();
    }

    // Expose to global scope
    window.PathManager = PathManager;

})();

