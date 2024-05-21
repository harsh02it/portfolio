document.addEventListener("DOMContentLoaded", function () {
  var phrases = [
    "React.js Developer",
    "Java Developer",
    "Gym Addict",
    "Anime Fan",
  ];
  var index = 0;
  var delayBeforeNextPhrase = 4000;
  var animationDuration = 2000;

  var bannerSubtitle = document.getElementById("banner-subtitle");

  function showNextPhrase() {
    bannerSubtitle.style.animation = "none";
    void bannerSubtitle.offsetWidth;
    bannerSubtitle.style.animation = `rollUp ${
      animationDuration / 1000
    }s ease-in-out forwards`;
    bannerSubtitle.textContent = phrases[index];

    index = (index + 1) % phrases.length;
    setTimeout(showNextPhrase, delayBeforeNextPhrase);
  }

  showNextPhrase();
});
