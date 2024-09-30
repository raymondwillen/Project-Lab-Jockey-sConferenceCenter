const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.getElementById('formContact').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const preferredContact = document.getElementById('preferredContact').value;
    const message = document.getElementById('message').value;

    if (name.length < 5) {
        alert('Length of name must be greater than 5');
        return;
    }
    if (phone.length != 12 || isNaN(phone)) {
        alert('Phone number must be 12 digits');
        return;
    }
    if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
        alert('Email must be valid (@gmail.com)');
        return;
    }
    if (preferredContact != 'email' && preferredContact != 'phone') {
        alert('Preferred Contact must be either email or phone');
        return;
    }
    if (message.length < 10) {
        alert('Message must be greater than 7 characters');
        return;
    }
    alert('Message sent successfully');
    document.getElementById('formContact').reset();
});