var validDomains = ['naver.com', 'google.com', 'daum.net'];

const emailInput = document.getElementById("email"); // 변경된 이메일 입력 요소 가져오기
const passwordInput = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");
const passwordResult = document.getElementById("password_result");
const passwordResult2 = document.getElementById("password_result2");
const nameInput = document.getElementById("name");
const nameCheckResult = document.getElementById("name_check");
const mergedEmailResult = document.getElementById("mergedEmail");

let mail_result = 0

document.addEventListener("DOMContentLoaded", function () {
    let name_result = 0
    let password1_result = 0
    let password2_result = 0

    // 이름 처리
    nameInput.addEventListener("input", function () {
        const name = nameInput.value;

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

    //성별 처리
    const maleOption = document.getElementById("maleOption");
    const femaleOption = document.getElementById("femaleOption");

    // 초기 선택 값
    let selectedGender = null;

    // 남성 선택 시
    maleOption.addEventListener("click", function () {
        selectedGender = 'MALE';
    });

    // 여성 선택 시
    femaleOption.addEventListener("click", function () {
        selectedGender = "FEMALE";
    });

    // 이메일 입력 처리
    emailInput.addEventListener("input", updateMergedEmail);

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

    // password 처리
    passwordInput.addEventListener("input", checkPasswordValidity);

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

    // repassword 처리
    passwordInput2.addEventListener("input", checkPasswordMatch);

    function checkPasswordMatch() {
        const password1 = passwordInput.value;
        const password2 = passwordInput2.value;

        if (password1 === password2) {
            passwordResult2.textContent = "비밀번호가 일치합니다.";
            password1_result = 1
            password2_result = 1
        } else {
            passwordResult2.textContent = "비밀번호가 일치하지 않습니다.";
        }
    }

    const dropdown = document.querySelector(".dropdown");
    const dropdownText = dropdown.querySelector(".text704");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    // application type 드롭 다운 데이터 처리
    dropdownText.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    dropdownContent.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            dropdownText.textContent = event.target.textContent;
            dropdown.classList.remove("active");
        }
    });

    window.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });

    //회원가입 버튼 클릭
    const signUpBtn = document.querySelector(".sign-up-btn");
    signUpBtn.addEventListener("click", async function () {
        var nameInputValue = ""
        if (name_result) {
            nameInputValue = nameInput.value;

        }

        var emailInputValue = "";
        mail_result = 1
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

        if (password1InputValue !== password2InputValue) {
            alert("비밀번호와 재비밀번호의 값은 같아야합니다.");
            return;
        }

        const checkBoxSelected = check_box.classList.contains("selected_box");
        const selectedApplicationType = dropdownText.textContent;

        if (checkBoxSelected) {
            // applicationType name -> key
            const response = await fetch(currentDomain + "/api/applicationType/key", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(selectedApplicationType)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const responseBody = await response.json(); // JSON 데이터 파싱
            const applicationTypeKey = responseBody.applicationTypeKey;

            // 프론트 로그
            console.log("이름 입력 값:", nameInputValue);
            console.log("성별", selectedGender)
            console.log("이메일 입력 값:", emailInputValue);
            console.log("비밀번호 입력 값:", password1InputValue);
            console.log("개인정보 이용 동의 여부:", checkBoxSelected);
            console.log("희망 지망 직렬 선택:", applicationTypeKey);

            // 회원가입 - 서버에 요청
            const userData = {
                name: nameInputValue,
                gender: selectedGender,
                email: emailInputValue,
                password: password1InputValue,
                applicationType: applicationTypeKey
            };
            try {
                const response = await fetch(currentDomain + "/api/member/signUp", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });

                if (!response.ok) {
                    const data = await response.text();
                    throw new Error(data || "회원가입 실패");
                }
                alert("회원가입을 성공했습니다.");
            } catch (error) {
                alert(error.message);
            }
        } else {
            alert("개인정보 이용 동의 여부를 체크해주세요");
        }
    });
});

const ellipse6 = document.querySelector(".frame1362");
const ellipse7 = document.querySelector(".frame1363");

ellipse6.addEventListener("click", function () {
    ellipse6.classList.add("selected");
    ellipse7.classList.remove("selected");
});

ellipse7.addEventListener("click", function () {
    ellipse7.classList.add("selected");
    ellipse6.classList.remove("selected");
});

ellipse6.classList.remove("selected");
ellipse7.classList.remove("selected");

const check_box = document.querySelector(".check-box");

check_box.addEventListener("click", function () {
    check_box.classList.toggle("selected_box");
});

function togglePasswordVisibility(inputElementId) {
    const passwordInput = document.getElementById(inputElementId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const signInText = document.getElementById("signInText");
if (signInText) {
    signInText.addEventListener("click", function (e) {
        window.location.href = "./sign-in.html";
    });
}

// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080"

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