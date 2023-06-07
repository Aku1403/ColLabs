// Import the questions array from the question.js module
import questions from './question.js';

// Function to display the quiz
function displayQuiz() {
  const quizContainer = document.getElementById('quiz-container');

  // Iterate over the questions and create the HTML elements
  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
      <h3>Question ${index + 1}:</h3>
      <p>${question.question}</p>
      <ul>
        ${question.answers.map(answer => `<li>${answer}</li>`).join('')}
      </ul>
    `;

    quizContainer.appendChild(questionElement);
  });
}

// Call the displayQuiz function when the page loads
window.onload = displayQuiz;
