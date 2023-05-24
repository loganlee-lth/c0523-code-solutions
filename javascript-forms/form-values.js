const $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();

  const messageData = {
    name: $contactForm.elements.name.value,
    email: $contactForm.elements.email.value,
    message: $contactForm.elements.message.value,
  };
  console.log('messageData:', messageData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', handleSubmit);
