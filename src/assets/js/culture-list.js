/* ============================================
   KAMUKORE - Culture List System
   Region filtering, search, quick navigation
   ============================================ */

(function() {
    'use strict';

    // Culture Regions Data Structure - All 10 Regions of Cameroon
    const cultureRegionsData = [
        {
            id: 'littoral',
            nameKey: 'culture.region1.title',
            descKey: 'culture.region1.desc',
            image: '../assets/images/culture/regions/littoral.jpg',
            icon: '🌊',
            themes: ['coastal', 'maritime', 'trading']
        },
        {
            id: 'west',
            nameKey: 'culture.region2.title',
            descKey: 'culture.region2.desc',
            image: '../assets/images/culture/regions/west.jpg',
            icon: '⛰️',
            themes: ['kingdoms', 'ceremonies', 'agriculture']
        },
        {
            id: 'north',
            nameKey: 'culture.region3.title',
            descKey: 'culture.region3.desc',
            image: '../assets/images/culture/regions/north.jpg',
            icon: '🏜️',
            themes: ['nomadic', 'islamic', 'architecture']
        },
        {
            id: 'east',
            nameKey: 'culture.region4.title',
            descKey: 'culture.region4.desc',
            image: '../assets/images/culture/regions/east.jpg',
            icon: '🌲',
            themes: ['forest', 'medicine', 'hunter-gatherer']
        },
        {
            id: 'south',
            nameKey: 'culture.region5.title',
            descKey: 'culture.region5.desc',
            image: '../assets/images/culture/regions/south.jpg',
            icon: '🌴',
            themes: ['bantu', 'music', 'community']
        },
        {
            id: 'centre',
            nameKey: 'culture.region6.title',
            descKey: 'culture.region6.desc',
            image: '../assets/images/culture/regions/central.jpg',
            icon: '🏛️',
            themes: ['urban', 'political', 'diverse']
        },
        {
            id: 'northwest',
            nameKey: 'culture.region7.title',
            descKey: 'culture.region7.desc',
            image: '../assets/images/culture/regions/northwest.jpg',
            icon: '🏔️',
            themes: ['grassfields', 'chiefdoms', 'traditional']
        },
        {
            id: 'southwest',
            nameKey: 'culture.region8.title',
            descKey: 'culture.region8.desc',
            image: '../assets/images/culture/regions/southwest.jpg',
            icon: '🌋',
            themes: ['coastal', 'volcanic', 'diverse']
        },
        {
            id: 'adamawa',
            nameKey: 'culture.region9.title',
            descKey: 'culture.region9.desc',
            image: '../assets/images/culture/regions/adamawa.jpg',
            icon: '🌾',
            themes: ['plateau', 'cattle', 'pastoral']
        },
        {
            id: 'far-north',
            nameKey: 'culture.region10.title',
            descKey: 'culture.region10.desc',
            image: '../assets/images/culture/regions/far-north.jpg',
            icon: '🐪',
            themes: ['desert', 'sahel', 'nomadic']
        }
    ];

    // Culture System
    const CultureSystem = {
        currentTheme: 'all',
        currentSearch: '',
        filteredRegions: [],

        init: function() {
            this.filteredRegions = [...cultureRegionsData];
            this.renderRegions();
            this.initSearch();
            this.initFilters();
            this.updateResultsCount();
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

        // Initialize search
        initSearch: function() {
            const searchInput = document.getElementById('culture-search');
            if (searchInput) {
                const placeholder = this.getTranslation('culture.search.placeholder');
                if (placeholder && placeholder !== 'culture.search.placeholder') {
                    searchInput.setAttribute('placeholder', placeholder);
                }

                let searchTimeout;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        this.currentSearch = e.target.value.toLowerCase().trim();
                        this.applyFilters();
                    }, 300);
                });
            }
        },

        // Initialize filters
        initFilters: function() {
            const filterButtons = document.querySelectorAll('[data-culture-filter]');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const theme = button.getAttribute('data-culture-filter');
                    this.currentTheme = theme;
                    
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    this.applyFilters();
                });
            });
        },

        // Apply filters
        applyFilters: function() {
            this.filteredRegions = cultureRegionsData.filter(region => {
                // Theme filter
                if (this.currentTheme !== 'all') {
                    const themeKey = this.getTranslation(`culture.filter.theme.${this.currentTheme}`);
                    if (!region.themes.some(t => t === this.currentTheme)) {
                        return false;
                    }
                }

                // Search filter
                if (this.currentSearch) {
                    const name = this.getTranslation(region.nameKey).toLowerCase();
                    const desc = this.getTranslation(region.descKey).toLowerCase();
                    if (!name.includes(this.currentSearch) && !desc.includes(this.currentSearch)) {
                        return false;
                    }
                }

                return true;
            });

            this.renderRegions();
            this.updateResultsCount();
        },

        // Render regions
        renderRegions: function() {
            const container = document.getElementById('culture-regions-grid');
            if (!container) return;

            if (this.filteredRegions.length === 0) {
                container.innerHTML = `
                    <div class="no-regions" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xxl);">
                        <p style="font-size: var(--font-size-large); color: var(--color-text-light);">
                            ${this.getTranslation('culture.filter.no-results')}
                        </p>
                    </div>
                `;
                return;
            }

            container.innerHTML = this.filteredRegions.map(region => `
                <div class="card region-card">
                    <div class="region-card-image">
                        <div class="image-placeholder region-image" style="background-image: url('${region.image}');">
                            <div class="placeholder-overlay">
                                <span class="placeholder-icon">${region.icon}</span>
                            </div>
                        </div>
                    </div>
                    <div class="region-card-content">
                        <h3 class="card-title" data-translate="${region.nameKey}">${this.getTranslation(region.nameKey)}</h3>
                        <p class="card-text" data-translate="${region.descKey}">${this.getTranslation(region.descKey)}</p>
                        <a href="region.html?region=${region.id}" class="btn btn-secondary" data-translate="btn.explore">Explore</a>
                    </div>
                </div>
            `).join('');

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }
        },

        // Update results count
        updateResultsCount: function() {
            const countElement = document.getElementById('culture-results-count');
            if (countElement) {
                const count = this.filteredRegions.length;
                const total = cultureRegionsData.length;
                const resultsText = this.getTranslation('culture.filter.results');
                countElement.textContent = `${count} ${resultsText}${count !== total ? ` (${total} ${this.getTranslation('culture.filter.total')})` : ''}`;
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            CultureSystem.init();
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

    // Export to global scope
    window.CultureSystem = CultureSystem;
})();

