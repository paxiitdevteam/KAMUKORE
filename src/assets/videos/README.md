# 🎥 Videos Directory

This directory contains all video assets for the KAMUKORE website, organized by page.

## 📁 Folder Structure

```
src/assets/videos/
├── about/              # About page videos
├── contact/            # Contact page videos (optional)
├── craft/              # Craft page videos
├── culture/            # Culture page videos
├── experience/         # Experience page videos
├── hospitality/        # Hospitality page videos
├── product/            # Product page videos
├── region/             # Region page videos
├── restaurant/         # Restaurant page videos
└── wear/               # Wear page videos
```

## 📋 Page-Specific Videos

Each folder contains:
- `[page-name]-marketing.mp4` (Primary format)
- `[page-name]-marketing.webm` (Fallback format)
- `README.md` (Specifications and guidelines)

### Example Structure:
```
src/assets/videos/product/
├── product-marketing.mp4
├── product-marketing.webm
└── README.md
```

## 🎬 Video Specifications

### **Standard Requirements**
- **Resolution**: 1920px × 1080px (Full HD)
- **Duration**: 60-90 seconds (30-60 for contact)
- **File Size**: < 10MB (optimized)
- **Frame Rate**: 30fps
- **Audio**: Optional (can be muted for autoplay)

### **Formats**
- **Primary**: MP4 (H.264 codec) - Best compatibility
- **Fallback**: WebM (VP9 codec) - Modern browsers
- **Poster Image**: Located in `../images/[page]/video/video-poster.jpg`

## 💻 Usage

From HTML pages in `src/pages/`:
```html
<video controls poster="../assets/images/[page]/video/video-poster.jpg">
    <source src="../assets/videos/[page]/[page]-marketing.mp4" type="video/mp4">
    <source src="../assets/videos/[page]/[page]-marketing.webm" type="video/webm">
    <p>Your browser doesn't support video. 
       <a href="../assets/videos/[page]/[page]-marketing.mp4">Download the video</a> instead.
    </p>
</video>
```

## ✅ Best Practices

- **Multiple Formats**: Always provide MP4 and WebM for compatibility
- **Poster Images**: Use high-quality poster images (1920×1080px, <300KB)
- **Optimization**: Compress videos for web delivery
- **Accessibility**: Include fallback text and consider subtitles
- **Naming**: Use consistent naming: `[page-name]-marketing.mp4`

## 📝 Adding Videos

1. **Create video files** following specifications in each folder's README
2. **Place files** in the appropriate page folder:
   - `[page-name]-marketing.mp4`
   - `[page-name]-marketing.webm`
3. **Add poster image** to `../images/[page]/video/video-poster.jpg`
4. **Video will automatically display** on the page

## 🔗 Related Files

- **Poster Images**: `src/assets/images/[page]/video/video-poster.jpg`
- **HTML Pages**: `src/pages/[page].html`
- **CSS Styling**: `src/assets/css/main.css` (`.marketing-video`, `.video-container`)

## 📚 Documentation

Each page folder contains a detailed `README.md` with:
- File locations
- Technical specifications
- Content guidelines
- Poster image requirements
- Status tracking

