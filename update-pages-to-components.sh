#!/bin/bash
# Update all pages in src/pages/ to use component system

echo "Updating all pages to use components..."

for file in src/pages/*.html; do
    echo "Processing: $file"
    
    # Add components.js script if not present
    if ! grep -q "components.js" "$file"; then
        sed -i 's|<script src="../assets/js/translations.js"></script>|<script src="../assets/js/translations.js"></script>\n    <script src="../assets/js/components.js"></script>|g' "$file"
    fi
    
    # Replace header with component div (if header exists)
    if grep -q '<header class="header"' "$file"; then
        # Find header start and end
        sed -i '/<header class="header"/,/<\/header>/c\
    <!-- Header Component -->\
    <div id="header-component"></div>' "$file"
    fi
    
    # Replace footer with component div (if footer exists)
    if grep -q '<footer class="footer"' "$file"; then
        sed -i '/<footer class="footer"/,/<\/footer>/c\
    <!-- Footer Component -->\
    <div id="footer-component"></div>' "$file"
    fi
    
    # Replace cookie banner with component div (if exists)
    if grep -q 'cookie-banner" role="dialog"' "$file"; then
        sed -i '/cookie-banner" role="dialog"/,/<\/div>.*cookie-banner/c\
    <!-- Cookie Banner Component -->\
    <div id="cookie-banner-component"></div>' "$file"
    fi
done

echo "Done!"

