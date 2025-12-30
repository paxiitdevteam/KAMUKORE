/* ============================================
   KAMUKORE - Products System
   Product data, filtering, search, sorting
   ============================================ */

(function() {
    'use strict';

    // Product Data Structure
    const productsData = [
        {
            id: 'basket',
            category: 'basketry',
            titleKey: 'product.item1.title',
            descKey: 'product.item1.desc',
            price: 45,
            priceKey: 'product.item1.price',
            image: '../assets/images/product/products/basket.jpg',
            icon: '🧺',
            popularity: 5,
            inStock: true,
            materials: ['Raffia', 'Natural fibers'],
            dimensions: '30cm × 25cm',
            artisan: 'Master Weavers',
            region: 'West Region'
        },
        {
            id: 'mask',
            category: 'sculpture',
            titleKey: 'product.item2.title',
            descKey: 'product.item2.desc',
            price: 120,
            priceKey: 'product.item2.price',
            image: '../assets/images/product/products/mask.jpg',
            icon: '🎭',
            popularity: 4,
            inStock: true,
            materials: ['Hardwood', 'Natural pigments'],
            dimensions: '40cm × 30cm',
            artisan: 'Master Carvers',
            region: 'Central Region'
        },
        {
            id: 'pottery',
            category: 'pottery',
            titleKey: 'product.item3.title',
            descKey: 'product.item3.desc',
            price: 35,
            priceKey: 'product.item3.price',
            image: '../assets/images/product/products/pottery.jpg',
            icon: '🏺',
            popularity: 5,
            inStock: true,
            materials: ['Clay', 'Traditional glazes'],
            dimensions: '20cm diameter',
            artisan: 'Pottery Masters',
            region: 'North Region'
        },
        {
            id: 'textile',
            category: 'textiles',
            titleKey: 'product.item4.title',
            descKey: 'product.item4.desc',
            price: 85,
            priceKey: 'product.item4.price',
            image: '../assets/images/product/products/textile.jpg',
            icon: '🧵',
            popularity: 4,
            inStock: true,
            materials: ['Cotton', 'Natural dyes'],
            dimensions: '100cm × 80cm',
            artisan: 'Textile Artists',
            region: 'Littoral Region'
        },
        {
            id: 'jewelry',
            category: 'jewelry',
            titleKey: 'product.item5.title',
            descKey: 'product.item5.desc',
            price: 55,
            priceKey: 'product.item5.price',
            image: '../assets/images/product/products/jewelry.jpg',
            icon: '💎',
            popularity: 5,
            inStock: true,
            materials: ['Glass beads', 'Natural fibers'],
            dimensions: 'Adjustable length',
            artisan: 'Beadwork Specialists',
            region: 'South Region'
        },
        {
            id: 'sculpture',
            category: 'sculpture',
            titleKey: 'product.item6.title',
            descKey: 'product.item6.desc',
            price: 95,
            priceKey: 'product.item6.price',
            image: '../assets/images/product/products/sculpture.jpg',
            icon: '🗿',
            popularity: 3,
            inStock: true,
            materials: ['Sustainably sourced wood'],
            dimensions: '50cm × 30cm',
            artisan: 'Master Sculptors',
            region: 'East Region'
        }
    ];

    // Product System
    const ProductSystem = {
        products: [],
        filteredProducts: [],
        currentSort: 'popularity',
        currentCategory: 'all',
        currentSearch: '',
        priceRange: { min: 0, max: 200 },

        init: function() {
            this.products = productsData;
            this.filteredProducts = [...this.products];
            this.renderProducts();
            this.initFilters();
            this.initSearch();
            this.initSorting();
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

        // Render products
        renderProducts: function() {
            const container = document.getElementById('products-grid');
            if (!container) return;

            if (this.filteredProducts.length === 0) {
                container.innerHTML = `
                    <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                        <p style="font-size: var(--font-size-large); color: var(--color-text-light);">
                            ${this.getTranslation('product.filter.no-results')}
                        </p>
                    </div>
                `;
                return;
            }

            container.innerHTML = this.filteredProducts.map(product => `
                <div class="card product-card" data-product-id="${product.id}">
                    <div class="product-card-image">
                        <div class="image-placeholder product-image" style="background-image: url('${product.image}');">
                            <div class="placeholder-overlay">
                                <span class="placeholder-icon">${product.icon}</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-card-content">
                        <h2 class="card-title" data-translate="${product.titleKey}">${this.getTranslation(product.titleKey)}</h2>
                        <p class="card-text" data-translate="${product.descKey}">${this.getTranslation(product.descKey)}</p>
                        <p class="product-price" style="font-size: var(--font-size-large); font-weight: 700; color: var(--color-accent); margin-bottom: var(--spacing-sm);" data-translate="${product.priceKey}">$${product.price}</p>
                        <div class="product-actions">
                            <button class="btn btn-primary btn-view-details" data-product-id="${product.id}" data-translate="product.btn.view-details">View Details</button>
                            <a href="contact.html" class="btn btn-secondary" data-translate="btn.inquire">Inquire</a>
                        </div>
                    </div>
                </div>
            `).join('');

            // Re-initialize translation for new content
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }

            // Attach click handlers
            container.querySelectorAll('.btn-view-details').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = e.target.getAttribute('data-product-id');
                    this.showProductModal(productId);
                });
            });
        },

        // Initialize filters
        initFilters: function() {
            const categoryFilter = document.getElementById('category-filter');
            const priceMin = document.getElementById('price-min');
            const priceMax = document.getElementById('price-max');

            if (categoryFilter) {
                categoryFilter.addEventListener('change', (e) => {
                    this.currentCategory = e.target.value;
                    this.applyFilters();
                });
            }

            if (priceMin && priceMax) {
                const updatePriceRange = () => {
                    this.priceRange.min = parseInt(priceMin.value) || 0;
                    this.priceRange.max = parseInt(priceMax.value) || 200;
                    this.applyFilters();
                };

                priceMin.addEventListener('input', updatePriceRange);
                priceMax.addEventListener('input', updatePriceRange);
            }
        },

        // Initialize search
        initSearch: function() {
            const searchInput = document.getElementById('product-search');
            if (searchInput) {
                // Set placeholder translation
                const placeholder = this.getTranslation('product.search.placeholder');
                if (placeholder && placeholder !== 'product.search.placeholder') {
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

        // Initialize sorting
        initSorting: function() {
            const sortSelect = document.getElementById('product-sort');
            if (sortSelect) {
                sortSelect.addEventListener('change', (e) => {
                    this.currentSort = e.target.value;
                    this.applyFilters();
                });
            }
        },

        // Apply all filters
        applyFilters: function() {
            let filtered = [...this.products];

            // Category filter
            if (this.currentCategory !== 'all') {
                filtered = filtered.filter(p => p.category === this.currentCategory);
            }

            // Search filter
            if (this.currentSearch) {
                filtered = filtered.filter(p => {
                    const title = this.getTranslation(p.titleKey).toLowerCase();
                    const desc = this.getTranslation(p.descKey).toLowerCase();
                    return title.includes(this.currentSearch) || desc.includes(this.currentSearch);
                });
            }

            // Price filter
            filtered = filtered.filter(p => {
                return p.price >= this.priceRange.min && p.price <= this.priceRange.max;
            });

            // Sort
            filtered.sort((a, b) => {
                switch (this.currentSort) {
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'name':
                        return this.getTranslation(a.titleKey).localeCompare(this.getTranslation(b.titleKey));
                    case 'popularity':
                    default:
                        return b.popularity - a.popularity;
                }
            });

            this.filteredProducts = filtered;
            this.renderProducts();
            this.updateResultsCount();
        },

        // Update results count
        updateResultsCount: function() {
            const countElement = document.getElementById('results-count');
            if (countElement) {
                const count = this.filteredProducts.length;
                const total = this.products.length;
                countElement.textContent = `${count} ${this.getTranslation('product.filter.results')} ${count !== total ? `(${total} ${this.getTranslation('product.filter.total')})` : ''}`;
            }
        },

        // Show product modal
        showProductModal: function(productId) {
            const product = this.products.find(p => p.id === productId);
            if (!product) return;

            const modal = document.getElementById('product-modal');
            if (!modal) return;

            modal.innerHTML = `
                <div class="product-modal-content">
                    <button class="product-modal-close" aria-label="Close">&times;</button>
                    <div class="product-modal-body">
                        <div class="product-modal-image">
                            <div class="image-placeholder product-image-large" style="background-image: url('${product.image}');">
                                <div class="placeholder-overlay">
                                    <span class="placeholder-icon">${product.icon}</span>
                                </div>
                            </div>
                        </div>
                        <div class="product-modal-info">
                            <h2 data-translate="${product.titleKey}">${this.getTranslation(product.titleKey)}</h2>
                            <p class="product-modal-price" data-translate="${product.priceKey}">$${product.price}</p>
                            <div class="product-modal-desc">
                                <p data-translate="${product.descKey}">${this.getTranslation(product.descKey)}</p>
                            </div>
                            <div class="product-modal-details">
                                <div class="detail-item">
                                    <strong>${this.getTranslation('product.detail.materials')}:</strong>
                                    <span>${product.materials.join(', ')}</span>
                                </div>
                                <div class="detail-item">
                                    <strong>${this.getTranslation('product.detail.dimensions')}:</strong>
                                    <span>${product.dimensions}</span>
                                </div>
                                <div class="detail-item">
                                    <strong>${this.getTranslation('product.detail.artisan')}:</strong>
                                    <span>${product.artisan}</span>
                                </div>
                                <div class="detail-item">
                                    <strong>${this.getTranslation('product.detail.region')}:</strong>
                                    <span>${product.region}</span>
                                </div>
                            </div>
                            <div class="product-modal-actions">
                                <a href="contact.html" class="btn btn-large btn-primary" data-translate="btn.inquire">Inquire</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Close handlers
            modal.querySelector('.product-modal-close').addEventListener('click', () => {
                this.closeProductModal();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeProductModal();
                }
            });

            // ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.style.display === 'flex') {
                    this.closeProductModal();
                }
            });
        },

        // Close product modal
        closeProductModal: function() {
            const modal = document.getElementById('product-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    };

        // Initialize when DOM is ready
        // Wait for translations to be loaded first
        const initializeSystem = () => {
            if (typeof window.translations !== 'undefined') {
                ProductSystem.init();
            } else {
                // Wait a bit more for translations to load
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
    window.ProductSystem = ProductSystem;
})();

