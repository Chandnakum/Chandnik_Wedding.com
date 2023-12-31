// JavaScript to toggle between short and full text
document.getElementById("read-more-button").addEventListener("click", function () {
    var shortText = document.querySelector(".short-text");
    var fullText = document.querySelector(".full-text");
    var button = document.getElementById("read-more-button");

    if (fullText.style.display === "none" || fullText.style.display === "") {
        shortText.style.display = "none";
        fullText.style.display = "block";
        button.textContent = "Read Less";
    } else {
        shortText.style.display = "block";
        fullText.style.display = "none";
        button.textContent = "Read More";
    }
});

//countdown
function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date('2024-04-26T23:59:59'); // Replace with your target date and time
  
    const timeRemaining = targetDate - currentDate;
  
    const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').innerHTML = '<h2>Countdown Expired</h2>';
    }
  }
  
  updateCountdown(); // Initial call to display countdown
  const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
  