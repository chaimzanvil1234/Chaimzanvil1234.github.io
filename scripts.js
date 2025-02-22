document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('backgroundAudio');
    var introScreen = document.getElementById('introScreen');
    var backgroundVideo = document.getElementById('backgroundVideo');
    var profileCard = document.getElementById('profileCard');
  
    // Typing effect function
    function typeText(text, elementId, callback) {
      let i = 0;
      document.getElementById(elementId).style.animation = 'typing 3s steps(30, end), blink-caret .5s step-end infinite';
      const interval = setInterval(() => {
        document.getElementById(elementId).textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(interval);
          callback();
        }
      }, 100); // Speed of typing effect (100ms per character)
    }
  
    // Show the profile card when clicking the screen
    document.getElementById('introScreen').onclick = function() {
      introScreen.style.opacity = 0; // Start fade out transition
      setTimeout(function() {
        audio.play();
        introScreen.style.visibility = 'hidden'; // Hide the intro screen after fading out
        backgroundVideo.classList.remove('hidden');
        profileCard.classList.remove('hidden');
      }, 500); // Shorten the transition duration to 500ms
    };

    // Test button function
    window.testFunction = function() {
      alert('Test button clicked!');
    };
});
