
//main.js  Handles the client-side form validation and Formspree Forms.

document.addEventListener('DOMContentLoaded', () => {
    
    const contactContainer = document.getElementById('contactContainer');
    const successMessage = document.getElementById('successMessage');
    const contactForm = document.getElementById('contactForm');
    
    //Ensure we are on the contact page and elements exist before attaching listener
    if (contactForm && contactContainer && successMessage) {
        
        contactForm.addEventListener('submit', function (event) {
            
            // 1. Client-Side Validation Check
            if (!contactForm.checkValidity()) {
                // If form is invalid, prevent submission and stop adding to it
                event.preventDefault(); 
                event.stopPropagation();
            } else {
                // 2. Form is valid, prevent default browser submission
                event.preventDefault(); 
                
                // 3. Perform AJAX submission to Formspree
                fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json' 
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Submission successful response
                        
                        // Hide the form container, SHOW the success message container
                        contactContainer.classList.add('d-none'); 
                        successMessage.classList.remove('d-none');
                        
                        contactForm.reset();
                        contactForm.classList.remove('was-validated'); 
                        
                    } else {
                        // Handle non-200 responses
                        alert('Oops! There was an issue submitting your form. Please check your connection and try again.');
                    }
                })
                .catch(error => {
                    // Handle network or fetch errors
                    console.error('Submission Error:', error);
                    alert('Oops! An unexpected network error occurred.');
                });
            }

            // 4. Applies Bootstrap's visual validation styles
            contactForm.classList.add('was-validated');
            
        }, false);
    }
});