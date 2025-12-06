burger=document.querySelector('.burger')
navbarItems=document.querySelector('.navbar-items')
nav=document.querySelector('.nav')

burger.addEventListener('click',()=>{
   navbarItems.classList.toggle('h-class')
   nav.classList.toggle('v-class')
})


// Appointment Form Validation
const bookBtn = document.getElementById("bookBtn");
bookBtn.addEventListener("click", function(event) {
    event.preventDefault(); // stops page refresh

    const inputs = document.querySelectorAll(".box input");

    let empty = false;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            empty = true;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
        }
    });

    if (empty) {
        alert("Please fill all fields before booking!");
    } else {
        alert("Appointment Booked Successfully!");
    }
});


// Contact form message
const sendMsg = document.getElementById("sendMsg");

if(sendMsg){
    sendMsg.addEventListener("click", function(event){
        event.preventDefault();
        alert("Your message has been sent! We will contact you soon.");
    });
}


// Scroll to top functionality
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


window.addEventListener("load", () => {
    alert("Welcome to Healify!");
});
