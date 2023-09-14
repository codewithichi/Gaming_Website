window.addEventListener('scroll', function() {
    const header = document.getElementById('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  