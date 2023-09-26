// ##########################################
// untuk test set True untuk menampilkan username dg dropdown
// set false untuk menampilkan Login
// localStorage.setItem("isLogin", false);
// localStorage.setItem("isLogin", null);
// #########################################
changeNavbar();

function changeNavbar() {
  let liDynamic = document.getElementById("variable-link");
  if (localStorage.getItem("isLogin") === "true") {
    liDynamic.innerHTML = `
                          <a href="#">Username</a>
                          <ul>
                              <li><a href="#" id = "profile-user">My Profile</a></li>
                              <li><a href="#" id = "logout-user">Logout</a></li>
                          </ul>`;
    listenLogout();
  } else {
    localStorage.setItem("isLogin", false);
    liDynamic.innerHTML = `<a href="#" id = "open-pop-up-login">Login</a>`;
    generatePopUpLogin();
    generatePopUpRegister();
    listenOpenLogin();
    listenOpenRegister();
    ListenCloseLogin();
    listenCloseRegister();
    listenSubmitLogin();
    listenSubmitRegister();
  }
}

function generatePopUpLogin() {
  let divContainer = document.getElementById("pop-up-login");
  divContainer.innerHTML = `
                            <p id="login-close-btn" >X</p>
                            <div class="text">
                                Login Form
                            </div>
                            <form action="#">
                                <div class="login-data">
                                <label>Email</label>
                                <input type="email" id="login-email" required>
                                </div>
                                <div class="login-data">
                                <label>Password</label>
                                <input type="password" id="login-pass" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="submit" id="submit-login">login</button>
                                </div>
                                <div class="signup-link">
                                Don't have an account? <a href="#" id = "open-pop-up-register">Register now</a>
                                </div>
                            </form> `;
}

function generatePopUpRegister() {
  let divContainer = document.getElementById("pop-up-register");
  divContainer.innerHTML = `
                            <p id="register-close-btn" >X</p>
                            <div class="text">
                                Registration Form
                            </div>
                            <form action="#">
                                <div class="register-data">
                                <label>Email</label>
                                <input type="email" id="register-email" required>
                                </div>
                                <div class="register-data">
                                <label>Password</label>
                                <input type="password" id="register-pass" required>
                                </div>
                                <div class="register-data">
                                <label>Confirm Password</label>
                                <input type="password" id="register-pass-confirm"required>
                                </div>
                                <div class="register-btn">
                                <div class="inner"></div>
                                <button type="submit" id="submit-register">Register</button>
                                </div>
                            </form> `;
}

function listenOpenLogin() {
  let aLogin = document.getElementById("open-pop-up-login");
  if (aLogin) {
    aLogin.addEventListener("click", function () {
      let divContainer = document.getElementById("pop-up-login");
      divContainer.classList.toggle("display-login-container");
    });
  }
}

function ListenCloseLogin() {
  let pCloseLogin = document.getElementById("login-close-btn");
  if (pCloseLogin) {
    pCloseLogin.addEventListener("click", function () {
      let divContainer = document.getElementById("pop-up-login");
      divContainer.classList.toggle("display-login-container");
    });
  }
}

function listenOpenRegister() {
  let aRegister = document.getElementById("open-pop-up-register");
  if (aRegister) {
    aRegister.addEventListener("click", function () {
      let divContainerLogin = document.getElementById("pop-up-login");
      divContainerLogin.classList.toggle("display-login-container");

      let divContainer = document.getElementById("pop-up-register");
      divContainer.classList.toggle("display-register-container");
    });
  }
}

function listenCloseRegister() {
  let pCloseRegister = document.getElementById("register-close-btn");
  if (pCloseRegister) {
    pCloseRegister.addEventListener("click", function () {
      let divContainer = document.getElementById("pop-up-register");
      divContainer.classList.toggle("display-register-container");
    });
  }
}

function listenSubmitLogin() {
  let btnSubmit = document.getElementById("submit-login");
  btnSubmit.addEventListener("click", function () {
    let inputEmail = document.getElementById("login-email").value;
    let inputPass = document.getElementById("login-pass").value;
    let oldInputEmail = JSON.parse(localStorage.getItem("email"));
    if (!oldInputEmail) {
      oldInputEmail = [];
    }
    let oldInputPass = JSON.parse(localStorage.getItem("password"));
    if (!oldInputPass) {
      oldInputPass = [];
    }
    let isAnyMatch = false;

    for (let i = 0; i < oldInputEmail.length; i++) {
      let dbEmail = oldInputEmail[i];
      let dbPass = oldInputPass[i];
      if (dbEmail === inputEmail && dbPass === inputPass) {
        isAnyMatch = true;
        break;
      }
    }
    if (isAnyMatch === true) {
      localStorage.setItem("currentUser", inputEmail);
      localStorage.setItem("isLogin", true);
      let divContainer = document.getElementById("pop-up-login");
      divContainer.classList.toggle("display-login-container");
      changeNavbar();
      window.location.reload();
    } else {
      alert("Please check inputed email and password");
    }
  });
}

function listenSubmitRegister() {
  let btnSubmit = document.getElementById("submit-register");
  btnSubmit.addEventListener("click", function () {
    let inputEmail = document.getElementById("register-email").value;
    let inputPass = document.getElementById("register-pass").value;
    let inputPassConfirm = document.getElementById(
      "register-pass-confirm"
    ).value;

    if (inputPass !== inputPassConfirm) {
      alert("Password not match with password confirmation");
      return;
    }
    let oldInputEmail = JSON.parse(localStorage.getItem("email"));
    if (!oldInputEmail) {
      oldInputEmail = [];
    }

    let oldInputPass = JSON.parse(localStorage.getItem("password"));
    if (!oldInputPass) {
      oldInputPass = [];
    }
    oldInputEmail.push(inputEmail);
    oldInputPass.push(inputPass);
    let newEmail = JSON.stringify(oldInputEmail);
    let newPass = JSON.stringify(oldInputPass);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("password", newPass);

    let divContainer = document.getElementById("pop-up-register");
    divContainer.classList.toggle("display-register-container");
  });
}

function listenLogout() {
  let aLogout = document.getElementById("logout-user");
  if (aLogout) {
    aLogout.addEventListener("click", function () {
      if (confirm("Are You Sure?")) {
        localStorage.setItem("currentUser", null);
        localStorage.setItem("isLogin", false);
        changeNavbar();
        window.location.reload();
      } else {
        return;
      }
    });
  }
}
