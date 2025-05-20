// Mobile Menu Toggle
function addMobileMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.add("hidden");
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
}

// Testimonials Slider (Left and Right Scroll)
function testimonialsLeftBtn() {
    const slider = document.getElementById("slider");
    slider.scrollBy({ left: -385, behavior: "smooth" }); // Scrolls left by 385px
}

function testimonialsRightBtn() {
    const slider = document.getElementById("slider");
    slider.scrollBy({ left: 385, behavior: "smooth" }); // Scrolls right by 385px
}

// Any other section you want left-right functionality for (like Projects)
function scrollLeftBtn(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollBy({ left: -385, behavior: "smooth" });
}

function scrollRightBtn(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollBy({ left: 385, behavior: "smooth" });
}


// Easter Egg (Konami Code)
let konamiInput = [];
const secretCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

window.addEventListener("keydown", (e) => {
    konamiInput.push(e.code);
    konamiInput = konamiInput.slice(-secretCode.length);

    if (konamiInput.join("") === secretCode.join("")) {
        // Easter egg action (e.g., show a secret message)
        alert("🎉 You found the Easter Egg! 🎉");
    }
});

// Initialize EmailJS
emailjs.init("VgNzRQ76RA6xCYOjY");

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("first-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("aakrit", "template_sm3veui", formData)
        .then(function(response) {
            console.log("SUCCESS!", response);

            // Display Success Message
            const responseMessage = document.getElementById("response-message");
            responseMessage.textContent = "✅ Thank you! Your message has been sent.";
            responseMessage.style.display = "block";
            responseMessage.style.color = "green";

            // Reset Form
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            console.log("FAILED...", error);

            // Display Error Message
            const responseMessage = document.getElementById("response-message");
            responseMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
            responseMessage.style.display = "block";
            responseMessage.style.color = "red";
        });
});
