// Select the container and the button
const content = document.getElementById("content");
const showMessageButton = document.getElementById("showMessageButton");

// Add click event listener to the button
showMessageButton.addEventListener("click", () => {
    // Split the message into smaller parts to avoid overflow
    const messageParts = [
        "As we near the end of this semester, I want to take a moment to express my sincere gratitude for your guidance and support, Ma'am. The knowledge and skills I have gained through your guidance have deeply impacted my academic journey. I have learned more than I could have hoped for, not just about the subject matter but also about the importance of perseverance, interest and intellectual development. Thank you, Ma'am, for being such an inspiring and dedicated professor. I hope to continue learning from you in the future and apply the lessons you've taught me in my academic and personal growth. Advance Merry Christmas and a Happy New Year, Ma'am! I wish you joy, good health, and peace in the coming year."
    ];

    // Create a new string that will be inserted in the container, splitting the message into separate lines
    content.innerHTML = messageParts.map(part => `<p>${part}</p>`).join('');
});
