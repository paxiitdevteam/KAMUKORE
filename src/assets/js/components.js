/* ============================================
   KAMUKORE - Component Loader
   Loads reusable header, footer, and cookie banner
   ============================================ */

(function() {
    'use strict';

    // Determine base path based on current page location
    function getBasePath() {
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
    }

    // Load component into element
    function loadComponent(elementId, componentPath) {
        const element = document.getElementById(elementId);
        if (!element) {
            return;
        }

        const basePath = getBasePath();
        const fullPath = basePath + componentPath;

        fetch(fullPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load component: ${componentPath}`);
                }
                return response.text();
            })
            .then(html => {
                // Components now use absolute paths, so no path adjustment needed
                element.innerHTML = html;
                
                // Apply PMS paths to logo images
                const logoImages = element.querySelectorAll('img[data-pms-logo]');
                logoImages.forEach(function(img) {
                    const logoType = img.getAttribute('data-pms-logo');
                    if (logoType === 'main') {
                        // Function to set logo path
                        function setLogoPath() {
                            const isPagesFolder = window.location.pathname.includes('/src/pages/');
                            
                            if (window.PathManager) {
                                const logoPath = window.PathManager.getAssetPath('src/assets/logos/logo7.png');
                                if (logoPath) {
                                    img.src = logoPath;
                                    return;
                                }
                            }
                            
                            // Fallback: use direct path based on page location
                            if (isPagesFolder) {
                                // Pages in src/pages/ need relative path (go up one level to src/)
                                img.src = '../assets/logos/logo7.png';
                            } else {
                                // Root level uses src/ path
                                img.src = 'src/assets/logos/logo7.png';
                            }
                        }
                        
                        // Try to set logo immediately
                        setLogoPath();
                        
                        // Retry if PathManager loads later (max 5 attempts)
                        let retryCount = 0;
                        const maxRetries = 5;
                        const retryInterval = setInterval(function() {
                            if (window.PathManager) {
                                const logoPath = window.PathManager.getAssetPath('src/assets/logos/logo7.png');
                                if (logoPath) {
                                    img.src = logoPath;
                                    clearInterval(retryInterval);
                                    return;
                                }
                            }
                            
                            // If PathManager still not ready after retries, ensure fallback is set
                            if (retryCount >= maxRetries) {
                                if (!img.src || img.src === '' || !img.src.includes('logo7.png')) {
                                    setLogoPath(); // Ensure fallback path is set
                                }
                                clearInterval(retryInterval);
                            }
                            retryCount++;
                        }, 150);
                    }
                });
                
                // Reinitialize scripts after component loads
                setTimeout(function() {
                    // Initialize translation
                    if (typeof initTranslation === 'function') {
                        initTranslation();
                    }
                    
                    // Reattach language switcher event listeners (important!)
                    if (typeof initLanguageSwitcher === 'function') {
                        initLanguageSwitcher();
                    }
                    
                    // Reattach mobile menu listeners
                    if (typeof initMobileMenu === 'function') {
                        initMobileMenu();
                    }
                    
                    // Reattach mega menu listeners
                    if (typeof initMegaMenu === 'function') {
                        initMegaMenu();
                    }
                    
                    // Reattach cookie banner listeners
                    if (typeof initCookieBanner === 'function') {
                        initCookieBanner();
                    }
                    
                    // Update copyright year after translation
                    if (typeof updateCopyrightYear === 'function') {
                        updateCopyrightYear();
                    }
                }, 150);
            })
            .catch(error => {
                element.innerHTML = '<p>Error loading component</p>';
            });
    }

    // Load all components when DOM is ready
    function loadComponents() {
        const basePath = getBasePath();
        
        // Load unified header (works for both root and pages)
        if (document.getElementById('header-component')) {
            loadComponent('header-component', basePath + 'src/components/header.html');
        }
        
        // Load unified footer (works for both root and pages)
        if (document.getElementById('footer-component')) {
            loadComponent('footer-component', basePath + 'src/components/footer.html');
        }
        
        // Load cookie banner (same for all)
        if (document.getElementById('cookie-banner-component')) {
            loadComponent('cookie-banner-component', basePath + 'src/components/cookie-banner.html');
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }

})();

