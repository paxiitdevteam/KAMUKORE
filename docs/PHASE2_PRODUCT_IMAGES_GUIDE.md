# 📸 Phase 2: Product & Experience Images Guide

**Status**: In Progress  
**Priority**: Medium  
**Estimated Time**: 6-10 hours

---

## 🎯 Objective

Add product and experience images throughout the website to showcase offerings visually.

---

## 📋 Task Breakdown

### **Task 2.2: Product/Experience Images**

#### **Step 1: Directory Structure** ✅
- [x] Create `src/assets/images/products/` directory
- [x] Create `src/assets/images/experiences/` directory
- [x] Create README files with specifications
- [x] Document naming conventions

#### **Step 2: Image Requirements**

**Product Images Needed:**
- [ ] Craft products (6 items)
- [ ] Fashion/Wear collections (6 collections)
- [ ] General products

**Experience Images Needed:**
- [ ] Craft workshops
- [ ] Cultural tours
- [ ] Culinary experiences
- [ ] Traditional ceremonies
- [ ] Regional experiences

**Image Specifications:**
- **Product Cards**: 600x600px (1:1 square), < 100KB
- **Product Detail**: 1200x1200px (1:1 square), < 300KB
- **Experience Cards**: 800x600px (4:3 landscape), < 150KB
- **Experience Detail**: 1600x900px (16:9 landscape), < 400KB
- **Format**: WebP (primary), JPG (fallback)
- **Quality**: 85-90%

#### **Step 3: Implementation**

**Product Cards:**
```html
<div class="card">
  <img src="../assets/images/products/craft/craft-basket-1.jpg" 
       alt="Traditional woven basket" 
       class="card-image"
       loading="lazy">
  <h3>Product Name</h3>
  <p>Product description</p>
</div>
```

**Experience Cards:**
```html
<div class="card">
  <img src="../assets/images/experiences/workshops/workshop-craft-basket.jpg" 
       alt="Traditional craft workshop" 
       class="card-image"
       loading="lazy">
  <h3>Experience Name</h3>
  <p>Experience description</p>
</div>
```

#### **Step 4: Pages to Update**

**Product Images:**
- [ ] `craft.html` - 6 product images
- [ ] `product.html` - 6 product images
- [ ] `wear.html` - 6 collection images

**Experience Images:**
- [ ] `experience.html` - 6 experience images
- [ ] `experience-detail.html` - Detail images + gallery
- [ ] `hospitality.html` - Tour images

#### **Step 5: Optimization**

- [ ] Optimize all images (< target sizes)
- [ ] Create WebP versions
- [ ] Add alt text for accessibility
- [ ] Implement lazy loading
- [ ] Test image loading performance

---

## ✅ Success Criteria

- [ ] All product cards have images
- [ ] All experience cards have images
- [ ] Images optimized (< target sizes)
- [ ] WebP format available
- [ ] Alt text provided
- [ ] Lazy loading implemented
- [ ] No performance issues

---

## 📝 Notes

- Use high-quality, professional images
- Ensure images represent products/experiences accurately
- Maintain consistent style across images
- Consider cultural authenticity
- Optimize for web performance

---

**Last Updated**: December 2025  
**Next Steps**: Obtain/create images, implement on pages

