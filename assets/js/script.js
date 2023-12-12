// 1 PROGRAMME:
// -Cliquer sur une case du calendrier
// -Cette case doit avoir un n° < a la date du jour
// -Sinon, il ne se passe rien
// -Si oui, la suite se passe
// -jouer de la musique
// -afficher l'image de fond de la case

const boxes = document.querySelectorAll(".js-box");
const today = new Date(Date.now());
const dateNumber = today.getDate();

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const boxNumber = parseInt(box.textContent);

    if (boxNumber <= dateNumber) {
      playSong();
      showImage(box);
    }
  });
});

const url = "./assets/audios/opening-song.mp3";
const song = new Audio(url);
// Fonctions
const playSong = () => {
  song.pause();
  song.currentTime = 0;
  song.volume = 0.1;
  song.play();
};

const showImage = (e) => {
  e.classList.add("hide");
};
