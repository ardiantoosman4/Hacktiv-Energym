generatePopUpEmail();
generatePopUpPassword();
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
                                <label>Email</label>
                                <input type="email" id="input-profile-change-email" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="submit" id="btn-profile-change-email">Change Email</button>
                                </div>
                            </form> `;
}

function generatePopUpPassword() {
  let divContainer = document.getElementById("pop-up-password");
  divContainer.innerHTML = `
                            <p id="login-close-btn" >X</p>
                            <div class="text">
                                Change Email Form
                            </div>
                            <form action="#">
                                <div class="login-data">
                                <label>Old Password</label>
                                <input type="password" id="input-profile-change-password" required>
                                </div>
                                <div class="login-data">
                                <label>New Password</label>
                                <input type="password" id="input-profile-change-password-new1" required>
                                </div>
                                <div class="login-data">
                                <label>Confirm New Password</label>
                                <input type="password" id="input-profile-change-password-new2" required>
                                </div>
                                <div class="login-btn">
                                <div class="inner"></div>
                                <button type="submit" id="btn-profile-change-password">Change Password</button>
                                </div>
                            </form> `;
}

function listenEditEmail() {}
function listenEditRegister() {}

function ListenEditMembership() {
  let editMembership = document.getElementById("btn-profile-membership");
  if (editMembership) {
    editMembership.addEventListener("click", function () {
      window.location.href = "../HTML/membership-wisnu.html";
    });
  }
}
