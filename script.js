const text = "From the day we met on 13 September 2022, my life changed in the most beautiful way. You became my happiness, my comfort, and my forever person. These three years with you have been my greatest blessing. Every smile of yours makes my world brighter. I will love you today, tomorrow, and forever.";

let index = 0;
let musicPlayed = false;

function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page" + pageNumber).classList.add("active");

    if (pageNumber === 2 && !musicPlayed) {
        const music = document.getElementById("bgMusic");
        music.volume = 0;
        music.play();

        let fade = setInterval(() => {
            if (music.volume < 1) {
                music.volume += 0.05;
            } else {
                clearInterval(fade);
            }
        }, 200);

        typeWriter();
        musicPlayed = true;
    }

    if (pageNumber === 3) {
        setTimeout(() => {
            document.getElementById("finalReveal").classList.add("show");
        }, 10000);
    }
}

function typeWriter() {
    if (index < text.length) {
        document.getElementById("loveText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

// Love Counter
const startDate = new Date("2022-09-13");
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("loveCounter").innerText =
        days + " Days " + hours + " Hours " + minutes + " Minutes ❤️";
}
setInterval(updateCounter, 1000);

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 5000);
}
showSlides();

// Image Popup
function openImage(img) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = img.src;
}
function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
