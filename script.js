document.addEventListener('DOMContentLoaded', () => {
    // Update footer year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Copy Email Functionality
    const copyButton = document.getElementById('copyEmail');
    if (copyButton) {
        copyButton.addEventListener('click', () => {
            const email = 'nida74663@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = `Portfolio Contact from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

            // Open default email client
            window.location.href = `mailto:nida74663@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            if (statusMessage) {
                statusMessage.textContent = 'Opening your email client...';
                statusMessage.classList.remove('hidden');
                statusMessage.classList.add('success');

                setTimeout(() => {
                    contactForm.reset();
                    statusMessage.textContent = '';
                    statusMessage.classList.add('hidden');
                    statusMessage.classList.remove('success');
                }, 3000);
            }
        });
    }

    // Smooth Scrolling for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
});
