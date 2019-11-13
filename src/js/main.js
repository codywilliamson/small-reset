// date function
window.addEventListener('DOMContentLoaded', function() {
    let div = document.querySelector('.full-width');

    div.innerHTML = showDate();
});

// get date function
function showDate() {
    let date = new Date();
    let currentDay = date.getDay();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    if (currentDay < 10) {
        currentDay = "0" + date.getDay();
    }

    if (currentMonth < 10) {
        currentMonth = "0" + date.getMonth();
    }

    return currentMonth + " - " + currentDay + " - " + currentYear;
}