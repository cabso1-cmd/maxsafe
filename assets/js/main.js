/* MaxSafe Services Ltd — site scripts */
document.addEventListener('DOMContentLoaded', function () {

  /* Footer year */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* Mobile nav toggle */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('is-open'); });
    });
  }

  /* Highlight current nav link */
  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a[href]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
      a.style.color = '#a87b25';
    }
  });

  /* Contact form: submit to Formspree via fetch, show inline status */
  var form = document.getElementById('contact-form');
  if (form) {
    var statusBox = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot spam check
      var honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) { return; }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          statusBox.textContent = "Thanks — your message has been sent. We'll be in touch shortly.";
          statusBox.className = 'form-status is-success';
        } else {
          return response.json().then(function (data) {
            var msg = (data && data.errors) ? data.errors.map(function (e) { return e.message; }).join(', ') : 'Something went wrong. Please try again or email us directly.';
            statusBox.textContent = msg;
            statusBox.className = 'form-status is-error';
          });
        }
      }).catch(function () {
        statusBox.textContent = "Something went wrong sending your message. Please email us directly.";
        statusBox.className = 'form-status is-error';
      }).finally(function () {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
      });
    });
  }
});
