import { setQuoteEnglish, setQuoteSpanish } from "./quote.js";
import { getCurrentTime, updateCurrentTime } from "./time.js";

const spanishSelector = document.getElementById("spanish-selector");
const englishSelector = document.getElementById("english-selector");

spanishSelector.addEventListener("click", () => {
  setQuoteSpanish();
  updateCurrentTime("es");
});
englishSelector.addEventListener("click", () => {
  setQuoteEnglish();
  updateCurrentTime("en");
});

const playMusic = () => {
  const audio = document.getElementById("motivational-audio");
  audio.play();
  console.log("audio");
};

window.onload = function () {
  setTimeout(() => {
    playMusic();
  }, 1000);
};

const onLoad = () => {
  setQuoteEnglish();
  updateCurrentTime("en");
};

onLoad();
