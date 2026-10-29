const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuBtn.textContent =
        navMenu.classList.contains("active")
            ? "✕"
            : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});


// Reveal animation

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill, .timeline-item, .ai-card, .cert-card"
    );

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// Add reveal styles dynamically

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);