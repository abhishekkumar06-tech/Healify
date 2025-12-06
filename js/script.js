
// NAVBAR BURGER MENU

const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}




// DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Change icon
        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
}




// SCROLL TO TOP BUTTON

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}




// SHOW WELCOME ALERT ONLY ON HOME PAGE

if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    window.addEventListener("load", () => {
        alert("Welcome to Healify! Your trusted healthcare partner.");
    });
}




// FAQ ACCORDION

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});




// DOCTORS PAGE → CATEGORY FILTER

const filterBtns = document.querySelectorAll(".filter-btn");
const doctorCards = document.querySelectorAll(".doctor-card");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        // remove old active
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        doctorCards.forEach((card) => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});




// TESTIMONIAL SLIDER

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const testimonialBox = document.getElementById("testimonialBox");

if (testimonialBox) {
    const cards = testimonialBox.querySelectorAll(".testimonial-card");
    let index = 0;

    function showCard(i) {
        cards.forEach((c, idx) => {
            c.classList.remove("active");
            if (idx === i) c.classList.add("active");
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % cards.length;
            showCard(index);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            index = (index - 1 + cards.length) % cards.length;
            showCard(index);
        });
    }

    // Auto slide every 4 seconds
    setInterval(() => {
        index = (index + 1) % cards.length;
        showCard(index);
    }, 4000);
}




// APPOINTMENT PAGE → FORM VALIDATION

const appointForm = document.getElementById("appointForm");
const bookNow = document.getElementById("bookNow");

if (bookNow) {
    bookNow.addEventListener("click", (e) => {
        e.preventDefault();

        const inputs = appointForm.querySelectorAll("input, select");
        let valid = true;

        inputs.forEach((input) => {
            if (input.value.trim() === "" || input.value === "Select Department") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "2px solid green";
            }
        });

        if (valid) {
            alert("Appointment booked successfully!");
        } else {
            alert("Please fill all fields!");
        }
    });
}




// CONTACT FORM MESSAGE (from old code)

const sendMsg = document.getElementById("sendMsg");

if (sendMsg) {
    sendMsg.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Your message has been sent! We will contact you soon.");
    });
}
