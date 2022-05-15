import { fetchQuoteEnglish, translateToSpanish } from "./api.js";

const updateQuote = async (quote, author) => {
  const quoteText = document.getElementById("quote__phrase");
  const quoteAuthor = document.getElementById("quote__author");

  quoteText.textContent = quote;
  quoteAuthor.textContent = author;
};

const setQuoteEnglish = async () => {
  fetchQuoteEnglish().then((data) => {
    updateQuote(data.contents.quotes[0].quote, data.contents.quotes[0].author);
  });
};

const setQuoteSpanish = async () => {
  fetchQuoteEnglish().then((data) => {
    const author = data.contents.quotes[0].author;
    translateToSpanish(data.contents.quotes[0].quote).then((data) => {
      updateQuote(data.data.translatedText, author);
    });
  });
};

export { setQuoteEnglish, setQuoteSpanish };
