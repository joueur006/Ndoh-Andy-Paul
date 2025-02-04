document.addEventListener("DOMContentLoaded", function () {
    // Animation sur le titre principal
    const title = document.querySelector("header h1");
    title.style.opacity = 0;
    setTimeout(() => {
        title.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
        title.style.opacity = 1;
        title.style.transform = "translateY(0)";
    }, 500);

    // Menu actif dynamique
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
        link.addEventListener("mouseenter", () => {
            link.style.color = "#ff6347"; // Change color on hover
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = ""; // Reset color
        });
    });

    // Effet de survol sur les sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            section.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
            section.style.boxShadow = "none";
        });
    });

    // Formulaire de contact validation simple
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Veuillez remplir tous les champs du formulaire.");
            } else if (!validateEmail(email)) {
                event.preventDefault();
                alert("Veuillez entrer une adresse email valide.");
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    let index = 0;
    function swipePlayers() {
        playersContainer.style.transform = `translateX(-${index * 100}%)`;
        index = (index + 1) % players.length;
    }
    setInterval(swipePlayers, 3000);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("slider-button");
    nextButton.addEventListener("click", () => {
        index = (index + 1) % players.length;
        swipePlayers();
    });

    document.querySelector("main").appendChild(prevButton);
    document.querySelector("main").appendChild(nextButton);
});
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentIndex);
});
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-team");
    const teamCards = document.querySelectorAll(".team-details");

    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();
        teamCards.forEach(card => {
            const teamName = card.querySelector("h3").textContent.toLowerCase();
            if (teamName.includes(searchValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
