// Function to show the birthday surprise
function showBirthdaySurprise() {
    const surprise = document.getElementById('birthday-surprise');
    surprise.style.display = 'block'; // Show the surprise message

    // Hide the surprise after a few seconds
    setTimeout(() => {
        surprise.style.display = 'none';
    }, 10000); // Adjust time (in milliseconds) as needed
}

// Call the function when the page loads
window.onload = function() {
    showBirthdaySurprise();
};
