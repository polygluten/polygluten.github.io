function updateDateTime() {
  const now = new Date();

  const dateOptions = {
    weekday: "short",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const currentDate = now.toLocaleDateString("en-US", dateOptions);
  const currentTime = now.toLocaleTimeString("en-US", timeOptions);

  document.getElementById("current-date").textContent = currentDate;
  document.getElementById("current-time").textContent = currentTime;
}

// Update date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
