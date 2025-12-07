//quiz.js Handles quiz logic

document.getElementById('dailyQuizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const totalQuestions = 6;
    let score = 0;
    const form = e.target;
    const resultElement = document.getElementById('quizResult');

    // Loop through all questions
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        
        // Find the selected radio button for the current question
        const selectedRadio = form.elements[questionName].value;

        // Check if the selected answer's value is 'correct'
        if (selectedRadio === 'correct') {
            score++;
        }
    }

    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Determine the result message based on users score
    let message = `You scored ${score} out of ${totalQuestions} (${percentage}%).`;
    let resultClass = 'alert-info';

    if (percentage === 100) {
        message = ` Perfect Score! ${message}`;
        resultClass = 'alert-success';
    } else if (percentage >= 70) {
        message = ` Great Job! ${message}`;
        resultClass = 'alert-warning';
    } else {
        message = ` Keep Studying! ${message}`;
        resultClass = 'alert-danger';
    }

    // Display the result to screen
    resultElement.textContent = message;
    resultElement.className = `mt-4 p-3 border rounded ${resultClass}`;
    resultElement.classList.remove('d-none');
    
    resultElement.scrollIntoView({ behavior: 'smooth' });
});