function playSound() {
    document.querySelector('input[type="checkbox"]').checked =
      !document.querySelector('input[type="checkbox"]').checked;
    let sound1 =
      "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
    let sound2 =
      "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
    let sound3 =
      "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
    let sound4 =
      "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
    let sound5 =
      "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
    let sound6 =
      "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
    let sound7 =
      "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
    let audio = new Audio(
      document.querySelector('input[type="checkbox"]').checked
        ? sound6
        : sound7
    );
    if (!audio.ended) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.play();
  }