const form = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.className = 'form-status';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) {
      formStatus.textContent = 'Please enter your full name.';
      formStatus.classList.add('error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = 'Please enter a valid email address.';
      formStatus.classList.add('error');
      return;
    }

    const digitCount = phone.replace(/\D/g, '').length;
    if (phone && (!/^[0-9()\-\s+]+$/.test(phone) || digitCount < 10)) {
      formStatus.textContent = 'Phone number should include at least 10 digits.';
      formStatus.classList.add('error');
      return;
    }

    if (message.length < 10) {
      formStatus.textContent = 'Please share at least 10 characters about your order.';
      formStatus.classList.add('error');
      return;
    }

    formStatus.textContent = 'Thank you! Your message has been prepared for delivery.';
    formStatus.classList.add('success');
    form.reset();
  });
}
