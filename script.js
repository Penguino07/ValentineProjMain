const mizuki = document.querySelector(".mizuki img");

document.addEventListener("DOMContentLoaded", function() {
    mizuki.style.display = "none";
})



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
        if (clickCount < 3) {
            triggerShakeAnimation();
        }else {
            console.log("Box clicked 3 times!");
            // Add your event logic here
            // For example, you can change the image or display a message
            box.src = "pictures/Designer2.png"; // Change the image
            disappear();
        }
        console.log("Box clicked " + clickCount + " times");
        clickCount++;
        
    });

    function disappear() {
        mizuki.style.display = "block";
        box.style.animation = "fadeOut 2s linear, zoomIn 2s linear";
        setTimeout(function() {
            
            box.style.display = "none";
            box.style.animation = "";
            change();
        }, 2000); // 3-second delay
    }
    const background = document.querySelector("body");
    const txt1 = document.querySelector("h1");
    const txt2 = document.querySelector(".evilbottom marquee");
    const txt3 = document.querySelector(".intro h2");
    function change(){
        
        console.log(txt1);
        mizuki.style.animation = "moveMizuki 2s linear";
        console.log("Mizuki is moving");
        setTimeout(function() {
            background.style.backgroundColor = "pink";
            mizuki.style.animation = "";
            mizuki.style.top = "25%";
            txt1.innerHTML = "========================HAPPY VALENTINES DAY!========================";
            txt2.innerHTML = "========================HAPPY VALENTINES DAY!========================";
            txt3.innerHTML = "";
            speech();
        }, 2000);
    }

    function speech(){
        const speech = document.querySelector(".speechBubble img");
        const txt = document.querySelector(".talk h2");
        console.log(txt);
        speech.style.display = "block";
        speech.style.animation = "fadeIn 1s linear";
        speech.style.opacity = "1";
        txt.style.opacity = "1";
        txt.style.animation = "fadeIn 2s linear";
        setTimeout(function() {
            txt.style.display = "none";
        }, 2000);
    }

    function speech2(){
        
    }
});