\
document.addEventListener('DOMContentLoaded', function(){
  // mobile slide menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle && toggle.addEventListener('click', ()=> nav.classList.toggle('active'));

  // dropdowns collapsible on mobile
  document.querySelectorAll('.nav .dropdown > a').forEach(a=>{
    a.addEventListener('click', function(e){
      if(window.innerWidth <= 900){
        e.preventDefault();
        const menu = this.nextElementSibling;
        if(menu){
          menu.classList.toggle('open');
          if(menu.classList.contains('open')) menu.style.maxHeight = menu.scrollHeight + 'px';
          else menu.style.maxHeight = null;
        }
      }
    });
  });

  // IntersectionObserver for tiles (fade/slide/zoom)
  const cards = document.querySelectorAll('.card');
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(ent => {
        if(ent.isIntersecting){
          ent.target.classList.add('visible');
          obs.unobserve(ent.target);
        }
      });
    }, {threshold:0.15});
    cards.forEach(c=>obs.observe(c));
  } else { cards.forEach(c=>c.classList.add('visible')); }

  // call button behaviour (mobile dialer vs desktop redirect)
  document.querySelectorAll('.call-action').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      if(isMobile){ window.location.href = 'tel:08007566748'; } else { window.location.href = 'contact.html'; }
    });
  });

  // Book Online reveal and conditional address logic
  const bookBtn = document.getElementById('book-online-btn');
  const bookForm = document.getElementById('book-form-panel');
  if(bookBtn && bookForm){
    bookBtn.addEventListener('click', ()=>{
      bookForm.style.display = (bookForm.style.display==='block')? 'none':'block';
      bookForm.scrollIntoView({behavior:'smooth'});
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
      faultDiv.style.display = (this.value==='Breakdowns')? 'block':'none';
      if(this.value==="Landlord's Certificate (CP12)") addAddr.style.display='block';
    });
  }
});
