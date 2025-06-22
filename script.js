
document.addEventListener("DOMContentLoaded", () => {

  const trigger = document.getElementById("egg-trigger");
  const msg = document.getElementById("egg-message");

  if (trigger && msg) {
    trigger.addEventListener("click", () => {
      msg.style.display = msg.style.display === "none" ? "block" : "none";
    });
  }

  
  console.log("%cHey dev, stalking my console? 👀", "color: #00fff7; font-size: 16px;");
  console.log("%cI'm on my way to becoming a DevOps engineer — let's connect!", "color: #ccc;");
});
