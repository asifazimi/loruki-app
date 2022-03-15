// When scrolling bottom
var header = document.querySelector(".main-header");
window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});
// countdown
var countdown = function () {
    var date = new Date("August 20, 2021 00:00:00").getTime();
    var now = new Date().getTime();
    var gap = date - now;
    // How does the time works?
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var textDay = Math.floor(gap / day);
    var textHour = Math.floor((gap % day) / hour);
    var textMinute = Math.floor((gap % hour) / minute);
    var textSecond = Math.floor((gap % minute) / second);
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
};
setInterval(countdown, 1000);
