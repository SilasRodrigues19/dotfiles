/*
 CSS 
 https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css
 https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css

 JS
 https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js
*/

const showAlertBox = (type, title, message) => {
  Swal.fire({
    icon: type,
    title: title,
    text: message,
    showClass: {
      popup: 'animate__animated animate__zoomIn',
    },
    hideClass: {
      popup: 'animate__animated animate__zoomOut',
    },
    footer:
      '<a target="_blank" href="https://github.com/SilasRodrigues19">SilasRodrigues19</a>',
    allowOutsideClick: false,
    showCloseButton: true,
  });
};

// Usage
// showAlertBox('type: success | error | info | warning', 'Your title', 'Your message')
showAlertBox('success', 'Success', 'File added successfully!');
showAlertBox('error', 'Error', 'There was an error adding the file!');
showAlertBox('info', 'Info', 'All data must be filled in!');
showAlertBox('warning', 'Warning', 'You have been warned :)');


// Example

let x = true;

x ?
  showAlertBox('success', 'Success', 'X is true type')
  :
  showAlertBox('error', 'Error', 'X is false type');