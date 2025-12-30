# 📸 Phase 2: Hero Images Implementation Guide

**Status**: In Progress  
**Priority**: Medium  
**Estimated Time**: 8-12 hours

---

## 🎯 Objective

Add hero background images to all pages to enhance visual appeal and create a more engaging user experience.

---

## 📋 Task Breakdown

### **Task 2.1: Hero Images Setup**

#### **Step 1: Directory Structure** ✅
- [x] Create `src/assets/images/hero/` directory
- [x] Create README.md with specifications
- [x] Document naming conventions

#### **Step 2: CSS Updates** ✅
- [x] Update `.page-hero` styles to support background images
- [x] Add overlay styles for better text readability
- [x] Ensure responsive behavior

#### **Step 3: Image Requirements**

**Pages Needing Hero Images:**
- [ ] `about.html` - About KAMUKORE
- [ ] `contact.html` - Contact page
- [ ] `craft.html` - Craft products
- [ ] `culture.html` - Cultural heritage
- [ ] `experience.html` - Experiences listing
- [ ] `experience-detail.html` - Experience details
- [ ] `hospitality.html` - Hospitality & sightseeing
- [ ] `product.html` - Products listing
- [ ] `region.html` - Regional information
- [ ] `table.html` - Restaurant/culinary
- [ ] `wear.html` - Fashion collections

**Image Specifications:**
- **Dimensions**: 1920x600px (desktop), 1200x400px (tablet), 800x300px (mobile)
- **Format**: WebP (primary), JPG (fallback)
- **Size**: < 200KB (target), < 500KB (maximum)
- **Quality**: 80-85% for JPG, 85-90% for WebP

#### **Step 4: Implementation**

For each page, add hero image:

```html
<section class="page-hero" style="background-image: url('../assets/images/hero/hero-[page-name].jpg');">
  <div class="container">
    <h1 data-translate="page.[page].title">Page Title</h1>
    <p data-translate="page.[page].subtitle">Page subtitle</p>
  </div>
</section>
```

**Example for About page:**
```html
<section class="page-hero" style="background-image: url('../assets/images/hero/hero-about.jpg');">
  <div class="container">
    <h1 data-translate="page.about.title">About KAMUKORE</h1>
    <p data-translate="page.about.subtitle">Where Cultures Come Alive</p>
  </div>
</section>
```

#### **Step 5: Testing**

- [ ] Test image loading on all pages
- [ ] Verify responsive behavior
- [ ] Check text readability over images
- [ ] Test on different browsers
- [ ] Verify performance (page load times)
- [ ] Check accessibility (alt text considerations)

---

## 🎨 Image Content Guidelines

### **About Page**
- Showcase Cameroonian culture diversity
- Group of people, cultural celebration
- Traditional and modern elements

### **Contact Page**
- Friendly, welcoming scene
- Communication/connection theme
- Cameroonian hospitality

### **Craft Page**
- Handcrafted products
- Artisans at work
- Traditional craftsmanship

### **Culture Page**
- Cultural diversity
- Traditional ceremonies
- Regional variety

### **Experience Page**
- Active cultural experiences
- People participating
- Authentic moments

### **Hospitality Page**
- Beautiful accommodations
- Scenic landscapes
- Travel/adventure theme

### **Product Page**
- Product showcase
- Quality craftsmanship
- Cultural items

### **Region Page**
- Regional landscapes
- Cultural landmarks
- Geographic diversity

### **Table/Restaurant Page**
- Cameroonian cuisine
- Food presentation
- Culinary traditions

### **Wear Page**
- Fashion collections
- Traditional-modern fusion
- Style showcase

---

## ✅ Success Criteria

- [ ] All pages have hero images
- [ ] Images optimized for web (< 200KB)
- [ ] WebP format available
- [ ] Responsive behavior works
- [ ] Text readable over images
- [ ] No performance issues
- [ ] Accessibility maintained

---

## 📝 Notes

- Hero images should enhance, not distract
- Ensure good contrast for text overlay
- Use authentic Cameroonian imagery
- Maintain professional quality
- Consider cultural sensitivity

---

**Last Updated**: December 2025  
**Next Steps**: Obtain/create hero images, implement on pages

