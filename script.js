// Stars Background
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 100; // Reduced for better performance with movement
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random star size
        const sizes = ['small', 'medium', 'large'];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        star.classList.add(randomSize);
        
        // Random movement pattern
        const movementPatterns = ['fast', 'medium-speed', 'slow', 'diagonal-up', 'diagonal-down'];
        const randomPattern = movementPatterns[Math.floor(Math.random() * movementPatterns.length)];
        star.classList.add(randomPattern);
        
        // Random starting position (left side of screen)
        const y = Math.random() * 100;
        star.style.left = '-10px';
        star.style.top = y + '%';
        
        // Random animation delay
        const delay = Math.random() * 8;
        star.style.animationDelay = delay + 's';
        
        // Some stars twinkle while moving
        if (Math.random() < 0.3) {
            star.classList.add('twinkle');
        }
        
        // Random animation duration variation
        const baseDuration = randomPattern === 'fast' ? 4 : 
                           randomPattern === 'medium-speed' ? 8 : 
                           randomPattern === 'slow' ? 12 : 8;
        const variation = baseDuration * (0.8 + Math.random() * 0.4); // ±20% variation
        star.style.animationDuration = variation + 's';
        
        starsContainer.appendChild(star);
    }
}

/*// Initialize stars when page loads
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});*/

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-category');
    animateElements.forEach(el => observer.observe(el));
});

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form[action^="https://formspree.io/f/xkgblbvk"]');
  const modal = document.getElementById('thankyou-modal');

  if (form) {
    form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Show modal
          modal.style.display = 'flex';
          setTimeout(() => {
            modal.classList.add('active');
          }, 10);

          // Clear form
          form.reset();

          // Hide modal after 2 seconds
          setTimeout(() => {
            modal.classList.remove('active');
            setTimeout(() => {
              modal.style.display = 'none';
            }, 400); // matches CSS transition
          }, 2000);
        } else {
          alert('There was a problem sending your message. Please try again.');
        }
      } catch (error) {
        alert('There was a problem sending your message. Please try again.');
      }
    });
  }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #ff4500 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
        background-color: #ff4500 !important;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;
document.head.appendChild(style);

// --- Interactive Logo 3D Spin ---
(function() {
    const logo = document.querySelector('.nav-logo-icon');
    if (!logo) return;

    let isDragging = false;
    let lastX = 0, lastY = 0;
    let rotationX = 0, rotationY = 0;
    let requestId = null;

    function setTransform() {
        logo.style.transform = `rotateX(${rotationY}deg) rotateY(${rotationX}deg)`;
    }

    function onPointerDown(e) {
        isDragging = true;
        lastX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        lastY = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
        document.body.style.cursor = 'grabbing';
    }

    function onPointerMove(e) {
        if (!isDragging) return;
        const x = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
        const y = e.type.startsWith('touch') ? e.touches[0].clientY : e.clientY;
        const dx = x - lastX;
        const dy = y - lastY;
        lastX = x;
        lastY = y;
        rotationX += dx * 0.7; // horizontal drag rotates Y axis
        rotationY -= dy * 0.7; // vertical drag rotates X axis
        setTransform();
    }

    function onPointerUp() {
        isDragging = false;
        document.body.style.cursor = '';
        // Animate back to center
        function animateBack() {
            rotationX *= 0.85;
            rotationY *= 0.85;
            setTransform();
            if (Math.abs(rotationX) > 0.5 || Math.abs(rotationY) > 0.5) {
                requestId = requestAnimationFrame(animateBack);
            } else {
                rotationX = 0;
                rotationY = 0;
                setTransform();
                requestId = null;
            }
        }
        if (requestId) cancelAnimationFrame(requestId);
        requestId = requestAnimationFrame(animateBack);
    }

    logo.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch support
    logo.addEventListener('touchstart', onPointerDown, {passive: false});
    window.addEventListener('touchmove', onPointerMove, {passive: false});
    window.addEventListener('touchend', onPointerUp);
})();
// --- End Interactive Logo 3D Spin ---

// Remove the entire parallax animation for About Section (about-parallax) 