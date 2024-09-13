document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        // Clear previous error messages
        const errorMessages = form.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.classList.add('hidden'));

        const inputs = form.querySelectorAll('input');
        let isValid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (input.value.trim() === '') {
                errorMessage.classList.remove('hidden');
                isValid = false;
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});
