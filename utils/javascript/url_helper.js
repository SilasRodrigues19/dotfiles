// Open URL in new tab
window.open('https://github.com/SilasRodrigues19', '_blank');

// Current URL
window.location.href;

// Replace current URL and navigate (Browsing back to history will go back 2 pages)
window.location.replace(
  'https://google.com'
);

// Prevent form resubmission after clicking F5
window.history.replaceState &&
  window.history.replaceState(null, null, window.location.href);