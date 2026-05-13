document.addEventListener('DOMContentLoaded', function () {


    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {

            navMenu.classList.toggle('active');
        });
    }



    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {

            const parentItem = this.parentElement;


            parentItem.classList.toggle('active');


            const icon = this.querySelector('.accordion-icon');
            if (parentItem.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });



    const contactForm = document.getElementById('contactForm');
    const successBanner = document.getElementById('success-banner');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {

            event.preventDefault();


            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');


            let isValid = true;
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');


            if (nameInput.value.trim() === "") {
                document.getElementById('nameError').textContent = "Name is required";
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }


            if (messageInput.value.trim() === "") {
                document.getElementById('messageError').textContent = "Please write a message";
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }


            const emailValue = emailInput.value.trim();
            if (emailValue === "") {
                document.getElementById('emailError').textContent = "Email is required";
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else if (!validateEmailFormat(emailValue)) {
                document.getElementById('emailError').textContent = "Please enter a valid email";
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }


            if (isValid) {

                contactForm.style.display = 'none';

                if (successBanner) {
                    successBanner.style.display = 'block';
                    successBanner.textContent = "Thank you, " + nameInput.value + "! Your message has been sent.";
                } else {
                    alert("Form submitted successfully!");
                }
            }
        });
    }


    function validateEmailFormat(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

});
