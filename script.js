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
  const timeRemaining = getTimeRemaining("2022/06/10 15:00:00");

  if (timeRemaining.total <= 0) {
    const title = document.querySelector("#faltam");
    title.textContent = "JÁ COMEÇOU!!! 🍻";
    title.style.color = "#fec955";
    document.querySelector("#countdown").style.display = "none";
    return;
  }

  // update days
  document.querySelector("#days").innerHTML = `${timeRemaining.days} DIA${
    timeRemaining.days != 1 ? "S" : ""
  }`;

  // update hours
  document.querySelector("#hours").innerHTML = `${timeRemaining.hours} HORA${
    timeRemaining.hours != 1 ? "S" : ""
  }`;

  // update minutes
  document.querySelector("#minutes").innerHTML = `${
    timeRemaining.minutes
  } MINUTO${timeRemaining.minutes != 1 ? "S" : ""}`;

  // update seconds
  document.querySelector("#seconds").innerHTML = `${
    timeRemaining.seconds
  } SEGUNDO${timeRemaining.seconds != 1 ? "S" : ""}`;
}

document.querySelector("#logo").addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=_vaJSH7lQFs";
});

updateCounter();
setInterval(() => updateCounter(), 1000);
