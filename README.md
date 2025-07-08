# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-first approach.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic navigation
- **Contact Form** - Ready-to-use contact form with validation
- **Project Showcase** - Beautiful project cards with technology tags
- **Experience Timeline** - Visual timeline for work experience
- **Skills Section** - Organized skill categories with interactive tags
- **Mobile Navigation** - Hamburger menu for mobile devices

## 📁 File Structure

```
PersonalResume/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or Download** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization guide below)
4. **Deploy** to your preferred hosting platform

## ✏️ Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Update your name -->
<title>Your Name - Portfolio</title>
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>

<!-- Update hero section -->
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title & Description</p>
```

### 2. About Section

Update the about text and skills in the About section:

```html
<div class="about-text">
    <p>Your personal description here...</p>
</div>

<div class="skills-grid">
    <div class="skill-category">
        <h3>Frontend</h3>
        <div class="skill-tags">
            <span class="skill-tag">Your Skill</span>
        </div>
    </div>
</div>
```

### 3. Projects

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image here -->
        <div class="project-placeholder">
            <i class="fas fa-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology Used</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-demo" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### 4. Experience

Update the timeline with your work experience:

```html
<div class="timeline-item">
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="company">Company Name</span>
            <span class="period">Year - Year</span>
        </div>
        <ul class="timeline-description">
            <li>Your achievement or responsibility</li>
        </ul>
    </div>
</div>
```

### 5. Contact Information

Update your contact details:

```html
<div class="contact-links">
    <a href="mailto:your.email@example.com" class="contact-link">
        <i class="fas fa-envelope"></i>
        your.email@example.com
    </a>
    <a href="https://linkedin.com/in/yourprofile" class="contact-link">
        <i class="fab fa-linkedin"></i>
        LinkedIn
    </a>
    <a href="https://github.com/yourusername" class="contact-link">
        <i class="fab fa-github"></i>
        GitHub
    </a>
</div>
```

### 6. Colors and Styling

To change the color scheme, edit the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--secondary-color: #fbbf24;
--gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text colors */
--text-primary: #1f2937;
--text-secondary: #6b7280;
```

## 🚀 Deployment Options

### 1. GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### 2. Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You can connect a custom domain later

### 3. Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Import your project from GitHub
3. Deploy with one click
4. Automatic deployments on code changes

### 4. Traditional Web Hosting

Upload the files to your web hosting provider via FTP or file manager.

## 📱 Adding Your Profile Picture

1. Replace the placeholder in the hero section:
```html
<div class="hero-image">
    <img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image">
</div>
```

2. Add CSS for the image:
```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
}
```

## 🎨 Adding Project Images

Replace the placeholder icons with actual project screenshots:

```html
<div class="project-image">
    <img src="path/to/project-image.jpg" alt="Project Name" class="project-screenshot">
</div>
```

Add CSS:
```css
.project-screenshot {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## 📧 Contact Form Setup

The contact form is currently set up to show a success message. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Set up a backend** to handle form submissions
3. **Update the JavaScript** in `script.js` to send data to your service

Example with Formspree:
```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing or deploying your portfolio, feel free to reach out or check the documentation of your chosen hosting platform.

---

**Happy coding! 🎉** 