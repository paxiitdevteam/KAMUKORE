# 🎥 Video Placement Strategy - KAMUKORE Website

## 📋 Overview

This document defines where and how videos should be placed on the KAMUKORE website for optimal user experience, performance, and accessibility.

---

## 🎯 Video Placement Guidelines

### **1. Hero Section Videos** (Background/Autoplay)

**Purpose**: Create immersive, engaging hero sections

**Where to Use:**
- Homepage (`index.html`)
- Experience pages (`experience.html`, `experience-detail.html`)
- Culture page (`culture.html`)
- Region page (`region.html`)

**Technical Requirements:**
- **Format**: MP4 (H.264 codec) + WebM (backup)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Duration**: 15-30 seconds (looped)
- **File Size**: < 5MB (optimized)
- **Autoplay**: Yes (muted, loop, playsinline)
- **Poster Image**: Required (fallback for slow connections)

**HTML Structure:**
```html
<section class="hero hero-with-video">
    <video 
        class="hero-video" 
        autoplay 
        muted 
        loop 
        playsinline
        poster="../assets/images/hero-poster.jpg"
        aria-label="Background video showcasing cultural experience">
        <source src="../assets/videos/hero-homepage.mp4" type="video/mp4">
        <source src="../assets/videos/hero-homepage.webm" type="video/webm">
    </video>
    <div class="hero-overlay"></div>
    <div class="container hero-content">
        <h1 class="hero-title" data-translate="hero.title">KAMUKORE</h1>
        <p class="hero-tagline" data-translate="hero.tagline">The core of many cultures</p>
    </div>
</section>
```

**CSS Requirements:**
```css
.hero-with-video {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
}

.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
}

.hero-content {
    position: relative;
    z-index: 3;
}
```

**File Naming Convention:**
- `hero-homepage.mp4` - Homepage hero video
- `hero-experience.mp4` - Experience page hero video
- `hero-culture.mp4` - Culture page hero video
- `hero-region.mp4` - Region page hero video

---

### **2. Content Section Videos** (User-Controlled)

**Purpose**: Showcase experiences, products, or cultural content

**Where to Use:**
- Experience cards (`experience.html`)
- Product showcases (`product.html`, `craft.html`, `wear.html`)
- Culture sections (`culture.html`)
- About page (`about.html`)

**Technical Requirements:**
- **Format**: MP4 + WebM
- **Resolution**: 1280x720 (HD) or 1920x1080 (Full HD)
- **Duration**: 30 seconds - 3 minutes
- **File Size**: < 10MB per video
- **Controls**: Required (user must control playback)
- **Poster Image**: Recommended
- **Captions**: Required for accessibility

**HTML Structure:**
```html
<!-- In Card/Grid Layout -->
<div class="card">
    <div class="card-media">
        <video 
            controls 
            poster="../assets/images/experience-1-poster.jpg"
            aria-label="Craft workshop experience video">
            <source src="../assets/videos/experience-craft-workshop.mp4" type="video/mp4">
            <source src="../assets/videos/experience-craft-workshop.webm" type="video/webm">
            <track kind="captions" src="../assets/videos/captions/craft-workshop-en.vtt" srclang="en" label="English">
            <track kind="captions" src="../assets/videos/captions/craft-workshop-fr.vtt" srclang="fr" label="Français">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="card-content">
        <h3 data-translate="experience.card1.title">Craft Workshop Experience</h3>
        <p data-translate="experience.card1.desc">Learn traditional crafting techniques...</p>
    </div>
</div>

<!-- Standalone Video Section -->
<section class="section">
    <div class="container">
        <h2 data-translate="section.video.title">Watch Our Story</h2>
        <div class="video-container">
            <video 
                controls 
                poster="../assets/images/video-poster.jpg"
                aria-label="KAMUKORE story video">
                <source src="../assets/videos/kamukore-story.mp4" type="video/mp4">
                <source src="../assets/videos/kamukore-story.webm" type="video/webm">
                <track kind="captions" src="../assets/videos/captions/story-en.vtt" srclang="en" label="English">
                <track kind="captions" src="../assets/videos/captions/story-fr.vtt" srclang="fr" label="Français">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</section>
```

