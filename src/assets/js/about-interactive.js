/* ============================================
   KAMUKORE - About Page Interactive Features
   Team section, smooth scroll navigation
   ============================================ */

(function() {
    'use strict';

    // Team Members Data Structure
    const teamMembersData = [
        {
            id: 'cultural-advisor',
            roleKey: 'about.team.item1',
            descKey: 'about.team.item1.desc',
            image: '../assets/images/about/team/team-1.jpg',
            icon: '👥'
        },
        {
            id: 'experience-curator',
            roleKey: 'about.team.item2',
            descKey: 'about.team.item2.desc',
            image: '../assets/images/about/team/team-2.jpg',
            icon: '👥'
        },
        {
            id: 'product-specialist',
            roleKey: 'about.team.item3',
            descKey: 'about.team.item3.desc',
            image: '../assets/images/about/team/team-3.jpg',
            icon: '👥'
        },
        {
            id: 'culinary-team',
            roleKey: 'about.team.item4',
            descKey: 'about.team.item4.desc',
            image: '../assets/images/about/team/team-4.jpg',
            icon: '👥'
        }
    ];

    // About Interactive System
    const AboutInteractive = {
        init: function() {
            this.initSmoothScroll();
            this.initTeamCards();
            this.initValuesNavigation();
        },

        // Get translation helper
        getTranslation: function(key) {
            try {
                if (typeof window.translations !== 'undefined' && typeof window.currentLanguage !== 'undefined') {
                    const lang = window.currentLanguage || 'en';
                    return window.translations[lang] && window.translations[lang][key] ? window.translations[lang][key] : key;
                }
                return key;
            } catch (e) {
                return key;
            }
        },

        // Initialize smooth scroll navigation
        initSmoothScroll: function() {
            // Add smooth scroll to internal links
            const internalLinks = document.querySelectorAll('a[href^="#"]');
            internalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== '#' && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                            e.preventDefault();
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                });
            });
        },

        // Initialize interactive team cards
        initTeamCards: function() {
            const teamCards = document.querySelectorAll('.team-card, .card');
            teamCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-4px)';
                    this.style.transition = 'transform var(--transition-base)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        },

        // Initialize values navigation
        initValuesNavigation: function() {
            // Add click handlers to value cards for potential detail views
            const valueCards = document.querySelectorAll('.section-values .card');
            valueCards.forEach(card => {
                card.style.cursor = 'default';
                card.addEventListener('click', function() {
                    // Could expand to show more details if needed
                    this.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 200);
                });
            });
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => AboutInteractive.init(), 300);
        });
    } else {
        setTimeout(() => AboutInteractive.init(), 300);
    }

    // Export to global scope
    window.AboutInteractive = AboutInteractive;
})();

