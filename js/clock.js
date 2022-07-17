// Added a short script to update the timer clock every 1 second
function updateClock() {
  const date = new Date();
  const localeDateString = date
    .toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-"); //replaces all the empty spaces (e.g. 17 Jul 2022 with '-')
  const localeTimeString = date.toLocaleTimeString();
  const formattedDateTime = localeDateString + " " + localeTimeString;
  document.getElementById("datetime_clock").innerHTML = formattedDateTime;
}

setInterval(updateClock, 1000);
