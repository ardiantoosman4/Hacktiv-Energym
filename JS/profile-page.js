generatePopUpEmail();
generatePopUpPassword();
generatePopUpMembership();
listenEditEmail();
listenEditRegister();
ListenEditMembership();

function generatePopUpEmail() {
  let divContainer = document.getElementById("pop-up-email");
  divContainer.innerHTML = `
                            <p id="login-close-btn" >X</p>
                            <div class="text">
                                Change Email Form
                            </div>
                            <form action="#">
                                <div class="login-data">
                                <label>Input New Email</label>
                                <input type="email" id="input-profile-change-email" required>
                                </div>
                                <button type="submit" id="btn-profile-change-email">Change Email</button>
                                </div>
                                <div class="signup-link">
                                </div>
                            </form> `;
}

function generatePopUpPassword() {
  let divContainer = document.getElementById("pop-up-password");
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
                                  Don't have an account? <a style="color:green" id = "open-pop-up-register">Register now</a>
                                  </div>
                              </form> `;
}

function generatePopUpMembership() {
  let divContainer = document.getElementById("pop-up-membership");
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
                                Don't have an account? <a style="color:green" id = "open-pop-up-register">Register now</a>
                                </div>
                            </form> `;
}

function listenEditEmail() {}
function listenEditRegister() {}
function ListenEditMembership() {}
