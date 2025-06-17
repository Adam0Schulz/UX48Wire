# Canteen App Wireframe Development Log

## 2025-06-17

### Initial Setup and Dark Mode Implementation
- Created basic mobile-first wireframe structure with HTML, CSS, and JavaScript
- Implemented dark mode toggle functionality with CSS variables and JavaScript
- Added localStorage persistence for dark mode preference

### Dark Mode Refinement
- Removed dark mode toggle switch as per requirement
- Set dark mode as the default and only theme
- Removed all toggle-related JavaScript code and CSS styling
- Simplified the codebase to focus on wireframe layout only

### Layout Improvements
- Adjusted vertical spacing between sections for better visual balance
- Modified height of menu sections to create equal spacing
- Added space-between justification to main content for better distribution
- Increased padding and margin around the weekly menu button

### Project Organization
- Created "landing screen" folder inside wireframes directory
- Moved HTML, CSS, and JavaScript files to the new folder
- Removed original files from the wireframes root folder
- Created this development log to track changes

### Accessibility Improvements
- Added language selector toggle in the top-right corner
- Implemented minimalistic "EN | DA" button for language switching
- Added JavaScript functionality to toggle between English and Danish
- Positioned the selector for optimal UX discoverability

### Enhanced Today's Menu Section
- Increased fidelity of the Today's Menu section with placeholder meal options
- Added three meal types: vegetarian, meat, and vegan options with appropriate badges
- Implemented key sustainability features:
  - CO₂ footprint indicators for each meal
  - Organic and locally-sourced badges
  - Diet type badges (vegetarian, vegan, meat)
- Created scrollable menu interface for better space utilization
- Used color-coding for different meal types to enhance visual hierarchy
- Kept interface simple with only essential information (detailed allergen and portion information reserved for detail screens)
- Further simplified meal cards by moving descriptions to detail pages
- Prioritized vegan options by placing them at the top of the menu
- Optimized horizontal space usage with compact meal card layout
- Improved badge readability with better contrast, borders, and typography
- Converted all colored badges to grayscale for wireframe standards
- Replaced CO₂ icons with text placeholders [CO2] for wireframe standards

### Enhanced Pre-order Status Section
- Added detailed pre-order information with pickup time
- Implemented status indicator for order readiness
- Added container reminder to encourage sustainable practices
- Created action buttons for order confirmation and cancellation
- Maintained wireframe-appropriate styling:
  - Removed colors and used monochromatic scheme
  - Replaced icons with text placeholders
  - Added comments for future high-fidelity design
- Moved sustainability statistics (CO₂ savings, container count) to profile screen
- Used consistent styling with the Today's Menu section for visual coherence

### Menu Screen Wireframe Development
- Designed weekly menu screen with consistent top bar and language selector
- Organized weekly menu by days of the week with available meal options and sustainability badges
- Implemented CO₂ footprint indicators and consistent meal card design
- Added variation in meal availability and active state for Menu in bottom navigation
- Ensured navigation back to home screen and maintained dark mode by default

### Meal Detail Screen Wireframe Development
- Created detailed meal information screen with consistent aspect ratio and navigation elements
- Added large meal image placeholder at the top of the screen
- Included comprehensive meal information: title, dietary badges, CO₂ footprint, ingredients
- Added allergen information, nutritional details, portion size, and sustainability information
- Implemented pre-order and bring-own-container buttons for sustainable choices
- Added back button for easy navigation to the weekly menu
- Maintained consistent styling with other screens while focusing on detailed information

## Current Wireframe Features

### Landing Screen
- Top bar with canteen status and opening hours
- Language selector toggle (EN/DA)
- Today's Menu section with meal options
- Weekly Menu button
- Pre-order Status section
- Bottom navigation with Profile, Order, Menu, and Home options

### Weekly Menu Screen
- Top bar with canteen status and opening hours (consistent with landing screen)
- Language selector toggle (EN/DA)
- Weekly menu organized by days of the week
- Meal cards with dietary badges (vegan, vegetarian, organic, local)
- CO₂ footprint indicators for each meal
- Bottom navigation with active state for Menu tab

### Meal Detail Screen
- Top bar with canteen status and opening hours (consistent with other screens)
- Language selector toggle (EN/DA)
- Large meal image placeholder
- Meal title and dietary badges
- Environmental impact with CO₂ footprint and rating
- Detailed ingredients list
- Allergen information
- Nutritional information (calories, protein, carbs, fat)
- Portion size details
- Sustainability information about the meal
- Pre-order and bring-own-container action buttons
- Back button for navigation to weekly menu
- Bottom navigation with no active state (as meal detail is not in main navigation)
