const fetchQuoteEnglish = async () => {
  return await fetch("https://quotes.rest/qod?language=en")
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const translateToSpanish = async (quote) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", "en");
  encodedParams.append("target_language", "es");
  encodedParams.append("text", `"${quote}"`);

  return fetch("https://text-translator2.p.rapidapi.com/translate", {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      "X-RapidAPI-Key": "cb56278ff0mshb820beec1f152f0p1d1cb6jsn5bae7eab304f",
    },
    body: encodedParams,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

export { fetchQuoteEnglish, translateToSpanish };
