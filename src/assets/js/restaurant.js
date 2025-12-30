/* ============================================
   KAMUKORE - Restaurant System
   Menu display, reservation form, table booking
   ============================================ */

(function() {
    'use strict';

    // Menu Data Structure
    const menuData = {
        starters: [
            {
                id: 'plantain-fritters',
                nameKey: 'restaurant.menu.item.starter1.name',
                descKey: 'restaurant.menu.item.starter1.desc',
                price: 12,
                priceKey: 'restaurant.menu.item.starter1.price',
                image: '../assets/images/restaurant/menu/starters.jpg',
                vegetarian: false,
                spicy: true
            },
            {
                id: 'grilled-fish',
                nameKey: 'restaurant.menu.item.starter2.name',
                descKey: 'restaurant.menu.item.starter2.desc',
                price: 15,
                priceKey: 'restaurant.menu.item.starter2.price',
                image: '../assets/images/restaurant/menu/starters.jpg',
                vegetarian: false,
                spicy: false
            },
            {
                id: 'pepper-soup',
                nameKey: 'restaurant.menu.item.starter3.name',
                descKey: 'restaurant.menu.item.starter3.desc',
                price: 10,
                priceKey: 'restaurant.menu.item.starter3.price',
                image: '../assets/images/restaurant/menu/starters.jpg',
                vegetarian: false,
                spicy: true
            }
        ],
        mains: [
            {
                id: 'ndole',
                nameKey: 'restaurant.menu.item.main1.name',
                descKey: 'restaurant.menu.item.main1.desc',
                price: 22,
                priceKey: 'restaurant.menu.item.main1.price',
                image: '../assets/images/restaurant/menu/mains.jpg',
                vegetarian: false,
                spicy: false
            },
            {
                id: 'jollof-rice',
                nameKey: 'restaurant.menu.item.main2.name',
                descKey: 'restaurant.menu.item.main2.desc',
                price: 18,
                priceKey: 'restaurant.menu.item.main2.price',
                image: '../assets/images/restaurant/menu/mains.jpg',
                vegetarian: false,
                spicy: true
            },
            {
                id: 'grilled-chicken',
                nameKey: 'restaurant.menu.item.main3.name',
                descKey: 'restaurant.menu.item.main3.desc',
                price: 20,
                priceKey: 'restaurant.menu.item.main3.price',
                image: '../assets/images/restaurant/menu/mains.jpg',
                vegetarian: false,
                spicy: false
            },
            {
                id: 'cassava-leaves',
                nameKey: 'restaurant.menu.item.main4.name',
                descKey: 'restaurant.menu.item.main4.desc',
                price: 16,
                priceKey: 'restaurant.menu.item.main4.price',
                image: '../assets/images/restaurant/menu/mains.jpg',
                vegetarian: true,
                spicy: false
            }
        ],
        sides: [
            {
                id: 'fried-plantains',
                nameKey: 'restaurant.menu.item.side1.name',
                descKey: 'restaurant.menu.item.side1.desc',
                price: 8,
                priceKey: 'restaurant.menu.item.side1.price',
                image: '../assets/images/restaurant/menu/sides.jpg',
                vegetarian: true,
                spicy: false
            },
            {
                id: 'fufu',
                nameKey: 'restaurant.menu.item.side2.name',
                descKey: 'restaurant.menu.item.side2.desc',
                price: 6,
                priceKey: 'restaurant.menu.item.side2.price',
                image: '../assets/images/restaurant/menu/sides.jpg',
                vegetarian: true,
                spicy: false
            },
            {
                id: 'rice-beans',
                nameKey: 'restaurant.menu.item.side3.name',
                descKey: 'restaurant.menu.item.side3.desc',
                price: 7,
                priceKey: 'restaurant.menu.item.side3.price',
                image: '../assets/images/restaurant/menu/sides.jpg',
                vegetarian: true,
                spicy: false
            }
        ],
        desserts: [
            {
                id: 'puff-puff',
                nameKey: 'restaurant.menu.item.dessert1.name',
                descKey: 'restaurant.menu.item.dessert1.desc',
                price: 6,
                priceKey: 'restaurant.menu.item.dessert1.price',
                image: '../assets/images/restaurant/menu/desserts.jpg',
                vegetarian: true,
                spicy: false
            },
            {
                id: 'fruit-salad',
                nameKey: 'restaurant.menu.item.dessert2.name',
                descKey: 'restaurant.menu.item.dessert2.desc',
                price: 8,
                priceKey: 'restaurant.menu.item.dessert2.price',
                image: '../assets/images/restaurant/menu/desserts.jpg',
                vegetarian: true,
                spicy: false
            },
            {
                id: 'traditional-cake',
                nameKey: 'restaurant.menu.item.dessert3.name',
                descKey: 'restaurant.menu.item.dessert3.desc',
                price: 9,
                priceKey: 'restaurant.menu.item.dessert3.price',
                image: '../assets/images/restaurant/menu/desserts.jpg',
                vegetarian: true,
                spicy: false
            }
        ]
    };

    // Restaurant System
    const RestaurantSystem = {
        currentCategory: 'all',
        currentSearch: '',

        init: function() {
            this.renderMenu();
            this.initMenuFilters();
            this.initMenuSearch();
            this.initReservationForm();
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

        // Render menu
        renderMenu: function() {
            const container = document.getElementById('menu-items-container');
            if (!container) return;

            let html = '';
            const categories = ['starters', 'mains', 'sides', 'desserts'];

            categories.forEach(category => {
                if (this.currentCategory !== 'all' && this.currentCategory !== category) {
                    return;
                }

                const items = menuData[category];
                const filteredItems = this.currentSearch 
                    ? items.filter(item => {
                        const name = this.getTranslation(item.nameKey).toLowerCase();
                        const desc = this.getTranslation(item.descKey).toLowerCase();
                        return name.includes(this.currentSearch) || desc.includes(this.currentSearch);
                    })
                    : items;

                if (filteredItems.length === 0) return;

                const categoryTitle = this.getTranslation(`restaurant.menu.category.${category}`);
                
                html += `
                    <div class="menu-category" data-category="${category}">
                        <h3 class="menu-category-title">${categoryTitle}</h3>
                        <div class="menu-items-grid">
                            ${filteredItems.map(item => `
                                <div class="menu-item-card">
                                    <div class="menu-item-image">
                                        <div class="image-placeholder menu-item-img" style="background-image: url('${item.image}');">
                                            <div class="placeholder-overlay">
                                                <span class="placeholder-icon">${this.getCategoryIcon(category)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="menu-item-content">
                                        <div class="menu-item-header">
                                            <h4 class="menu-item-name" data-translate="${item.nameKey}">${this.getTranslation(item.nameKey)}</h4>
                                            <span class="menu-item-price" data-translate="${item.priceKey}">$${item.price}</span>
                                        </div>
                                        <p class="menu-item-desc" data-translate="${item.descKey}">${this.getTranslation(item.descKey)}</p>
                                        <div class="menu-item-badges">
                                            ${item.vegetarian ? '<span class="menu-badge vegetarian" data-translate="restaurant.menu.badge.vegetarian">Vegetarian</span>' : ''}
                                            ${item.spicy ? '<span class="menu-badge spicy" data-translate="restaurant.menu.badge.spicy">Spicy</span>' : ''}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html || `
                <div class="no-menu-items">
                    <p>${this.getTranslation('restaurant.menu.no-results')}</p>
                </div>
            `;

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }
        },

        // Get category icon
        getCategoryIcon: function(category) {
            const icons = {
                starters: '🥗',
                mains: '🍛',
                sides: '🍠',
                desserts: '🍰'
            };
            return icons[category] || '🍽️';
        },

        // Initialize menu filters
        initMenuFilters: function() {
            const categoryFilter = document.getElementById('menu-category-filter');
            if (categoryFilter) {
                categoryFilter.addEventListener('change', (e) => {
                    this.currentCategory = e.target.value;
                    this.renderMenu();
                });
            }
        },

        // Initialize menu search
        initMenuSearch: function() {
            const searchInput = document.getElementById('menu-search');
            if (searchInput) {
                const placeholder = this.getTranslation('restaurant.menu.search.placeholder');
                if (placeholder && placeholder !== 'restaurant.menu.search.placeholder') {
                    searchInput.setAttribute('placeholder', placeholder);
                }

                let searchTimeout;
                searchInput.addEventListener('input', (e) => {
                    clearTimeout(searchTimeout);
                    searchTimeout = setTimeout(() => {
                        this.currentSearch = e.target.value.toLowerCase().trim();
                        this.renderMenu();
                    }, 300);
                });
            }
        },

        // Initialize reservation form
        initReservationForm: function() {
            const form = document.getElementById('reservation-form');
            if (!form) return;

            // Set min date to today
            const dateInput = form.querySelector('#reservation-date');
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute('min', today);
            }

            // Form submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleReservation(form);
            });

            // Real-time validation
            form.querySelectorAll('input[required], select[required]').forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
            });
        },

        // Validate field
        validateField: function(field) {
            const value = field.value.trim();
            let isValid = true;
            let errorMessage = '';

            // Remove existing error
            const existingError = field.parentNode.querySelector('.field-error');
            if (existingError) existingError.remove();
            field.classList.remove('error');

            // Required validation
            if (field.hasAttribute('required') && !value) {
                isValid = false;
                errorMessage = this.getTranslation('restaurant.reservation.validation.required');
            }

            // Email validation
            if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
                isValid = false;
                errorMessage = this.getTranslation('restaurant.reservation.validation.email');
            }

            // Date validation
            if (field.type === 'date' && value) {
                const selectedDate = new Date(value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                if (selectedDate < today) {
                    isValid = false;
                    errorMessage = this.getTranslation('restaurant.reservation.validation.date');
                }
            }

            // Time validation
            if (field.type === 'time' && value && document.getElementById('reservation-date').value) {
                const selectedDate = document.getElementById('reservation-date').value;
                const today = new Date().toISOString().split('T')[0];
                const selectedTime = value;
                const now = new Date();
                const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

                if (selectedDate === today && selectedTime <= currentTime) {
                    isValid = false;
                    errorMessage = this.getTranslation('restaurant.reservation.validation.time');
                }
            }

            if (!isValid) {
                field.classList.add('error');
                const errorElement = document.createElement('span');
                errorElement.classList.add('field-error');
                errorElement.textContent = errorMessage;
                field.parentNode.insertBefore(errorElement, field.nextSibling);
            }

            return isValid;
        },

        // Handle reservation
        handleReservation: function(form) {
            // Clear previous errors
            form.querySelectorAll('.field-error').forEach(el => el.remove());
            form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
            this.hideFormMessage(form);

            // Validate all fields
            let isValid = true;
            const requiredFields = form.querySelectorAll('input[required], select[required]');
            
            requiredFields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                this.showFormMessage(form, 'error', this.getTranslation('restaurant.reservation.validation.error'));
                return;
            }

            // Get form data
            const formData = {
                name: form.querySelector('#reservation-name').value,
                email: form.querySelector('#reservation-email').value,
                phone: form.querySelector('#reservation-phone').value,
                date: form.querySelector('#reservation-date').value,
                time: form.querySelector('#reservation-time').value,
                guests: form.querySelector('#reservation-guests').value,
                specialRequests: form.querySelector('#reservation-requests').value || ''
            };

            // Simulate submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton ? submitButton.textContent : '';

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = this.getTranslation('restaurant.reservation.submitting');
            }

            // Simulate API call
            setTimeout(() => {
                this.showFormMessage(form, 'success', this.getTranslation('restaurant.reservation.success'));
                form.reset();
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
            }, 2000);
        },

        // Show form message
        showFormMessage: function(form, type, message) {
            let messageContainer = form.querySelector('.form-message');
            if (!messageContainer) {
                messageContainer = document.createElement('div');
                messageContainer.classList.add('form-message');
                form.insertBefore(messageContainer, form.firstChild);
            }
            messageContainer.className = 'form-message';
            messageContainer.classList.add(type === 'success' ? 'form-success' : 'form-error');
            messageContainer.textContent = message;
            messageContainer.style.display = 'block';
            messageContainer.style.opacity = '0';
            setTimeout(() => {
                messageContainer.style.transition = 'opacity 0.3s ease';
                messageContainer.style.opacity = '1';
            }, 50);

            if (type === 'success') {
                setTimeout(() => {
                    this.hideFormMessage(form);
                }, 5000);
            }
        },

        // Hide form message
        hideFormMessage: function(form) {
            const messageContainer = form.querySelector('.form-message');
            if (messageContainer) {
                messageContainer.style.opacity = '0';
                setTimeout(() => {
                    messageContainer.style.display = 'none';
                }, 300);
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            RestaurantSystem.init();
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
    window.RestaurantSystem = RestaurantSystem;
})();

