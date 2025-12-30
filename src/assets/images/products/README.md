# Product Images Directory

This directory contains images for products, crafts, and fashion items.

## Structure

Organize images by category:
- `craft/` - Handcrafted products
- `fashion/` - Wear/fashion collections
- `general/` - General product images

## Image Specifications

### Recommended Dimensions:
- **Product Card**: 600x600px (1:1 square)
- **Product Detail**: 1200x1200px (1:1 square)
- **Fashion Item**: 600x800px (3:4 portrait)

### File Format:
- **Primary**: WebP
- **Fallback**: JPG/JPEG
- **Quality**: 85-90%

### File Size:
- **Card Images**: < 100KB
- **Detail Images**: < 300KB

## Naming Convention

Use descriptive names:
- `craft-basket-1.jpg`
- `craft-mask-ceremonial.jpg`
- `fashion-heritage-dress.jpg`
- `product-pottery-bowl.jpg`

## Usage in HTML

```html
<img src="../assets/images/products/craft/craft-basket-1.jpg" 
     alt="Traditional woven basket" 
     class="product-image"
     loading="lazy">
```

## Optimization Checklist

- [ ] Square format for product cards (1:1)
- [ ] File size optimized (< 100KB for cards)
- [ ] WebP format created
- [ ] Alt text provided
- [ ] Lazy loading implemented
- [ ] Responsive images considered

