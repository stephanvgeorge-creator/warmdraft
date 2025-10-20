/* === main.js for WarmRight website === */

/* --- HAMBURGER MENU TOGGLE --- */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

/* --- RESPONSIVE CALL NOW BUTTON --- */
const callButton = document.querySelector('.call-now');

function updateCallButton() {
  if (!callButton) return;
  if (window.innerWidth > 768) {
    // On larger screens, link to the contact page
    callButton.setAttribute('href', 'contact.html');
    callButton.textContent = 'Contact Us';
  } else {
    // On mobile, trigger a phone call
    callButton.setAttribute('href', 'tel:08007566748');
    callButton.textContent = 'Call Now';
  }
}

updateCallButton();
window.addEventListener('resize', updateCallButton);

/* --- TILE FADE-IN EFFECT ON SCROLL --- */
function handleTileVisibility() {
  const tiles = document.querySelectorAll('.tile');
  const windowHeight = window.innerHeight;

  tiles.forEach(tile => {
    const rect = tile.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      tile.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleTileVisibility);
window.addEventListener('load', handleTileVisibility);

/* --- DROPDOWN ACCESSIBILITY (mobile tap support) --- */
const dropdowns = document.querySelectorAll('.dropdown > a');

dropdowns.forEach(link => {
  link.addEventListener('click', e => {
    const dropdownContent = link.nextElementSibling;
    if (dropdownContent && window.innerWidth <= 768) {
      e.preventDefault();
      dropdownContent.classList.toggle('show');
    }
  });
});

/* --- CLOSE DROPDOWNS WHEN CLICKING OUTSIDE (mobile only) --- */
document.addEventListener('click', e => {
  if (window.innerWidth > 768) return;
  const isDropdown = e.target.matches('.dropdown > a') || e.target.closest('.dropdown-content');
  if (!isDropdown) {
    document.querySelectorAll('.dropdown-content.show').forEach(menu => {
      menu.classList.remove('show');
    });
  }
});

/* --- BOOK NOW BUTTON (OPTIONAL ANIMATION) --- */
const bookButton = document.querySelector('.book-now');
if (bookButton) {
  bookButton.addEventListener('mouseenter', () => {
    bookButton.style.transform = 'scale(1.05)';
  });
  bookButton.addEventListener('mouseleave', () => {
    bookButton.style.transform = 'scale(1)';
  });
}

/* --- SMOOTH SCROLL FOR INTERNAL LINKS --- */
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --- SAFETY LOG --- */
console.log('WarmRight site scripts loaded successfully.');
