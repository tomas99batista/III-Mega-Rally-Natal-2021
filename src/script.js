function getTimeRemaining(deadline) {
  const total = Date.parse(deadline) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

function updateCounter() {
  const timeRemaining = getTimeRemaining("2021-12-18 15:00:00");

  if (timeRemaining.total <= 0) {
    const title = document.querySelector("h1");
    title.textContent = "JÁ COMEÇOU!!! 🍻";
    title.style.color = "#fec955";
    return;
  }

  // update days
  document.querySelector("#days").textContent = `${timeRemaining.days} dia${
    timeRemaining.days != 1 ? "s" : ""
  }`;

  // update hours
  document.querySelector("#hours").textContent = `${timeRemaining.hours} hora${
    timeRemaining.hours != 1 ? "s" : ""
  }`;

  // update minutes
  document.querySelector("#minutes").textContent = `${
    timeRemaining.minutes
  } minuto${timeRemaining.minutes != 1 ? "s" : ""}`;

  // update seconds
  document.querySelector("#seconds").textContent = `${
    timeRemaining.seconds
  } segundo${timeRemaining.seconds != 1 ? "s" : ""}`;
}

updateCounter();
setInterval(() => updateCounter(), 1000);
