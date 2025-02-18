document.querySelector('.navbar__link').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
  });
  