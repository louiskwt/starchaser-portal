document.addEventListener("DOMContentLoaded", () => {
  const alertBtn = document.getElementById("alert-btn");

  alertBtn.addEventListener("click", () => {
    const alertData = {
      time: new Date().getTime(),
      read: true,
    };

    localStorage.setItem("readMessage", JSON.stringify(alertData));
  });
});
