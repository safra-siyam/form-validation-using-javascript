document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const ContactUs = document.getElementById('ContactUs');
    const closeBtn = document.getElementById('close-btn'); 
    const phoneRegex = /^\+94\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    ContactUs.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('contactForm').addEventListener('submit', (event) => { 
        event.preventDefault();

        let isValid = true; 
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        if (!address) {
            document.getElementById('addressError').textContent = 'Address is required';
            document.getElementById('addressError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('addressError').style.display = 'none';
        }

        if (!phone) {
            document.getElementById('phoneError').textContent = 'Phone number is required';
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        } else if (!phoneRegex.test(phone)) {
            document.getElementById('phoneError').textContent = 'Invalid phone number. It should start with +94 and be followed by 9 digits.';
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('phoneError').style.display = 'none';
        }

        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('emailError').textContent = 'Email is invalid';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        if (!message) {
            document.getElementById('messageError').textContent = 'Message is required';
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else if ( message.length < 10) {
            document.getElementById('messageError').textContent = 'Message should be atleast 10 characters long';
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }

        if (isValid) {
            const contactData = { name, address, phone, email, message };
            localStorage.setItem('contactData', JSON.stringify(contactData));
            alert('Contact data submitted successfully!!!');
            modal.style.display = 'none';
        }
    });
});
