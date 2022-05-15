import { fetchQuoteEnglish, translateToSpanish } from "./api.js";

let quoteSpanish = fetchQuoteEnglish();

quoteSpanish.then((data) => {
  console.log(data);
  console.log(data.contents.quotes[0].author);
  console.log(data.contents.quotes[0].quote);
  translateToSpanish(data.contents.quotes[0].quote).then((data) => {
    console.log(data.data.translatedText);
  });
});
