// Modern Effects and Interactions

// Loader
window.addEventListener('load', function() {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000);
});

// Particles Animation
function createParticles(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 4 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(particle);
  }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', function() {
  createParticles('particles');
  createParticles('particles2');
});

// Audio Control
let isPlaying = false;
const audio = document.getElementById('lagu');
const audioBtn = document.getElementById('audioBtn');

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    isPlaying = false;
  } else {
    audio.play();
    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    isPlaying = true;
  }
}

function playAudio() {
  audio.play();
  audioBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  isPlaying = true;
}

function stopAudio() {
  audio.pause();
  audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  isPlaying = false;
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Smooth scrolling for navigation
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

// Copy to clipboard with modern feedback
document.getElementById('salin1').addEventListener('click', function() {
  const rekNumber = '729301011493539';
  
  // Modern way to copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(rekNumber).then(() => {
      showModernAlert('success', 'Berhasil!', 'Nomor rekening telah disalin');
    });
  } else {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = rekNumber;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showModernAlert('success', 'Berhasil!', 'Nomor rekening telah disalin');
  }
});

// Modern alert function
function showModernAlert(type, title, text) {
  Swal.fire({
    icon: type,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 2000,
    background: 'rgba(255, 255, 255, 0.95)',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    customClass: {
      popup: 'rounded-4 shadow-lg',
      title: 'gradient-text',
      content: 'text-dark'
    }
  });
}

// Parallax effect for hero sections
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-modern');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, observerOptions);

// Observe elements with custom animations
document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
  observer.observe(el);
});

// Gallery lightbox effect
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', function() {
    const img = this.querySelector('img');
    const imgSrc = img.src;
    
    Swal.fire({
      imageUrl: imgSrc,
      imageAlt: 'Gallery Image',
      showConfirmButton: false,
      showCloseButton: true,
      background: 'rgba(0, 0, 0, 0.9)',
      customClass: {
        popup: 'rounded-4',
        image: 'rounded-3'
      }
    });
  });
});

// Modern cursor effect
document.addEventListener('mousemove', function(e) {
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

// Add hover effects to interactive elements
document.querySelectorAll('.btn-modern, .card-modern, .nav-item').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.02)';
  });
  
  element.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Countdown animation enhancement
function animateCountdown() {
  const countdownItems = document.querySelectorAll('.countdown-item');
  countdownItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = 'scale(1.1)';
      setTimeout(() => {
        item.style.transform = 'scale(1)';
      }, 200);
    }, index * 100);
  });
}

// Call countdown animation every second
setInterval(animateCountdown, 1000);

// Progressive loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Modern form validation
function validateForm(form) {
  const inputs = form.querySelectorAll('.input-modern');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#e74c3c';
      isValid = false;
    } else {
      input.style.borderColor = '#27ae60';
    }
  });
  
  return isValid;
}

// Add ripple effect to buttons
document.querySelectorAll('.btn-modern').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .btn-modern {
    position: relative;
    overflow: hidden;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);