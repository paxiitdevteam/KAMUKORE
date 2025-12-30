/* ============================================
   KAMUKORE - Regions System
   Region selector, dynamic content loading, filtering
   ============================================ */

(function() {
    'use strict';

    // Regions Data Structure
    const regionsData = {
        'littoral': {
            id: 'littoral',
            nameKey: 'region.littoral.title',
            subtitleKey: 'region.littoral.subtitle',
            badgeKey: 'region.littoral.badge',
            culture: {
                p1Key: 'region.culture.p1',
                p2Key: 'region.culture.p2',
                image: '../assets/images/region/littoral/culture.jpg'
            },
            cuisine: {
                p1Key: 'region.cuisine.p1',
                p2Key: 'region.cuisine.p2',
                image: '../assets/images/region/littoral/cuisine.jpg'
            },
            craft: {
                p1Key: 'region.craft.p1',
                p2Key: 'region.craft.p2',
                image: '../assets/images/region/littoral/craft.jpg'
            },
            nature: {
                p1Key: 'region.nature.p1',
                p2Key: 'region.nature.p2',
                image: '../assets/images/region/littoral/nature.jpg'
            },
            experiences: [
                {
                    titleKey: 'region.exp1.title',
                    descKey: 'region.exp1.desc',
                    image: '../assets/images/region/littoral/experience-1.jpg',
                    icon: '🏘️'
                },
                {
                    titleKey: 'region.exp2.title',
                    descKey: 'region.exp2.desc',
                    image: '../assets/images/region/littoral/experience-2.jpg',
                    icon: '🛒'
                },
                {
                    titleKey: 'region.exp3.title',
                    descKey: 'region.exp3.desc',
                    image: '../assets/images/region/littoral/experience-3.jpg',
                    icon: '🎨'
                }
            ]
        },
        'centre': {
            id: 'centre',
            nameKey: 'region.centre.title',
            subtitleKey: 'region.centre.subtitle',
            badgeKey: 'region.centre.badge',
            culture: {
                p1Key: 'region.centre.culture.p1',
                p2Key: 'region.centre.culture.p2',
                image: '../assets/images/region/centre/culture.jpg'
            },
            cuisine: {
                p1Key: 'region.centre.cuisine.p1',
                p2Key: 'region.centre.cuisine.p2',
                image: '../assets/images/region/centre/cuisine.jpg'
            },
            craft: {
                p1Key: 'region.centre.craft.p1',
                p2Key: 'region.centre.craft.p2',
                image: '../assets/images/region/centre/craft.jpg'
            },
            nature: {
                p1Key: 'region.centre.nature.p1',
                p2Key: 'region.centre.nature.p2',
                image: '../assets/images/region/centre/nature.jpg'
            },
            experiences: [
                {
                    titleKey: 'region.centre.exp1.title',
                    descKey: 'region.centre.exp1.desc',
                    image: '../assets/images/region/centre/experience-1.jpg',
                    icon: '🏛️'
                },
                {
                    titleKey: 'region.centre.exp2.title',
                    descKey: 'region.centre.exp2.desc',
                    image: '../assets/images/region/centre/experience-2.jpg',
                    icon: '🎭'
                },
                {
                    titleKey: 'region.centre.exp3.title',
                    descKey: 'region.centre.exp3.desc',
                    image: '../assets/images/region/centre/experience-3.jpg',
                    icon: '🌿'
                }
            ]
        },
        'west': {
            id: 'west',
            nameKey: 'region.west.title',
            subtitleKey: 'region.west.subtitle',
            badgeKey: 'region.west.badge',
            culture: {
                p1Key: 'region.west.culture.p1',
                p2Key: 'region.west.culture.p2',
                image: '../assets/images/region/west/culture.jpg'
            },
            cuisine: {
                p1Key: 'region.west.cuisine.p1',
                p2Key: 'region.west.cuisine.p2',
                image: '../assets/images/region/west/cuisine.jpg'
            },
            craft: {
                p1Key: 'region.west.craft.p1',
                p2Key: 'region.west.craft.p2',
                image: '../assets/images/region/west/craft.jpg'
            },
            nature: {
                p1Key: 'region.west.nature.p1',
                p2Key: 'region.west.nature.p2',
                image: '../assets/images/region/west/nature.jpg'
            },
            experiences: [
                {
                    titleKey: 'region.west.exp1.title',
                    descKey: 'region.west.exp1.desc',
                    image: '../assets/images/region/west/experience-1.jpg',
                    icon: '⛰️'
                },
                {
                    titleKey: 'region.west.exp2.title',
                    descKey: 'region.west.exp2.desc',
                    image: '../assets/images/region/west/experience-2.jpg',
                    icon: '☕'
                },
                {
                    titleKey: 'region.west.exp3.title',
                    descKey: 'region.west.exp3.desc',
                    image: '../assets/images/region/west/experience-3.jpg',
                    icon: '🎪'
                }
            ]
        },
        'northwest': {
            id: 'northwest',
            nameKey: 'region.northwest.title',
            subtitleKey: 'region.northwest.subtitle',
            badgeKey: 'region.northwest.badge',
            culture: {
                p1Key: 'region.northwest.culture.p1',
                p2Key: 'region.northwest.culture.p2',
                image: '../assets/images/region/northwest/culture.jpg'
            },
            cuisine: {
                p1Key: 'region.northwest.cuisine.p1',
                p2Key: 'region.northwest.cuisine.p2',
                image: '../assets/images/region/northwest/cuisine.jpg'
            },
            craft: {
                p1Key: 'region.northwest.craft.p1',
                p2Key: 'region.northwest.craft.p2',
                image: '../assets/images/region/northwest/craft.jpg'
            },
            nature: {
                p1Key: 'region.northwest.nature.p1',
                p2Key: 'region.northwest.nature.p2',
                image: '../assets/images/region/northwest/nature.jpg'
            },
            experiences: [
                {
                    titleKey: 'region.northwest.exp1.title',
                    descKey: 'region.northwest.exp1.desc',
                    image: '../assets/images/region/northwest/experience-1.jpg',
                    icon: '🏔️'
                },
                {
                    titleKey: 'region.northwest.exp2.title',
                    descKey: 'region.northwest.exp2.desc',
                    image: '../assets/images/region/northwest/experience-2.jpg',
                    icon: '🌄'
                },
                {
                    titleKey: 'region.northwest.exp3.title',
                    descKey: 'region.northwest.exp3.desc',
                    image: '../assets/images/region/northwest/experience-3.jpg',
                    icon: '🎨'
                }
            ]
        },
        'southwest': {
            id: 'southwest',
            nameKey: 'region.southwest.title',
            subtitleKey: 'region.southwest.subtitle',
            badgeKey: 'region.southwest.badge',
            culture: {
                p1Key: 'region.southwest.culture.p1',
                p2Key: 'region.southwest.culture.p2',
                image: '../assets/images/region/southwest/culture.jpg'
            },
            cuisine: {
                p1Key: 'region.southwest.cuisine.p1',
                p2Key: 'region.southwest.cuisine.p2',
                image: '../assets/images/region/southwest/cuisine.jpg'
            },
            craft: {
                p1Key: 'region.southwest.craft.p1',
                p2Key: 'region.southwest.craft.p2',
                image: '../assets/images/region/southwest/craft.jpg'
            },
            nature: {
                p1Key: 'region.southwest.nature.p1',
                p2Key: 'region.southwest.nature.p2',
                image: '../assets/images/region/southwest/nature.jpg'
            },
            experiences: [
                {
                    titleKey: 'region.southwest.exp1.title',
                    descKey: 'region.southwest.exp1.desc',
                    image: '../assets/images/region/southwest/experience-1.jpg',
                    icon: '🌋'
                },
                {
                    titleKey: 'region.southwest.exp2.title',
                    descKey: 'region.southwest.exp2.desc',
                    image: '../assets/images/region/southwest/experience-2.jpg',
                    icon: '🌊'
                },
                {
                    titleKey: 'region.southwest.exp3.title',
                    descKey: 'region.southwest.exp3.desc',
                    image: '../assets/images/region/southwest/experience-3.jpg',
                    icon: '🏖️'
                }
            ]
        }
    };

    // Regions System
    const RegionsSystem = {
        currentRegion: 'littoral', // Default region
        currentFilter: 'all',

        init: function() {
            // Get region from URL parameter
            const urlParams = new URLSearchParams(window.location.search);
            const regionParam = urlParams.get('region');
            if (regionParam && regionsData[regionParam]) {
                this.currentRegion = regionParam;
            }

            this.renderRegionSelector();
            this.loadRegionContent();
            this.initFilters();
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

        // Render region selector
        renderRegionSelector: function() {
            const container = document.getElementById('region-selector');
            if (!container) return;

            const regions = Object.keys(regionsData);
            let html = '<div class="region-selector-grid">';

            regions.forEach(regionId => {
                const region = regionsData[regionId];
                const isActive = regionId === this.currentRegion;
                html += `
                    <button 
                        class="region-card ${isActive ? 'active' : ''}" 
                        data-region-id="${regionId}"
                        aria-pressed="${isActive}"
                        aria-label="${this.getTranslation(region.nameKey)}">
                        <div class="region-card-content">
                            <h3 class="region-card-title" data-translate="${region.nameKey}">${this.getTranslation(region.nameKey)}</h3>
                            <p class="region-card-subtitle" data-translate="${region.subtitleKey}">${this.getTranslation(region.subtitleKey)}</p>
                        </div>
                    </button>
                `;
            });

            html += '</div>';

            container.innerHTML = html;

            // Add click handlers
            container.querySelectorAll('.region-card').forEach(card => {
                card.addEventListener('click', () => {
                    const regionId = card.getAttribute('data-region-id');
                    this.switchRegion(regionId);
                });
            });
        },

        // Switch region
        switchRegion: function(regionId) {
            if (!regionsData[regionId]) return;

            this.currentRegion = regionId;
            
            // Update URL without reload
            const newUrl = window.location.pathname + '?region=' + regionId;
            window.history.pushState({ region: regionId }, '', newUrl);

            // Update selector
            this.renderRegionSelector();
            
            // Load new content
            this.loadRegionContent();
        },

        // Load region content
        loadRegionContent: function() {
            const region = regionsData[this.currentRegion];
            if (!region) return;

            // Update hero section
            const heroTitle = document.querySelector('.region-hero h1');
            const heroSubtitle = document.querySelector('.region-hero p');
            if (heroTitle) heroTitle.setAttribute('data-translate', region.nameKey);
            if (heroSubtitle) heroSubtitle.setAttribute('data-translate', region.subtitleKey);

            // Update main section header
            const sectionBadge = document.querySelector('.section-region .section-badge');
            const sectionTitle = document.querySelector('.section-region .section-title');
            const sectionSubtitle = document.querySelector('.section-region .section-subtitle');
            
            if (sectionBadge) sectionBadge.setAttribute('data-translate', region.badgeKey);
            if (sectionTitle) sectionTitle.setAttribute('data-translate', region.nameKey);
            if (sectionSubtitle) sectionSubtitle.setAttribute('data-translate', region.subtitleKey);

            // Update culture section
            this.updateSection('culture', region.culture);
            
            // Update cuisine section
            this.updateSection('cuisine', region.cuisine);
            
            // Update craft section
            this.updateSection('craft', region.craft);
            
            // Update nature section
            this.updateSection('nature', region.nature);

            // Update experiences
            this.updateExperiences(region.experiences);

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }
        },

        // Update section content
        updateSection: function(sectionName, sectionData) {
            const section = document.querySelector(`[data-section="${sectionName}"]`);
            if (!section) return;

            // Update text content
            const p1 = section.querySelector('[data-translate-p1]');
            const p2 = section.querySelector('[data-translate-p2]');
            if (p1) p1.setAttribute('data-translate', sectionData.p1Key);
            if (p2) p2.setAttribute('data-translate', sectionData.p2Key);

            // Update image
            const image = section.querySelector('.concept-image');
            if (image && sectionData.image) {
                image.style.backgroundImage = `url('${sectionData.image}')`;
            }
        },

        // Update experiences
        updateExperiences: function(experiences) {
            const container = document.getElementById('region-experiences');
            if (!container) return;

            let html = '';
            experiences.forEach((exp, index) => {
                html += `
                    <div class="card experience-card">
                        <div class="experience-card-image">
                            <div class="image-placeholder experience-image" style="background-image: url('${exp.image}');">
                                <div class="placeholder-overlay">
                                    <span class="placeholder-icon">${exp.icon}</span>
                                </div>
                            </div>
                        </div>
                        <div class="experience-card-content">
                            <h3 class="card-title" data-translate="${exp.titleKey}">${this.getTranslation(exp.titleKey)}</h3>
                            <p class="card-text" data-translate="${exp.descKey}">${this.getTranslation(exp.descKey)}</p>
                            <a href="experience-detail.html" class="btn btn-secondary" data-translate="btn.learn-more">Learn More</a>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
        },

        // Initialize filters
        initFilters: function() {
            const filterButtons = document.querySelectorAll('[data-filter]');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const filter = button.getAttribute('data-filter');
                    this.currentFilter = filter;
                    
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    // Scroll to section
                    const section = document.querySelector(`[data-section="${filter}"]`);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            RegionsSystem.init();
        } else {
            setTimeout(initializeSystem, 100);
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initializeSystem, 300);
        });
    } else {
        setTimeout(initializeSystem, 300);
    }

    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.region) {
            RegionsSystem.currentRegion = e.state.region;
            RegionsSystem.renderRegionSelector();
            RegionsSystem.loadRegionContent();
        }
    });

    // Export to global scope
    window.RegionsSystem = RegionsSystem;
})();

