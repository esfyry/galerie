document.addEventListener("DOMContentLoaded", function () {
    const imageFolder = "images/"; // Folderul unde sunt stocate imaginile
    const imageCount = 6; // Numărul de imagini disponibile
    const carousel = document.getElementById("carousel");
    const collage = document.getElementById("collage");
    let currentIndex = 0;

    // Încărcare imagini în carusel și colaj
    for (let i = 1; i <= imageCount; i++) {
        let img = document.createElement("img");
        img.src = `${imageFolder}image${i}.jpg`;
        img.alt = `Imagine ${i}`;
        img.classList.add("carousel-image");
        if (i === 1) img.classList.add("active");
        carousel.appendChild(img);

        let collageImg = document.createElement("img");
        collageImg.src = `${imageFolder}image${i}.jpg`;
        collageImg.alt = `Imagine ${i}`;
        collageImg.classList.add("collage-image");
        collage.appendChild(collageImg);
    }

    // Stilizare modernă și dinamică a colajului
    collage.style.display = "grid";
    collage.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
    collage.style.gap = "10px";
    collage.style.justifyContent = "center";
    collage.style.padding = "20px";

    document.querySelectorAll(".collage-image").forEach(img => {
        img.style.width = "100%";
        img.style.height = "150px";
        img.style.objectFit = "cover";
        img.style.borderRadius = "10px";
        img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        img.style.transition = "transform 0.3s ease-in-out";
        img.addEventListener("mouseover", () => img.style.transform = "scale(1.1)");
        img.addEventListener("mouseout", () => img.style.transform = "scale(1)");
    });

    function updateCarousel() {
        let images = document.querySelectorAll(".carousel-image");
        images.forEach((img, index) => {
            img.classList.remove("active");
            if (index === currentIndex) {
                img.classList.add("active");
            }
        });
    }

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + imageCount) % imageCount;
        updateCarousel();
    };

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % imageCount;
        updateCarousel();
    };
});
