document.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
          window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
  });
});

const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY + window.scrollY}px)`;

    const trail = document.createElement("div");
    trail.className = "trail";
    document.body.appendChild(trail);
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY + window.scrollY}px`;

    setTimeout(() => {
        trail.remove();
    }, 500);
});

// When hovering over links or buttons, remove custom cursor
document.querySelectorAll("a, button, .hover-target").forEach(element => {
    element.addEventListener("mouseenter", () => cursor.style.display = "none");
    element.addEventListener("mouseleave", () => cursor.style.display = "block");
});
