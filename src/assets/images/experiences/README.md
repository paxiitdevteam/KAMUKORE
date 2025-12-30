# Experience Images Directory

This directory contains images for cultural experiences and tours.

## Structure

Organize images by experience type:
- `workshops/` - Craft and skill workshops
- `tours/` - Cultural tours and sightseeing
- `culinary/` - Food and cooking experiences
- `cultural/` - Traditional ceremonies and events

## Image Specifications

### Recommended Dimensions:
- **Experience Card**: 800x600px (4:3 landscape)
- **Experience Detail**: 1600x900px (16:9 landscape)
- **Gallery**: 1200x800px (3:2 landscape)

### File Format:
- **Primary**: WebP
- **Fallback**: JPG/JPEG
- **Quality**: 85-90%

### File Size:
- **Card Images**: < 150KB
- **Detail Images**: < 400KB

## Naming Convention

Use descriptive names:
- `workshop-craft-basket.jpg`
- `tour-cultural-village.jpg`
- `culinary-traditional-cooking.jpg`
- `ceremony-traditional-dance.jpg`

## Usage in HTML

```html
<img src="../assets/images/experiences/workshops/workshop-craft-basket.jpg" 
     alt="Traditional craft workshop" 
     class="experience-image"
     loading="lazy">
```

## Optimization Checklist

- [ ] Landscape format (4:3 or 16:9)
- [ ] File size optimized
- [ ] WebP format created
- [ ] Alt text provided
- [ ] Lazy loading implemented
- [ ] Captions considered for gallery images

