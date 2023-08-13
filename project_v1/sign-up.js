var validDomains = ['naver.com', 'google.com', 'daum.net'];

var emailInput = document.getElementById("email"); // 변경된 이메일 입력 요소 가져오기
var mergedEmailResult = document.getElementById("mergedEmail");
var mail_result = 0

emailInput.addEventListener("input", updateMergedEmail);

function updateMergedEmail() {
    var email = emailInput.value;
    var errorMessage = '';
    var regex = /^[a-z0-9]+$/i;  // 대소문자 구분 없이 검사하는 정규식

    if (!email) {
        errorMessage = "이메일을 입력하세요.";
    } else if (!email.includes("@")) {
        errorMessage = "올바른 이메일 주소를 입력하세요.";
    } else {
        var parts = email.split("@");
        var emailFront = parts[0];
        var emailAfterAt = parts[1];

        if (!regex.test(emailFront)) {
            errorMessage = "올바른 이메일 앞 부분을 입력하세요.";
        } else if (!isValidDomain(emailAfterAt)) {
            errorMessage = "올바른 도메인 주소를 입력하세요.";
        } else if (!isValidDomainInList(emailAfterAt)) {
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

function isValidDomain(domain) {
    return validDomains.includes(domain);
}

function isValidDomainInList(domain) {
    return validDomains.includes(domain);
}


document.addEventListener("DOMContentLoaded", function () {
    var nameInput = document.getElementById("name");
    var nameCheckResult = document.getElementById("name_check");
    var name_result = 0
    var password2_result = 0

    nameInput.addEventListener("input", function () {
        var name = nameInput.value;

        if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/`'" ]/.test(name)) {
            nameCheckResult.textContent = "특수 문자 또는 공백은 입력할 수 없습니다.";
        } else if (!/^[가-힣]+$/.test(name)) {
            nameCheckResult.textContent = "한글만 입력 가능합니다.";
        } else if (name.length < 2 || name.length > 4) {
            nameCheckResult.textContent = "이름은 2글자 이상, 4글자 이하로 입력해주세요.";
        } else {
            nameCheckResult.textContent = "올바른 이름입니다.";
            name_result = 1
        }
    });

    var passwordInput = document.getElementById("password1");
    var passwordInput2 = document.getElementById("password2");
    var passwordResult = document.getElementById("password_result");
    var passwordResult2 = document.getElementById("password_result2");

    passwordInput.addEventListener("input", checkPasswordValidity);

    function checkPasswordValidity() {
        var password = passwordInput.value;
        var errorMessage = '';

        var lengthRegex = /^.{9,16}$/;
        var alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
        var nameCheck = true;
        var pastPasswordsCheck = true;
        var password_result = 0

        if (!lengthRegex.test(password)) {
            errorMessage = "비밀번호는 9자 이상 16자 이하로 입력하세요.";
        } else if (!alphanumericRegex.test(password)) {
            errorMessage = "비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.";
        } else if (!nameCheck) {
            errorMessage = "비밀번호에 사용자 이름이 포함되어 있습니다.";
        } else if (!pastPasswordsCheck) {
            errorMessage = "비밀번호가 과거에 사용된 적이 있습니다.";
        }

        passwordResult.textContent = errorMessage || "비밀번호가 유효합니다.";

        if (!errorMessage) {
            passwordInput2.addEventListener("input", checkPasswordMatch);
            password_result = 1
        } else {
            passwordResult2.textContent = ""; // 에러 메시지가 있는 경우 초기화
        }
    }

    function checkPasswordMatch() {
        var password1 = passwordInput.value;
        var password2 = passwordInput2.value;


        if (password1 === password2) {
            passwordResult2.textContent = passwordResult.textContent;
            password2_result = 1
        } else {
            passwordResult2.textContent = "비밀번호가 일치하지 않습니다.";
        }
    }

    var dropdown = document.querySelector(".dropdown");
    var dropdownText = dropdown.querySelector(".text704");
    var dropdownContent = dropdown.querySelector(".dropdown-content");
    var selectedOption = null;
    var genderMale = document.querySelector(".controlsvariant43");
    var genderFemale = document.querySelector(".controlsvariant33");

    dropdownText.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    // Function to attach event listeners to the options
    function attachOptionListeners() {
        var options = document.querySelectorAll(".dropdown-content a");
        options.forEach(function (option) {
            option.addEventListener("click", function (event) {
                event.preventDefault();
                selectedOption = option.textContent;
                dropdownText.textContent = selectedOption;
                dropdown.classList.remove("active");
            });
        });
    }

    genderMale.addEventListener("click", function () {
        dropdownContent.innerHTML = `
          <a href="#">옵션 1</a>
          <a href="#">옵션 2</a>
          <a href="#">옵션 3</a>
        `;
        attachOptionListeners(); // Attach event listeners to the new options
    });

    genderFemale.addEventListener("click", function () {
        dropdownContent.innerHTML = `
          <a href="#">옵션 4</a>
          <a href="#">옵션 5</a>
          <a href="#">옵션 6</a>
        `;
        attachOptionListeners(); // Attach event listeners to the new options
    });

    attachOptionListeners(); // Attach event listeners to the initial options

    window.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });


    var generateAccountButton = document.querySelector(".generate-account-button");
    generateAccountButton.addEventListener("click", function () {
        var nameInputValue = ""
        if (name_result) {
            nameInputValue = nameInput.value;

        }
        var emailInputValue = ""
        if (mail_result) {
            emailInputValue = emailInput.value; // Get the value from the email input

        }

        var password1InputValue = ""
        if (password_result) {
            password1InputValue = passwordInput.value; // Get the value from the first password input

        }

        var password2InputValue = ""
        if (password2_result) {
            password2InputValue = passwordInput2.value; // Get the value from the second password input

        }
        var checkBoxSelected = check_box.classList.contains("selected_box");
        var selectedOption = dropdownText.textContent;


        console.log("이름 입력 값:", nameInputValue);
        console.log("이메일 입력 값:", emailInputValue);
        console.log("비밀번호 입력 값:", password1InputValue);
        console.log("비밀번호 확인 입력 값:", password2InputValue);
        console.log("개인정보 이용 동의 여부:", checkBoxSelected);
        console.log("희망 지망 직렬 선택:", selectedOption);
    });
});


var ellipse6 = document.querySelector(".frame1362");
var ellipse7 = document.querySelector(".frame1363");

ellipse6.addEventListener("click", function () {
    ellipse6.classList.add("selected");
    ellipse7.classList.remove("selected");
});

ellipse7.addEventListener("click", function () {
    ellipse7.classList.add("selected");
    ellipse6.classList.remove("selected");
});

// 초기 상태 설정
ellipse6.classList.remove("selected");
ellipse7.classList.remove("selected");

var check_box = document.querySelector(".check-box");
check_box.addEventListener("click", function () {
    check_box.classList.toggle("selected_box");
});


function togglePasswordVisibility(inputElementId) {
    var passwordInput = document.getElementById(inputElementId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

var signInText = document.getElementById("signInText");
if (signInText) {
    signInText.addEventListener("click", function (e) {
        window.location.href = "./sign-in.html";
    });
}


// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080"

async function fetchTotalApplication() {
    let response1 = await fetch(currentDomain + "/api/auth/count");
    if (!response1.ok) {
        throw new Error('Error fetching products.');
    }
    totalApplicationContainer.innerText = (await response1.json()).count

    let response2 = await fetch(currentDomain + "/api/records/count");
    if (!response2.ok) {
        throw new Error('Error fetching products.');
    }
    totalRecordsContainer.innerText = (await response2.json()).count
}

async function fetchApplicationTypeName() {
    const applicationTypeDropDownContent = document.getElementById("applicationTypeDropDownContent");

    fetch(currentDomain + "/api/applicationType/names")
        .then(response => response.json())
        .then(responseJson => {
            const options = responseJson.applicationTypeNames;
            options.forEach(function (option) {
                const aElement = document.createElement("a");
                aElement.href = "#"; // 링크를 원하는 주소로 수정 가능
                aElement.textContent = option;
                applicationTypeDropDownContent.appendChild(aElement);
            });
        })
        .catch(() => {
            throw new Error('Failed to fetch data');
        });
}

fetchApplicationTypeName()