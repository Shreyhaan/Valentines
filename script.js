function openLetter() {
    document.getElementById('envelopeContainer').style.display = 'none';
    document.getElementById('letterContainer').style.display = 'block';
    startHearts();
}

function showSurprise(type) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');

    if (type === 'memory') {
        popupContent.innerHTML = "Remember the picnic at the park? 🌸 It was the best day ever!";
    } else if (type === 'photo') {
        popupContent.innerHTML = "<img src='images/your_couple_photos.jpg' style='width:100%; border-radius:10px;' alt='Our Memory'><br>Look at us! We look so happy together!";
    } else if (type === 'funFact') {
        popupContent.innerHTML = "I love you because you make every moment special. ❤️";
    }
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showYes() {
    alert("Yay! I'm so happy! 💕");
}

const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', function () {
    const x = Math.random() * window.innerWidth * 0.5;
    const y = Math.random() * window.innerHeight * 0.5;
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

function startHearts() {
    const container = document.getElementById('heartsContainer');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';
        heart.style.position = 'absolute';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 3 + 1}em`;
        heart.style.animation = `float ${Math.random() * 5 + 5}s infinite`;
        container.appendChild(heart);
    }
}
