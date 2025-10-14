# Serenity Counseling and Mental Health Services Website

## Overview
This project is a responsive, modern, and visually engaging website for **Serenity Counseling and Mental Health Services**. It is built using **HTML5, CSS3, and Bootstrap 5**, with additional JavaScript enhancements for interactivity and dynamic content.  

The site showcases the organization's services, social media presence, media content, podcasts, videos, and gallery. It is optimized for desktop, tablet, and mobile devices.

---

## Table of Contents
- [Project Structure](#project-structure)  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Sections](#sections)  
- [Custom CSS Fixes & Tweaks](#custom-css-fixes--tweaks)  
- [Screenshots / Preview](#screenshots--preview)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Structure
/project-root
│
├─ index.html # Main homepage
├─ css/
│ └─ style.css # Custom styles
├─ js/
│ └─ main.js # JavaScript for animations and dynamic content
├─ img/ # Images, thumbnails, placeholders
├─ README.md # Project documentation
└─ favicon.ico # Site favicon

markdown
Copy code

---

## Features
- **Responsive layout** using Bootstrap 5 grid system and utilities.  
- **Dynamic bento card grids** for media content and social links.  
- **Hover effects and transitions** for interactive elements.  
- **Embedded social media links**: Facebook, Telegram, Spotify with inline SVG icons and frosted card overlays.  
- **Media section** with YouTube videos and Spotify podcasts.  
- **Gallery section** linking to external photo albums (Google Photos, Flickr).  
- **Accessible and semantic HTML** with ARIA labels.  
- **Custom styling** for fonts, colors, and card layouts.

---

## Technologies Used
- **HTML5** – Semantic structure of the website.  
- **CSS3** – Styling, responsive grids, hover effects, and frosted glass overlays.  
- **Bootstrap 5** – Layout and responsive design utilities.  
- **JavaScript** – Animations, dynamic card scaling, and scroll effects.  
- **AOS.js** – Fade-in and scroll-triggered animations.  
- **SVG Icons** – Inline social media icons with hover effects.

---

## Sections

### 1. Header / Navbar
- Responsive navigation bar with logo and menu links.  
- Mobile-friendly with Bootstrap toggler.

### 2. Hero / Banner
- Large introductory section with tagline and call-to-action button.  
- Smooth fade-in animation on page load.

### 3. About / Services
- Information about Serenity’s counseling services.  
- Cards with titles, descriptions, and icons.  
- Responsive grid layout: 3 columns desktop, 2 columns tablet, 1 column mobile.

### 4. Media Section
- **Social Links:** Facebook, Telegram, Spotify cards with hover effects and frosted overlays.  
- **Podcasts & Videos:** YouTube video previews and Spotify links embedded in card grids.  
- **Gallery:** Clickable cards linking to Google Photos and Flickr albums.  
- Responsive grid layout with `auto-fit` and `minmax` for flexible card sizing.

### 5. Footer
- Site footer with copyright and repeated social links.  

---

## Custom CSS Fixes & Tweaks
- Adjusted **section title padding** and bottom spacing for visual balance.  
- Consistent **card widths and aspect ratios** (16:9) for all media cards.  
- **Removed text shadows** from all frosted card text on social cards.  
- Fine-tuned **grid gaps** and responsiveness for `bento-grid`.  
- Hover effects for social icons (scale, drop-shadow, color changes).  
- Frosted glass effect on card overlays using `backdrop-filter`.  
- Media queries for tablets (`max-width: 991px`) and mobile (`max-width: 575px`) devices.  

---

## Screenshots / Preview
> *(Replace these placeholders with actual screenshots of your site.)*  

### Desktop View
![Desktop Preview](img/desktop-preview.png)  

### Mobile View
![Mobile Preview](img/mobile-preview.png)  

### Media Section
![Media Section](img/media-preview.png)  

---

## Usage
1. Clone the repository:
```bash
git clone https://github.com/yourusername/serenity-website.git
Open index.html in a web browser.

Customize links, images, and text in HTML as needed.

Add additional media cards or gallery items by following the existing bento-card structure.

Contributing
Fork the repository.

Create a new branch for your changes:

bash
Copy code
git checkout -b feature/new-section
Make your edits and commit:

bash
Copy code
git commit -m "Add new media card"
Push your changes and open a Pull Request.

License
This project is for educational and demonstration purposes only. No commercial use is permitted without proper authorization.

Notes
Animations are powered by AOS.js (Animate on Scroll).

Social media icons are inline SVGs for scalability and styling.

Layout is fully responsive and mobile-friendly using Bootstrap 5 grid utilities.

Frosted card overlays enhance readability while maintaining visual aesthetics.
