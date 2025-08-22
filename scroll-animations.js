// Scroll-triggered fade-in for elements with .fade-in, .feature-fade-in, .slide-in-left
// Adds 'in-view' class when element enters viewport

document.addEventListener('DOMContentLoaded', function() {
  const animatedEls = document.querySelectorAll('.fade-in, .feature-fade-in, .slide-in-left');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight - 60 && // 60px offset for earlier trigger
      rect.bottom > 0
    );
  }

  function checkFadeIn() {
    animatedEls.forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('in-view');
      }
    });
  }

  // Initial check
  checkFadeIn();
  // On scroll and resize
  window.addEventListener('scroll', checkFadeIn);
  window.addEventListener('resize', checkFadeIn);
});
