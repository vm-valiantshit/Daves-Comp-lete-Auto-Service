(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Service request from Dave's Complete Auto Service website");
    const body = encodeURIComponent([
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Vehicle: ${data.get('vehicle') || ''}`,
      `Service: ${data.get('service') || ''}`,
      `Message: ${data.get('message') || ''}`
    ].join('\n'));
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
})();
