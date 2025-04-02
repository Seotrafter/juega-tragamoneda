document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      window.location.href = "/thank-you.html";
    });
  });
});
