document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const giftBox = document.querySelector(".box img");
        giftBox.style.opacity = "1";
        giftBox.style.animation = "fadeIn 3s linear, test 3s linear";
    }, 5000); // 5-second delay
});