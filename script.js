/**
 * FUTURE — Editorial Landing Page Core Logic
 * Clean Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. Mobile Navigation Controller
  // ==========================================================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileBackdrop = document.querySelector('.mobile-nav-backdrop');

  const toggleMobileNav = (open) => {
    const isOpen = open !== undefined ? open : hamburgerBtn.getAttribute('aria-expanded') !== 'true';
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    mobileNav.classList.toggle('is-active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => toggleMobileNav());
    
    if (mobileBackdrop) {
      mobileBackdrop.addEventListener('click', () => toggleMobileNav(false));
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => toggleMobileNav(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburgerBtn.getAttribute('aria-expanded') === 'true') {
        toggleMobileNav(false);
      }
    });
  }

  // ==========================================================================
  // 2. IntersectionObserver — Scroll Reveal Animations
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-element');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, parseInt(delay, 10));
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // 3. Stat Counter Animation
  // ==========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * target);

      el.textContent = currentVal + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = target + suffix;
      }
    };

    requestAnimationFrame(updateCount);
  };

  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => statsObserver.observe(stat));
  }

  // ==========================================================================
  // 4. Hero SVG Interactive Micro-Parallax
  // ==========================================================================
  const heroArtContainer = document.getElementById('hero-art-container');
  const svgFrameMain = document.querySelector('.svg-frame-main');
  const svgFrameAccent = document.querySelector('.svg-frame-accent');
  const svgFocalDot = document.querySelector('.svg-focal-dot');

  if (heroArtContainer && svgFrameMain && svgFrameAccent) {
    heroArtContainer.addEventListener('mousemove', (e) => {
      const rect = heroArtContainer.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const factorMain = 0.04;
      const factorAccent = -0.06;

      svgFrameMain.style.transform = `translate(${x * factorMain}px, ${y * factorMain}px)`;
      svgFrameAccent.style.transform = `translate(${x * factorAccent}px, ${y * factorAccent}px)`;

      if (svgFocalDot) {
        svgFocalDot.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
      }
    });

    heroArtContainer.addEventListener('mouseleave', () => {
      svgFrameMain.style.transform = 'translate(0px, 0px)';
      svgFrameAccent.style.transform = 'translate(0px, 0px)';
      if (svgFocalDot) {
        svgFocalDot.style.transform = 'translate(0px, 0px)';
      }
    });
  }

  // ==========================================================================
  // 5. Feature 03 Responsive Viewport Switcher Widget
  // ==========================================================================
  const switcherBtns = document.querySelectorAll('.switcher-btn');
  const simulationWindow = document.getElementById('view-simulation');

  if (switcherBtns.length > 0 && simulationWindow) {
    switcherBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        
        switcherBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        simulationWindow.className = `view-simulation-window view-${view}`;
      });
    });
  }

  // ==========================================================================
  // 6. Contact Form Validation & Interactive Feedback
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showError = (input, errorEl, message) => {
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
    errorEl.textContent = message;
  };

  const clearError = (input, errorEl) => {
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    errorEl.textContent = '';
  };

  if (contactForm) {
    // Real-time input clearing
    nameInput?.addEventListener('input', () => clearError(nameInput, document.getElementById('name-error')));
    emailInput?.addEventListener('input', () => clearError(emailInput, document.getElementById('email-error')));
    messageInput?.addEventListener('input', () => clearError(messageInput, document.getElementById('message-error')));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset feedback
      formFeedback.className = 'form-feedback-banner';
      formFeedback.textContent = '';

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        showError(nameInput, document.getElementById('name-error'), 'Please enter a valid name (minimum 2 characters).');
        isValid = false;
      } else {
        clearError(nameInput, document.getElementById('name-error'));
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, document.getElementById('email-error'), 'Please enter a valid email address.');
        isValid = false;
      } else {
        clearError(emailInput, document.getElementById('email-error'));
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showError(messageInput, document.getElementById('message-error'), 'Please enter project details (minimum 10 characters).');
        isValid = false;
      } else {
        clearError(messageInput, document.getElementById('message-error'));
      }

      if (!isValid) return;

      // Simulate Form Submission State
      submitBtn.disabled = true;
      const btnText = submitBtn.querySelector('.btn-text');
      const originalText = btnText ? btnText.textContent : 'SEND MESSAGE';
      if (btnText) btnText.textContent = 'TRANSMITTING...';

      setTimeout(() => {
        submitBtn.disabled = false;
        if (btnText) btnText.textContent = originalText;

        // Show Success Feedback
        formFeedback.classList.add('is-success');
        formFeedback.textContent = 'Thank you. Your message has been received by the FUTURE studio team. We will respond within 24 hours.';
        
        contactForm.reset();
      }, 1200);
    });
  }

  // ==========================================================================
  // 7. Footer Live Clock (UTC)
  // ==========================================================================
  const systemClock = document.getElementById('system-clock');

  const updateClock = () => {
    if (!systemClock) return;
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    systemClock.textContent = `${hours}:${minutes}:${seconds} UTC`;
  };

  updateClock();
  setInterval(updateClock, 1000);

  // ==========================================================================
  // 8. Back To Top Action
  // ==========================================================================
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
