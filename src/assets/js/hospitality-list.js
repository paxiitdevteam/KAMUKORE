/* ============================================
   KAMUKORE - Hospitality List System
   Hotel/tour filtering, search, booking forms
   ============================================ */

(function() {
    'use strict';

    // Hospitality Data Structure
    const hospitalityData = [
        // Hotels
        {
            id: 'luxury-city',
            type: 'hotel',
            nameKey: 'hospitality.hotels.hotel1.name',
            descKey: 'hospitality.hotels.hotel1.desc',
            image: '../assets/images/hospitality/hotels/luxury-city.jpg',
            icon: '🏨',
            location: 'city',
            locationKey: 'hospitality.location.city',
            priceRange: 'premium',
            amenities: ['wifi', 'spa', 'restaurant', 'pool'],
            rating: 5
        },
        {
            id: 'boutique-lodge',
            type: 'hotel',
            nameKey: 'hospitality.hotels.hotel2.name',
            descKey: 'hospitality.hotels.hotel2.desc',
            image: '../assets/images/hospitality/hotels/boutique-lodge.jpg',
            icon: '🏡',
            location: 'rural',
            locationKey: 'hospitality.location.rural',
            priceRange: 'mid',
            amenities: ['wifi', 'restaurant', 'cultural'],
            rating: 4
        },
        {
            id: 'eco-resort',
            type: 'hotel',
            nameKey: 'hospitality.hotels.hotel3.name',
            descKey: 'hospitality.hotels.hotel3.desc',
            image: '../assets/images/hospitality/hotels/eco-resort.jpg',
            icon: '🌿',
            location: 'nature',
            locationKey: 'hospitality.location.nature',
            priceRange: 'mid',
            amenities: ['wifi', 'eco', 'nature', 'sustainable'],
            rating: 5
        },
        // Tours
        {
            id: 'cultural-heritage',
            type: 'tour',
            nameKey: 'hospitality.sightseeing.tour1.name',
            descKey: 'hospitality.sightseeing.tour1.desc',
            image: '../assets/images/hospitality/tours/cultural-heritage.jpg',
            icon: '🏛️',
            location: 'city',
            locationKey: 'hospitality.location.city',
            priceRange: 'mid',
            duration: 'full-day',
            durationKey: 'hospitality.duration.full-day',
            groupSize: 'max-12',
            groupSizeKey: 'hospitality.group.max-12',
            items: [
                'hospitality.sightseeing.tour1.item1',
                'hospitality.sightseeing.tour1.item2',
                'hospitality.sightseeing.tour1.item3'
            ],
            rating: 5
        },
        {
            id: 'natural-wonders',
            type: 'tour',
            nameKey: 'hospitality.sightseeing.tour2.name',
            descKey: 'hospitality.sightseeing.tour2.desc',
            image: '../assets/images/hospitality/tours/natural-wonders.jpg',
            icon: '⛰️',
            location: 'nature',
            locationKey: 'hospitality.location.nature',
            priceRange: 'premium',
            duration: 'multi-day',
            durationKey: 'hospitality.duration.multi-day',
            groupSize: 'max-8',
            groupSizeKey: 'hospitality.group.max-8',
            items: [
                'hospitality.sightseeing.tour2.item1',
                'hospitality.sightseeing.tour2.item2',
                'hospitality.sightseeing.tour2.item3'
            ],
            rating: 5
        }
    ];

    // Hospitality System
    const HospitalitySystem = {
        currentType: 'all',
        currentLocation: 'all',
        currentSearch: '',
        filteredItems: [],

        init: function() {
            this.filteredItems = [...hospitalityData];
            this.renderItems();
            this.initSearch();
            this.initFilters();
            this.initBookingForms();
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
            const searchInput = document.getElementById('hospitality-search');
            if (searchInput) {
                const placeholder = this.getTranslation('hospitality.search.placeholder');
                if (placeholder && placeholder !== 'hospitality.search.placeholder') {
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
            // Type filter
            const typeFilter = document.getElementById('hospitality-type-filter');
            if (typeFilter) {
                typeFilter.addEventListener('change', (e) => {
                    this.currentType = e.target.value;
                    this.applyFilters();
                });
            }

            // Location filter
            const locationFilter = document.getElementById('hospitality-location-filter');
            if (locationFilter) {
                locationFilter.addEventListener('change', (e) => {
                    this.currentLocation = e.target.value;
                    this.applyFilters();
                });
            }
        },

        // Apply filters
        applyFilters: function() {
            this.filteredItems = hospitalityData.filter(item => {
                // Type filter
                if (this.currentType !== 'all' && item.type !== this.currentType) {
                    return false;
                }

                // Location filter
                if (this.currentLocation !== 'all' && item.location !== this.currentLocation) {
                    return false;
                }

                // Search filter
                if (this.currentSearch) {
                    const name = this.getTranslation(item.nameKey).toLowerCase();
                    const desc = this.getTranslation(item.descKey).toLowerCase();
                    if (!name.includes(this.currentSearch) && !desc.includes(this.currentSearch)) {
                        return false;
                    }
                }

                return true;
            });

            this.renderItems();
            this.updateResultsCount();
        },

        // Render items
        renderItems: function() {
            const hotelsContainer = document.getElementById('hotels-grid');
            const toursContainer = document.getElementById('tours-grid');
            
            if (!hotelsContainer && !toursContainer) return;

            const hotels = this.filteredItems.filter(item => item.type === 'hotel');
            const tours = this.filteredItems.filter(item => item.type === 'tour');

            // Render hotels
            if (hotelsContainer) {
                if (hotels.length === 0 && this.currentType === 'all') {
                    hotelsContainer.style.display = 'none';
                } else if (hotels.length === 0) {
                    hotelsContainer.innerHTML = `
                        <div class="no-items" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                            <p style="color: var(--color-text-light);">${this.getTranslation('hospitality.filter.no-hotels')}</p>
                        </div>
                    `;
                } else {
                    hotelsContainer.innerHTML = hotels.map(hotel => `
                        <div class="card hotel-card">
                            <div class="hotel-card-image">
                                <div class="image-placeholder hotel-image" style="background-image: url('${hotel.image}');">
                                    <div class="placeholder-overlay">
                                        <span class="placeholder-icon">${hotel.icon}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hotel-card-content">
                                <h3 class="card-title" data-translate="${hotel.nameKey}">${this.getTranslation(hotel.nameKey)}</h3>
                                <p data-translate="${hotel.descKey}">${this.getTranslation(hotel.descKey)}</p>
                                <div class="hospitality-meta">
                                    <span class="hospitality-location">📍 <span data-translate="${hotel.locationKey}">${this.getTranslation(hotel.locationKey)}</span></span>
                                    <span class="hospitality-rating">⭐ ${hotel.rating}/5</span>
                                </div>
                                <button class="btn btn-secondary" onclick="HospitalitySystem.openBookingModal('${hotel.id}')" data-translate="hospitality.cta.book">Book Now</button>
                            </div>
                        </div>
                    `).join('');
                }
            }

            // Render tours
            if (toursContainer) {
                if (tours.length === 0 && this.currentType === 'all') {
                    toursContainer.style.display = 'none';
                } else if (tours.length === 0) {
                    toursContainer.innerHTML = `
                        <div class="no-items" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl);">
                            <p style="color: var(--color-text-light);">${this.getTranslation('hospitality.filter.no-tours')}</p>
                        </div>
                    `;
                } else {
                    toursContainer.innerHTML = tours.map(tour => `
                        <div class="card tour-card">
                            <div class="tour-card-image">
                                <div class="image-placeholder tour-image" style="background-image: url('${tour.image}');">
                                    <div class="placeholder-overlay">
                                        <span class="placeholder-icon">${tour.icon}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="tour-card-content">
                                <h3 class="card-title" data-translate="${tour.nameKey}">${this.getTranslation(tour.nameKey)}</h3>
                                <p data-translate="${tour.descKey}">${this.getTranslation(tour.descKey)}</p>
                                ${tour.items ? `
                                    <ul>
                                        ${tour.items.map(itemKey => `<li data-translate="${itemKey}">${this.getTranslation(itemKey)}</li>`).join('')}
                                    </ul>
                                ` : ''}
                                <div class="hospitality-meta">
                                    <span class="hospitality-duration">⏱️ <span data-translate="${tour.durationKey}">${this.getTranslation(tour.durationKey)}</span></span>
                                    <span class="hospitality-group">👥 <span data-translate="${tour.groupSizeKey}">${this.getTranslation(tour.groupSizeKey)}</span></span>
                                </div>
                                <button class="btn btn-secondary" onclick="HospitalitySystem.openBookingModal('${tour.id}')" data-translate="hospitality.cta.book">Book Now</button>
                            </div>
                        </div>
                    `).join('');
                }
            }

            // Re-initialize translation
            if (typeof initTranslation === 'function') {
                setTimeout(() => initTranslation(), 100);
            }
        },

        // Update results count
        updateResultsCount: function() {
            const countElement = document.getElementById('hospitality-results-count');
            if (countElement) {
                const count = this.filteredItems.length;
                const total = hospitalityData.length;
                const resultsText = this.getTranslation('hospitality.filter.results');
                countElement.textContent = `${count} ${resultsText}${count !== total ? ` (${total} ${this.getTranslation('hospitality.filter.total')})` : ''}`;
            }
        },

        // Open booking modal
        openBookingModal: function(itemId) {
            const item = hospitalityData.find(i => i.id === itemId);
            if (!item) return;

            const modal = document.getElementById('booking-modal');
            if (!modal) return;

            const itemName = this.getTranslation(item.nameKey);
            const itemType = item.type === 'hotel' ? this.getTranslation('hospitality.type.hotel') : this.getTranslation('hospitality.type.tour');

            // Set modal content
            const modalTitle = modal.querySelector('[data-booking-title]');
            const modalType = modal.querySelector('[data-booking-type]');
            const bookingItemId = modal.querySelector('[name="booking-item-id"]');
            
            if (modalTitle) modalTitle.textContent = itemName;
            if (modalType) modalType.textContent = itemType;
            if (bookingItemId) bookingItemId.value = itemId;

            // Show modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Focus first input
            const firstInput = modal.querySelector('input[type="text"], input[type="email"]');
            if (firstInput) setTimeout(() => firstInput.focus(), 100);
        },

        // Close booking modal
        closeBookingModal: function() {
            const modal = document.getElementById('booking-modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        },

        // Initialize booking forms
        initBookingForms: function() {
            const modal = document.getElementById('booking-modal');
            if (!modal) return;

            // Set min date to today for date inputs
            const checkinInput = modal.querySelector('#booking-checkin');
            const checkoutInput = modal.querySelector('#booking-checkout');
            if (checkinInput) {
                const today = new Date().toISOString().split('T')[0];
                checkinInput.setAttribute('min', today);
                checkinInput.addEventListener('change', () => {
                    if (checkoutInput && checkinInput.value) {
                        checkoutInput.setAttribute('min', checkinInput.value);
                    }
                });
            }
            if (checkoutInput) {
                const today = new Date().toISOString().split('T')[0];
                checkoutInput.setAttribute('min', today);
            }

            // Close button
            const closeBtn = modal.querySelector('[data-booking-close]');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeBookingModal());
            }

            // Close on backdrop click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeBookingModal();
                }
            });

            // Close on ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.style.display === 'flex') {
                    this.closeBookingModal();
                }
            });

            // Form submission
            const form = modal.querySelector('#booking-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.handleBooking(form);
                });
            }
        },

        // Handle booking
        handleBooking: function(form) {
            // Clear previous errors
            form.querySelectorAll('.field-error').forEach(el => el.remove());
            form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => el.classList.remove('error'));
            this.hideFormMessage(form);

            // Validate required fields
            let isValid = true;
            const requiredFields = form.querySelectorAll('input[required], select[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    const errorElement = document.createElement('span');
                    errorElement.classList.add('field-error');
                    errorElement.textContent = this.getTranslation('hospitality.booking.validation.required');
                    field.parentNode.insertBefore(errorElement, field.nextSibling);
                }
            });

            // Email validation
            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value && !/\S+@\S+\.\S+/.test(emailField.value)) {
                isValid = false;
                emailField.classList.add('error');
                const errorElement = document.createElement('span');
                errorElement.classList.add('field-error');
                errorElement.textContent = this.getTranslation('hospitality.booking.validation.email');
                emailField.parentNode.insertBefore(errorElement, emailField.nextSibling);
            }

            if (!isValid) {
                this.showFormMessage(form, 'error', this.getTranslation('hospitality.booking.validation.error'));
                return;
            }

            // Simulate submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton ? submitButton.textContent : '';

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = this.getTranslation('hospitality.booking.submitting');
            }

            setTimeout(() => {
                this.showFormMessage(form, 'success', this.getTranslation('hospitality.booking.success'));
                form.reset();
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }
                setTimeout(() => {
                    this.closeBookingModal();
                }, 2000);
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
        },

        // Hide form message
        hideFormMessage: function(form) {
            const messageContainer = form.querySelector('.form-message');
            if (messageContainer) {
                messageContainer.style.display = 'none';
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            HospitalitySystem.init();
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
    window.HospitalitySystem = HospitalitySystem;
})();

