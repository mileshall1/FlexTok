document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
          window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
  });
});
