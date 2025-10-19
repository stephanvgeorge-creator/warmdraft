// main.js - menu, mobile slide, scroll reveal, form toggles
document.addEventListener('DOMContentLoaded', function(){
  // mobile menu slide-in
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if(menuToggle && mobileNav){
    menuToggle.addEventListener('click', ()=> mobileNav.classList.toggle('open'));
  }

  // mobile dropdown toggles
  document.querySelectorAll('.mobile-dropdown button').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const parent = btn.parentElement;
      parent.classList.toggle('open');
    });
  });

  // click-to-call behavior: dial on mobile, go to contact on desktop/tablet
  document.querySelectorAll('.call-action, .call-btn').forEach(el=>{
    el.addEventListener('click', (e)=>{
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua);
      if(isMobile){
        // if element has href tel, allow default. Otherwise redirect to tel.
        if(el.tagName.toLowerCase() === 'a' && el.href.startsWith('tel:')) return;
        window.location.href = 'tel:08007566748';
      } else {
        // desktop -> contact page
        if(!el.closest('a')) e.preventDefault();
        window.location.href = 'contact.html';
      }
    });
  });

  // IntersectionObserver for reveal animations (cards)
  const observerOptions = { threshold: 0.12 };
  const observer = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.card').forEach(c => observer.observe(c));

  // Book form reveal / conditional fields (book-a-visit page)
  const bookBtn = document.getElementById('book-online-btn');
  const bookPanel = document.getElementById('book-form-panel');
  if(bookBtn && bookPanel){
    bookBtn.addEventListener('click', ()=> {
      bookPanel.style.display = (bookPanel.style.display === 'block') ? 'none' : 'block';
      if(bookPanel.style.display === 'block') bookPanel.scrollIntoView({behavior:'smooth', block:'center'});
    });
  }
  const landlordCheckbox = document.querySelector('input[name="is_landlord"]');
  const addAddr = document.getElementById('additional-address');
  if(landlordCheckbox && addAddr){
    landlordCheckbox.addEventListener('change', function(){ addAddr.style.display = this.checked ? 'block' : 'none'; });
  }
  const serviceSelect = document.querySelector('select[name="service"]');
  const faultDiv = document.getElementById('faultcode');
  if(serviceSelect && faultDiv){
    serviceSelect.addEventListener('change', function(){
      faultDiv.style.display = (this.value === 'Breakdowns') ? 'block' : 'none';
      if(this.value === "Landlord's Certificate (CP12)") addAddr.style.display = 'block';
    });
  }
});
