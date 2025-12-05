/**
 * main.js
 * Project: Animal Kingdom - Handles client-side form validation (Required Interactive Feature)
 * Version: 1.1
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Target the form element by ID
    const contactForm = document.getElementById('contactForm');
    
    // Ensure we are on the contact page before attaching listener
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            
            // 1. Client-Side Validation Check
            if (!contactForm.checkValidity()) {
                event.preventDefault(); // Stop form submission if invalid
                event.stopPropagation();
            } else {
                // 2. Form is valid: Prevent actual submission (simulates success for static site)
                event.preventDefault();
                
                // Show success message
                const successMsg = document.getElementById('formSuccess');
                if (successMsg) {
                    successMsg.classList.remove('d-none');
                }
                
                // Reset form state
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMsg) {
                         successMsg.classList.add('d-none');
                    }
                }, 5000);
                
                // Exit handler after successful simulation
                return;
            }

            // 3. Applies Bootstrap's visual validation styles
            contactForm.classList.add('was-validated');
        }, false);
    }
});