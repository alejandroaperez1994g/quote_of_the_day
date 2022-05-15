const getCurrentTime = (language) => {
  const options = {
    month: "short",
  };
  const intl = Intl.DateTimeFormat(language, options);
  let date = new Date();
  const month = intl.format(date);
  const day = date.getDate();
  return [day, month];
};

const updateCurrentTime = (language) => {
  const dayText = document.getElementById("calendar__day");
  const dayMonth = document.getElementById("calendar__month");
  const [day, month] = getCurrentTime(language);

  dayText.textContent = day;
  dayMonth.textContent = month.charAt(0).toUpperCase() + month.slice(1);
};

export { getCurrentTime, updateCurrentTime };
