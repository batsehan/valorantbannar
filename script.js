// script.js
document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain-container");
    const numberOfDrops = 100; // Adjust the number of raindrops

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement("div");
        drop.classList.add("raindrop");
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(drop);
    }
});
