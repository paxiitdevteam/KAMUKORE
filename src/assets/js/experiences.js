/* ============================================
   KAMUKORE - Experience Data & Dynamic Loading
   Experience detail page functionality
   ============================================ */

// Experience data structure
const experiencesData = {
  'craft-workshop': {
    id: 'craft-workshop',
    titleKey: 'experience.card1.title',
    descriptionKey: 'experience.card1.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/workshops/craft-workshop-1.jpg',
      '../assets/images/experience/workshops/craft-workshop-2.jpg',
      '../assets/images/experience/workshops/craft-workshop-3.jpg'
    ],
    mainImage: '../assets/images/experience/workshops/craft-workshop-main.jpg'
  },
  'village-immersion': {
    id: 'village-immersion',
    titleKey: 'experience.card2.title',
    descriptionKey: 'experience.card2.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/cultural/village-1.jpg',
      '../assets/images/experience/cultural/village-2.jpg',
      '../assets/images/experience/cultural/village-3.jpg'
    ],
    mainImage: '../assets/images/experience/cultural/village-main.jpg'
  },
  'culinary-journey': {
    id: 'culinary-journey',
    titleKey: 'experience.card3.title',
    descriptionKey: 'experience.card3.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/culinary/culinary-1.jpg',
      '../assets/images/experience/culinary/culinary-2.jpg',
      '../assets/images/experience/culinary/culinary-3.jpg'
    ],
    mainImage: '../assets/images/experience/culinary/culinary-main.jpg'
  },
  'music-dance': {
    id: 'music-dance',
    titleKey: 'experience.card4.title',
    descriptionKey: 'experience.card4.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/cultural/music-dance-1.jpg',
      '../assets/images/experience/cultural/music-dance-2.jpg',
      '../assets/images/experience/cultural/music-dance-3.jpg'
    ],
    mainImage: '../assets/images/experience/cultural/music-dance-main.jpg'
  },
  'nature-wildlife': {
    id: 'nature-wildlife',
    titleKey: 'experience.card5.title',
    descriptionKey: 'experience.card5.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/tours/nature-1.jpg',
      '../assets/images/experience/tours/nature-2.jpg',
      '../assets/images/experience/tours/nature-3.jpg'
    ],
    mainImage: '../assets/images/experience/tours/nature-main.jpg'
  },
  'textile-fashion': {
    id: 'textile-fashion',
    titleKey: 'experience.card6.title',
    descriptionKey: 'experience.card6.desc',
    storyTitleKey: 'experience-detail.story.title',
    storyP1Key: 'experience-detail.story.p1',
    storyP2Key: 'experience-detail.story.p2',
    whatTitleKey: 'experience-detail.what.title',
    whatItems: [
      'experience-detail.what.item1',
      'experience-detail.what.item2',
      'experience-detail.what.item3',
      'experience-detail.what.item4',
      'experience-detail.what.item5',
      'experience-detail.what.item6'
    ],
    duration: 'experience-detail.practical.duration.value',
    groupSize: 'experience-detail.practical.group.value',
    location: 'experience-detail.practical.location.value',
    includes: 'experience-detail.practical.includes.value',
    bring: 'experience-detail.practical.bring.value',
    images: [
      '../assets/images/experience/workshops/textile-1.jpg',
      '../assets/images/experience/workshops/textile-2.jpg',
      '../assets/images/experience/workshops/textile-3.jpg'
    ],
    mainImage: '../assets/images/experience/workshops/textile-main.jpg'
  }
};

// Get experience ID from URL parameter
function getExperienceIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
  // Fallback: try to get from hash
  if (!id && window.location.hash) {
    return window.location.hash.substring(1);
  }
  
  return id || 'craft-workshop'; // Default experience
}

// Load experience data
function loadExperienceData(experienceId) {
  return experiencesData[experienceId] || experiencesData['craft-workshop'];
}

// Initialize experience detail page
function initExperienceDetail() {
  const experienceId = getExperienceIdFromURL();
  const experienceData = loadExperienceData(experienceId);
  
  // Update page content dynamically
  updateExperienceContent(experienceData);
  
  // Initialize image gallery (include main image in gallery)
  const allImages = experienceData.mainImage ? [experienceData.mainImage, ...experienceData.images] : experienceData.images;
  initImageGallery(experienceData.images, experienceData.mainImage);
  
  // Update booking link with experience ID
  updateBookingLink(experienceId);
}

