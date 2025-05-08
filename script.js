
// Add hover effects to navigation
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#999';
  });
  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = 'transparent';
  });
});

// Add click effects to cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.98)';
    setTimeout(() => {
      card.style.transform = 'scale(1)';
    }, 200);
  });
});

// Add smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-in animation for cards on page load
window.addEventListener('load', () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '0';
      card.style.transition = 'opacity 0.5s ease-in';
      card.style.opacity = '1';
    }, index * 200);
  });
});
