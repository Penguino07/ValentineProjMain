document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const giftBox = document.querySelector(".box img");
        giftBox.style.opacity = "1";
        giftBox.style.animation = "fadeIn 3s linear, test 3s linear";
    }, 5000); // 5-second delay

    // Add click event listener to the box
    const box = document.querySelector(".box img");
    let clickCount = 1;

    function triggerShakeAnimation() {
        box.style.animation = "shake 0.5s";
        console.log("Shake animation triggered");

        // Remove the shake class after the animation ends to allow re-triggering
        setTimeout(function() {
            box.style.animation = "";
        }, 500); // Duration of the shake animation
    }

    box.addEventListener("click", function() {
        
        // Check if the box has been clicked 3 times
        if (clickCount !== 3) {
            triggerShakeAnimation();
        }else {
            console.log("Box clicked 3 times!");
            // Add your event logic here
            // For example, you can change the image or display a message
            box.src = "pictures/Designer2.png"; // Change the image
            
        }
        console.log("Box clicked " + clickCount + " times");
        clickCount++;
        
    });
});