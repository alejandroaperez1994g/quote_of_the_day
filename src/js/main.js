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

const onLoad = () => {
  setQuoteEnglish();
  updateCurrentTime("en");
};

onLoad();
