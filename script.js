const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll(".navbar a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;

function showSlide(index) {
    if (!slides.length) {
        return;
    }

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    if (slides[index]) {
        slides[index].classList.add("active");
    }

    if (dots[index]) {
        dots[index].classList.add("active");
    }

    currentSlide = index;
}

function nextSlide() {
    if (!slides.length) {
        return;
    }

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide() {
    if (!slides.length) {
        return;
    }

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", previousSlide);
}

dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        const slideNumber = parseInt(
            dot.getAttribute("data-slide")
        );

        if (!isNaN(slideNumber)) {
            showSlide(slideNumber);
        }
    });
});

if (slides.length > 1) {
    setInterval(function () {
        nextSlide();
    }, 5000);
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Mesajınız alınmıştır. En kısa sürede sizinle iletişime geçeceğiz."
        );

        contactForm.reset();
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow =
            "0 2px 15px rgba(0,0,0,0.08)";
    }
    (function () {

    /* Menü erişilebilirliği */
    const menuButton = document.getElementById("menuBtn");
    const nav = document.querySelector(".navbar");

    if (menuButton) {

        menuButton.setAttribute(
            "aria-label",
            "Menüyü aç veya kapat"
        );

        menuButton.setAttribute(
            "aria-expanded",
            nav && nav.classList.contains("active")
                ? "true"
                : "false"
        );
    }

    /* Görselleri optimize et */
    document.querySelectorAll("img").forEach(function (image) {

        /*
         * Hero görsellerini lazy-load yapmıyoruz.
         * Sayfanın ilk görüntüsünde gerekli olabilirler.
         */
        if (
            !image.hasAttribute("loading") &&
            !image.closest(".hero") &&
            !image.closest(".about-hero") &&
            !image.closest(".services-hero") &&
            !image.closest(".gallery-hero") &&
            !image.closest(".rental-hero") &&
            !image.closest(".contact-hero")
        ) {
            image.setAttribute("loading", "lazy");
        }

        if (!image.hasAttribute("decoding")) {
            image.setAttribute("decoding", "async");
        }

    });

    /* Harici link güvenliği */
    document
        .querySelectorAll("a[target='_blank']")
        .forEach(function (link) {

            const rel = link.getAttribute("rel") || "";

            if (!rel.includes("noopener")) {

                link.setAttribute(
                    "rel",
                    (rel + " noopener noreferrer").trim()
                );

            }

        });

})();
});