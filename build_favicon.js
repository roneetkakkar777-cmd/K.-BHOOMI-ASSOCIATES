const fs = require('fs');
const path = require('path');

const logoPath = 'c:/Users/asus/OneDrive/Desktop/Chand/K.-BHOOMI-ASSOCIATES/public/logo.png';
const faviconPath = 'c:/Users/asus/OneDrive/Desktop/Chand/K.-BHOOMI-ASSOCIATES/public/favicon.svg';

try {
  const base64 = fs.readFileSync(logoPath).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <clipPath id="roundedCorner">
      <rect width="64" height="64" rx="14" ry="14" />
    </clipPath>
  </defs>
  <!-- Background white to match logo canvas -->
  <rect width="64" height="64" rx="14" fill="#ffffff" />
  <!-- Self-contained base64 logo image to bypass browser SVG image sandboxing -->
  <image href="data:image/png;base64,${base64}" width="64" height="64" clip-path="url(#roundedCorner)" />
</svg>`;

  fs.writeFileSync(faviconPath, svg);
  console.log('Successfully generated self-contained rounded favicon.svg!');
} catch (error) {
  console.error('Error generating favicon:', error);
}
