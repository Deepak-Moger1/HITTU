function showMessage() {
    const message = document.getElementById('friend-message');
    message.textContent = "Y dint u keep at birthday video ajjii";
    message.classList.add('show-message');
}
document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('message').textContent = "LOVE YOU TOO KATTHEE!";
    document.getElementById('message').style.color = "#4CAF50"; // Green
});

document.getElementById('no-button').addEventListener('click', function() {
    document.getElementById('message').textContent = "PETT BEKA!";
    document.getElementById('message').style.color = "#f44336"; // Red
    document.getElementById('no-button').style.display = 'none'; // Hide "No" button
});
