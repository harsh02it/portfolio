document.addEventListener("DOMContentLoaded", function () {
  var phrases = [
    "React.js Developer",
    "Java Developer",
    "Gym Addict",
    "Anime Fan",
  ];
  var index = 0;
  var charIndex = 0;
  var typingSpeed = 100; // Adjust typing speed as needed
  var delayBeforeNextPhrase = 2000; // Adjust delay before next phrase as needed

  var bannerSubtitle = document.getElementById("banner-subtitle");

  function typePhrase() {
    if (charIndex < phrases[index].length) {
      bannerSubtitle.textContent += phrases[index].charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, typingSpeed);
    } else {
      setTimeout(erasePhrase, delayBeforeNextPhrase);
    }
  }

  function erasePhrase() {
    if (bannerSubtitle.textContent.length > 0) {
      bannerSubtitle.textContent = bannerSubtitle.textContent.slice(0, -1);
      setTimeout(erasePhrase, typingSpeed / 2);
    } else {
      index = (index + 1) % phrases.length;
      charIndex = 0;
      setTimeout(typePhrase, typingSpeed);
    }
  }

  // Start typing the first phrase
  typePhrase();
});
