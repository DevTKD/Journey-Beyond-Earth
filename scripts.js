let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].classList.add('active');
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    slides[slideIndex-1].classList.add('active');
}


document.getElementById('takeoff-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.open ('https://www.nasa.gov/events/', '_blank'); // Link to NASA Missions
});

document.getElementById('get-news-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.open ('https://www.nasa.gov/news/all-news/', '_blank'); // Link to NASA News
});

document.getElementById('solar-map-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.open ('https://eyes.nasa.gov/apps/solar-system/#/home', '_blank'); // Link to interactive solar map
});

