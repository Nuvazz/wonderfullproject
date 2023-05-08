const loginForm = document.getElementById('login-form');
const successMessage = document.getElementById('success-message');

loginForm.addEventListener('submit', function(event) {
	event.preventDefault();

	// Perform login validation and display success message

	successMessage.style.display = "block";
	setTimeout(function() {
		window.location.href = "";
	}, 2000);
});

function showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
}
