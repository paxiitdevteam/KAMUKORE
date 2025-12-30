# 🎨 Hero Landing Page Image - Specifications & Guidelines

**Date**: December 2025  
**Status**: Ready for Image Creation  
**Purpose**: Landing page background image

---

## 🎯 **Image Purpose**

The hero image serves as the **full-page background** for the KAMUKORE landing page, creating an immersive experience that showcases Cameroonian culture and heritage.

---

## 📐 **Technical Specifications**

### **Dimensions**
- **Desktop**: 1920px × 1080px (Full HD, 16:9 aspect ratio)
- **Minimum**: 1920px × 1080px
- **Maximum**: 3840px × 2160px (4K, optional for future)

### **File Format**
- **Primary**: WebP (best compression, modern browsers)
- **Fallback**: JPG/JPEG (for older browsers)
- **Quality**: 85-90% (WebP), 80-85% (JPG)

### **File Size**
- **Target**: < 300KB (optimized)
- **Maximum**: < 500KB
- **Mobile Optimized**: < 150KB (separate file optional)

### **File Naming**
- **Primary**: `hero-homepage.webp`
- **Fallback**: `hero-homepage.jpg`
- **Location**: `src/assets/images/hero-homepage.webp`

---

## 🎨 **Design Specifications**

### **Color Palette** (Must Match Website)

**Primary Colors**:
- **Dark Background**: `#1a1a1a` (Rich black)
- **Gold Accent**: `#d4af37` (Elegant gold)
- **Brown Accent**: `#8b4513` (Warm brown)

**Supporting Colors**:
- Earth tones (browns, tans, beiges)
- Natural greens (forest, jungle)
- Warm oranges and reds (sunset, fire)
- Deep blues (sky, water)

### **Style & Mood**

**Aesthetic**:
- ✅ **Premium & Elegant**: High-quality, sophisticated
- ✅ **Cultural Heritage**: Authentic Cameroonian culture
- ✅ **Warm & Inviting**: Welcoming, friendly atmosphere
- ✅ **Rich & Vibrant**: Colorful but not overwhelming
- ✅ **Professional**: Suitable for a cultural platform

**Mood**:
- Celebratory and joyful
- Respectful of traditions
- Modern yet timeless
- Inclusive and diverse

---

## 🖼️ **Content Guidelines**

### **Recommended Elements**

1. **Cultural Elements**:
   - Traditional Cameroonian patterns or textiles
   - Cultural artifacts (masks, baskets, drums)
   - Traditional architecture or structures
   - Cultural celebrations or ceremonies

2. **People**:
   - Diverse group of people (various ages, backgrounds)
   - Traditional attire mixed with modern
   - Warm, welcoming expressions
   - Engaged in cultural activities

3. **Nature & Landscape**:
   - Cameroonian landscapes (mountains, forests, coast)
   - Natural elements (trees, water, sky)
   - Rich, lush vegetation
   - Beautiful natural lighting

4. **Products & Crafts**:
   - Handcrafted items
   - Traditional crafts being made
   - Artisan work
   - Quality craftsmanship

### **Composition Guidelines**

**Layout**:
- **Center Focus**: Main subject in center or rule of thirds
- **Depth**: Foreground, midground, background layers
- **Balance**: Visual weight distributed evenly
- **Leading Lines**: Guide eye to important elements

**Text Overlay Considerations**:
- **Dark Areas**: Ensure dark areas for white text overlay
- **Light Areas**: Ensure light areas for dark text overlay
- **Contrast**: High contrast zones for text readability
- **Overlay Ready**: Image should work with dark overlay (already in CSS)

**Focal Points**:
- Main subject should be clear and prominent
- Supporting elements enhance, not distract
- Cultural elements visible but not overwhelming
- Professional composition

---

## 🎭 **Visual Style Examples**

