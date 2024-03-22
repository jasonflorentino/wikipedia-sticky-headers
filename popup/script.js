// There is no URL preview on hover.
// Use the title attribute instead.
const anchorEls = document.querySelectorAll('A');
anchorEls.forEach((anchor) => {
  anchor.setAttribute('title', anchor.getAttribute('href'));
});

