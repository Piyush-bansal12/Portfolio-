// Dark Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Update Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Navbar Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
