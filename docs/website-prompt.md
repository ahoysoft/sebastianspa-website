# Website Development Prompt: Sebastian Spa Retreat Vacation Rental

## Project Overview

Create a modern, clean, and mobile-friendly static website for "Sebastian Spa Retreat" - a vacation rental property located in Sebastian, Florida. The website should serve as an online presence to showcase the property, provide booking information, and offer guests valuable local information.

---

## Property Details

### Property Name
**Sebastian Spa Retreat: Hot Tub, Pool & Sauna Bliss**

### Booking Link
https://airbnb.com/h/sebastianspa

### Property Summary
A 3-bedroom, 2-bathroom vacation home perfect for year-round outdoor fun. Located near beaches, river, hiking trails, fishing spots, and restaurants. Features include:

- **Heated pool** and **Jacuzzi hot tub** (screened patio)
- **Barrel sauna** and **fire pit** (terrace)
- **Arcade** and **playground** for kids
- Seasonal fruit trees in the yard
- SpaceX launch viewing from the backyard/pool
- Covered lanai with tropical breeze

### Bedrooms & Bathrooms

| Room | Description |
|------|-------------|
| Master Bedroom | King bed, walk-in closet, private bathroom, desk/workspace, 80" Smart TV, access to screened patio and hot tub |
| Bedroom 2 | Two personal beds, foldable crib in closet, stroller available |
| Bedroom 3 | Queen bed with pool view |
| Bathroom 1 | Private master bathroom with essentials |
| Bathroom 2 | Full bathroom with bathtub and shower |

### Living Spaces

| Area | Features |
|------|----------|
| Living Room | Sofa bed, chairs, Samsung Smart TV |
| Dining Room | Large table (seats 6), board games, books, arcade, kids toys |
| Kitchen | Open concept, large fridge with ice maker, stove, oven, microwave, Keurig, drip coffee, hot water kettle, blender, rice maker, cooking tools, coffee bar |

### Outdoor Amenities

| Area | Features |
|------|----------|
| Screened Patio | Heated pool, Jacuzzi hot tub, pool toys, outdoor seating, sun loungers, propane BBQ grill, Smart TV |
| Terrace | Barrel sauna, fire pit |
| Backyard | Enclosed lanai, outdoor dining table, pool lounge seats, outdoor sofas, playground |

### Included Amenities
- High-speed Internet & WiFi
- Fresh linens, bath towels, pool/beach towels
- Spare pillows, blankets, sheets
- Iron & ironing board
- 2 hair dryers
- Washer & dryer
- Starter bathroom packs (soap, shampoo, conditioner, shower gel, hand lotion)

### Guest Access
- Full access to entire home (excluding garage)
- Keyless entry
- Full access to outdoor areas (excluding small shed)

### Location Highlights
- Nice, safe neighborhood
- Grocery stores and gas stations just a few miles away
- SpaceX launch viewing from property
- Near beaches, Indian River Lagoon, hiking trails
- Top fishing spots nearby
- Waterfront restaurants with live music

---

## Gallery Structure

Images are organized in the `gallery/` folder with the following categories:

| Folder | Images | Description |
|--------|--------|-------------|
| `outdoor/` | 21 | Pool, hot tub, patio, sauna, fire pit, backyard, playground |
| `bedrooms/` | 7 | Master bedroom, guest bedrooms |
| `kitchen/` | 4 | Kitchen and appliances |
| `living/` | 4 | Living room area |
| `bathrooms/` | 3 | Both bathrooms |
| `additional/` | 3 | Other property features |
| `dining/` | 2 | Dining room and table |

**Total: 44 images**

---

## Website Requirements

### Design Principles
1. **Modern & Clean**: Minimalist design with ample white space
2. **Mobile-First**: Responsive design that works perfectly on all devices
3. **Fast Loading**: Optimize images, use lazy loading for gallery
4. **Easy Navigation**: Clear menu structure, smooth scrolling
5. **Warm & Inviting**: Use colors that evoke relaxation and tropical vibes

### Suggested Color Palette
- Primary: Warm teal/turquoise (pool/ocean inspired)
- Secondary: Sandy beige or warm cream
- Accent: Coral or sunset orange
- Text: Dark charcoal gray
- Background: White or off-white

### Typography
- Headings: Modern sans-serif (e.g., Montserrat, Poppins, or similar)
- Body: Clean readable font (e.g., Open Sans, Lato, or similar)

---

## Site Structure

### Page 1: Home (index.html)
- **Hero Section**: Full-width stunning outdoor/pool image with property name and tagline
- **Quick Overview**: Key features with icons (3 beds, 2 baths, pool, hot tub, sauna)
- **Photo Highlights**: Grid of 4-6 best images
- **Call to Action**: Prominent "Book on Airbnb" button
- **Brief Description**: Short welcome text from listing

