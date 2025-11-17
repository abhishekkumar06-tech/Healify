const data = {
  therapists: {
    img: "assets/images/therapists.jpg",
    text: "Our EHR software includes integrated telehealth, a robust template library, and helpful insurance tools, making it easy for you to manage your practice while caring for clients."
  },
  speech: {
    img: "assets/images/speech.jpg",
    text: "Easily manage your calendar, simplify billing, and run engaging in-person and virtual sessions. With Healify’s HIPAA-compliant software, you can run your practice with peace of mind."
  },
  occupational: {
    img: "assets/images/occupational.jpg",
    text: "Whether you're treating clients in-person or virtually, our practice management software is here to help. Streamline your scheduling, billing, documentation, and more."
  },
  psychiatrists: {
    img: "assets/images/psychiatrists.jpg",
    text: "Manage patient medications and keep medical information secure with ePrescribe. You can also enjoy more flexibility with customizable rate tables and treatment plans."
  }
};

const items = document.querySelectorAll(".specialty-list li");
const img = document.getElementById("specialty-image");
const desc = document.getElementById("specialty-description");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {

    items.forEach(li => li.classList.remove("active"));
    item.classList.add("active");

    const key = item.getAttribute("data-key");

    img.style.opacity = 0;
    setTimeout(() => {
      img.src = data[key].img;
      desc.textContent = data[key].text;
      img.style.opacity = 1;
    }, 200);
  });
});
