/* ============================================
   KAMUKORE - Main JavaScript
   Vanilla JS only - No dependencies
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMain = document.querySelector('.nav-main');
    
    if (!menuToggle || !navMain) {
      return;
    }
    
    menuToggle.addEventListener('click', function() {
      navMain.classList.toggle('open');
      const isOpen = navMain.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMain.contains(event.target) && !menuToggle.contains(event.target)) {
        navMain.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMain.classList.contains('open')) {
        navMain.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
  }

  // ============================================
  // MEGA MENU - CATEGORIZED FULL-WIDTH MENU
  // ============================================
  function initMegaMenu() {
    const navCategories = document.querySelectorAll('.nav-category');
    
    if (!navCategories.length) {
      return;
    }
    
    // Check if mobile (viewport width <= 768px)
    function isMobile() {
      return window.innerWidth <= 768;
    }
    
    navCategories.forEach(function(category) {
      const categoryLink = category.querySelector('.nav-category-link');
      const megaMenu = category.querySelector('.mega-menu');
      
      if (!categoryLink || !megaMenu) {
        return;
      }
      
      // Prevent default link behavior for category links (they're just labels)
      categoryLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (isMobile()) {
          // Toggle active class for mobile
          const isActive = category.classList.contains('active');
          
          // Close all other categories
          navCategories.forEach(function(otherCategory) {
            if (otherCategory !== category) {
              otherCategory.classList.remove('active');
            }
          });
          
          // Toggle current category
          category.classList.toggle('active');
        }
        // On desktop, hover handles it, but prevent navigation anyway
      });
      
      // Close mega menu when clicking outside (desktop)
      if (!isMobile()) {
        document.addEventListener('click', function(event) {
          if (!category.contains(event.target)) {
            category.classList.remove('active');
          }
        });
        
        // Handle hover for desktop
        category.addEventListener('mouseenter', function() {
          if (!isMobile()) {
            category.classList.add('active');
          }
        });
        
        category.addEventListener('mouseleave', function() {
          if (!isMobile()) {
            category.classList.remove('active');
          }
        });
      }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        // Close all mega menus on resize
        navCategories.forEach(function(category) {
          category.classList.remove('active');
        });
      }, 250);
    });
  }

  // ============================================
  // COOKIE CONSENT BANNER
  // ============================================
  function initCookieBanner() {
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptAllBtn = document.querySelector('.btn-cookie-accept-all');
    const essentialBtn = document.querySelector('.btn-cookie-essential');
    const customizeBtn = document.querySelector('.btn-cookie-customize');
    const customizePanel = document.getElementById('cookie-customize-panel');
    const saveBtn = document.querySelector('.btn-cookie-save');
    
    if (!cookieBanner) {
      return;
    }
    
    // Check if consent already given
    const consentGiven = localStorage.getItem('kamukore-cookie-consent');
    
    if (!consentGiven) {
      cookieBanner.classList.add('show');
    }
    
    // Handle Accept All button
    if (acceptAllBtn) {
      acceptAllBtn.addEventListener('click', function() {
        localStorage.setItem('kamukore-cookie-consent', 'all');
        localStorage.setItem('kamukore-cookie-analytics', 'accepted');
        localStorage.setItem('kamukore-cookie-marketing', 'accepted');
        cookieBanner.classList.remove('show');
      });
    }
    
    // Handle Essential Only button
    if (essentialBtn) {
      essentialBtn.addEventListener('click', function() {
        localStorage.setItem('kamukore-cookie-consent', 'essential');
        localStorage.setItem('kamukore-cookie-analytics', 'rejected');
        localStorage.setItem('kamukore-cookie-marketing', 'rejected');
        cookieBanner.classList.remove('show');
      });
    }
    
    // Handle Customize button
    if (customizeBtn && customizePanel) {
      customizeBtn.addEventListener('click', function() {
        customizePanel.style.display = customizePanel.style.display === 'none' ? 'block' : 'none';
      });
    }
    
    // Handle Save Preferences button
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        const analytics = document.getElementById('cookie-analytics');
        const marketing = document.getElementById('cookie-marketing');
        
        localStorage.setItem('kamukore-cookie-consent', 'custom');
        localStorage.setItem('kamukore-cookie-analytics', analytics && analytics.checked ? 'accepted' : 'rejected');
        localStorage.setItem('kamukore-cookie-marketing', marketing && marketing.checked ? 'accepted' : 'rejected');
        
        cookieBanner.classList.remove('show');
      });
    }
    
    // Load saved preferences
    const savedAnalytics = localStorage.getItem('kamukore-cookie-analytics');
    const savedMarketing = localStorage.getItem('kamukore-cookie-marketing');
    
    if (document.getElementById('cookie-analytics')) {
      document.getElementById('cookie-analytics').checked = savedAnalytics === 'accepted';
    }
    if (document.getElementById('cookie-marketing')) {
      document.getElementById('cookie-marketing').checked = savedMarketing === 'accepted';
    }
  }

  // ============================================
  // LANGUAGE SWITCHER - Modern translation system
  // ============================================
  function initLanguageSwitcher() {
    // Wait for translations.js to load (it's loaded in <head>)
    if (typeof translations === 'undefined') {
      // If not loaded yet, wait a bit
      setTimeout(initLanguageSwitcher, 100);
      return;
    }
    
    // Initialize translation on page load
    if (typeof initTranslation === 'function') {
      initTranslation();
    }
    
    // Setup language switcher clicks
    const langLinks = document.querySelectorAll('.lang-switcher a[data-lang]');
    langLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const lang = link.getAttribute('data-lang');
        if (lang && typeof setLanguage === 'function') {
          setLanguage(lang);
        }
      });
    });
  }

  // ============================================
  // NAVIGATION ACTIVE STATE
  // ============================================
  function initNavigationActive() {
    const navLinks = document.querySelectorAll('.nav-main a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(function(link) {
      const linkPath = link.getAttribute('href');
      if (linkPath && currentPath.includes(linkPath)) {
        link.classList.add('active');
      }
    });
  }

  // ============================================
  // FORM VALIDATION (Enhanced)
  // ============================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(function(input) {
        // Validate on blur
        input.addEventListener('blur', function() {
          validateField(input);
        });
        
        // Clear errors on input
        input.addEventListener('input', function() {
          if (input.classList.contains('error')) {
            clearFieldError(input);
          }
        });
      });
      
      // Form submission
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Check honeypot (spam protection)
        const honeypot = form.querySelector('.form-honeypot');
        if (honeypot && honeypot.value.trim() !== '') {
          // Bot detected - silently fail
          return false;
        }
        
        // Validate all fields
        let isValid = true;
        const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        requiredInputs.forEach(function(input) {
          if (!validateField(input)) {
            isValid = false;
          }
        });
        
        if (!isValid) {
          showFormMessage(form, 'error', getTranslation('contact.form.validation.error') || 'Please correct the errors and try again.');
          const firstError = form.querySelector('.error');
          if (firstError) {
            firstError.focus();
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return false;
        }
        
        // Submit form
        submitForm(form);
      });
    });
  }
  
  // Validate individual field
  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = getTranslation('contact.form.validation.required') || 'This field is required.';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = getTranslation('contact.form.validation.email') || 'Please enter a valid email address.';
      }
    }
    
    // Set field state
    if (isValid) {
      clearFieldError(field);
    } else {
      setFieldError(field, errorMessage);
    }
    
    return isValid;
  }
  
  // Set field error
  function setFieldError(field, message) {
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Remove existing error message
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('span');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    field.parentElement.appendChild(errorElement);
  }
  
  // Clear field error
  function clearFieldError(field) {
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    const errorElement = field.parentElement.querySelector('.field-error');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Submit form
  function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : '';
    
    // Show loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = getTranslation('contact.form.sending') || 'Sending...';
      submitButton.classList.add('loading');
    }
    
    // Get form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach(function(value, key) {
      // Skip honeypot field
      if (key !== 'website') {
        data[key] = value;
      }
    });
    
    // Simulate form submission
    // TODO: Replace with actual backend API call in production
    setTimeout(function() {
      showFormMessage(form, 'success', getTranslation('contact.form.success') || 'Thank you! Your message has been sent. We will get back to you soon.');
      form.reset();
      
      // Reset button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        submitButton.classList.remove('loading');
      }
    }, 1500);
  }
  
  // Show form message
  function showFormMessage(form, type, message) {
    // Remove existing messages
    const existingMessages = form.querySelectorAll('.form-message');
    existingMessages.forEach(function(msg) {
      msg.remove();
    });
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'form-message form-message-' + type;
    messageElement.setAttribute('role', 'alert');
    messageElement.textContent = message;
    
    // Insert at top of form
    form.insertBefore(messageElement, form.firstChild);
    
    // Scroll to message
    messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
      setTimeout(function() {
        messageElement.remove();
      }, 5000);
    }
  }
  
  // Get translation (helper function)
  function getTranslation(key) {
    try {
      // Try to get current language from localStorage or default to 'en'
      const lang = localStorage.getItem('kamukore-language') || 'en';
      
      // Access translations object (defined in translations.js)
      if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
        return translations[lang][key];
      }
      
      // Fallback: try window.translations if available
      if (typeof window.translations !== 'undefined' && window.translations[lang] && window.translations[lang][key]) {
        return window.translations[lang][key];
      }
    } catch (e) {
      // Translation error - silently fail
    }
    return null;
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        const href = link.getAttribute('href');
        if (href === '#') {
          return;
        }
        
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // HERO SECTION ANIMATIONS & EFFECTS
  // ============================================
  function initHeroEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Remove parallax transform that causes content to disappear
    // Keep background-attachment: fixed for smooth parallax effect
    
    // Subtle floating animation for hero title (only when visible)
    const heroTitle = hero.querySelector('.hero-title');
    if (heroTitle) {
      let floatDirection = 1;
      const floatInterval = setInterval(function() {
        const rect = heroTitle.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          floatDirection *= -1;
          heroTitle.style.transition = 'transform 4s ease-in-out';
          heroTitle.style.transform = `translateY(${floatDirection * 3}px)`;
        }
      }, 4000);
      
      // Clean up on scroll away
      window.addEventListener('scroll', function() {
        const rect = heroTitle.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          heroTitle.style.transform = 'translateY(0)';
        }
      }, { passive: true });
    }

    // Subtle shimmer effect to CTA button (only when visible)
    const heroCTA = hero.querySelector('.hero-cta .btn');
    if (heroCTA) {
      setInterval(function() {
        const rect = heroCTA.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          heroCTA.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.4)';
          setTimeout(function() {
            heroCTA.style.boxShadow = '0 8px 24px rgba(212, 175, 55, 0.3)';
          }, 600);
        }
      }, 5000);
    }
  }

  // ============================================
  // AUTO-UPDATE COPYRIGHT YEAR
  // ============================================
  // Note: updateCopyrightYear is defined in translations.js

  // ============================================
  // INITIALIZE ALL FUNCTIONALITY
  // ============================================
  function initializeAll() {
    initMobileMenu();
    initMegaMenu();
    initCookieBanner();
    initLanguageSwitcher();
    initNavigationActive();
    initFormValidation();
    initSmoothScroll();
    initHeroEffects();
    // Update copyright year after a short delay to ensure components are loaded
    setTimeout(updateCopyrightYear, 500);
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
      // DOM already loaded
      initializeAll();
    }
  }

  // Make functions globally available for components.js
  window.initMobileMenu = initMobileMenu;
  window.initMegaMenu = initMegaMenu;
  window.initCookieBanner = initCookieBanner;
  window.initLanguageSwitcher = initLanguageSwitcher;
  // updateCopyrightYear is available from translations.js
  
  // Start initialization
  init();

})();

