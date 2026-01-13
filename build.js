#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Simple Node.js Build System for Sebastian Spa Retreat Website
 * Combines header/footer templates with page content
 */

// Page configurations with metadata for each page
const pageConfigs = {
  'index.html': {
    title: 'Sebastian Spa Retreat | Vacation Rental in Sebastian, FL',
    description: 'Sebastian Spa Retreat - A stunning 3-bedroom vacation rental in Sebastian, FL with heated pool, hot tub, sauna, and year-round outdoor fun. Book your relaxing getaway today!',
    keywords: 'Sebastian FL vacation rental, hot tub, pool, sauna, beach house, Florida vacation',
    og_title: 'Sebastian Spa Retreat: Hot Tub, Pool & Sauna Bliss',
    og_description: '3-bedroom vacation home with heated pool, hot tub, sauna, and amazing amenities in Sebastian, Florida.',
    active_home: 'active'
  },
  'property.html': {
    title: 'The Property | Sebastian Spa Retreat',
    description: 'Explore Sebastian Spa Retreat\'s rooms and amenities - 3 bedrooms, 2 bathrooms, heated pool, hot tub, sauna, full kitchen, and more.',
    keywords: 'Sebastian vacation rental amenities, pool hot tub sauna, bedrooms bathrooms',
    og_title: 'The Property - Sebastian Spa Retreat',
    og_description: 'Detailed property information including bedrooms, bathrooms, amenities, and outdoor features.',
    active_property: 'active'
  },
  'gallery.html': {
    title: 'Photo Gallery | Sebastian Spa Retreat',
    description: 'Browse photos of Sebastian Spa Retreat - pool, hot tub, sauna, bedrooms, kitchen, and more. See what awaits you on your Florida vacation.',
    keywords: 'Sebastian Spa Retreat photos, vacation rental gallery, pool hot tub images',
    og_title: 'Photo Gallery - Sebastian Spa Retreat',
    og_description: 'Explore our photo gallery showcasing the pool, hot tub, sauna, bedrooms, and outdoor areas.',
    active_gallery: 'active',
    extra_scripts: '<script src="js/gallery.js"></script>'
  },
  'location.html': {
    title: 'Location & Activities | Sebastian Spa Retreat',
    description: 'Discover Sebastian, FL - beaches, fishing, kayaking, SpaceX launches, and more. Find activities and attractions near Sebastian Spa Retreat.',
    keywords: 'Sebastian FL activities, beaches fishing SpaceX, Indian River Lagoon',
    og_title: 'Location & Activities - Sebastian Spa Retreat',
    og_description: 'Explore Sebastian, Florida\'s beaches, fishing spots, SpaceX launch viewing, and local attractions.',
    active_location: 'active'
  },
  'local-guide.html': {
    title: 'Local Guide | Sebastian Spa Retreat',
    description: 'Local guide for Sebastian, FL - weather, restaurants, shopping, events, and insider tips for your vacation at Sebastian Spa Retreat.',
    keywords: 'Sebastian FL guide, restaurants weather, local events shopping',
    og_title: 'Local Guide - Sebastian Spa Retreat',
    og_description: 'Your complete guide to Sebastian, Florida including weather, dining, shopping, and local events.',
    active_guide: 'active'
  },
  'guest-info.html': {
    title: 'Guest Information | Sebastian Spa Retreat',
    description: 'Guest information for Sebastian Spa Retreat - check-in details, house rules, WiFi, appliance guides, and everything you need for your stay.',
    keywords: 'Sebastian Spa Retreat check-in, house rules WiFi, guest information',
    og_title: 'Guest Information - Sebastian Spa Retreat',
    og_description: 'Important guest information including check-in procedures, house rules, and appliance guides.',
    active_guest: 'active'
  }
};

/**
 * Simple template replacement function
 */
function renderTemplate(template, data) {
  let result = template;
  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{${key}}}`, 'g');
    result = result.replace(regex, value || '');
  }
  return result;
}

/**
 * Build all pages
 */
function build() {
  console.log('🏗️  Building Sebastian Spa Retreat website...');

  // Read templates
  const headerTemplate = fs.readFileSync('templates/header.html', 'utf8');
  const footerTemplate = fs.readFileSync('templates/footer.html', 'utf8');

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  // Build each page
  for (const [pageName, config] of Object.entries(pageConfigs)) {
    console.log(`📄 Building ${pageName}...`);

    // Read page content
    const pagePath = `pages/${pageName}`;
    if (!fs.existsSync(pagePath)) {
      console.error(`❌ Page file not found: ${pagePath}`);
      continue;
    }

    const pageContent = fs.readFileSync(pagePath, 'utf8');

    // Render header with page-specific data
    const headerHtml = renderTemplate(headerTemplate, config);

    // Render footer with page-specific extra_scripts
    const footerHtml = renderTemplate(footerTemplate, { extra_scripts: config.extra_scripts || '' });

    // Combine all parts
    const finalHtml = headerHtml + pageContent + footerHtml;

    // Write to dist directory
    const outputPath = `dist/${pageName}`;
    fs.writeFileSync(outputPath, finalHtml, 'utf8');

    console.log(`✅ Built ${pageName}`);
  }

  // Copy static assets
  console.log('📋 Copying static assets...');
  copyStaticAssets();

  console.log('🎉 Build complete! Files are in the dist/ directory.');
}

/**
 * Copy static assets (CSS, JS, images, etc.) to dist
 */
function copyStaticAssets() {
  const assets = [
    'css',
    'js',
    'gallery',
    'images'
  ];

  assets.forEach(asset => {
    if (fs.existsSync(asset)) {
      copyDirectory(asset, `dist/${asset}`);
    }
  });
}

/**
 * Recursively copy a directory
 */
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Run build if this script is executed directly
if (require.main === module) {
  build();
}

module.exports = { build };
