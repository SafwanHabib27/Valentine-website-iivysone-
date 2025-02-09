let noClickCount = 0;  // Variable to track the number of times "No" is clicked

function handleYesClick() {
    alert("Yay! ❤️ Happy Valentine's Day!");
}

function handleNoClick() {
    noClickCount++; // Increment the click count

    const message = document.getElementById("response-message");
    const noButton = document.querySelector(".no-button");

    if (noClickCount === 1) {
        message.textContent = "Are you sure? 😜 I thought we were meant to be!";
    } else if (noClickCount === 2) {
        message.textContent = "Hmm... not convinced? 😏";
    } else if (noClickCount === 3) {
        message.textContent = "Really? You're breaking my heart! 😢";
    } else if (noClickCount === 4) {
        message.textContent = "Okay, now you're just being mean! 😭";
    } else {
        message.textContent = "Fine, I give up! 😓 You win!";
    }
    
    message.classList.remove("hidden");

    // Apply a stronger shake animation after each click
    noButton.style.animation = `shake ${0.5 + noClickCount * 0.2}s ease`;

    // Reset animation after it completes
    setTimeout(() => {
        noButton.style.animation = "";
    }, (0.5 + noClickCount * 0.2) * 1000); // Adjust time based on shake intensity

    // Change the background color to make it more dramatic
    if (noClickCount >= 4) {
        noButton.style.backgroundColor = "purple"; // After 4 clicks, make the color purple!
    } else {
        noButton.style.backgroundColor = "orange"; // For the first few clicks, it’s orange
    }

    // Reset the color after a short delay
    setTimeout(() => {
        noButton.style.backgroundColor = "grey"; // Reset to original color
    }, 1000);
}
