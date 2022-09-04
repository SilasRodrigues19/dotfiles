const setFavicon = function (url) {
  // Find the current favicon element
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    // Update the new link
    favicon.href = url;
  } else {
    // Create new link
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = url;

    // Append to the `head` element
    document.head.appendChild(link);
  }
};

// Call to dynamically update favicon
setFavicon('./img/favicon.ico');
