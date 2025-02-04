document.addEventListener("DOMContentLoaded", function() {
    // Slider automatique pour les images et vidéos
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider img, .slider video");
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);
    showSlide(currentIndex);

    // Zoom sur les images de la galerie
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<div class='modal-content'><span class='close'>&times;</span><img src='${img.src}' alt='zoomed image'></div>`;
            document.body.appendChild(modal);
            document.querySelector(".close").addEventListener("click", () => modal.remove());
        });
    });

    // Tableau interactif pour trier les stats
    const table = document.querySelector("table");
    if (table) {
        table.querySelectorAll("th").forEach((th, index) => {
            th.addEventListener("click", () => {
                const rows = Array.from(table.querySelectorAll("tbody tr"));
                const sortedRows = rows.sort((a, b) => {
                    const aText = a.cells[index].textContent.trim();
                    const bText = b.cells[index].textContent.trim();
                    return isNaN(aText) ? aText.localeCompare(bText) : aText - bText;
                });
                sortedRows.forEach(row => table.querySelector("tbody").appendChild(row));
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slider img");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);

    showSlide(currentIndex);
});