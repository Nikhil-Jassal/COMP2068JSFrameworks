document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.classList.add('visible');
        }
      });
    };
  
    // Initial check on load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
  
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
      });
    }
  
    // Typewriter effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      const texts = [
        "I create amazing digital experiences",
        "Full Stack Developer",
        "Problem Solver",
        "Creative Thinker"
      ];
      let count = 0;
      let index = 0;
      let currentText = '';
      let letter = '';
      
      (function type() {
        if (count === texts.length) {
          count = 0;
        }
        
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        
        heroSubtitle.textContent = letter;
        
        if (letter.length === currentText.length) {
          count++;
          index = 0;
          setTimeout(type, 2000);
        } else {
          setTimeout(type, 100);
        }
      })();
    }
  
    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const img = card.querySelector('.project-img');
        img.style.transform = 'scale(1.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.project-img');
        img.style.transform = 'scale(1)';
      });
    });
  });
  
  // Projects Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  if (filterButtons.length && projectItems.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
            item.style.display = 'block';
            item.classList.add('animate__animated', 'animate__fadeIn');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Contact Form Spinner
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      const submitText = document.getElementById('submitText');
      const submitSpinner = document.getElementById('submitSpinner');
      
      submitText.textContent = 'Sending...';
      submitSpinner.classList.remove('d-none');
    });
  }
  
  // Typing animation for hero subtitle
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const phrases = [
      "amazing digital experiences",
      "responsive websites",
      "scalable applications",
      "user-friendly interfaces"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
  
    function type() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        isEnd = true;
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, isEnd ? speed : speed);
      }
    }
  
    setTimeout(type, 1000);
  }
  
  // Animate progress bars when visible
  const progressBars = document.querySelectorAll('.progress-bar');
  if (progressBars.length) {
    const animateProgressBars = () => {
      progressBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (barPosition < screenPosition) {
          const width = bar.getAttribute('data-width');
          bar.style.width = width;
        }
      });
    };
  
    // Initial check
    animateProgressBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateProgressBars);
  }
  
  // Enhanced animate on scroll
  const animateElements = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
        
        // Apply delay if specified
        const delay = element.getAttribute('data-delay');
        if (delay) {
          element.style.animationDelay = delay;
        }
      }
    });
  };
  
  // Initial check
  animateElements();
  
  // Check on scroll
  window.addEventListener('scroll', animateElements);