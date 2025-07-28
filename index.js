// 1. Audio file names (in order):
const that70sShowAudioFiles = [
  "Dumbass.mp3",
  "I Swear Ill Kick His Ass.mp3",
  "Im Gonna Kick So Much Ass.mp3",
  "Im Kickin Your Ass.mp3",
  "Jedi Dumbass.mp3",
  "Keen Eye Sure Foot.mp3",
  "Kick Your Ass For An Hour.mp3",
  "You Dont Have Bad Luck.mp3",
  "You Watch Your Ass.mp3"
];

// 2. Select all buttons
const that70sShowButtons = document.querySelectorAll(".button.that70sShow");

// 3. Loop over each button and add click event
that70sShowButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const audio = new Audio(`./audio/that-70s-show/${that70sShowAudioFiles[index]}`);
    button.style.backgroundColor = "#2980b9";
    audio.addEventListener("ended", () => {
      button.style.backgroundColor = ""; // clears inline style back to CSS default
    });
    audio.play();
  });
});