// Update experience content
function updateExperienceContent(data) {
  // Wait for translations to be ready
  setTimeout(function() {
    const lang = localStorage.getItem('kamukore-language') || 'en';
    const t = window.translations && window.translations[lang] ? window.translations[lang] : {};
    
    // Update title
    const titleElement = document.querySelector('[data-experience-title]');
    if (titleElement && t[data.titleKey]) {
      titleElement.textContent = t[data.titleKey];
      titleElement.setAttribute('data-translate', data.titleKey);
    }
    
    // Update main image alt text
    const mainImage = document.querySelector('[data-experience-main-image]');
    if (mainImage && t[data.titleKey]) {
      mainImage.alt = t[data.titleKey] || 'Cultural experience';
    }
    
    // Update story sections
    const storyTitle = document.querySelector('[data-experience-story-title]');
    if (storyTitle && t[data.storyTitleKey]) {
      storyTitle.textContent = t[data.storyTitleKey];
      storyTitle.setAttribute('data-translate', data.storyTitleKey);
    }
    
    const storyP1 = document.querySelector('[data-experience-story-p1]');
    if (storyP1 && t[data.storyP1Key]) {
      storyP1.textContent = t[data.storyP1Key];
      storyP1.setAttribute('data-translate', data.storyP1Key);
    }
    
    const storyP2 = document.querySelector('[data-experience-story-p2]');
    if (storyP2 && t[data.storyP2Key]) {
      storyP2.textContent = t[data.storyP2Key];
      storyP2.setAttribute('data-translate', data.storyP2Key);
    }
    
    // Update "What You Will Do" section
    const whatTitle = document.querySelector('[data-experience-what-title]');
    if (whatTitle && t[data.whatTitleKey]) {
      whatTitle.textContent = t[data.whatTitleKey];
      whatTitle.setAttribute('data-translate', data.whatTitleKey);
    }
    
    const whatItemsList = document.querySelector('[data-experience-what-items]');
    if (whatItemsList && data.whatItems) {
      whatItemsList.innerHTML = '';
      data.whatItems.forEach(function(itemKey, index) {
        const li = document.createElement('li');
        li.setAttribute('data-translate', itemKey);
        if (t[itemKey]) {
          li.textContent = t[itemKey];
        }
        whatItemsList.appendChild(li);
      });
    }
    
    // Update practical info
    updatePracticalInfo(data, t);
    
  }, 300);
}

// Update practical information
function updatePracticalInfo(data, t) {
  const durationValue = document.querySelector('[data-experience-duration]');
  if (durationValue && t[data.duration]) {
    durationValue.textContent = t[data.duration];
    durationValue.setAttribute('data-translate', data.duration);
  }
  
  const groupSizeValue = document.querySelector('[data-experience-group-size]');
  if (groupSizeValue && t[data.groupSize]) {
    groupSizeValue.textContent = t[data.groupSize];
    groupSizeValue.setAttribute('data-translate', data.groupSize);
  }
  
  const locationValue = document.querySelector('[data-experience-location]');
  if (locationValue && t[data.location]) {
    locationValue.textContent = t[data.location];
    locationValue.setAttribute('data-translate', data.location);
  }
  
  const includesValue = document.querySelector('[data-experience-includes]');
  if (includesValue && t[data.includes]) {
    includesValue.textContent = t[data.includes];
    includesValue.setAttribute('data-translate', data.includes);
  }
  
  const bringValue = document.querySelector('[data-experience-bring]');
  if (bringValue && t[data.bring]) {
    bringValue.textContent = t[data.bring];
    bringValue.setAttribute('data-translate', data.bring);
  }
}

// Initialize image gallery
function initImageGallery(images, mainImage) {
  const mainImageElement = document.querySelector('[data-experience-main-image]');
  if (mainImageElement && mainImage) {
    mainImageElement.src = mainImage;
    mainImageElement.onerror = function() {
      // Fallback to placeholder if image doesn't exist
      this.src = '../assets/images/placeholder.jpg';
    };
  }
  
  // Create gallery if images exist
  const galleryContainer = document.querySelector('[data-experience-gallery]');
  if (galleryContainer && images && images.length > 0) {
    galleryContainer.innerHTML = '';
    
    images.forEach(function(imageSrc, index) {
      const galleryItem = document.createElement('div');
      galleryItem.className = 'gallery-item';
      galleryItem.setAttribute('role', 'button');
      galleryItem.setAttribute('tabindex', '0');
      galleryItem.setAttribute('aria-label', 'View image ' + (index + 1));
      
      const img = document.createElement('img');
      img.src = imageSrc;
      // Get experience title for better alt text
      const experienceTitle = document.querySelector('[data-experience-title]')?.textContent || 'Cultural experience';
      img.alt = experienceTitle + ' - Gallery image ' + (index + 1);
      img.loading = 'lazy';
      img.onerror = function() {
        this.style.display = 'none';
      };
      
      galleryItem.appendChild(img);
      galleryItem.addEventListener('click', function() {
        // Index + 1 because main image is first
        const mainImage = document.querySelector('[data-experience-main-image]');
        const imageIndex = mainImage ? index + 1 : index;
        openImageModal(imageSrc, imageIndex);
      });
      galleryItem.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const mainImage = document.querySelector('[data-experience-main-image]');
          const imageIndex = mainImage ? index + 1 : index;
          openImageModal(imageSrc, imageIndex);
        }
      });
      
      galleryContainer.appendChild(galleryItem);
    });
  }
}

