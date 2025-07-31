const activeAudios = new Map();

function setupSoundButtons(buttonClass, audioFolder, audioFiles) {
  const buttons = document.querySelectorAll(`.button.${buttonClass}`);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const existingAudio = activeAudios.get(button);

      if (existingAudio) {
        existingAudio.pause();
        existingAudio.currentTime = 0;
        button.style.backgroundColor = "";
        activeAudios.delete(button);
        return;
      }

      const audio = new Audio(`./audio/${audioFolder}/${audioFiles[index]}`);

      if (audioFiles[index] === "Aria math.mp3") {
        audio.volume = 0.8; 
      }
      
      audio.play();
      button.style.backgroundColor = "#2980b9";
      activeAudios.set(button, audio);

      audio.addEventListener("ended", () => {
        button.style.backgroundColor = "";
        activeAudios.delete(button);
      });
    });
  });
}



setupSoundButtons("that70sShow", "that-70s-show", [
  "Bed Bugs.mp3",
  "Dumbass.mp3",
  "I Am Daniel.mp3",
  "I Swear Ill Kick His Ass.mp3",
  "Im Gonna Kick So Much Ass.mp3",
  "Im Kickin Your Ass.mp3",
  "Jedi Dumbass.mp3",
  "Keen Eye Sure Foot.mp3",
  "Kick Your Ass For An Hour.mp3",
  "You Dont Have Bad Luck.mp3",
  "You Watch Your Ass.mp3"
]);

setupSoundButtons("jason", "jason", [
  "Jason- always search.m4a",
  "Jason- Animals.m4a",
  "Jason- eat me.m4a",
  "Jason- higher.m4a",
  "Jason- Red handed.m4a"
]);

setupSoundButtons("videoGames", "video-games", [
  "Aria math.mp3",
	"Skyrim tavern1.mp3",
	"what in oblivion.mp3"
]);

setupSoundButtons("other", "other", [
  "trump bs.mp3",
  "what are you two homos doing.mp3"
]);

