// ================= DARK MODE =================

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeButton.textContent = "☀️";
        } else {
            themeButton.textContent = "🌙";
        }

    });
}


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");
            return;

        }

        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted."
        );

        form.reset();

    });
}


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.style.textDecoration = "none";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.style.textDecoration = "underline";
        }

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});