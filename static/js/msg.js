document.addEventListener("DOMContentLoaded", () => {
  const alertBtn = document.getElementById("alert-btn");
  const mainAlert = document.getElementById("main-alert");

  const readMessageRecord = JSON.parse(localStorage.getItem("readMessage")) || null;
  const twoDayAgo = new Date().getTime() - 1000 * 60 * 60 * 48;

  if (readMessageRecord && readMessageRecord.time > twoDayAgo) mainAlert.style.display = "none";

  alertBtn.addEventListener("click", () => {
    const alertData = {
      time: new Date().getTime(),
      read: true,
    };

    localStorage.setItem("readMessage", JSON.stringify(alertData));
  });
});
