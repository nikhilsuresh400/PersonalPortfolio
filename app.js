
// Importing LOCOMOTIVE JS
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// Loader
function loadingAnimation() {
    var loader = document.querySelector("#loader");
    var head = document.querySelector("#loader-content h1");

    setTimeout(function() {
        loader.style.top = "-100%";
    },3500);

    var loaderBox = document.querySelector("#loader-content");

    setTimeout(function() {
        head.innerHTML = "Welcome!"
    },3000);
};

loadingAnimation();