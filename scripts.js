const buttonPrimary = document.querySelectorAll(".buttonPrimary");

buttonPrimary.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");

    setTimeout(() => {
      button.classList.remove("clicked");
      button.classList.add("rebound");
    }, 50);

    setTimeout(() => {
      button.classList.remove("rebound");
    }, 300);
  });
});
