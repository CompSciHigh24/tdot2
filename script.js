    let answers = {
            easy: {
                football: "travisHunter",
                nba: "jaMorant",
                tennis: "serenaWilliams",
                usa: "football"
            },
            hard: {
                football: "jerryRice",
                nba: "wiltChamberlain",
                tennis: "serenaWilliams",
                heisman: "football"
            },
            elite: {
                soccer: "kylianMbappe",
                triple: "oscarRobertson",
                atp: "novakDjokovic",
                olympicCombo: "biathlon"
            }
        };

        let selectedDifficulty = null;

        function startQuiz(level) {
            selectedDifficulty = level;
            document.getElementById('start-screen').style.display = 'none';
            const quiz = document.getElementById('quiz');
            quiz.style.display = 'block';

            // Hide all question groups
            document.querySelectorAll('.question-group').forEach(div => div.style.display = 'none');

            // Show only selected difficulty questions
            document.querySelectorAll(`.question-group[data-difficulty="${level}"]`).forEach(div => div.style.display = 'block');

            quiz.reset();
            document.getElementById('scoreReveal').textContent = '';
        }

        document.getElementById('quiz').addEventListener('submit', function(e) {
            e.preventDefault();
            if (!selectedDifficulty) {
                alert("Please select a difficulty first!");
                return;
            }

            let formData = new FormData(e.target);
            let score = 0;
            const correctAnswers = answers[selectedDifficulty];

            for (const [key, correct] of Object.entries(correctAnswers)) {
                let userAnswer = formData.get(key);
                if (userAnswer && userAnswer.trim().toLowerCase() === correct.toLowerCase()) {
                    score++;
                }
            }

            document.getElementById('scoreReveal').textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
        });

        document.getElementById('backToMenu').addEventListener('click', () => {
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('quiz').style.display = 'none';
            document.getElementById('scoreReveal').textContent = '';
            document.getElementById('quiz').reset();
        });

        window.onload = () => {
            document.getElementById('start-screen').style.display = 'block';
            document.getElementById('quiz').style.display = 'none';
        };
