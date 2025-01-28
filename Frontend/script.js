document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const tileSize = 20;
    let snake = [{ x: 5, y: 5 }];
    let apple = { x: 10, y: 10 };
    let direction = { x: 0, y: 0 };
    let newDirection = { x: 0, y: 0 };
    let score = 0;
    let bestScore = 0;
    const threshold = 0.5;

    const overlay = document.getElementById("overlay");
    const scoreElement = document.getElementById("score");
    const bestScoreElement = document.getElementById("best-score");

    document.addEventListener("keydown", startGame);

    function startGame() {
        overlay.style.display = "none";
        document.removeEventListener("keydown", startGame);
        gameLoop = setInterval(update, 100);
    }

    function updateJoystickDirection() {
        fetch('http://localhost:3000/api/joystick')
            .then((response) => response.json())
            .then(({ x, y }) => {
                if (Math.abs(x) > Math.abs(y)) {
                    if (x > threshold) {
                        newDirection = { x: 1, y: 0 };
                    } else if (x < -threshold) {
                        newDirection = { x: -1, y: 0 };
                    }
                } else {
                    if (y > threshold) {
                        newDirection = { x: 0, y: 1 };
                    } else if (y < -threshold) {
                        newDirection = { x: 0, y: -1 };
                    }
                }
            })
            .catch((err) => console.error('Error fetching joystick values:', err));
    }

    function repositionApple() {
        apple.x = Math.floor(Math.random() * (canvas.width / tileSize));
        apple.y = Math.floor(Math.random() * (canvas.height / tileSize));
    }

    function update() {
        updateJoystickDirection();

        if (newDirection.x !== -direction.x || newDirection.y !== -direction.y) {
            direction = newDirection;
        }

        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        snake.unshift(head);

        if (head.x === apple.x && head.y === apple.y) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
            repositionApple();
        } else {
            snake.pop();
        }

        if (
            head.x < 0 || head.y < 0 ||
            head.x >= Math.floor(canvas.width / tileSize) ||
            head.y >= Math.floor(canvas.height / tileSize) ||
            snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            endGame();
        }

        draw();
    }

    function endGame() {
        clearInterval(gameLoop);
        bestScore = Math.max(bestScore, score);
        bestScoreElement.textContent = bestScore;
        overlay.style.display = "flex";
        overlay.querySelector("p").textContent = "Game Over! Press any key to restart.";
        score = 0;
        scoreElement.textContent = "Score: 0";
        direction = { x: 0, y: 0 };
        newDirection = { x: 0, y: 0 };
        snake = [{ x: 5, y: 5 }];
        repositionApple();
        document.addEventListener("keydown", startGame);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "lime";
        snake.forEach(segment => {
            ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        });

        ctx.fillStyle = "red";
        ctx.fillRect(apple.x * tileSize, apple.y * tileSize, tileSize, tileSize);
    }

    let gameLoop;
});
