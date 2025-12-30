/* ============================================
   KAMUKORE - Experience List System
   Experience filtering, search, dynamic rendering
   ============================================ */

(function() {
    'use strict';

    // Experience List Data Structure
    const experienceListData = [
        {
            id: 'craft-workshop',
            category: 'craft',
            titleKey: 'experience.card1.title',
            descKey: 'experience.card1.desc',
            image: '../assets/images/experience/experiences/craft-workshop.jpg',
            icon: '🎨',
            duration: 'Full day',
            groupSize: 'Max 8',
            popularity: 5
        },
        {
            id: 'village-immersion',
            category: 'cultural',
            titleKey: 'experience.card2.title',
            descKey: 'experience.card2.desc',
            image: '../assets/images/experience/experiences/village-immersion.jpg',
            icon: '🏘️',
            duration: 'Full day',
            groupSize: 'Max 12',
            popularity: 4
        },
        {
            id: 'culinary-journey',
            category: 'culinary',
            titleKey: 'experience.card3.title',
            descKey: 'experience.card3.desc',
            image: '../assets/images/experience/experiences/culinary-journey.jpg',
            icon: '🍳',
            duration: 'Half day',
            groupSize: 'Max 10',
            popularity: 5
        },
        {
            id: 'music-dance',
            category: 'cultural',
            titleKey: 'experience.card4.title',
            descKey: 'experience.card4.desc',
            image: '../assets/images/experience/experiences/music-dance.jpg',
            icon: '🎵',
            duration: 'Evening',
            groupSize: 'Max 15',
            popularity: 4
        },
        {
            id: 'nature-wildlife',
            category: 'nature',
            titleKey: 'experience.card5.title',
            descKey: 'experience.card5.desc',
            image: '../assets/images/experience/experiences/nature-wildlife.jpg',
            icon: '🦁',
            duration: 'Full day',
            groupSize: 'Max 8',
            popularity: 5
        },
        {
            id: 'textile-fashion',
            category: 'craft',
            titleKey: 'experience.card6.title',
            descKey: 'experience.card6.desc',
            image: '../assets/images/experience/experiences/textile-fashion.jpg',
            icon: '🧵',
            duration: 'Full day',
            groupSize: 'Max 6',
            popularity: 4
        }
    ];

    // Experience List System
    const ExperienceListSystem = {
        currentCategory: 'all',
        currentSearch: '',
        filteredExperiences: [],

        init: function() {
            this.filteredExperiences = [...experienceListData];
            this.renderExperiences();
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
            const searchInput = document.getElementById('experience-search');
            if (searchInput) {
                const placeholder = this.getTranslation('experience.search.placeholder');
                if (placeholder && placeholder !== 'experience.search.placeholder') {
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
            const filterButtons = document.querySelectorAll('[data-experience-filter]');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-experience-filter');
                    this.currentCategory = category;
                    
                    // Update active state
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    this.applyFilters();
                });
            });
        },

        // Apply filters
        applyFilters: function() {
            this.filteredExperiences = experienceListData.filter(exp => {
                // Category filter
                if (this.currentCategory !== 'all' && exp.category !== this.currentCategory) {
                    return false;
                }

                // Search filter
                if (this.currentSearch) {
                    const title = this.getTranslation(exp.titleKey).toLowerCase();
                    const desc = this.getTranslation(exp.descKey).toLowerCase();
                    if (!title.includes(this.currentSearch) && !desc.includes(this.currentSearch)) {
                        return false;
                    }
                }

                return true;
            });

            this.renderExperiences();
            this.updateResultsCount();
        },

        // Render experiences
        renderExperiences: function() {
            const container = document.getElementById('experiences-grid');
            if (!container) return;

            if (this.filteredExperiences.length === 0) {
                container.innerHTML = `
                    <div class="no-experiences" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xxl);">
                        <p style="font-size: var(--font-size-large); color: var(--color-text-light);">
                            ${this.getTranslation('experience.filter.no-results')}
                        </p>
                    </div>
                `;
                return;
            }

            container.innerHTML = this.filteredExperiences.map(exp => `
                <div class="card experience-card">
                    <div class="experience-card-image">
                        <div class="image-placeholder experience-image" style="background-image: url('${exp.image}');">
                            <div class="placeholder-overlay">
                                <span class="placeholder-icon">${exp.icon}</span>
                            </div>
                        </div>
                    </div>
                    <div class="experience-card-content">
                        <h2 class="card-title" data-translate="${exp.titleKey}">${this.getTranslation(exp.titleKey)}</h2>
                        <p class="card-text" data-translate="${exp.descKey}">${this.getTranslation(exp.descKey)}</p>
                        <div class="experience-meta">
                            <span class="experience-duration">⏱️ <span data-translate="experience.meta.duration">Duration</span>: ${exp.duration}</span>
                            <span class="experience-group">👥 <span data-translate="experience.meta.group">Group</span>: ${exp.groupSize}</span>
                        </div>
                        <a href="experience-detail.html?id=${exp.id}" class="btn btn-secondary" data-translate="btn.learn-more">Learn More</a>
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
            const countElement = document.getElementById('experience-results-count');
            if (countElement) {
                const count = this.filteredExperiences.length;
                const total = experienceListData.length;
                const resultsText = this.getTranslation('experience.filter.results');
                countElement.textContent = `${count} ${resultsText}${count !== total ? ` (${total} ${this.getTranslation('experience.filter.total')})` : ''}`;
            }
        }
    };

    // Initialize when DOM is ready
    const initializeSystem = () => {
        if (typeof window.translations !== 'undefined') {
            ExperienceListSystem.init();
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
    window.ExperienceListSystem = ExperienceListSystem;
})();

