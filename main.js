const loginForm = document.querySelector(".login-form");
const inp_username = document.querySelector("#username");
const inp_password = document.querySelector("#password");
const userlabel = document.querySelector("#userlabel");
const passlabel = document.querySelector("#passlabel");
const selectlabel = document.querySelector("#selectlabel");

function coloruserLabel() {
  inp_username.style.border = "3px solid red";
  userlabel.style.textAlign = "center";
  userlabel.style.color = "red";
}

function colorpassLabel() {
  inp_password.style.border = "3px solid red";
  passlabel.style.textAlign = "center";
  passlabel.style.color = "red";
}

const checkUser = (inputObj) => {
  const Username = inputObj["username"].trim();
  if (
    Username === "" ||
    Username.includes(" ") ||
    Username.length <= 3 ||
    !isNaN(parseInt(Username.charAt(0), 10))
  ) {
    coloruserLabel();
    userlabel.textContent = `User must have more than 3 characters`;
  } else {
    checkPass(inputObj);
    userlabel.textContent = ``;
    inp_username.style.border = "none";
    return Username;
  }
};

const checkPass = (inputObj) => {
  const Password = inputObj["password"];

  const hasNumber = /\d/.test(Password);
  const hasLetter = /[a-zA-Z]/.test(Password);

  if (
    Password === "" ||
    Password.includes(" ") ||
    Password.length <= 4 ||
    !(hasNumber && hasLetter)
  ) {
    colorpassLabel();
    passlabel.textContent = `Password more than 4 letters and numbers`;
  } else {
    checkRole(inputObj);
    passlabel.textContent = ``;
    inp_password.style.border = "none";
    return Password;
  }
};

const checkRole = (inputObj) => {
  const Username = inputObj["username"];
  const Password = inputObj["password"];
  const role = inputObj["role"];

  if (role === "Select Role") {
    selectlabel.style.textAlign = "center";
    selectlabel.style.color = "white";
    selectlabel.textContent = ` Please select a role.`;
    return;
  }
  selectlabel.textContent = ``;
  alert(
    "Information you enter includes : " +
      "\nUsername : " +
      Username +
      "\nPassword : " +
      Password +
      "\nrole : " +
      role
  );
  location.href = "https://example.com";
};

const validateInput = (inputObj) => {
  checkUser(inputObj);
};

const hdlLogin = (event) => {
  event.preventDefault();
  let inputObj = {};
  for (let event of loginForm.elements) {
    inputObj[event.id] = event.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
example.com