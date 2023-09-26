// ##########################################
// untuk test set True untuk menampilkan username dg dropdown
// set false untuk menampilkan Login
localStorage.setItem("isLogin", false);
// #########################################
changeNavbar();

function changeNavbar() {
  let liDynamic = document.getElementById("variable-link");
  if (localStorage.getItem("isLogin") === "true") {
    console.log("JALANKAN USERNAME");
    liDynamic.innerHTML = `
                          <a href="#">Username</a>
                          <ul>
                              <li><a href="#">My Profile</a></li>
                              <li><a href="#">Logout</a></li>
                          </ul>`;
  } else {
    liDynamic.innerHTML = `<a href="#" id = "open-pop-up-login">Login</a>`;
    generatePopUpLogin();
    generatePopUpRegister();
    listenOpenLogin();
    listenOpenRegister();
    ListenCloseLogin();
    listenCloseRegister();
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
                                <input type="email" required>
                                </div>
                                <div class="login-data">
                                <label>Password</label>
                                <input type="password" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="submit">login</button>
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
                                <input type="email" required>
                                </div>
                                <div class="register-data">
                                <label>Password</label>
                                <input type="password" required>
                                </div>
                                <div class="register-data">
                                <label>Confirm Password</label>
                                <input type="password" required>
                                </div>
                                <div class="register-btn">
                                <div class="inner"></div>
                                <button type="submit">Register</button>
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
