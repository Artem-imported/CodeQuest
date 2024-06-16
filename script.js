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

document.addEventListener('DOMContentLoaded', () => {
    // Функция для проверки ответа на тест
    window.checkAnswer = function(answer) {
        const resultElement = document.getElementById('quiz-result');
        if (answer === 'a') {
            resultElement.textContent = 'Правильно! Тег <a> используется для создания гиперссылки.';
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = 'Неправильно. Попробуйте еще раз.';
            resultElement.style.color = 'red';
        }
    };
});