### Page 2: The Property (property.html)
- **Full Property Description**: Detailed breakdown of all spaces
- **Amenities List**: Organized by category with icons
- **Room-by-Room Details**: Each space with its features
- **House Rules Summary**: Key rules for guests

### Page 3: Gallery (gallery.html)
- **Filterable Gallery**: Category buttons (All, Outdoor, Bedrooms, Kitchen, Living, Bathrooms, Dining)
- **Lightbox Viewer**: Click to enlarge images
- **Lazy Loading**: For performance
- **Masonry or Grid Layout**: Visually appealing arrangement

### Page 4: Location & Activities (location.html)
- **Interactive Map**: Embedded Google Map showing property location
- **Nearby Attractions Section**:
  - Beaches (distances and brief descriptions)
  - Indian River Lagoon activities
  - Fishing spots
  - Hiking trails
  - Restaurants and dining
- **Activities Available**:
  - Fishing, boating, kayaking
  - Surfing, paddle boarding
  - Skydiving
  - Wildlife watching (dolphins, manatees)
  - SpaceX launch viewing
- **Day Trip Ideas**: Nearby cities and attractions

### Page 5: Local Guide (local-guide.html)
- **Weather Widget**: Current weather in Sebastian, FL (can use a weather API or embed)
- **Best Time to Visit**: Seasonal information
- **Local Events**: Placeholder section for seasonal events
- **Restaurant Recommendations**: Placeholder for local favorites
- **Shopping & Groceries**: Nearby stores information
- **Emergency Contacts**: Local emergency services, urgent care

### Page 6: Guest Info (guest-info.html)
- **Check-in/Check-out Information**: House access details
- **WiFi Information**: Placeholder for network details
- **Appliance Guides**: How to use pool, hot tub, sauna, BBQ
- **House Rules**: Complete list from listing
- **Garbage Collection**: Thursday schedule, bin instructions
- **Parking Rules**: 4 cars max, driveway only
- **Contact Information**: How to reach the host

---

## Technical Requirements

### Static Site Setup
- Pure HTML, CSS, and vanilla JavaScript (no frameworks required)
- OR use a static site generator (11ty, Hugo, Jekyll) for easier maintenance
- Folder structure for easy expansion:

```
/
├── index.html
├── property.html
├── gallery.html
├── location.html
├── local-guide.html
├── guest-info.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── navigation.js
├── images/
│   ├── gallery/
│   │   ├── outdoor/
│   │   ├── bedrooms/
│   │   ├── kitchen/
│   │   ├── living/
│   │   ├── bathrooms/
│   │   ├── dining/
│   │   └── additional/
│   ├── icons/
│   └── hero/
└── assets/
    └── fonts/
```

### Performance
- Optimize all images (WebP format preferred, with JPEG fallback)
- Implement lazy loading for gallery images
- Minify CSS and JS for production
- Use responsive images with srcset

### SEO Basics
- Semantic HTML5 structure
- Meta descriptions for each page
- Open Graph tags for social sharing
- Schema.org markup for vacation rental
- XML sitemap

### Accessibility
- WCAG 2.1 AA compliance
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast
- Skip navigation links

---

## Components to Build

### Header/Navigation
- Logo/Property name
- Responsive hamburger menu for mobile
- Smooth scroll or page navigation
- "Book Now" button always visible

### Footer
- Quick links to all pages
- Social media links (if applicable)
- Airbnb booking button
- Copyright notice
- Contact information

### Reusable Components
- Image card component
- Feature/amenity card with icon
- Section header style
- Call-to-action button styles
- Gallery lightbox modal

---

## Future Expansion Considerations

Build the structure to easily accommodate:
- Blog/News section for local updates
- Seasonal pricing information
- Guest reviews/testimonials section
- FAQ page
- Multiple language support
- Integration with booking calendar
- Newsletter signup
- Photo/video gallery expansion

---

## Placeholder Content Needed

The following sections will need real content to be added later:
- Local restaurant recommendations
- Specific beach names and distances
- Hiking trail information
- Local events calendar
- Weather API integration
- Exact location coordinates for map
- Host contact information
- WiFi credentials page (password protected or delivered separately)

---

## Development Phases

### Phase 1: Foundation
- Set up file structure
- Create base HTML templates
- Implement CSS framework/styles
- Build responsive navigation

### Phase 2: Core Pages
- Home page with hero and overview
- Property details page
- Gallery with filtering and lightbox

### Phase 3: Local Information
- Location and activities page
- Local guide with weather integration
- Guest information page

### Phase 4: Polish
- Optimize images
- Add animations/transitions
- Test across devices and browsers
- Implement SEO elements

---

## Notes

- All property information is sourced from the official Airbnb listing
- Images are provided in the gallery folder and should be optimized for web
- The primary booking channel is Airbnb (https://airbnb.com/h/sebastianspa)
- The property is located in Sebastian, Florida (Space Coast region)
