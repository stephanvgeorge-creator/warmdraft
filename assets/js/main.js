/* ===============================
   WarmRight Ltd v2.3 — main.js
   =============================== */

/* === Scroll Fade-in Animations === */
const faders = document.querySelectorAll('.fade-in, .tile');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

/* === Dropdown Menu Hover Fix === */
document.querySelectorAll('.dropdown').forEach(drop => {
  drop.addEventListener('mouseenter', () => {
    const menu = drop.querySelector('.dropdown-content');
    if (menu) menu.style.display = 'block';
  });
  drop.addEventListener('mouseleave', () => {
    const menu = drop.querySelector('.dropdown-content');
    if (menu) menu.style.display = 'none';
  });
});

/* === Mobile Menu Toggle === */
const mobileMenu = document.querySelector('.nav-links ul');
const toggleBtn = document.createElement('div');
toggleBtn.classList.add('menu-toggle');
toggleBtn.innerHTML = '&#9776;'; // hamburger icon

document.querySelector('.navbar').insertBefore(toggleBtn, document.querySelector('.nav-links'));

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  toggleBtn.classList.toggle('active');
});

/* Close mobile menu when link clicked */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
    }
  });
});

/* === Modal Booking Form === */
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#openBookingModal');
const closeModalBtn = document.querySelector('.modal-close');

if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
}

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
}

/* Close modal when clicking outside */
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

/* === Conditional Address Section (Booking Form) === */
const altAddressCheckbox = document.querySelector('#differentAddress');
const altAddressSection = document.querySelector('#altAddressSection');

if (altAddressCheckbox && altAddressSection) {
  altAddressCheckbox.addEventListener('change', () => {
    if (altAddressCheckbox.checked) {
      altAddressSection.style.display = 'block';
    } else {
      altAddressSection.style.display = 'none';
    }
  });
}

/* === Floating "Book Us Now" Button for mobile/desktop === */
const bookButton = document.querySelector('.float-btn');

if (bookButton) {
  bookButton.addEventListener('click', (e) => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = 'tel:08007566748';
    } else {
      window.location.href = 'book-a-visit.html';
    }
  });
}

/* === Auto Redirect for Thank You page === */
if (window.location.pathname.includes('thank-you.html')) {
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 15000);
}
