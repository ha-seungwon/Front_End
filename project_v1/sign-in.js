var validDomains = ['naver.com', 'google.com', 'daum.net'];
const emailInput = document.getElementById("email"); // 변경된 이메일 입력 요소 가져오기
emailInput.addEventListener("input", updateMergedEmail);
const mergedEmailResult = document.getElementById("mergedEmail");

function updateMergedEmail() {
    const email = emailInput.value;
    const parts = email.split("@");
    const emailFront = parts[0];
    const emailAfterAt = parts[1];
    let errorMessage = '';
    const regex = /^[a-z0-9]+$/i;  // 대소문자 구분 없이 검사하는 정규식

    if (!email) {
        errorMessage = "이메일을 입력하세요.";
    } else if (!email.includes("@")) {
        errorMessage = "올바른 이메일 주소를 입력하세요.";
    } else {
        if (!regex.test(emailFront)) {
            errorMessage = "올바른 이메일 앞 부분을 입력하세요.";
        } else if (!validDomains.includes(emailAfterAt)) {
            errorMessage = "올바른 도메인 주소를 입력하세요.";
        } else if (!validDomains.includes(emailAfterAt)) {
            errorMessage = "지원하지 않는 도메인 주소입니다.";
        }
    }
    if (errorMessage) {
        mergedEmailResult.textContent = errorMessage;
    } else {
        mergedEmailResult.textContent = emailFront + "@" + emailAfterAt;
        mail_result = 1
    }
}

const passwordInput = document.getElementById("password1");
let password1_result = 0
passwordInput.addEventListener("input", checkPasswordValidity);
const passwordResult = document.getElementById("password_result");

function checkPasswordValidity() {
    const password = passwordInput.value;
    var errorMessage = '';

    const lengthRegex = /^.{9,16}$/;
    const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (!lengthRegex.test(password)) {
        errorMessage = "비밀번호는 9자 이상 16자 이하로 입력하세요.";
    } else if (!alphanumericRegex.test(password)) {
        errorMessage = "비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.";
    }

    /*
    else if (!nameCheck) {
        errorMessage = "비밀번호에 사용자 이름이 포함되어 있습니다.";
    } else if (!pastPasswordsCheck) {
        errorMessage = "비밀번호가 과거에 사용된 적이 있습니다.";
    }
    */

    passwordResult.textContent = errorMessage || "비밀번호가 유효합니다.";
}



function toggleCheckbox(checkbox) {
  checkbox.classList.toggle("checked");
}
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password1");
  var eyeIcon = document.querySelector(".password-toggle"); // Select the eye icon element

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "./public/eye_icon.svg"; // Change the eye icon to slash icon
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "./public/1256-frame.svg"; // Change the eye icon back to normal
  }
}
var text7 = document.getElementById("text7");
if (text7) {
  text7.addEventListener("click", function (e) {
    window.location.href = "./reset-password.html";
  });
}

var signUpText = document.getElementById("signUpText");
if (signUpText) {
  signUpText.addEventListener("click", function (e) {
    window.location.href = "./sign-up.html";
  });
}