**CSS Requirements:**
```css
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border-radius: var(--radius-md);
    background: var(--color-bg-light);
}

.video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-md);
}

.card-media video {
    width: 100%;
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-md);
}
```

**File Naming Convention:**
- `experience-[name].mp4` - Experience videos
- `product-[name].mp4` - Product showcase videos
- `craft-[name].mp4` - Craft demonstration videos
- `culture-[name].mp4` - Cultural content videos

---

### **3. Modal/Lightbox Videos** (Full-Screen Experience)

**Purpose**: Detailed video viewing experience

**Where to Use:**
- Experience detail pages (`experience-detail.html`)
- Product detail modals (`product.html`)
- Gallery sections

**Technical Requirements:**
- Same as Content Section Videos
- **Modal**: Full-screen or large modal overlay
- **Close Button**: Required
- **Keyboard Navigation**: ESC to close

**HTML Structure:**
```html
<!-- Video Modal Trigger -->
<button class="btn btn-video" data-video-modal="experience-craft-workshop">
    <span data-translate="btn.watch.video">Watch Video</span>
</button>

<!-- Video Modal -->
<div class="video-modal" id="video-modal" role="dialog" aria-label="Video player" aria-modal="true">
    <div class="video-modal-overlay"></div>
    <div class="video-modal-content">
        <button class="video-modal-close" aria-label="Close video">×</button>
        <video controls id="modal-video-player">
            <source src="" type="video/mp4">
            <source src="" type="video/webm">
            <track kind="captions" src="" srclang="en" label="English">
            <track kind="captions" src="" srclang="fr" label="Français">
        </video>
    </div>
</div>
```

**JavaScript Requirements:**
```javascript
// Video modal functionality in main.js
function initVideoModal() {
    const modalTriggers = document.querySelectorAll('[data-video-modal]');
    const modal = document.getElementById('video-modal');
    const modalPlayer = document.getElementById('modal-video-player');
    const modalClose = document.querySelector('.video-modal-close');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const videoName = this.getAttribute('data-video-modal');
            const videoSrc = `../assets/videos/${videoName}.mp4`;
            modalPlayer.src = videoSrc;
            modal.classList.add('active');
            modalPlayer.play();
        });
    });
    
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
        modalPlayer.pause();
        modalPlayer.src = '';
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            modalPlayer.pause();
            modalPlayer.src = '';
        }
    });
}
```

---

## 📁 Video File Organization

### **Folder Structure:**
```
src/assets/videos/
├── hero/                      # Hero background videos
│   ├── hero-homepage.mp4
│   ├── hero-homepage.webm
│   ├── hero-experience.mp4
│   └── hero-experience.webm
├── content/                   # Content section videos
│   ├── experiences/
│   │   ├── experience-craft-workshop.mp4
│   │   ├── experience-craft-workshop.webm
│   │   ├── experience-village-visit.mp4
│   │   └── experience-village-visit.webm
│   ├── products/
│   │   ├── product-demonstration.mp4
│   │   └── product-demonstration.webm
│   ├── craft/
│   │   ├── craft-traditional.mp4
│   │   └── craft-traditional.webm
│   └── culture/
│       ├── culture-tradition.mp4
│       └── culture-tradition.webm
├── captions/                  # Video captions (VTT files)
│   ├── craft-workshop-en.vtt
│   ├── craft-workshop-fr.vtt
│   ├── story-en.vtt
│   └── story-fr.vtt
└── posters/                   # Video poster images
    ├── hero-homepage-poster.jpg
    ├── experience-1-poster.jpg
    └── video-poster.jpg
```

---

## 🎬 Video Content Guidelines

### **Hero Videos:**
- **Theme**: Cultural experiences, landscapes, people
- **Mood**: Inspiring, authentic, immersive
- **No Audio**: Muted (autoplay requirement)
- **Duration**: 15-30 seconds (looped)

