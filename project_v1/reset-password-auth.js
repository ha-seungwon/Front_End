// reset-password-auth.html 페이지의 JavaScript 부분
document.addEventListener("DOMContentLoaded", function () {
// 쿠키에서 userEmail 값 가져오기
var userEmail = getCookie("userEmail");

// 이메일 주소 표시
var mergedEmailResult = document.getElementById("mergedEmail");
if (userEmail) {
    mergedEmailResult.textContent = decodeURIComponent(userEmail);
} else {
    mergedEmailResult.textContent = "저장된 이메일 주소가 없습니다.";
}
});

// 쿠키 가져오는 함수
function getCookie(name) {
console.log("쿠키",name)
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length === 2) {
    return parts.pop().split(";").shift();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var codeInput = document.getElementById("code");
    var timerSpan = document.getElementById("timer");
    var timerInterval;
    var timerDuration = 180; // 3 minutes in seconds

    function updateTimerDisplay(remainingTime) {
    var minutes = Math.floor(remainingTime / 60);
    var seconds = remainingTime % 60;
    timerSpan.textContent = minutes + "m " + seconds + "s";
}

function startTimer() {
    var startTime = Date.now();

    timerInterval = setInterval(function () {
        var currentTime = Date.now();
        var elapsedTime = Math.floor((currentTime - startTime) / 1000);

        if (elapsedTime >= timerDuration) {
            clearInterval(timerInterval);
            timerSpan.textContent = "Timer expired!";
            // Redirect to reset-password.html after timer expiration
            window.location.href = "./reset-password.html";
        } else {
            var remainingTime = timerDuration - elapsedTime;
            updateTimerDisplay(remainingTime);
        }
    }, 1000);
    }

    // Call startTimer() when the page loads
    startTimer();
});

document.addEventListener("DOMContentLoaded", function () {
var codeInput = document.getElementById("code");
var verificationError = document.getElementById("verificationError");
var authNumberResult = document.getElementById("auth_number");

// 인증하기 버튼 클릭 시
var authButton = document.querySelector(".frame977");
authButton.addEventListener("click", function () {
var code = codeInput.value;

// 입력값이 숫자인지 확인
if (!(/^\d+$/.test(code))) {
    uthNumberResult.textContent = "숫자를 입력해주세요."; // 숫자가 아닐 경우 메시지 변경
} else {
// 숫자일 때는
if (code === "1231") { // 실제 올바른 인증번호로 수정해야 함
    authNumberResult.textContent = "인증번호가 맞습니다.";
} else {
    authNumberResult.textContent = "인증번호가 다릅니다.";
}
}
});
});