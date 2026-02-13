document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const response = document.getElementById('response');
    const valentineCard = document.querySelector('.valentine-card');
    const heartsContainer = document.querySelector('.hearts');
    const bgHeartsContainer = document.querySelector('.bg-hearts');

    // Show the card with a nice animation
    setTimeout(() => {
        valentineCard.style.transform = 'scale(1)';
        valentineCard.style.opacity = '1';
    }, 100);

    // Create floating hearts in card
    function createHearts() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Create floating hearts in background
    function createBgHearts() {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-100px';
        heart.style.animationDuration = Math.random() * 5 + 8 + 's';
        heart.style.animation = `bgFloat ${Math.random() * 5 + 8}s linear forwards`;
        bgHeartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }

    // Generate hearts in card periodically
    setInterval(createHearts, 300);

    // Generate hearts in background periodically
    setInterval(createBgHearts, 800);

    // Yes button click
    yesBtn.addEventListener('click', function () {
        document.querySelector('.message').classList.add('hidden');
        document.querySelector('.buttons').classList.add('hidden');
        response.classList.remove('hidden');

        // Create a burst of hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(createHearts, i * 100);
        }
    });

    // Function to move the no button to a random position
    function moveNoButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        // First make it disappear
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';  // Prevent hover during transition

        // After fade out, move and show again
        setTimeout(() => {
            noBtn.style.position = 'absolute';
            noBtn.style.left = Math.max(10, Math.random() * maxX) + 'px';
            noBtn.style.top = Math.max(10, Math.random() * maxY) + 'px';

            // Fade back in
            setTimeout(() => {
                noBtn.style.opacity = '1';
                noBtn.style.pointerEvents = 'auto';
            }, 50);
        }, 300);
    }

    // Mouse enter effect
    noBtn.addEventListener('mouseenter', moveNoButton);

    // Touch effect for mobile devices
    noBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        moveNoButton();
    });

    // Prevent right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            // Close the page or do something when Escape is pressed
            document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; font-size: 1.5rem; text-align: center; padding: 20px;">Come back and say yes! 💝</div>';
        }
    });
});