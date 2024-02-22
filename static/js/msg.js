document.addEventListener("DOMContentLoaded", () => {
  const alertBtn = document.getElementById("alert-btn");
  const mainAlert = document.getElementById("main-alert");

  const readMessageRecord = JSON.parse(localStorage.getItem("readMessage")) || null;

  if (!readMessageRecord) {
    mainAlert.classList.add("show");
  } else {
    mainAlert.style.display = "none";
  }

  alertBtn.addEventListener("click", () => {
    localStorage.setItem("readMessage", JSON.stringify(true));
  });
});
