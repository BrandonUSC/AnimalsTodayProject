// donations.js
// Donation goal logic
const goal = 1000;
let currentDonated = 250;

// DOM Elements selection
const progressBar = document.getElementById('progressBar');
const currentAmountDisplay = document.getElementById('currentAmount');
const donationForm = document.getElementById('donationForm');
const donationMessage = document.getElementById('donationMessage');

// Updates the progress bar, percentage text, and current amount display
function updateProgress() {
    const percentage = Math.min((currentDonated / goal) * 100, 100);
    
    // Update CSS width
    progressBar.style.width = `${percentage}%`;
    
    progressBar.setAttribute('aria-valuenow', currentDonated);
    
    progressBar.textContent = `${Math.round(percentage)}% Funded`;
    currentAmountDisplay.textContent = `$${currentDonated}`;
}

// Event listener for the donation form submission
donationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const input = document.getElementById('donationAmount');
    const amount = parseInt(input.value, 10);

    if (amount > 0) {
        currentDonated += amount;
        updateProgress();
        
        // Show success message
        donationMessage.classList.remove('d-none');
        donationMessage.textContent = `Thank you for donating $${amount}! Total raised: $${currentDonated}`;

        input.value = '';
        
        setTimeout(() => {
            donationMessage.classList.add('d-none');
        }, 5000);
    }
});

// Initialize progress bar on page load
updateProgress();