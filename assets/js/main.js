/* WarmRight v2.2 - Unified main.js - 2025-10-20 */
/* Handles mobile nav toggle, mobile dropdowns, and scroll reveal */

document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const desktopNav = document.querySelector('.nav');

  if(menuToggle && mobileNav){
    menuToggle.addEventListener('click', function(e){
      e.stopPropagation();
      mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
      if(desktopNav) desktopNav.style.display = mobileNav.classList.contains('open') ? 'none' : '';
    });

    document.addEventListener('click', function(evt){
      if(mobileNav.classList.contains('open') && !mobileNav.contains(evt.target) && !menuToggle.contains(evt.target)){
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        if(desktopNav) desktopNav.style.display = '';
      }
    });
  }

  // Mobile dropdown buttons
  if(mobileNav){
    mobileNav.querySelectorAll('.mobile-dropdown-button').forEach(btn => {
      btn.addEventListener('click', function(){
        const target = btn.nextElementSibling;
        if(!target) return;
        mobileNav.querySelectorAll('.mobile-dropdown-menu').forEach(m => { if(m !== target) m.classList.remove('open'); });
        target.classList.toggle('open');
      });
    });
  }

  // Reveal animations
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  document.querySelectorAll('.card').forEach(c => observer.observe(c));

  // Desktop dropdown hover safe-show
  document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseenter', ()=>{
      const menu = drop.querySelector('.dropdown-menu');
      if(menu) menu.style.display = 'block';
    });
    drop.addEventListener('mouseleave', ()=>{
      const menu = drop.querySelector('.dropdown-menu');
      if(menu) menu.style.display = '';
    });
  });
});
/* end WarmRight v2.2 */