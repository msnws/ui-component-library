const buttonPrimary = document.querySelectorAll(".buttonPrimary");
const buttonSecondary = document.querySelectorAll(".buttonSecondary");
const buttonDisabled = document.querySelectorAll(".buttonDisabled");
const toggle = document.querySelector(".toggle");

buttonPrimary.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.remove("rebound", "relax");
    button.classList.add("clicked");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("clicked");
    button.classList.add("rebound");

    setTimeout(() => {
      button.classList.remove("rebound");
      button.classList.add("relax");
    }, 150); // slightly shorter than rebound transition

    setTimeout(() => {
      button.classList.remove("relax");
    }, 600); // matches relax duration
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("clicked", "rebound", "relax");
  });

  button.addEventListener("mouse", () => {
    button.classList.add("scaler");
    console.log("class added");
  });
});

buttonSecondary.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("click2");
  });
  button.addEventListener("mouseup", () => {
    button.classList.remove("click2");
  });
});

buttonDisabled.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("click3");
    setTimeout(() => {
      button.classList.remove("click3");
    }, 500);
  });
});

toggle.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    toggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
});
