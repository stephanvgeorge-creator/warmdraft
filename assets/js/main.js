// === MAIN.JS ===

// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const navbarMenu = document.getElementById("navbarMenu");
  const callButton = document.getElementById("callButton");

  // ---- MOBILE MENU TOGGLE ----
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");
    });
  }

  // ---- CALL BUTTON BEHAVIOR ----
  function updateCallButton() {
    if (window.innerWidth <= 768) {
      // Mobile: direct call
      callButton.setAttribute("href", "tel:08007566748");
      callButton.textContent = "Call Now";
    } else {
      // Tablet/Desktop: go to contact page
      callButton.setAttribute("href", "contact.html");
      callButton.textContent = "Contact Us";
    }
  }

  updateCallButton();
  window.addEventListener("resize", updateCallButton);

  // ---- HIDE MENU WHEN CLICKING OUTSIDE (MOBILE) ----
  document.addEventListener("click", (e) => {
    if (!navbarMenu.contains(e.target) && !hamburger.contains(e.target)) {
      navbarMenu.classList.remove("active");
    }
  });

  // ---- ACCESSIBILITY / SAFETY NET ----
  // Hide dropdowns when tabbing away or losing focus
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(drop => {
    drop.addEventListener("focusout", () => {
      const content = drop.querySelector(".dropdown-content");
      if (content) content.style.visibility = "hidden";
      setTimeout(() => {
        if (content) content.style.visibility = "";
      }, 300);
    });
  });

});
