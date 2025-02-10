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
            speech2();
        }, 2000);
    }
    
    const ques = document.querySelector(".question h2");
    function speech2(){
        
        const yes = document.querySelector(".button1");
        const no = document.querySelector(".button2");
        console.log(ques);
        console.log(yes);
        console.log(no);
        ques.style.animation = "fadeIn 2s linear";
        ques.style.opacity = "1";
        setTimeout(function() {
            yes.style.animation = "fadeIn 2s linear";
            yes.style.opacity = "1";
            no.style.animation = "fadeIn 2s linear";
            no.style.opacity = "1";
        }, 2000);
    }
    
    window.handleYes = function() {
        alert("Thank you! Happy Valentine's Day Sarah!");
        const mizuki = document.querySelector(".mizuki img");
        const thank = document.querySelector(".thank");
        const btn1 = document.querySelector(".button1");
        const btn2 = document.querySelector(".button2");
        console.log(btn1);
        console.log(btn2);
        console.log(thank);
        ques.style.display = "none";
        thank.style.opacity = "1";
        setTimeout(function() {
            btn1.style.display = "none";
            btn2.style.display = "none";
            mizuki.src = "pictures/happyplush.png"
            mizuki.style.width = "175px";
            mizuki.style.height = "175px";
            mizuki.style.top = "20%";
            celebrate();
        }, 0);
    }

    function celebrate(){
        const confettiImages = document.querySelectorAll(".confetti img, .confetti2 img, .confetti3 img, .confetti4 img");
        
        for(var i = 0; i < confettiImages.length; i++){
            console.log(confettiImages[i]); 
            confettiImages[i].style.display = "block";
            confettiImages[i].style.opacity = "1";
        }
    }


    window.handleNo = function() {
        var arr = ["please?", "pretty please?", "reconsider!", 
            "youll get Perfect on every song if you say yes!", "no?", 
            "sigh...", 
            "trust me this coding stuff is time consuming", "please i'll make karla leave you alone💔"]
        
        var random = Math.floor(Math.random() * arr.length);
        alert(arr[random]);
    }

});