### **What Works Well**:
- ✅ Rich, warm color palette
- ✅ Natural lighting (golden hour, soft daylight)
- ✅ Cultural authenticity
- ✅ Professional photography
- ✅ High resolution and sharp details
- ✅ Balanced composition

### **What to Avoid**:
- ❌ Overly bright or harsh lighting
- ❌ Cluttered or busy composition
- ❌ Low resolution or pixelated
- ❌ Generic stock photos
- ❌ Inauthentic cultural representation
- ❌ Poor contrast or visibility

---

## 📱 **Responsive Considerations**

### **Desktop (1920px+)**
- Full image visible
- Rich detail and clarity
- Parallax effect (fixed attachment)

### **Tablet (768px - 1919px)**
- Image crops appropriately
- Key elements remain visible
- Maintains aspect ratio

### **Mobile (< 768px)**
- Image scrolls (not fixed) for performance
- Important elements still visible
- Optimized file size

---

## 🔧 **Implementation Details**

### **Current CSS Setup**

The image is set as the `body` background:
```css
body {
  background-image: url(var(--pms-hero-image));
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Desktop parallax */
}
```

### **Overlay Applied**

A dark overlay is automatically applied for text readability:
```css
body::before {
  background: linear-gradient(135deg, 
    rgba(26, 26, 26, 0.85) 0%, 
    rgba(139, 69, 19, 0.75) 50%, 
    rgba(26, 26, 26, 0.85) 100%);
}
```

**Note**: The image should work well with this overlay, so ensure good contrast.

---

## 📋 **Image Checklist**

Before finalizing the image, ensure:

- [ ] **Dimensions**: 1920px × 1080px minimum
- [ ] **Format**: WebP (primary) + JPG (fallback)
- [ ] **Size**: < 300KB (optimized)
- [ ] **Colors**: Match website palette (dark, gold, brown)
- [ ] **Style**: Premium, elegant, cultural
- [ ] **Content**: Cameroonian cultural elements
- [ ] **Composition**: Balanced, professional
- [ ] **Contrast**: Works with dark overlay
- [ ] **Quality**: High resolution, sharp details
- [ ] **Authenticity**: Genuine cultural representation

---

## 🎨 **Suggested Image Concepts**

### **Concept 1: Cultural Celebration**
- Group of people in traditional attire
- Cultural ceremony or celebration
- Warm, golden lighting
- Rich colors and patterns
- Background: Cameroonian landscape

### **Concept 2: Artisan at Work**
- Artisan creating traditional craft
- Hands working with materials
- Traditional tools and materials visible
- Warm, natural lighting
- Background: Workshop or outdoor setting

### **Concept 3: Cultural Diversity**
- Montage of cultural elements
- Traditional patterns/textiles
- Cultural artifacts arranged beautifully
- Rich, warm color palette
- Professional product photography style

### **Concept 4: Landscape & Culture**
- Cameroonian landscape (mountains, forest)
- Cultural elements integrated naturally
- People in traditional attire
- Golden hour lighting
- Epic, cinematic composition

---

## 📝 **File Placement**

Once the image is created:

1. **Save as**: `hero-homepage.webp` (and `hero-homepage.jpg` as fallback)
2. **Location**: `src/assets/images/hero-homepage.webp`
3. **Update PMS**: The path manager will automatically use it
4. **Test**: Verify image loads correctly on all devices

---

## 🔄 **Current Status**

- ✅ CSS setup ready
- ✅ PMS path manager configured
- ✅ Overlay system in place
- ✅ Responsive behavior implemented
- ⏳ **Awaiting**: New hero image creation

---

## 📞 **Next Steps**

1. **Create Image**: Follow specifications above
2. **Optimize**: Compress to < 300KB
3. **Save**: Place in `src/assets/images/` as `hero-homepage.webp`
4. **Update Path**: PMS will automatically detect it (or update `path-manager.js` if different name)
5. **Test**: Verify on desktop, tablet, and mobile

---

**Status**: ✅ **Specifications Complete - Ready for Image Creation**

