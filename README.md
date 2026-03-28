# AGS Construction Services

A professional construction website built with HTML, CSS, and JavaScript featuring an interactive carousel, project portfolio, and contact form.

## Features

- **Interactive Carousel**: 10-image slideshow on the home page with auto-play and manual navigation
- **Three Main Sections**:
  - About Us - Company information and key features
  - Projects - Organized by categories (Residential, Commercial, Services)
  - Contact Us - Contact information and inquiry form
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**:
  - Animated carousel with indicators and controls
  - Project filtering by category
  - Clickable project cards with detailed information modals
  - Form validation with error messages
  - Smooth scrolling navigation

## Project Structure

```
AGS_Const/
├── index.html      # Main HTML file
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript for interactivity
├── .nojekyll       # Prevents GitHub Pages from using Jekyll
└── README.md       # This file
```

## GitHub Pages Setup

This website is configured for deployment on GitHub Pages. Follow these steps:

### 1. Create a GitHub Repository
1. Create a new repository on GitHub
2. Push this project to the repository

### 2. Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

### 3. Configure Contact Form (Formspree)
1. Go to [Formspree](https://formspree.io/) and create an account
2. Create a new form and copy the form endpoint URL
3. In `index.html`, replace `your-form-id` in the form action with your actual Formspree form ID:
   ```html
   <form action="https://formspree.io/f/your-actual-form-id" method="POST">
   ```
4. Optionally, configure email notifications in your Formspree dashboard

### 4. Access Your Site
Your site will be available at: `https://yourusername.github.io/repository-name/`

## Local Development

Simply open `index.html` in your web browser to view the website locally.

## Technologies Used

- HTML5
- CSS3 (with flexbox and grid layouts)
- Vanilla JavaScript (no frameworks)
- Formspree for contact form handling
- Font Awesome for icons
- Responsive design techniques

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 AGS Construction Services. All rights reserved.
