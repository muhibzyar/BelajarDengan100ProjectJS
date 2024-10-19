function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(
    2,
    "0"
  );

  const timeString = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 10);
updateClock();
