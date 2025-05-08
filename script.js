//nav mobile
document.querySelector(".hamburger-menu").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("show");
});
// Timeline Effect
document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");

    function checkScroll() {
        timelineEvents.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            if (eventTop < window.innerHeight - 100) {
                event.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
// Fade-in effect for privacy policy content and terms
window.addEventListener('load', function () {
    const policySection = document.querySelector('.privacy-policy');
    policySection.style.opacity = '1';  // Make content visible when the page loads
});
// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;

        // Toggle visibility of the answer
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// FAQ Search Functionality
document.getElementById('faq-search').addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        if (question.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
// Validate the Contact Us Form
function validateForm() {
    let isValid = true;
    clearErrors();

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('name-error', 'Name is required.');
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '') {
        showError('email-error', 'Email is required.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('email-error', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        showError('message-error', 'Message is required.');
        isValid = false;
    } else if (message.length < 10) {
        showError('message-error', 'Message must be at least 10 characters long.');
        isValid = false;
    }

    return isValid;
}

// Show error message for a specific field
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
    });
}
// Avoid XSS
function sanitizeInput(input) {
    return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

