document.addEventListener('DOMContentLoaded', () => {
  
  // --- SPA NAVIGATION ROUTER ---
  const pages = {
    'home': document.getElementById('page-home'),
    'projects': document.getElementById('page-projects'),
    'skills': document.getElementById('page-skills')
  };

  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Helper function to switch active sections
  function navigateToPage(pageId) {
    if (!pages[pageId]) return;

    // Reset visibility on all pages
    Object.keys(pages).forEach(key => {
      pages[key].classList.remove('active');
    });

    // Activate targeted page
    pages[pageId].classList.add('active');
    
    // Update nav links styling state
    navLinks.forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    navMenu.classList.remove('show');
    mobileMenuToggle.classList.remove('open');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');

    // Reset stats numbers if transitioning away from home so it can animate again when returning
    if (pageId !== 'home') {
      resetCounters();
    } else {
      // Re-trigger counter animations on Home load
      setTimeout(animateCounters, 100);
    }

    // Scroll to top smoothly on page transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle router triggers
  function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    if (pages[hash]) {
      navigateToPage(hash);
    } else {
      navigateToPage('home'); // Default fallback
    }
  }

  // Listen to Hash Changes
  window.addEventListener('hashchange', handleRoute);
  
  // Initialize router
  handleRoute();

  // --- MOBILE HAMBURGER MENU ---
  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    mobileMenuToggle.classList.toggle('open');
    mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Handle page link clicks directly
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Allow default anchor navigation for regular page jumps, but prevent it for JS-SPA logic
      const pageId = link.getAttribute('data-page');
      if (pageId && pages[pageId]) {
        e.preventDefault();
        window.location.hash = pageId;
      }
    });
  });

  // Inter-page link bindings
  const projectsCta = document.getElementById('hero-projects-cta');
  if (projectsCta) {
    projectsCta.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = 'projects';
    });
  }

  // --- NUMBERS COUNT-UP STATS ANIMATION ---
  const statNumbers = document.querySelectorAll('.stat-number');
  let animationsTriggered = false;

  function resetCounters() {
    statNumbers.forEach(counter => {
      counter.innerText = '0' + (counter.getAttribute('data-suffix') || '');
    });
    animationsTriggered = false;
  }

  function animateCounters() {
    if (animationsTriggered) return;
    
    statNumbers.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const duration = 1200; // total animation duration (ms)
      const steps = 30; // animation refresh intervals
      const increment = target / steps;
      const stepTime = duration / steps;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.floor(count) + suffix;
          setTimeout(updateCount, stepTime);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    });

    animationsTriggered = true;
  }

  // Intersection Observer to run stats when scrolled into view
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && pages['home'].classList.contains('active')) {
        animateCounters();
      }
    });
  }, { threshold: 0.2 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    statsObserver.observe(statsBar);
  }

  // --- RESUME DOWNLOAD MODAL & TRIGGERS ---
  const resumeModal = document.getElementById('resume-modal');
  const closeResumeModal = document.getElementById('close-resume-modal');
  const resumeButtons = [
    document.getElementById('resume-download-btn'),
    document.getElementById('hero-resume-cta'),
    document.getElementById('exp-resume-link')
  ];

  resumeButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        resumeModal.showModal();
      });
    }
  });

  if (closeResumeModal) {
    closeResumeModal.addEventListener('click', () => {
      resumeModal.close();
    });
  }

  // Close modal on backdrop click
  resumeModal.addEventListener('click', (e) => {
    const rect = resumeModal.getBoundingClientRect();
    const isInModal = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInModal) {
      resumeModal.close();
    }
  });

  // Download plain text CV representation
  const downloadTxtBtn = document.getElementById('download-txt-resume');
  if (downloadTxtBtn) {
    downloadTxtBtn.addEventListener('click', () => {
      const resumeText = `
MANNAT
Software Developer & Data Analyst
Email: mannatbansal0307@gmail.com | Portfolio: Web

EDUCATION:
- B.Tech in CS (Data Science)
  Relevant Coursework: DBMS, AI, Machine Learning, Data Structures

EXPERIENCE:
- AI Developer Intern at GROTO (Jun — Aug 2024)
  • Working on Retrieval-Augmented Generation (RAG) systems for knowledge retrieval
  • Integrating and managing vector databases (ChromaDB) for semantic search
  • Developing backend AI workflows and pipelines
  • Collaborating within a small engineering team on AI application development
  • Exploring LLM integration and prompt engineering techniques

TECHNICAL SKILLS:
- Software Development: JavaScript, React, Flask, REST APIs, HTML5, CSS3
- Data Analytics: Python, SQL, Pandas, NumPy, Power BI, Excel, Matplotlib, Seaborn
- AI & Automation: RAG Systems, ChromaDB, Vector Databases, Prompt Engineering
- Tools: Git, GitHub, Arduino IDE, ESP32
      `.trim();

      const blob = new Blob([resumeText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Mannat_Resume.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  // Mock PDF trigger
  const triggerPdfBtn = document.getElementById('trigger-mock-pdf');
  if (triggerPdfBtn) {
    triggerPdfBtn.addEventListener('click', () => {
      alert("Initiating mock PDF Download for Mannat CV!");
      resumeModal.close();
    });
  }

});