### **Content Videos:**
- **Theme**: Specific experiences, products, stories
- **Mood**: Educational, engaging, informative
- **Audio**: Required (with captions)
- **Duration**: 30 seconds - 3 minutes

### **Product Videos:**
- **Theme**: Product demonstrations, craftsmanship
- **Mood**: Showcase quality, technique, authenticity
- **Audio**: Optional (visual focus)
- **Duration**: 30 seconds - 2 minutes

---

## ♿ Accessibility Requirements

### **Mandatory:**
1. ✅ **Captions/Subtitles**: All videos must have VTT caption files
2. ✅ **Poster Images**: Required for all videos
3. ✅ **ARIA Labels**: Descriptive `aria-label` attributes
4. ✅ **Keyboard Controls**: Video controls accessible via keyboard
5. ✅ **Text Alternatives**: Fallback text for non-video browsers

### **Recommended:**
- Audio descriptions for visually impaired users
- Multiple language captions (EN/FR)
- Transcripts available on page

---

## ⚡ Performance Optimization

### **Best Practices:**
1. **Lazy Loading**: Videos load only when visible
2. **Progressive Loading**: Show poster image first
3. **Format Optimization**: Use WebM for modern browsers, MP4 for compatibility
4. **File Size**: Keep videos under 10MB when possible
5. **Compression**: Use appropriate bitrate (2-5 Mbps for HD)

### **Lazy Loading Implementation:**
```html
<video 
    controls 
    loading="lazy"
    poster="../assets/images/video-poster.jpg">
    <source src="../assets/videos/experience.mp4" type="video/mp4">
</video>
```

---

## 📍 Page-Specific Video Placement

### **Homepage (`index.html`):**
- ✅ Hero section: Background video (optional)
- ✅ Experience section: Video cards (optional)
- ✅ About section: Story video (recommended)

### **Experience Page (`experience.html`):**
- ✅ Hero section: Background video (recommended)
- ✅ Experience cards: Video previews (recommended)
- ✅ Each experience: Link to detail page with full video

### **Experience Detail (`experience-detail.html`):**
- ✅ Hero section: Background video (recommended)
- ✅ Main content: Full experience video (required)
- ✅ Gallery: Additional video clips (optional)

### **Product Pages (`product.html`, `craft.html`, `wear.html`):**
- ✅ Hero section: Background video (optional)
- ✅ Product cards: Video demonstrations (recommended)
- ✅ Product detail: Full product video (recommended)

### **Culture Page (`culture.html`):**
- ✅ Hero section: Background video (recommended)
- ✅ Cultural sections: Cultural videos (recommended)
- ✅ Regional content: Region-specific videos (optional)

### **About Page (`about.html`):**
- ✅ Hero section: Background video (optional)
- ✅ Story section: Company story video (recommended)
- ✅ Team section: Team introduction videos (optional)

### **Region Page (`region.html`):**
- ✅ Hero section: Background video (recommended)
- ✅ Region sections: Region showcase videos (recommended)
- ✅ Cultural highlights: Cultural tradition videos (recommended)

---

## ✅ Implementation Checklist

### **For Each Video:**
- [ ] Video file optimized (< 10MB)
- [ ] Multiple formats (MP4 + WebM)
- [ ] Poster image created
- [ ] Captions created (EN + FR)
- [ ] ARIA label added
- [ ] Proper file naming
- [ ] Placed in correct folder
- [ ] Lazy loading implemented
- [ ] Responsive design tested
- [ ] Accessibility tested

---

## 📝 Summary

**Video Placement Strategy:**
1. **Hero Videos**: Background autoplay (muted, looped) - Optional but recommended
2. **Content Videos**: User-controlled with captions - Recommended for key content
3. **Modal Videos**: Full-screen experience - For detailed viewing

**Key Principles:**
- Always provide captions
- Always use poster images
- Optimize file sizes
- Lazy load when possible
- Ensure accessibility
- Test on multiple devices

---

**Last Updated**: December 2025  
**Next Review**: After video content is added

