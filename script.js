const regForm = document.getElementById("regForm");
const loginForm = document.getElementById("loginForm");
const regArea = document.getElementById("regArea");
const loginArea = document.getElementById("loginArea");
const infoArea = document.getElementById("infoArea");
const regMsg = document.getElementById("regMsg");
const loginMsg = document.getElementById("loginMsg");
const showUser = document.getElementById("showUser");
const showPass = document.getElementById("showPass");

let storedUser = "";
let storedPass = "";

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = document.getElementById("regUser").value.trim();
  const p = document.getElementById("regPass").value;

  if (u.length < 3 || p.length < 6) {
    regMsg.textContent = "Username must be ≥3 chars, password ≥6 chars.";
    return;
  }

  storedUser = u;
  storedPass = p;

  regMsg.textContent = "Account created ✓";

  setTimeout(() => {
    regArea.classList.add("hidden");
    loginArea.classList.remove("hidden");
  }, 700);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = document.getElementById("loginUser").value.trim();
  const p = document.getElementById("loginPass").value;

  if (u !== storedUser || p !== storedPass) {
    loginMsg.textContent = "Invalid username or password.";
    return;
  }

  showUser.textContent = storedUser;
  showPass.textContent = storedPass;

  loginArea.classList.add("hidden");
  infoArea.classList.remove("hidden");
});
