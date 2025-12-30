/* ============================================
   KAMUKORE - Wear List System
   Ladies' Slippers filtering, search, dynamic rendering
   ============================================ */

(function() {
    'use strict';

    // Collections Data Structure
    const collectionsData = [
        {
            id: 'beaded-leather',
            titleKey: 'wear.collection.beaded.title',
            descKey: 'wear.collection.beaded.desc',
            image: '../assets/images/wear/collections/beaded-leather.jpg',
            icon: '💎'
        },
        {
            id: 'minimal-slides',
            titleKey: 'wear.collection.minimal.title',
            descKey: 'wear.collection.minimal.desc',
            image: '../assets/images/wear/collections/minimal-slides.jpg',
            icon: '✨'
        },
        {
            id: 'cultural-patterns',
            titleKey: 'wear.collection.patterns.title',
            descKey: 'wear.collection.patterns.desc',
            image: '../assets/images/wear/collections/cultural-patterns.jpg',
            icon: '🎨'
        },
        {
            id: 'limited-editions',
            titleKey: 'wear.collection.limited.title',
            descKey: 'wear.collection.limited.desc',
            image: '../assets/images/wear/collections/limited-editions.jpg',
            icon: '⭐'
        }
    ];

    // Products Data Structure - Using provided images
    const productsData = [
        {
            id: 'beaded-slipper-1',
            collection: 'beaded-leather',
            titleKey: 'wear.product.beaded1.title',
            descKey: 'wear.product.beaded1.desc',
            image: '../assets/images/wear/products/beaded-sandal-handheld.jpg',
            icon: '💎'
        },
        {
            id: 'beaded-slipper-2',
            collection: 'beaded-leather',
            titleKey: 'wear.product.beaded2.title',
            descKey: 'wear.product.beaded2.desc',
            image: '../assets/images/wear/products/beaded-sandals-feet-ocean.jpg',
            icon: '💎'
        },
        {
            id: 'minimal-slide-1',
            collection: 'minimal-slides',
            titleKey: 'wear.product.minimal1.title',
            descKey: 'wear.product.minimal1.desc',
            image: '../assets/images/wear/products/black-leather-beaded-sandals.jpg',
            icon: '✨'
        },
        {
            id: 'minimal-slide-2',
            collection: 'minimal-slides',
            titleKey: 'wear.product.minimal2.title',
            descKey: 'wear.product.minimal2.desc',
            image: '../assets/images/wear/products/multiple-sandals-collection.jpg',
            icon: '✨'
        },
        {
            id: 'pattern-sandal-1',
            collection: 'cultural-patterns',
            titleKey: 'wear.product.pattern1.title',
            descKey: 'wear.product.pattern1.desc',
            image: '../assets/images/wear/products/beaded-sandal-handheld.jpg',
            icon: '🎨'
        },
        {
            id: 'pattern-sandal-2',
            collection: 'cultural-patterns',
            titleKey: 'wear.product.pattern2.title',
            descKey: 'wear.product.pattern2.desc',
            image: '../assets/images/wear/products/beaded-sandals-feet-ocean.jpg',
            icon: '🎨'
        },
        {
            id: 'limited-edition-1',
            collection: 'limited-editions',
            titleKey: 'wear.product.limited1.title',
            descKey: 'wear.product.limited1.desc',
            image: '../assets/images/wear/products/black-leather-beaded-sandals.jpg',
            icon: '⭐'
        },
        {
            id: 'limited-edition-2',
            collection: 'limited-editions',
            titleKey: 'wear.product.limited2.title',
            descKey: 'wear.product.limited2.desc',
            image: '../assets/images/wear/products/multiple-sandals-collection.jpg',
            icon: '⭐'
        }
    ];

    // Wear System
    const WearSystem = {
        currentCollection: 'all',
        currentSearch: '',
        filteredProducts: [],

        init: function() {
            this.filteredProducts = [...productsData];
            this.renderCollections();
            this.renderProducts();
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
            const searchInput = document.getElementById('wear-search');
            if (searchInput) {
                const placeholder = this.getTranslation('wear.search.placeholder');
                if (placeholder && placeholder !== 'wear.search.placeholder') {
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
            const collectionFilter = document.getElementById('wear-collection-filter');
            if (collectionFilter) {
                collectionFilter.addEventListener('change', (e) => {
                    this.currentCollection = e.target.value;
                    this.applyFilters();
                });
            }
        },

        // Apply filters
        applyFilters: function() {
            this.filteredProducts = productsData.filter(product => {
                // Collection filter
                if (this.currentCollection !== 'all') {
                    if (product.collection !== this.currentCollection) {
                        return false;
                    }
                }

                // Search filter
                if (this.currentSearch) {
                    const title = this.getTranslation(product.titleKey).toLowerCase();
                    const desc = this.getTranslation(product.descKey).toLowerCase();
                    if (!title.includes(this.currentSearch) && !desc.includes(this.currentSearch)) {
                        return false;
                    }
                }

                return true;
            });

            this.renderProducts();
            this.updateResultsCount();
        },

        // Render collections
        renderCollections: function() {
            const container = document.getElementById('wear-collections-grid');
            if (!container) return;

            container.innerHTML = collectionsData.map(collection => `
                <div class="card collection-card">
                    <div class="collection-card-image">
                        <div class="image-placeholder collection-image" style="background-image: url('${collection.image}');">
                            <div class="placeholder-overlay">
                                <span class="placeholder-icon">${collection.icon}</span>
                            </div>
                        </div>
                    </div>
                    <div class="collection-card-content">
                        <h3 class="card-title" data-translate="${collection.titleKey}">${this.getTranslation(collection.titleKey)}</h3>
                        <p class="card-text" data-translate="${collection.descKey}">${this.getTranslation(collection.descKey)}</p>
                    </div>
                </div>
            `).join('');

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }
        },

        // Render products
        renderProducts: function() {
            const container = document.getElementById('wear-products-grid');
            if (!container) return;

            if (this.filteredProducts.length === 0) {
                container.innerHTML = `
                    <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xxl);">
                        <p style="font-size: var(--font-size-large); color: var(--color-text-light);">
                            ${this.getTranslation('wear.filter.no-results')}
                        </p>
                    </div>
                `;
                return;
            }

            container.innerHTML = this.filteredProducts.map(product => `
                <div class="card product-card">
                    <div class="product-card-image">
                        <div class="image-placeholder product-image" style="background-image: url('${product.image}');">
                            <div class="placeholder-overlay">
                                <span class="placeholder-icon">${product.icon}</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-card-content">
                        <h3 class="card-title" data-translate="${product.titleKey}">${this.getTranslation(product.titleKey)}</h3>
                        <p class="card-text" data-translate="${product.descKey}">${this.getTranslation(product.descKey)}</p>
                        <p class="card-text" style="font-size: var(--font-size-small); color: var(--color-text-light); font-style: italic; margin-top: var(--spacing-sm);" data-translate="wear.product.handmade">Handmade in Cameroon</p>
                        <a href="product.html" class="btn btn-secondary" data-translate="btn.view-details">View Details</a>
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
            const countElement = document.getElementById('wear-results-count');
            if (countElement) {
                const count = this.filteredProducts.length;
                const total = productsData.length;
                const resultsText = this.getTranslation('wear.filter.results');
                countElement.textContent = `${count} ${resultsText}${count !== total ? ` (${total} ${this.getTranslation('wear.filter.total')})` : ''}`;
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            WearSystem.init();
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
    window.WearSystem = WearSystem;
})();

