const form = document.getElementById("register-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  successMessage.style.display = "block";

 
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000); 
});
