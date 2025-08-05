document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUsername = "nabil";
    const validPassword = "12345";

    if (username !== validUsername) {
      loginMessage.textContent = "Username salah!";
      loginMessage.className = "text-red-600 text-center text-sm mt-4";
    }
    if (password !== validPassword) {
      loginMessage.textContent = "Password anda salah!";
      loginMessage.className = "text-red-600 text-center text-sm mt-4";
    } else {
      loginMessage.textContent = "Login berhasil! Mengarahkan...";
      loginMessage.className = "text-green-600 text-center text-sm mt-4";

      setTimeout(() => {
        window.location.href = "loginsukses.html";
      }, 1500);
    }
  });
});
