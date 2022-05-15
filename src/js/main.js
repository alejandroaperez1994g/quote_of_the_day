import { setQuoteEnglish, setQuoteSpanish } from "./quote.js";
import { getCurrentTime, updateCurrentTime } from "./time.js";

const spanishSelector = document.getElementById("spanish-selector");
const englishSelector = document.getElementById("english-selector");
const main_container = document.getElementById("main");

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
};

main_container.addEventListener(
  "mouseover",
  () => {
    playMusic();
  },
  { once: true }
);

const onLoad = () => {
  setQuoteEnglish();
  updateCurrentTime("en");
};

onLoad();
