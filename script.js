document.getElementById('theme-toggle').addEventListener('click', function() {
    let body = document.body;
    let themeToggleBtn = document.getElementById('theme-toggle');
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = '';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggleBtn.textContent = '';
    }
});

function checkAnswers() {
    const answers = {
        q1: 'c',
        q2: 'b'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    for (const [question, answer] of Object.entries(answers)) {
        const userAnswer = form.elements[question].value;
        if (userAnswer === answer) {
            score++;
        }
    }

    resultDiv.innerHTML = `You scored ${score} out of ${Object.keys(answers).length}`;
}
