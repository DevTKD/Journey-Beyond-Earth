










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

