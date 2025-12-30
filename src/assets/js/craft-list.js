/* ============================================
   KAMUKORE - Craft List System
   Craft product filtering, search, dynamic rendering
   ============================================ */

(function() {
    'use strict';

    // Craft Products Data Structure
    const craftProductsData = [
        {
            id: 'baskets',
            category: 'basketry',
            titleKey: 'craft.product1.title',
            descKey: 'craft.product1.desc',
            image: '../assets/images/craft/products/baskets.jpg',
            icon: '🧺',
            popularity: 5
        },
        {
            id: 'masks',
            category: 'sculpture',
            titleKey: 'craft.product2.title',
            descKey: 'craft.product2.desc',
            image: '../assets/images/craft/products/masks.jpg',
            icon: '🎭',
            popularity: 4
        },
        {
            id: 'pottery',
            category: 'pottery',
            titleKey: 'craft.product3.title',
            descKey: 'craft.product3.desc',
            image: '../assets/images/craft/products/pottery.jpg',
            icon: '🏺',
            popularity: 5
        },
        {
            id: 'textiles',
            category: 'textiles',
            titleKey: 'craft.product4.title',
            descKey: 'craft.product4.desc',
            image: '../assets/images/craft/products/textiles.jpg',
            icon: '🧵',
            popularity: 4
        },
        {
            id: 'jewelry',
            category: 'jewelry',
            titleKey: 'craft.product5.title',
            descKey: 'craft.product5.desc',
            image: '../assets/images/craft/products/jewelry.jpg',
            icon: '💎',
            popularity: 5
        },
        {
            id: 'sculptures',
            category: 'sculpture',
            titleKey: 'craft.product6.title',
            descKey: 'craft.product6.desc',
            image: '../assets/images/craft/products/sculptures.jpg',
            icon: '🗿',
            popularity: 3
        }
    ];

    // Craft System
    const CraftSystem = {
        currentCategory: 'all',
        currentSearch: '',
        filteredProducts: [],

        init: function() {
            this.filteredProducts = [...craftProductsData];
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
            const searchInput = document.getElementById('craft-search');
            if (searchInput) {
                const placeholder = this.getTranslation('craft.search.placeholder');
                if (placeholder && placeholder !== 'craft.search.placeholder') {
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
            const categoryFilter = document.getElementById('craft-category-filter');
            if (categoryFilter) {
                categoryFilter.addEventListener('change', (e) => {
                    this.currentCategory = e.target.value;
                    this.applyFilters();
                });
            }
        },

        // Apply filters
        applyFilters: function() {
            this.filteredProducts = craftProductsData.filter(product => {
                // Category filter
                if (this.currentCategory !== 'all') {
                    if (product.category !== this.currentCategory) {
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

            // Sort by popularity
            this.filteredProducts.sort((a, b) => b.popularity - a.popularity);

            this.renderProducts();
            this.updateResultsCount();
        },

        // Render products
        renderProducts: function() {
            const container = document.getElementById('craft-products-grid');
            if (!container) return;

            if (this.filteredProducts.length === 0) {
                container.innerHTML = `
                    <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xxl);">
                        <p style="font-size: var(--font-size-large); color: var(--color-text-light);">
                            ${this.getTranslation('craft.filter.no-results')}
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
            const countElement = document.getElementById('craft-results-count');
            if (countElement) {
                const count = this.filteredProducts.length;
                const total = craftProductsData.length;
                const resultsText = this.getTranslation('craft.filter.results');
                countElement.textContent = `${count} ${resultsText}${count !== total ? ` (${total} ${this.getTranslation('craft.filter.total')})` : ''}`;
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            CraftSystem.init();
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
    window.CraftSystem = CraftSystem;
})();