// Open image modal
function openImageModal(imageSrc, index) {
  // Get gallery images array
  const galleryItems = Array.from(document.querySelectorAll('[data-experience-gallery] .gallery-item img')).map(img => img.src);
  const mainImage = document.querySelector('[data-experience-main-image]');
  const allImages = mainImage ? [mainImage.src, ...galleryItems] : galleryItems;
  
  // Create modal if it doesn't exist
  let modal = document.getElementById('experience-image-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'experience-image-modal';
    modal.className = 'image-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Image gallery');
    modal.setAttribute('aria-modal', 'true');
    
    modal.innerHTML = `
      <div class="image-modal-content">
        <button class="image-modal-close" aria-label="Close modal">&times;</button>
        <button class="image-modal-prev" aria-label="Previous image">&#8249;</button>
        <button class="image-modal-next" aria-label="Next image">&#8250;</button>
        <img class="image-modal-img" src="" alt="Cultural experience gallery image">
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal handlers
    const closeBtn = modal.querySelector('.image-modal-close');
    closeBtn.addEventListener('click', closeImageModal);
    
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeImageModal();
      }
    });
    
    // Keyboard navigation
    let keyboardHandler = function(e) {
      if (modal.style.display === 'flex') {
        if (e.key === 'Escape') {
          closeImageModal();
        } else if (e.key === 'ArrowLeft') {
          navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
          navigateGallery(1);
        }
      }
    };
    document.addEventListener('keydown', keyboardHandler);
    modal.dataset.keyboardHandler = 'true';
  }
  
  // Store images array in modal
  modal.dataset.images = JSON.stringify(allImages);
  
  // Set current image
  const modalImg = modal.querySelector('.image-modal-img');
  if (modalImg) {
    modalImg.src = imageSrc;
    modal.dataset.currentIndex = index;
  }
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Update navigation buttons
  updateGalleryNavigation();
}

// Close image modal
function closeImageModal() {
  const modal = document.getElementById('experience-image-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Navigate gallery
function navigateGallery(direction) {
  const modal = document.getElementById('experience-image-modal');
  if (!modal) return;
  
  // Get images array from modal data
  let images = [];
  try {
    images = JSON.parse(modal.dataset.images || '[]');
  } catch (e) {
    // Fallback to gallery items if parsing fails
  }
  
  if (images.length === 0) {
    // Fallback: try to get from gallery items
    const galleryItems = Array.from(document.querySelectorAll('[data-experience-gallery] .gallery-item img')).map(img => img.src);
    const mainImage = document.querySelector('[data-experience-main-image]');
    images = mainImage ? [mainImage.src, ...galleryItems] : galleryItems;
  }
  
  if (images.length === 0) return;
  
  const currentIndex = parseInt(modal.dataset.currentIndex) || 0;
  let newIndex = currentIndex + direction;
  
  if (newIndex < 0) {
    newIndex = images.length - 1;
  } else if (newIndex >= images.length) {
    newIndex = 0;
  }
  
  const modalImg = modal.querySelector('.image-modal-img');
  if (modalImg && images[newIndex]) {
    modalImg.src = images[newIndex];
    modal.dataset.currentIndex = newIndex;
  }
}

// Update gallery navigation buttons
function updateGalleryNavigation() {
  const modal = document.getElementById('experience-image-modal');
  if (!modal) return;
  
  const prevBtn = modal.querySelector('.image-modal-prev');
  const nextBtn = modal.querySelector('.image-modal-next');
  
  // Remove existing event listeners by cloning and replacing
  if (prevBtn) {
    const newPrevBtn = prevBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    newPrevBtn.addEventListener('click', function() {
      navigateGallery(-1);
    });
  }
  
  if (nextBtn) {
    const newNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
    newNextBtn.addEventListener('click', function() {
      navigateGallery(1);
    });
  }
}

// Update booking link with experience ID
function updateBookingLink(experienceId) {
  const bookingLink = document.querySelector('[data-experience-booking-link]');
  if (bookingLink) {
    const currentHref = bookingLink.getAttribute('href');
    const separator = currentHref.includes('?') ? '&' : '?';
    bookingLink.href = currentHref + separator + 'experience=' + encodeURIComponent(experienceId);
  }
}

// Initialize on page load
if (document.querySelector('[data-experience-page]')) {
  // Wait for DOM and translations to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initExperienceDetail, 500);
    });
  } else {
    setTimeout(initExperienceDetail, 500);
  }
}

// Export for use in other scripts
window.initExperienceDetail = initExperienceDetail;
window.getExperienceIdFromURL = getExperienceIdFromURL;
window.loadExperienceData = loadExperienceData;
window.openImageModal = openImageModal;
window.navigateGallery = navigateGallery;

