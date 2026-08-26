const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');
const siteHeader = document.querySelector('.site-header');
const revealItems = document.querySelectorAll('.reveal');
const yearTarget = document.getElementById('current-year');
const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
const backToTopButton = document.querySelector('.back-to-top');

const projectDetails = {
  'featured-project': {
    number: '01',
    title: 'SCHOOL MANAGEMENT / EDUCATIONAL TECHNOLOGY SYSTEM',
    description:
      'A campus-focused system concept designed to support school administration, information flow and educational technology use. It presents an opportunity to improve data handling, student records and operational clarity in a practical digital environment.',
    image: 'assets/images/projects/project-featured.jpg',
    tags: ['Education Tech', 'Management', 'System Design', 'Database']
  },
  'school-management': {
    number: '02',
    title: 'School Management System',
    description:
      'A school operations project focused on managing key administrative records and improving how daily tasks and information are organized.',
    image: 'assets/images/projects/project-featured.jpg',
    tags: ['Admin', 'Workflow', 'Data']
  },
  'group-registration': {
    number: '03',
    title: 'Student / Group Registration System',
    description:
      'A registration-focused project for simplifying data capture, coordination and user onboarding in a structured system.',
    image: 'assets/images/projects/project-registration.jpeg',
    tags: ['Forms', 'Registration', 'Records']
  },
  'mediexpert': {
    number: '04',
    title: 'MediExpert System',
    description:
      'An information and diagnostics concept designed to support healthcare-related decision-making and practical data organization.',
    image: 'assets/images/projects/project-mediexpert.jpg',
    tags: ['Healthcare', 'Research', 'Decision Support']
  },
  'edupro': {
    number: '05',
    title: 'EduPro Solutions',
    description:
      'A concept for improving educational administration and supporting the creation of more efficient learning experiences.',
    image: 'assets/images/projects/project-edupro.jpg',
    tags: ['Education', 'Planning', 'Operations']
  },
  'todo-app': {
    number: '06',
    title: 'Todo Application',
    description:
      'A focused productivity tool built to improve personal organization and task management in a simple, usable interface.',
    image: 'assets/images/projects/project-todo.jpg',
    tags: ['Productivity', 'UI', 'Planning']
  },
  'automation-project': {
    number: '07',
    title: 'Automation Project',
    description:
      'A workflow automation concept focused on reducing repetitive tasks and improving efficiency through digital systems.',
    image: 'assets/images/projects/project-automation.jpg',
    tags: ['Automation', 'Workflow', 'Efficiency']
  }
};

const setCurrentYear = () => {
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
};

const setupMobileNavigation = () => {
  if (!navToggle || !navPanel) {
    return;
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navPanel.classList.toggle('is-open', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navPanel.classList.remove('is-open');
    });
  });
};

const smoothScrollTo = (targetId) => {
  const targetSection = document.getElementById(targetId);

  if (!targetSection) {
    return;
  }

  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const setupSmoothScrollLinks = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');

      if (!href || href === '#') {
        return;
      }

      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);

      if (!targetSection) {
        return;
      }

      event.preventDefault();
      smoothScrollTo(targetId);
    });
  });
};

const updateHeaderState = () => {
  if (!siteHeader) {
    return;
  }

  if (window.scrollY > 20) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
};

const updateActiveNavigation = () => {
  const sections = document.querySelectorAll('main section[id]');

  if (!sections.length) {
    return;
  }

  const scrollPosition = window.scrollY + 120;
  let currentSectionId = 'home';

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const isActive = href === `#${currentSectionId}`;

    link.classList.toggle('is-active', isActive);
  });
};

const updateBackToTopButton = () => {
  if (!backToTopButton) {
    return;
  }

  if (window.scrollY > 400) {
    backToTopButton.classList.add('is-visible');
  } else {
    backToTopButton.classList.remove('is-visible');
  }
};

const setupRevealAnimations = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
};

const modal = document.getElementById('project-modal');
const modalImage = document.getElementById('modal-image');
const modalNumber = document.getElementById('modal-number');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');
const modalCloseButton = document.querySelector('.modal-close');
let lastFocusedElement = null;

const openProjectModal = (projectKey) => {
  const project = projectDetails[projectKey];

  if (!modal || !project || !modalImage || !modalNumber || !modalTitle || !modalDescription || !modalTags) {
    return;
  }

  modalImage.src = project.image;
  modalImage.alt = `${project.title} preview`;
  modalNumber.textContent = project.number;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = project.tags.map((tag) => `<li>${tag}</li>`).join('');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  lastFocusedElement = document.activeElement;
  modalCloseButton?.focus();
};

const closeProjectModal = () => {
  if (!modal) {
    return;
  }

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lastFocusedElement?.focus();
  lastFocusedElement = null;
};

const setupProjectModal = () => {
  const triggerButtons = document.querySelectorAll('.project-trigger');
  const getModalFocusableElements = () =>
    modal?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') || [];

  triggerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const projectKey = button.dataset.project;
      openProjectModal(projectKey);
    });
  });

  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closeProjectModal);
  }

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal || event.target.classList.contains('modal-backdrop')) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (event) => {
    if (!modal || !modal.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      closeProjectModal();
      return;
    }

    if (event.key === 'Tab') {
      const focusableElements = [...getModalFocusableElements()];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  });
};

/* Theme toggle: apply and persist user preference */
const applyTheme = (theme) => {
  try {
    document.documentElement.setAttribute('data-theme', theme);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'light'));
  } catch (e) {
    // silent
  }
};

const initTheme = () => {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch (e) {
    // storage may be unavailable
  }
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = stored || (prefersLight ? 'light' : 'dark');
  applyTheme(initial);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // storage may be unavailable
    }
  });
};

setCurrentYear();
setupMobileNavigation();
setupSmoothScrollLinks();
setupProjectModal();
initTheme();

if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

window.addEventListener('scroll', () => {
  updateHeaderState();
  updateBackToTopButton();
  updateActiveNavigation();
}, { passive: true });

updateHeaderState();
updateBackToTopButton();
updateActiveNavigation();
setupRevealAnimations();
