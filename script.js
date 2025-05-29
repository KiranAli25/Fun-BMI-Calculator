let happy = document.getElementById("happy");
let image = document.getElementById("image");
let BMI = document.getElementById("BMI");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");
let display = document.getElementById("display");
let caption = document.getElementById("caption");
let resultImage = document.getElementById("result-image");
let reset = document.getElementById("reset");





BMI.style.display = "none";
result.style.display = "none";
display.style.display = "none";
caption.style.display = "none";



// Set fixed width and height to prevent resizing
image.style.width = "300px"; // Set your desired width
image.style.height = "300px"; // Set your desired height
image.style.objectFit = "cover"; // Optional: ensures image covers the area

happy.addEventListener("mouseover", function() {
    image.src = "https://i.postimg.cc/wTbvwwk2/Untitled-design-1.png";
});
happy.onmouseout = function() {
    image.src = "https://i.postimg.cc/3xcvDK6K/Untitled-design.png";
};

happy.onclick = function(){
    BMI.style.display = "block";
    result.style.display = "none";
    display.style.display = "none";
    caption.style.display = "none";
};

calculate.onclick = function bmi() {
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);
    let bmi = (w / (h * h));
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
    result.style.display = "block";

    // Ensure display and caption are visible before setting content
    display.style.display = "block";
    caption.style.display = "block";
    reset.style.display = "block";

    if (bmi < 18.5) { 
        resultImage.src = "https://i.postimg.cc/mrh7Kkc9/skinny.jpg";
        display.innerHTML = "You are underweight.";
        caption.innerHTML = "Light as a feather! While agility is great, make sure you’re getting enough fuel for your body to stay strong. It's important to maintain a healthy weight. Consider consulting a healthcare provider for personalized advice.";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        resultImage.src = "https://i.postimg.cc/sX7GRh3M/normal-image.png";
        display.innerHTML = "You are normal weight.";
        caption.innerHTML = "Goldilocks would approve—you're just right! Keep up the balance of good food and movement. Perfectly balanced, as all things should be! Keep up the good work and maintain a healthy lifestyle.";
    }
    else if (bmi >= 25 && bmi < 29.9) {
        resultImage.src = "https://i.postimg.cc/BZ5PYHhy/chubby.jpg";
        display.innerHTML = "You are overweight.";
        caption.innerHTML = "You’ve got some extra energy reserves! Time to strike a balance with some activity and mindful eating. A little extra cushion for the pushin’! Consider incorporating more physical activity and a balanced diet into your routine.";
    }
    else {
        resultImage.src = "https://i.postimg.cc/BnRx9s2w/fat-image.png";
        display.innerHTML = "You are obese.";
        caption.innerHTML = "Your body is working hard! Time to shed some pounds! It’s important to focus on your health. Consider seeking advice from a healthcare provider for a personalized plan.";
    }
    resultImage.style.display = "block";
    display.style.display = "block";
    caption.style.display = "block";
    reset.style.display = "block";
};
 

reset.onclick = function() {
    // Reset all fields and hide elements
    weight.value = "";
    height.value = "";
    result.innerHTML = "";
    display.innerHTML = "";
    caption.innerHTML = "";
    resultImage.src = "";
    
    // Hide all elements
    BMI.style.display = "none";
    result.style.display = "none";
    display.style.display = "none";
    caption.style.display = "none";
    resultImage.style.display = "none";
};
